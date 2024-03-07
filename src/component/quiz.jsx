import React, { useState } from 'react';
import './quiz.css'

export default function Quiz() {

    const questions = [
        {
            question: "What is the capital of France?",
            answers: [
                { text: "Paris", correct: true },
                { text: "London", correct: false },
                { text: "Madrid", correct: false },
                { text: "Berlin", correct: false },
            ],
        },
        {
            question: "What is the capital of France?",
            answers: [
                { text: "Paris", correct: true },
                { text: "London", correct: false },
                { text: "Madrid", correct: false },
                { text: "Berlin", correct: false },
            ],
        },
        {
            question: "What is the capital of France?",
            answers: [
                { text: "Paris", correct: true },
                { text: "London", correct: false },
                { text: "Madrid", correct: false },
                { text: "Berlin", correct: false },
            ],
        },
        // Add more questions as needed
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if( isCorrect ){
            setScore( score + 1 )
        }
        const newQuestion = currentQuestion + 1;
        if( newQuestion < questions.length ){
            setCurrentQuestion( newQuestion )
        }else{
            setShowScore(true)
        }
    }

    return (
        <div className='quiz-app'>
            {showScore ? (
                <div className='score-section'>
                    Your Score {score} out of {questions.length}
                </div>
            ) : (
                <>
                <div className='question-section'>
                    <div className='question-count'>
                        <span>Question {currentQuestion + 1} </span> / {questions.length}
                    </div>
                    <div className='question-text'>
                        {questions[currentQuestion].question}
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answers.map((answerOption , index) => {
                            return (
                                <div key={index}>
                                    <button onClick={() => handleAnswerOptionClick(answerOption.correct)}> {answerOption.text}</button>
                                </div>)
                            // console.log(answerOption.text)
                        })}
                    </div>
                    </div>
                </>
            )}
        </div>
    )
}