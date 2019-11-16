/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useFormState } from 'react-use-form-state'

const DataAdder = () => {
  const [
    formState,
    {
      url,
    },
  ] = useFormState(null, { withIds: true })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formState.values.uri)
  }

  return (
    <form
      className="_space-size_s"
      onSubmit={handleSubmit}
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
    </form>
  )
}

export default DataAdder
