import React from 'react'

const PushButton = ({
  disabled,
  push,
}) => (
  <button
    type="button"
    onClick={push}
    disabled={disabled}
    className="space:inset-squish"
  >
    Push
  </button>
)

export default PushButton
