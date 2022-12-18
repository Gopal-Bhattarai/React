import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { RiDeleteBinLine, RiDeviceRecoverLine } from "react-icons/ri";

const StyledDiv = styled.div`
border: 1px solid #ddd;
background-color: #ddd;
border-radius: 5px;
box-shadow: 0px 5px 1px gray;
margin: 10px 20px;
width: 100%;
padding: 10px 20px;
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
background-color: #fff;
color: #4caf50;
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

const StyledDialogDiv = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: bisque;
padding: 25px;
border-radius: 10px;
box-shadow: 0px 0px 10px 2px gray;
`;

const StyledButtonGroupDiv = styled.div`
margin-top: 20px;
display: flex;
align-items: center;
`;

const StyledDialogButton = styled.button`
background-color: ${({ bgcolor }) => bgcolor || "black"};
color: white;
padding: 10px 50px;
font-size: 20px;
margin: 0px 20px;
border-radius: 10px;
border: none;
outline: none;
cursor: pointer;
display: flex;
align-items: center;
justify-content: space-around;
`;

const Todo = () => {
  const TODO = [
    { id: 1, task: "Goto Bigmart", completed: false },
    { id: 2, task: "Buy GS 8", completed: false },
    { id: 3, task: "Buy Cigratte", completed: true },
  ];


  const [todos, setTodos] = useState(TODO);
  const [todo, setTodo] = useState("");
  const [todoState, setTodoState] = useState({
    id: "",
    status: "inactive",
  });
  const [showDialog, setShowDialog] = useState({
    id: '',
    action: false,
  });


  const handleTodoClick = (id) => {
    setTodoState({
      id: id,
      status: "active",
    });
  };

  const showConfirmBox = (id) => {
    setShowDialog({
      id: id,
      action: true
    })
    };

  const deleteCommit = (type) => {
    type ? setTodos(todos.filter((todo) => todo.id !== showDialog.id)) : void 0;
    type ? toast.success("Todo Completed") : toast("Todo is still left");
    setShowDialog({
      id:'',
      action: false
    })
  }



  const handleAddTodo = () => {
    todo === ""
      ? toast.error("where is the todo item value?")
      : setTodos([
          ...todos,
          { id: new Date().getTime(), task: todo, completed: false },
        ]);
    todo ? toast.success("Todo added successfully!") : void 0;
    setTodo("");
  };

  return (
    <div>
      <h3>Todo List!</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {todos.map((todo) => (
          <StyledDiv
            key={todo.id}
            className={todoState.id === todo.id ? todoState.status : "inactive"}
            onClick={() => handleTodoClick(todo.id)}
          >
            <span>{todo.task}</span>
            <small onClick={() => showConfirmBox(todo.id)}>DONE</small>
          </StyledDiv>
        ))}
        <StyledInput
          autoFocus={true}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={(e) => e.key ==='Enter' ? handleAddTodo() : console.log(e.key)}
          placeholder="enter your list...."
        />
        <StyledButton onClick={handleAddTodo}>Add Todo</StyledButton>
      </div>

      {showDialog.action && (
        <StyledDialogDiv>
          <div>
            <h2>Confirmation</h2>
            <div><hr /></div>
            <h3>Are you sure this todo is completed?</h3>

            <StyledButtonGroupDiv>
              <StyledDialogButton bgcolor="red" 
              onClick={() => deleteCommit(true)}>
                <RiDeleteBinLine />
                <span>Yes</span>
              </StyledDialogButton>

              <StyledDialogButton
                bgcolor="green"
                onClick={() => deleteCommit(false)}
              >
                No
                <RiDeviceRecoverLine />
              </StyledDialogButton>
            </StyledButtonGroupDiv>
          </div>{" "}
        </StyledDialogDiv>
      )}
    </div>
  );
};

export default Todo;
