import {
  useEffect,
  useState,
} from 'react'

const useGitHubContents = (
  owner,
  repository,
  path,
  initialContents = '',
  didPull = (data) => data,
  willPush = (data) => data,
) => {
  const [contents, setContents] = useState(initialContents)
  const [sha, setSha] = useState()
  const [url, setUrl] = useState()
  const [isFetching, setFetching] = useState(false)
  const [isAhead, setAhead] = useState(false)

  useEffect(() => {
    const pull = async () => {
      setFetching(true)
      setContents(initialContents)

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
      const pulledContents = decodeURIComponent(
        atob(json.content).split('').map(
          (c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`,
        ).join(''),
      )

      setContents(didPull(pulledContents))
      setSha(json.sha)
      setUrl(json.url)
      setAhead(false)
    }

    pull()
  }, [
    owner,
    repository,
    path,
    initialContents,
    didPull,
  ])

  useEffect(() => { setAhead(true) }, [
    contents,
  ])

  const push = async () => {
    if (isAhead) {
      const contentsToPush = willPush(contents)

      setFetching(true)

      console.log(`time for pushing: ${contentsToPush} with ${sha} at ${url}`)

      setFetching(false)

      setAhead(false)
    }
  }

  return [
    contents,
    setContents,
    isFetching,
    isAhead,
    push,
  ]
}

export default useGitHubContents
