import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import style from "./NewUser.module.css";

const NewUser = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    age: "",
  });

  const [error, setError] = useState()

  const useNameChangeHandler = (e) => {
    setUserData((prev) => {
      return { ...prev, username: e.target.value };
    });
  };

  const ageChangeHandler = (e) => {
    setUserData((prev) => {
      return { ...prev, age: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (userData.username.length === 0 || userData.age.length === 0) {
      setError({title:"Error", message:"All fields must be filled."})
      return;
    }

    if (+userData.age < 1) {
      setError({title:"Error", message:"Age must be valid."})
      return;
    }
    props.onSaveUserData(userData);

    setUserData({ username: "", age: "" });
  };

  const closeModal = () => {
    setError(null);
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onCloseModal={closeModal}/>}
      <Card className={style.newUser}>
        <form onSubmit={submitHandler}>
          <div className={style.formControl}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={useNameChangeHandler}
              value={userData.username}
            />
          </div>

          <div className={style.formControl}>
            <label htmlFor="age">Age(Years)</label>
            <input
              type="number"
              id="age"
              onChange={ageChangeHandler}
              value={userData.age}
            />
          </div>

          {/* <button className={style.button} type='submit'>Add User</button> */}
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default NewUser;
