import React from 'react'

export const Header = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', margin: "20px 30px"}}>
      <div>logo</div>
      <div style={{display: 'flex'}}>
      <div>search</div>
        <div>user</div>
      </div>
    </div>
  )
}
