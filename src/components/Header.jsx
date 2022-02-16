import Slider from './Slider'

const Header = (props) => {
    console.log(props.slide)
  return (
    <nav className='navbox'>
        <div className='info'>
            <div className='mini-box'style={{backgroundColor: `rgb(${props.slide.red},${props.slide.green},${props.slide.blue})`}}></div>
            <span>RGB({props.slide.red},{props.slide.green},{props.slide.blue})</span>
             
        </div>
            
        <div className='slider'>
            <Slider slide={props.slide}
                    handleChange={props.handleChange}  />
        </div>
    </nav>
   
  )
}

export default Header