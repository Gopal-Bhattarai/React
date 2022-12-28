import Alert from "./Alert";
import NoteState from "./context/NoteState";
import Home from "./Home";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Signup from "./users/Signup";
import Login from "./users/Login";
import Profile from "./users/Profile";
import UserState from "./context/UserState";
import Users from "./users/Users";
import ManageNotes from "./ManageNotes";
import Index from "./Index";
import ProductHome from './product/ProductHome'
import ProductState from "./context/Product/ProductState";

const InotesHome = () => {
  return (
    <>
      <UserState>
      <NoteState>
      <ProductState>
        <NavBar />
        <Alert />
        <div className="container">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/notes" element={<Home />} />
            <Route path="/products" element={<ProductHome />} />
            <Route path="/users" element={<Users />} />
            <Route path="/managenotes" element={<ManageNotes />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </ProductState>
      </NoteState>
      </UserState>
    </>
  );
};

export default InotesHome;
