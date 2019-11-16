import { useState, useEffect } from 'react'

const useGitHubContents = (
  owner,
  repository,
  path,
) => {
  const [contents, setContents] = useState({})
  const [isFetching, setFetching] = useState(false)

  useEffect(
    () => {
      const fetchContents = async () => {
        setFetching(true)
        setContents({})

        const target = `https://api.github.com/repos/${owner}/${repository}/contents/${path}`

        const response = await fetch(target)

        setFetching(false)

        if (response.status !== 200) {
          return
        }
        if (response.type === 'basic') {
          return
        }

        const json = await response.json()

        // thx https://stackoverflow.com/questions/30106476/using-javascripts-atob-to-decode-base64-doesnt-properly-decode-utf-8-strings
        const newContents = JSON.parse(
          decodeURIComponent(
            atob(json.content).split('').map(
              (c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`,
            ).join(''),
          ),
        )

        setContents({
          ...newContents,
          sha: json.sha,
          url: json.url,
        })
      }

      fetchContents()
    },
    [
      owner,
      repository,
      path,
    ],
  )

  return [
    contents,
    setContents,
    isFetching,
  ]
}

export default useGitHubContents
