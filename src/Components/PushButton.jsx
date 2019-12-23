import React from 'react'

const PushButton = ({
  disabled,
  push,
}) => (
  <button type="button" onClick={push} disabled={disabled}>Push</button>
)

export default PushButton
