/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useFormState } from 'react-use-form-state'

const DataAdder = ({
  add,
}) => {
  const [
    formState,
    {
      url,
    },
  ] = useFormState(null, { withIds: true })

  const handleSubmit = (event) => {
    event.preventDefault()
    add({ uri: formState.values.uri })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="_space-size_s _space_inset _flex_row _flex_main-center _flex_cross-stretch"
    >
      <div className="_space_inline">
        <label
          {...url('uri')}
          className="_space_inline"
        >
          URI
        </label>
        <input
          {...url('uri')}
          className="_space-size_xs _space_inset-stretch"
          required
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
