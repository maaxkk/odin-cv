import {useId, useState} from "react";

function ExperienceInput(props) {
    const id = useId();
    return (
        <div>
            <button className={'education--school'} onClick={props.handleShow}>
                {props.school}
                <div onClick={props.handleDelete} className={'education--delete'}><i className={'fa-solid fa-xmark'}></i></div>
            </button>
            {props.show && <div>
                <div className="education--wrapper">
                    <label htmlFor={id + '-school'}>School:</label>
                    <input type="text"
                           placeholder={'School...'}
                           name={'school'}
                           id={id + '-school'}
                           value={props.school}
                           onChange={props.handleChange}
                           className={'education--input'}
                    />
                </div>
                <div className="education--wrapper">
                    <label htmlFor={id + '-degree'}>Degree:</label>
                    <input type="text"
                           placeholder={'Degree...'}
                           name={'degree'}
                           id={id + '-degree'}
                           value={props.degree}
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
            </div>}
        </div>
    )
}

export default ExperienceInput