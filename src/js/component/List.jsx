import React, {useState} from 'react'
import ListItem from './ListItem.jsx'

function List() {
  const [toDos,setToDos] = useState([ { key: task:'clean dishes' } ])

  const submitHandler = () => {
    

  }




  return (
    <div>
      <button type="submit" onClick={submitHandler}></button>
       {!toDos.length ? <h5>No tasks, add a task</h5> : (
        toDos.map((listElement, index)=>(
          <ListItem key={index} task={listElement.task}/>
        ))
       )} 
    </div>
  )
}

export default List