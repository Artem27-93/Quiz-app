import React from 'react';
import classes from '../AnswersItem/AnswersItem.module.css';
const AnswerItem = props => {
    console.log(props)
    return(
        <li 
        className={classes.AnswersItem}
        onClick={()=>{props.onAnswerClick(props.answer.id)}}
        >
            {props.answer.text}
        </li>
    )
}

export default AnswerItem;