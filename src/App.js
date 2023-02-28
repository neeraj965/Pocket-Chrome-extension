import './App.css'
import React,{useState,useEffect} from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {MdDelete} from 'react-icons/md';
import {AiFillEdit} from 'react-icons/ai'


const getLocalItem =()=>{
  let list=localStorage.getItem('list')
  console.log()
  if(list){
    return JSON.parse(list)
  }else{
    return [];
  }
}
export default function App(){
  const[inputData,setInputData]=useState('')
  const[data,setData]=useState(getLocalItem())

 

  const inputChange=(e)=>{
setInputData(e.target.value);
  }
  const saveData=(event)=>{
    event.preventDefault()
setInputData('')

const store=inputData;

setData([...data,store])
  }

  const remove=(id)=>{
const freshData = data.filter((current,index)=>{
  return index!==id;
})
setData(freshData);
  }

  const edit =(val)=>{
setInputData(val)
  }
  useEffect(()=>{
    localStorage.setItem("list", JSON.stringify(data));
      },[data]); 
  
  return(

    <div className='App'>
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,320L120,293.3C240,267,480,213,720,170.7C960,128,1200,96,1320,80L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
    <div id='hello'>
    <h2>save</h2> content from anywhere
    </div>

<div >

<form id='input-field' onSubmit={saveData}>

   <input type="text" placeholder='write here!' id='input-text' onChange={inputChange} value={inputData}/> 

  <Stack spacing={2} direction="row">
    <Button type='submit' variant="contained" id='save-btn'>Save</Button>
  </Stack>

  </form>
    </div>
    <br/>
{
  data.map((val,index)=>{
return(
  <div>
  <div id='content-data' >
    {val}  

  <AiFillEdit onClick={()=>{edit(val)} }/>
 <MdDelete onClick={()=>{remove(index)}} id='delete-icon'/>
  
  
  </div>

  </div>
)
  })
}  
    </div>
  )
}
