/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useFormState } from 'react-use-form-state'

const DataSourceForm = ({
  owner,
  setOwner,
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
    timeoutId: 0,
  }, {
    withIds: true,
  })

  return (
    <div className="space-size:s flex:row flex-both:center">
      <label
        {...label('owner')}
        className="space:inline"
      >
        {git.isFetching ? 'fetching' : 'fetched'}
      </label>
      <input
        {...text({
          name: 'owner',
          onChange: () => {
            window.clearTimeout(formState.values.timeoutId)

            formState.setField(
              'timeoutId',
              window.setTimeout(
                () => setOwner(formState.values.owner),
                1500,
              ),
            )
          },
        })}
        placeholder="jdoe"
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
