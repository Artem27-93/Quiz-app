import React from 'react';
import AnswerItem from './AnswersItem/AnswersItem';
import classes from '../AnswersList/AnswersList.module.css';

const AnswersList = props => {
    return(
        <ul className={classes.AnswersList}>
            {props.answers.map((answer,i)=>{
                return (
                    <AnswerItem
                    key={i}
                    answer={answer}
                    onAnswerClick={props.onAnswerClick}/>
                )
            })}
        </ul>

    )
}

export default AnswersList;