import React, { useState } from "react";
const MyForm = () => {
    const [user, setUser] = useState({userName :"Hello", userAge: '0'});
    const submitHandle = (Event) => {
      Event.preventDefault();
      alert('Your are submitting ' + user.userName + ' ' + user.userAge)
    }
    const handleChange = event => {
      setUser({...user,[event.target.name]:event.target.value });
    }
    let nameuser, ageuser;
    if(user.userName&&user.userAge) {
      nameuser = <h1 className="text-center">{user.userName}</h1>
      ageuser = <h1 className="text-center">{user.userAge}</h1>
    }
    else {nameuser='';
    ageuser = '';}
  return (
    <div className="col-6 mx-auto">
    <form className='form-control my-5' onSubmit={submitHandle}>
      {nameuser}
      {ageuser}
      <p>Enter your name:</p>
      <input className="d-flex " type="text" name='userName' onChange={handleChange} />
      <p>Enter your age:</p>
      <input className="d-flex " type="text" name='userAge' onChange={handleChange} />
      <input type='submit'/>
    </form>
    </div>
  );
};

export default MyForm;