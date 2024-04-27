import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams, Link } from "react-router-dom";
import { removeTodo } from "../actions"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import "./todoDetail.css"

export const TodoDetail = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    const todos = useSelector((state) => state.todo.find((todo) => todo._id === id))
    const [open, setOpen] = useState(false);
    const handleOpen = () => {setOpen(true)}
    const handleClose = () => { setOpen(false) 
            navigate("/", { replace: true })
        };

  const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    bgcolor: 'background.paper',
    border: '2px solid skyblue',
    boxShadow: 0,
    p: 4 ,
  };

   useEffect(() => {
      handleOpen()
    }, [])

  return(
    <div>  
        <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
        <div className="todo-main">
        {
                <div key={todos._id}>
                <p className="todo-title">{todos.title}</p>
                <p className="todo-description" >{todos.description}</p>
                <p style={{color: todos.status === "Completed" ? "green" : "red", fontSize: "larger" }} >{todos.status}</p>
                <div className="btn" > 
                <p onClick={()=> dispatch(removeTodo(todos._id)) } > <DeleteIcon /> </p>
                <Link to={`/editTodo/${todos._id}`} > <EditNoteIcon sx={{ fontSize: 30 }} /> </Link>
                </div>
                </div>
        }
        </div>
        </Box>
      </Modal>
    </div>
    </div>
  )
}