import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo,updateTodo } from "../actions"
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate, useParams } from "react-router-dom";

export const TodoModal = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    const todos = useSelector((state) => state.todo.find((todo) => todo._id === id))
    const [open, setOpen] = useState(false);
    const handleOpen = () => {setOpen(true)}
    const handleClose = () => { setOpen(false) 
            navigate("/", { replace: true })
        };
    const [newTodo,setNewTodo] = useState({
      _id: todos ? todos._id : "",
      title: todos ? todos.title: "",
      description: todos ? todos.description : "",
      status: todos ? todos.status : "",
    }) 

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setNewTodo({...newTodo, [name]:value })
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addTodo(newTodo))
      setNewTodo({
          title: "",
          description: "",
          status: "",
      }) 
      handleClose()
      navigate("/", { replace: true })
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateTodo(newTodo))
    console.log(newTodo)
    handleClose()
    setTimeout(() => {
        navigate("/", { replace: true });
      }, 0);
  }

   useEffect(() => {
      handleOpen()
    }, [])

  return(
    <div>  
        <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form>
            Title: <input type="text" name="title" value={newTodo.title} autoComplete="off" onChange={handleChange} />
            Description: <input type="text" name="description" value={newTodo.description} autoComplete="off" onChange={handleChange} />
            Status:
            <select name="status" value={newTodo.status} onChange={handleChange} >
                <option >Status</option>
                <option>Completed</option>
                <option>Not Completed</option>
            </select>
            { todos ? <button onClick={handleUpdate} >Update Todo</button> : <button onClick={handleSubmit} >Add Todo</button>}
            </form> 
        </Box>
      </Modal>
    </div>
    </div>
  )
}