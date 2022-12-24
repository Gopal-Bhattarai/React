import { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
margin: 30px;
border: 1px solid green;
padding: 20px 10px;
font-size: 1.1em;
font-family: "Roboto";
width: 80%;
`;

const StyledDialogDiv = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: bisque;
padding: 25px;
border-radius: 10px;
box-shadow: 0px 0px 10px 5px white;
`;

const StyledBackground = styled.div`
position: fixed;
  /* width: 100vw;
  height: 100vh; */
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  background-color: #000000aa;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditDialogBox = ({desc, updateText, cancelText}) => {
    const [text, setText]= useState(desc);
  return (
    <div>
        <StyledBackground>
          <StyledDialogDiv>
          <h2>Update TODO description</h2>
            <StyledInput type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <button className="btn btn-primary py-3 m-3" onClick={()=>updateText(text)}>Update</button>
            <button className="btn btn-warning py-3 m-3" onClick={()=>cancelText()}>Cancel</button>
          </StyledDialogDiv>
        </StyledBackground>
    </div>
  )
}

export default EditDialogBox
