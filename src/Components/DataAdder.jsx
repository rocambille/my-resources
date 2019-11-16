/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useFormState } from 'react-use-form-state'

const DataAdder = ({
  contents,
  setContents
}) => {
  const [
    formState,
    {
      url,
    },
  ] = useFormState(null, { withIds: true })

  const handleSubmit = (event) => {
    event.preventDefault()
    setContents({
      resources: [
        ...contents.resources,
        { uri: formState.values.uri },
      ],
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="_space_inset"
    >
      <div
        className="_space_stack"
      >
        <label
          {...url('uri')}
          className="_space_inline"
        >
          URI
        </label>
        <input
          {...url('uri')}
          className="_space-size_xs _space_inset-stretch"
        />
      </div>
      <button
        type="submit"
      >
        Add
      </button>
    </form>
  )
}

export default DataAdder
