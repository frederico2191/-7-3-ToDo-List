import React, {useRef, useState} from 'react'
import ListItem from './ListItem.jsx'

function List() {
  const [toDos, setToDos] = useState([ {key: '', task:'clean dishes' } ])
  const myInput = useRef();
  
  const handleButtonClick = () => {
    setToDos([...toDos, {task: myInput.current.value}])
  }
  
  return (
    <div>
    <input ref={myInput}></input>

    <button onClick={handleButtonClick}> Add a Task</button>
    {console.log("toDos",toDos)}

    {!toDos.length ? <h5>No tasks, add a task</h5> : (
    toDos.map((listElement, index)=>(
      <ListItem key={index} task={listElement.task}/>
    ))
    )} 
    </div>
  )
}

export default List;



// import React, { useState, useRef } from 'react'

// export default function UnControlledInput() {
//     const [myText,setMyText] = useState('');
//     const myInput = useRef();
//     console.log("uncontrolled: render")
//   return (<>


//         (<h1>Uncontrolled input</h1>)
//         <input ref={myInput}></input>
//         <button onClick={()=>{setMyText(myInput.current.value)}}></button>
//         (<h2>{myText}</h2>)
    
//     </>)
// }
