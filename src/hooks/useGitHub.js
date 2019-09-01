import {useState, useEffect} from 'react'

const useGitHub = () => {
  const [data, setData] = useState({})
  const [fetchUrl, setFetchUrl] = useState('')
  const [isFetching, setFetching] = useState(false)

  useEffect(
    () => {
      const getContents = async () => {
        setFetching(true)
        setData({})

        const response = await fetch(fetchUrl)

        if (response.status !== 200) {
          return
        }
        if (response.type === 'basic') {
          return
        }

        const json = await response.json()

        // thx https://stackoverflow.com/questions/30106476/using-javascripts-atob-to-decode-base64-doesnt-properly-decode-utf-8-strings
        const newData = JSON.parse(
          decodeURIComponent(
            atob(
              json.content
            ).split('').map(
              function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
              }
            ).join('')
          )
        )

        setData(
          {
            ...newData,
            sha: json.sha,
            url: json.url,
          }
        )

        setFetching(false)
      }

      getContents()
    },
    [
      fetchUrl
    ]
  )

  return [data, setFetchUrl, isFetching]
}

export {useGitHub}
