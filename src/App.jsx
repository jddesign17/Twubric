import React ,{useEffect}from 'react'
import './index.css'
import logo from "./assets/logo.png"
import { useNavigate } from 'react-router-dom'


const App = () => {

  const navigate = useNavigate()


  useEffect(()=>{
    handleNavigation()
  })

  
  const handleNavigation = ()=>{
    setTimeout(()=>{
      navigate('/user')
    },2000)
  }

return (
    <div className='pageCenter'>
         <img src={logo} className='logoimage'/>
        <h2>Tw<span>ub</span>ric</h2>
    </div>
  )
}

export default App