import {useId} from "react";
import '../styles/AddEdu.css'
function AddEducation(props) {
    const id = useId();
    console.log(props)
    return (
        <div className={'add-edu'}>
            <div className="add-edu--wrapper">
                <label htmlFor={id + '-school'}>School:</label>
                <input type="text"
                       placeholder={'School...'}
                       name={'school'}
                       id={id + '-school'}
                       value={props.school.school}
                       onChange={props.handleChange}
                       className={'education--input'}
                />
            </div>
            <div className="add-edu--wrapper">
                <label htmlFor={id + '-degree'}>Degree:</label>
                <input type="text"
                       placeholder={'Degree...'}
                       name={'degree'}
                       id={id + '-degree'}
                       value={props.school.degree}
                       onChange={props.handleChange}
                       className={'education--input'}
                />
            </div>
            <div className="add-edu--wrapper">
                <label htmlFor={id + '-start'}>Start date:</label>
                <input type="text"
                       placeholder={'Start date...'}
                       name={'startDate'}
                       id={id + '-start'}
                       value={props.school.startDate}
                       onChange={props.handleChange}
                       className={'education--input'}
                />
            </div>
            <div className="add-edu--wrapper">
                <label htmlFor={id + '-end'}>End date:</label>
                <input type="text"
                       placeholder={'End date...'}
                       name={'endDate'}
                       id={id + '-end'}
                       value={props.school.endDate}
                       onChange={props.handleChange}
                       className={'education--input'}
                />
            </div>
            <div className="add-edu--wrapper">
                <label htmlFor={id + '-location'}>Location:</label>
                <input type="text"
                       placeholder={'Location...'}
                       name={'location'}
                       id={id + '-location'}
                       value={props.school.location}
                       onChange={props.handleChange}
                       className={'education--input'}
                />
            </div>
            <button className={'add-edu--button'}>Save</button>
            <button className={'add-edu--button cancel'}>Cancel</button>
        </div>
    )
}

export default AddEducation