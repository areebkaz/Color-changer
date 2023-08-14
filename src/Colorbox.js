import React from 'react'

const Colorbox = ({ colorvalue }) => {

  return (
    <section
      className='container'
      style={{ backgroundColor: colorvalue }}
    >
      <p className="text">{colorvalue ? colorvalue : 'Empty Box'}</p>
    </section>
  )
}
Colorbox.defaultProps = {
  colorvalue:'Empty Box'
}

export default Colorbox
