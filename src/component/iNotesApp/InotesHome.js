import Alert from "./Alert";
import NoteState from "./context/NoteState";
import Home from "./Home";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Signup from "./users/Signup";
import Login from "./users/Login";
import Profile from "./users/Profile";
import UserState from "./context/UserState";

const InotesHome = () => {
  return (
    <>
      <UserState>
      <NoteState>
        <NavBar />
        <Alert />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </NoteState>
      </UserState>
    </>
  );
};

export default InotesHome;
