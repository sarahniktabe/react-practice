import Card from "../Ul/Card";
import classes from "./AddUsers.module.css";
import Button from "../Ul/Button";

const AddUsers = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" />
        <label htmlFor="age">age(years)</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
