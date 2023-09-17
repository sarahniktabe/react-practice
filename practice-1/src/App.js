import "./App.css";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UsersList";

function App() {
  return (
    <div>
      <AddUsers />
      <UserList users={[]} />
    </div>
  );
}

export default App;
