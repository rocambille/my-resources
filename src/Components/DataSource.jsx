/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react'
import { useFormState } from 'react-use-form-state'

const DataSourceForm = ({
  owner,
  setOwner,
  token,
  setToken,
  git,
}) => {
  const [
    formState,
    {
      label,
      text,
    },
  ] = useFormState({
    owner,
    token,
  }, {
    withIds: true,
  })

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setOwner(formState.values.owner)
      setToken(formState.values.token)
    }, 1500)

    return () => window.clearTimeout(timeoutId)
  }, [
    formState.values,
    setOwner,
    setToken,
  ])

  return (
    <div className="space-size:s flex:row flex-both:center">
      <label
        {...label('owner')}
        className="space:inline"
      >
        {git.isFetching ? 'fetching' : 'fetched'}
      </label>
      <input
        {...text('owner')}
        placeholder="jdoe"
        className="space:inset-stretch space:inline"
      />
      <label
        {...label('token')}
        className="space:inline"
      >
        personal access token
      </label>
      <input
        {...text('token')}
        placeholder="0a1b23c45d67e8f9"
        className="space:inset-stretch space:inline"
      />
      <button
        type="button"
        onClick={git.push}
        disabled={git.isUpToDate}
        className="space:inset-squish flex-self:stretch"
      >
        Push
      </button>
    </div>
  )
}

export default DataSourceForm
