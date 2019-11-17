import { useState, useEffect } from 'react'

const useGitHubContents = (
  owner,
  repository,
  path,
  mapData = (data) => data,
) => {
  const [contents, setContents] = useState({})
  const [sha, setSha] = useState()
  const [url, setUrl] = useState()
  const [isFetching, setFetching] = useState(false)

  const pullContents = async () => {
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
    const newContents = mapData(
      decodeURIComponent(
        atob(json.content).split('').map(
          (c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`,
        ).join(''),
      ),
    )

    setContents(newContents)
    setSha(json.sha)
    setUrl(json.url)
  }

  const pushContents = async () => {
    console.log('time for fetching')

    setFetching(true)

    setFetching(false)
  }

  useEffect(() => { pullContents() }, [
    owner,
    repository,
    path,
  ])

  useEffect(() => { pushContents() }, [
    contents,
  ])

  return [
    {
      data: contents,
      push: pushContents,
    },
    setContents,
    isFetching,
  ]
}

export default useGitHubContents
