/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useFormState } from 'react-use-form-state'

const ResourceAdder = ({
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
      className="space-size:s space:inset flex:row flex-both:center"
    >
      <div className="space:inline">
        <label
          {...url('uri')}
          className="space:inline"
        >
          URI
        </label>
        <input
          {...url('uri')}
          className="space:inset-stretch"
          required
        />
      </div>
      <button
        type="submit"
        className="space:inset-squish flex-self:stretch"
      >
        Add
      </button>
    </form>
  )
}

export default ResourceAdder
