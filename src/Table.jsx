import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkTodo, deleteTodo } from './Redux/Slice/todoSlice'

function Table() {
    const dispatch=useDispatch()
    const {todoList,counter}=useSelector((state)=>state.todos)
    const [checkBox,setCheckBox]=useState({
        status:"",id:""
    })
    const handleCheck=(status,id)=>{
        setCheckBox({status:status,id:id})
        dispatch(checkTodo(checkBox))
    }
    const handleDelete=(id)=>{
        dispatch(deleteTodo(id))
    }
    useEffect(()=>{
        handleCheck()
    },[checkBox.status])
  return (
    <div>
        <table width={'100%'} className='fs-5 mt-5 ' >
        <thead >
       {todoList?.map((list)=>(
        <tr className={list.status&&'bg-success '}>
        <th className='ps-2'><input checked={list.status}  onChange={e=>handleCheck(e.target.checked,list.id)} type="checkbox" name="" id="" /></th>
        <th >{list.todo}</th>
        <th className='py-2'><button onClick={()=>handleDelete(list.id)} className='btn bg-danger rounded-3 text-light fw-bolder'>DELETE</button></th>
       </tr>
       ))}
       </thead>
        </table>
        {counter!=""&&<h5 className='mt-4'>Total Completed Items:{counter}</h5>}
    </div>
  )
}

export default Table