import { useState } from 'react';
import Header from './components/Header';
import './App.css';



function App() {
  const [slide, setSlide] = useState({red:2, green: 50, blue: 50})

  const handleChange = (e) => setSlide({...slide, [e.target.name]: e.target.value})
  
  return (
    <div className='container'>
      <Header slide={slide}
              handleChange={handleChange} />
      
      <main style={{backgroundColor: `rgb(${slide.red},${slide.green},${slide.blue})`, width: "100%", height: "85%"}}>

      </main>

    </div>
    
  );
}

export default App;
