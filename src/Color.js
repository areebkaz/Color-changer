import React from 'react'

const Color = ({colorvalue, setColorValue}) => {
  return (
    <form 
        className='colorForm'
        onSubmit={(e)=>e.preventDefault()}
    >
        <input
            autoFocus
            type="text"
            placeholder='Enter a Color'
            required
            value={colorvalue}
            onChange={(e)=>setColorValue(e.target.value)}
        />
    </form>
  )
}

export default Color
