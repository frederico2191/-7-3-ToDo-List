import React from 'react'
import List from './List.jsx'
import Header from './Header.jsx'
import "./Wrapper.css"


const Wrapper = () => {
  return (
    <div className='wrapper'>
        <Header/>
        <List/>
    </div>
  )
}

export default Wrapper