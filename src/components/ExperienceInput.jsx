import {useId, useState} from "react";

function ExperienceInput(props) {
    const id = useId();
    return (
        <div>
            <button className={'education--school'} onClick={props.handleShow}>
                {props.company}
                <div onClick={props.handleDelete} className={'education--delete'}><i className={'fa-solid fa-xmark'}></i></div>
            </button>
            {props.show && <div>
                <div className="education--wrapper">
                    <label htmlFor={id + 'company'}>Company name:</label>
                    <input type="text"
                           placeholder={'Company...'}
                           name={'company'}
                           id={id + '-company'}
                           value={props.company}
                           onChange={props.handleChange}
                           className={'education--input'}
                    />
                </div>
                <div className="education--wrapper">
                    <label htmlFor={id + '-position'}>Position:</label>
                    <input type="text"
                           placeholder={'Position...'}
                           name={'position'}
                           id={id + '-position'}
                           value={props.position}
                           onChange={props.handleChange}
                           className={'education--input'}
                    />
                </div>
                <div className="education--wrapper">
                    <label htmlFor={id + '-start'}>Start date:</label>
                    <input type="text"
                           placeholder={'Start date...'}
                           name={'startDate'}
                           id={id + '-start'}
                           value={props.startDate}
                           onChange={props.handleChange}
                           className={'education--input'}
                    />
                </div>
                <div className="education--wrapper">
                    <label htmlFor={id + '-end'}>End date:</label>
                    <input type="text"
                           placeholder={'End date...'}
                           name={'endDate'}
                           id={id + '-end'}
                           value={props.endDate}
                           onChange={props.handleChange}
                           className={'education--input'}
                    />
                </div>
                <div className="education--wrapper">
                    <label htmlFor={id + '-location'}>Location:</label>
                    <input type="text"
                           placeholder={'Location...'}
                           name={'location'}
                           id={id + '-location'}
                           value={props.location}
                           onChange={props.handleChange}
                           className={'education--input'}
                    />
                </div>
                <div className="education--wrapper">
                    <label htmlFor={id + '-description'}>Description:</label>
                    <textarea
                        rows={5}
                           placeholder={'Designed user interface...'}
                           name={'description'}
                           id={id + '-description'}
                           value={props.description}
                           onChange={props.handleChange}
                           className={'education--input'}
                    />
                </div>
            </div>}
        </div>
    )
}

export default ExperienceInput