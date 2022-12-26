import { useContext } from "react";
import NoteContext from "./context/NoteContext";

const Alert = () => {
  const {alert} = useContext(NoteContext);
  return (
    <div>
      {alert && <div className={`alert alert-${alert.type}`} role="alert">
        {alert.message}
      </div>}
    </div>
  )
}

export default Alert
