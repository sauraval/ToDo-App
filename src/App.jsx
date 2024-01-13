
import {  useDispatch, useSelector } from 'react-redux'
import './App.css'
import {  useState } from 'react'
import { addTodo } from './Redux/Slice/todoSlice'
import Table from './Table'

function App() {
  const [todos,setTodos]=useState({
    id:JSON.stringify(Date.now()),todo:"",status:""
  })
  const dispatch=useDispatch()
  const handleAdd=()=>{
    if(todos.todo==""){
      alert("Please Enter a Todo!!")
    }
    else{
      dispatch(addTodo(todos))
     setTodos({
      id:JSON.stringify(Date.now()),todo:"",status:""
    })
    }
    
  }
  return (
    <div className='container-fluid'>
      <h1 className='text-center text-primary'>My TodoList</h1>
      <div className='d-flex justify-content-center '>
      <input value={todos.todo} onChange={e=>setTodos({...todos,todo:e.target.value})} className='pb-1 w-25 rounded border-danger '  type="text" placeholder='Add Todo....' />&nbsp;
      <button onClick={handleAdd} className='btn btn-primary rounded-3 '>Add</button>
      </div>
        <Table/>
    </div>
  )
}
export default App