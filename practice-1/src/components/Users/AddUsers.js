import Card from "../Ul/Card";
import classes from "./AddUsers.module.css";
import Button from "../Ul/Button";
import { useState } from "react";

const AddUsers = (props) => {
  const [enteredData, setEnteredData] = useState({
    userName: "",
    age: "",
  });
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredData.length === 0 || +enteredData.length < 1) {
      return;
    }
    props.onAddUser(enteredData.userName, enteredData.age);
    setEnteredData({
      userName: "",
      age: "",
    });
  };

  const changeHandler = (event) => {
    setEnteredData({ ...enteredData, [event.target.name]: event.target.value });
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          name="userName"
          value={enteredData.userName}
          type="text"
          onChange={changeHandler}
        />
        <label htmlFor="age">age(years)</label>
        <input
          id="age"
          name="age"
          value={enteredData.age}
          type="number"
          onChange={changeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
