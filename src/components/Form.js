import React, { useState } from 'react';

const Form = props => {
    console.log("form props" + props);
    const[member, setMember] = useState({
        name: '',
        email: '',
        role: '',
    });

    const handleChanges = e => {
        setMember({
            ...member,
            [e.target.name]: e.target.value
        });
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({ id: Date.now(), name: '', email: '', role: ''});
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name: </label>
            <input
                id='name'
                type='text'
                placeholder='Enter your Name'
                onChange={handleChanges}
                name='name'
                value={member.name}
            />
            <label htmlFor='email'> Email: </label>
            <input
                id='email'
                type='email'
                placeholder='Enter your Email'
                onChange={handleChanges}
                name='email'
                value={member.email}
            />
            <label htmlFor='role'> Role: </label>
            <select
                id='role'
                name='role'
                onChange={handleChanges}
                value={member.option}
                >
                <option selected disabled hidden>Choose your Role:</option>
                <option>Project Manager</option>
                <option>Front End Developer</option>
                <option>Back End Developer</option>
                <option>UX Designer</option>
                <option>UI Developer</option>
                <option>Tester</option>
                <option>Consultant</option>
                <option>Other</option>
            </select>
            <button type='submit'>Add Member</button>
        </form>
    )
}

export default Form;