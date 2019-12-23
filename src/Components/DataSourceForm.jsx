/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useFormState } from 'react-use-form-state'

const DataSourceForm = ({
  owner,
  setOwner,
  isFetching,
  className,
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
    <div
      className={`_space-size_s${className && ` ${className}`}`}
      style={{ textAlign: 'center' }}
    >
      <label
        {...label('owner')}
        className="_space_inline"
      >
        {isFetching ? 'fetching' : 'fetched'}
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
        className="_space-size_xs _space_inset-stretch"
      />
    </div>
  )
}

export default DataSourceForm
