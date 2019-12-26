import {
  useEffect,
  useState,
} from 'react'

const authHeader = (token) => (token ? { Authorization: `Bearer ${token}` } : {})

const useGitHubContents = (
  owner,
  repository,
  path,
  token,
  initialContents = '',
  afterPull = (data) => data,
  beforePush = (data) => data,
) => {
  const [contents, setContents] = useState(initialContents)
  const [sha, setSha] = useState()
  const [isFetching, setFetching] = useState(false)
  const [isUpToDate, setUpToDate] = useState(true)

  const target = `https://api.github.com/repos/${owner}/${repository}/contents/${path}`

  useEffect(() => {
    const pull = async () => {
      setFetching(true)
      setContents(initialContents)

      const response = await fetch(target, { headers: authHeader(token) })

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

      setContents(afterPull(pulledContents))
      setSha(json.sha)
      setUpToDate(true)
    }

    pull()
  }, [
    target,
    token,
    initialContents,
    afterPull,
  ])

  useEffect(() => { setUpToDate(false) }, [
    contents,
  ])

  const push = async () => {
    if (!isUpToDate) {
      const contentsToPush = beforePush(contents)

      setFetching(true)

      console.log(`time for pushing: ${contentsToPush} with ${sha} at ${url}`)

      setFetching(false)

      setUpToDate(true)
    }
  }

  const git = {
    isFetching,
    isUpToDate,
    push,
  }

  return [
    contents,
    setContents,
    git,
  ]
}

export default useGitHubContents
