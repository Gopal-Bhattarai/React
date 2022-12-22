import { RiDeleteBinLine, RiDeviceRecoverLine } from "react-icons/ri";
import styled from "styled-components";

const StyledBackground = styled.div`
position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #000000aa;
  border: 1px solid red;
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

const ConfirmBox = ({handleParentDivClick, deleteCommit}) => {
  return (
    <div>
      <StyledBackground onClick={handleParentDivClick}>
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
        </StyledBackground>
    </div>
  )
}

export default ConfirmBox
