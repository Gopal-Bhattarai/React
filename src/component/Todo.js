import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import ConfirmBox from "./ConfirmBox";
import EditDialogBox from "./EditDialogBox";

const StyledDiv = styled.div`
border: 1px solid #ddd;
background-color: #ddd;
border-radius: 5px;
box-shadow: 0px 5px 1px gray;
margin: 10px 20px;
width: 100%;
padding: 0px 0px;
font-size: 1.1em;
font-family: "Roboto";
display: flex;
align-items: center;
justify-content: space-between;
&:hover {
  box-shadow: inset 0px 5px 1px gray;
}
&.active {
  box-shadow: inset 0px 5px 1px gray;
}
.completed {
  border: 1px solid navy;
  float: right;
}
span{
  padding: 10px 20px;
  height: 100%;
  width: 90%;
  cursor: pointer;
}
small {
  background-color: crimson;
  color: white;
  padding: 10px 10px;
  border-radius: 50%;
  box-shadow: 0 5px 2px black;
}
small:hover {
  box-shadow: inset 0 5px 2px black;
  cursor: pointer;
}
`;

const StyledInput = styled.input`
margin: 30px;
border: 1px solid green;
padding: 20px 10px;
font-size: 1.1em;
font-family: "Roboto";
width: 100%;
`;

const StyledButton = styled.button`
border: 2px solid #4caf50;
margin: 20px auto;
border-radius: 10px;
background-color: #4caf50;
color: #fff;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
cursor: pointer;
transition: 0.5s all ease-out;
&:hover {
  background-color: #4caf50;
  color: #fff;
}
`;


const Todo = () => {
  const backendAPI = 'http://127.0.0.1:8000';
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoEdit, setTodoEdit] = useState({
    id: null,
    desc: "",
    action: false,
  });
  const [showDialog, setShowDialog] = useState({
    id: '',
    action: false,
  });

  useEffect(()=>{
    console.log('useEffect for fetch API');
    const getData =  async () => {
      // const response = await fetch(`${backendAPI}/api/read`)
      // const json = await response.json();
      // response.ok ?  setTodos(json.todos) : void 0;

      await fetch(`${backendAPI}/api/read`)
      .then((response)=> response.json())
      .then((data)=>setTodos(data.todos))
      .catch((e)=>console.log(e.message));
    }
    getData();
  },[])

  const updateText = async (text) => {
    if(text) {
      const response = await fetch(`${backendAPI}/api/edit/`,{
        method: 'PATCH',
        body: JSON.stringify({
          id: todoEdit.id,
          desc: text,
        }),
        headers: {
          'Content-Type' : 'application/json'
        }
      })
      await response.json();
      response.ok ? toast.success("Todo Updated") : toast("UNKNOWN ERROR");
      
      //update local state too
      setTodos(todos.map(todo=> 
        todo._id === todoEdit.id ? {...todo, desc: text} : todo 
      ))
      //console.log(todos);
      cancelText();
      }
  }

  const cancelText = () => {
    setTodoEdit({
      id: null,
      desc: '',
      status: false
    })
  }



  const showConfirmBox = (id) => {
    setShowDialog({
      id: id,
      action: true
    })
    };

  const areYouSureDelete = (type) => {
    if(type) {
      fetch(`${backendAPI}/api/delete/${showDialog.id}`,{
        method: 'DELETE',
      })
    }
    type ? setTodos(todos.filter((todo) => todo._id !== showDialog.id)) : void 0;
    type ? toast.success("Todo Completed") : toast("Todo is still left");
    setShowDialog({
      id:'',
      action: false
    })
  }

  const handleParentDivClick = () => {
    setShowDialog({
      id: '',
      action: false
    })
  }


  const handleAddTodo =  async () => {
    if(todo === "") {
      toast.error("where is the todo item value?")
    } else {

      const response = await fetch(`${backendAPI}/api/create/`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({desc: todo, completed: false})
      })
      const json = await response.json();

      if(response.ok) {
        console.log(json.todo._id);
        setTodos([
            ...todos,
            { _id: json.todo._id, desc: todo, completed: false },
          ]);
          todo ? toast.success("Todo added successfully!") : void 0;
          setTodo("");
      }
      }
  };

  return (
    <div>
      <h3>Todo List!</h3>
      <p className="text-muted">..created using React/NodeJS & MongoDB</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {todos.map((todo) => (
          <StyledDiv key={todo._id}>
            <span onClick={() => setTodoEdit({
              id: todo._id, desc: todo.desc, status: true
            })}>{todo.desc}</span>
            <small onClick={() => showConfirmBox(todo._id)}>DONE</small>
          </StyledDiv>
        ))}
        <StyledInput
          autoFocus={true}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={(e) => e.key ==='Enter' ? handleAddTodo() : void 0}
          placeholder="enter your list...."
        />
        <StyledButton onClick={handleAddTodo}>Add Todo</StyledButton>
      </div>
      {todoEdit.status && <EditDialogBox desc={todoEdit.desc} updateText={updateText} cancelText={cancelText} />}
      {showDialog.action && <ConfirmBox deleteCommit={areYouSureDelete} handleParentDivClick={handleParentDivClick}/> }
    </div>
  );
};

export default Todo;
