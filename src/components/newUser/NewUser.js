import React, { useState } from "react";
import Button from "../UI/Button";
import style from "./NewUser.module.css";

const NewUser = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    age: "",
  });

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

    if(userData.username.length === 0 || userData.age.length===0){
        return;
    }

    if(+userData.age < 1){
        return;
    }
    props.onSaveUserData(userData);

    setUserData({username:"", age:""});
  }

  return (
    <form onSubmit={submitHandler}>
        <div className={style.newUser}>
        <div className={style.formControl}>
            <label htmlFor="username">Username</label>
            <input type='text' id="username" onChange={useNameChangeHandler} value={userData.username}/>
        </div>

        <div className={style.formControl}>
            <label htmlFor="age">Age(Years)</label>
            <input type="number" id="age" onChange={ageChangeHandler} value={userData.age}/>
        </div>

        {/* <button className={style.button} type='submit'>Add User</button> */}
        <Button type='submit'>Add User</Button>
        </div>
    </form>
  );
};

export default NewUser;
