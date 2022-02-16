import React from 'react'

const Slider = (props) => {
  return (
    <div>
        <input className='range' type="range" min="0" max="255" name="red" value={props.slide.red} onChange={props.handleChange} />
        {"R:" + props.slide.red} 
        <input className='range' type="range" min="0" max="255" name="green" value={props.slide.green} onChange={props.handleChange} />
        {"G:" + props.slide.green}
        <input className='range' type="range" min="0" max="255" name="blue" value={props.slide.blue} onChange={props.handleChange} />
        {"B:" + props.slide.blue}
    
    </div>
  )
}

export default Slider