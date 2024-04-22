import {useId, useState} from "react";
import '../styles/PersonalInfo.css'
import {Education} from "./Education.jsx";

function PersonalInfo(props) {
    const id = useId()

    return (
        <div className={'personal--details'}>
            <h2>Personal Details</h2>
            <div className="personal--wrapper">
                <label htmlFor={id + '-fullName'}>Full name:</label>
                <input type="text"
                       placeholder={'Full name...'}
                       name={'fullName'}
                       id={id + '-fullName'}
                       value={props.fullName}
                       onChange={props.handleChange}
                       className={'personal--input'}
                />
            </div>
            <div className="personal--wrapper">
                <label htmlFor={id + '-email'}>Email:</label>
                <input type="email"
                       placeholder={'Email address...'}
                       name={'email'}
                       id={id + '-mail'}
                       value={props.email}
                       onChange={props.handleChange}
                       className={'personal--input'}
                />
            </div>
            <div className="personal--wrapper">
                <label htmlFor={id + '-phone'}>Phone number:</label>
                <input type="text"
                       placeholder={'Phone number...'}
                       name={'phone'}
                       id={id + '-phone'}
                       value={props.phone}
                       onChange={props.handleChange}
                       className={'personal--input'}
                />
            </div>
            <div className="personal--wrapper">
                <label htmlFor={id + '-address'}>Address</label>
                <input type="text"
                       placeholder={'Address...'}
                       name={'address'}
                       id={id + '-address'}
                       value={props.address}
                       onChange={props.handleChange}
                       className={'personal--input'}
                />
            </div>
        </div>
    )
}

export {PersonalInfo}