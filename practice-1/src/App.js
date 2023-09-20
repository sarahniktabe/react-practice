import "./App.css";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UsersList";
import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge }];
    });
  };
  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
