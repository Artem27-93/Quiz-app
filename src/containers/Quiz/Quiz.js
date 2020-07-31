import React, { Component } from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
class Quiz extends Component{

        state={
            activeQuestion:0,    // активный вопрос викторины начинаем с первого
            quiz:[              //будут храниться все параметры связанные с голосованием
                {
                    question:'Какого цвета небо?',
                    rightAnswerId: 2,
                    answers:[
                        {text: 'Чёрный', id:1},
                        {text: 'Синий', id:2},
                        {text: 'Красный', id:3},
                        {text: 'Зелёный', id:4}
                    ]
                },
                {
                    question:'В каком году основали Днепр?',
                    rightAnswerId: 3,
                    answers:[
                        {text: '1700', id:1},
                        {text: '1850', id:2},
                        {text: '1776', id:3},
                        {text: '2001', id:4}
                    ]
                }
            ] 
        }

        onAnswerClickHandler = (asnwerId) =>{
            const question = this.state.quiz[this.state.activeQuestion];
            if(question.rightAnswerId === asnwerId){
                const timeout = window.setTimeout(()=>{
                    if(this.isQuizFinished()){
                        console.log('Finished!')
                    }else{
                        this.setState({
                            activeQuestion:this.state.activeQuestion+1
                        })
                    }

                    window.clearTimeout(timeout)
                },1000)
               
            } else {

            }
            
        }
        isQuizFinished(){
            return this.state.activeQuestion+1 === this.state.quiz.length
        }
        

    render(){
        return(
            <div className={classes.Quiz}>
                
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz 
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion+1}
                        />
                </div>
            </div>
        )
    }
}

export default Quiz;