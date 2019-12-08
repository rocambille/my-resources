import React from 'react'

const PushButton = ({
  isAhead,
  push,
}) => (
  <button type="button" onClick={push} disabled={!isAhead}>Push</button>
)

export default PushButton
