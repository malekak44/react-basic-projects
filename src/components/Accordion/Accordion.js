import React, { useState } from 'react';
import './Accordion.css';
import data from '../../data/questions';
import Question from './Question';

export default function Accordion() {
    const [questions, setQuestions] = useState(data);
    return (
        <main>
            <div className='container'>
                <h3>questions and answers about login</h3>
                <section className='info'>
                    {questions.map((question) => <Question key={question.id} {...question}></Question>)}
                </section>
            </div>
        </main>
    )
}