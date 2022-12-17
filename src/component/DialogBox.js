import { RiDeleteBinLine, RiDeviceRecoverLine } from "react-icons/ri";
import styled from "styled-components";

const DialogBox = ({ message, onDialog }) => {

    const StyledParentDiv = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rbga(0,0,0,0.5);
    `;

    const StyledChildDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: aqua;
        padding: 50px;
        border-radius: 10px;
        box-shadow: 0 10px 5px gray;
    `;

    const StyledH3 = styled.h3`
        color: navy;
        font-variant: small-caps;
    `;

    const StyledButtonGroupDiv = styled.div`
        margin-top: 20px;
        display: flex;
        align-items: center;
    `;

    const StyledButton = styled.button`
        background-color: ${({bgcolor}) => bgcolor || 'black'};
        color: white;
        padding: 10px 50px;
        font-size: 20px;
        margin:  0px 20px;
        border-radius: 10px;
        border: none;
        outline: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-around;
        `;

  return (
    <StyledParentDiv>
      <StyledChildDiv>
        <StyledH3>{message}</StyledH3>
        <StyledButtonGroupDiv>

          <StyledButton bgcolor='red'
          onClick={()=>onDialog(true)} >
            <RiDeleteBinLine />
            <span>Yes</span>
          </StyledButton>

          <StyledButton bgcolor='green'
          onClick={()=>onDialog(false)}
          >
            No
            <RiDeviceRecoverLine />
          </StyledButton>

        </StyledButtonGroupDiv>
      </StyledChildDiv>
    </StyledParentDiv>
  );
};

export default DialogBox;
