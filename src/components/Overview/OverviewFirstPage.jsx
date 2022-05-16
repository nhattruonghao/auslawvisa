import React, { useState } from 'react';
import { questions } from '../../assets/fake-data/overviewData';

const OverviewFirstPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [textInput, setTextInput] = useState(false);
    const [report, setReport] = useState([]);

    const handleGetData = (ques, ans) => {
        setReport([...report, { ques, ans }]);
        setCurrentAnswer(ans);
    };

    const handleGetDataTextInput = (e) => {
        setTextInput(e.target.value);
    };

    const handleGetSubAnswer = (subQues, subAns) => {
        let temp = report;
        temp[currentQuestion].subAns = subAns;
        temp[currentQuestion].subQues = subQues;

        setReport(temp);
    };

    const searchskill = (answers, nameskill) => {
        let result = [];
        for (let i = 0; i < answers.length; i++) {
            if (answers[i].name === nameskill) {
                result = answers[i].skills;
            }
        }
        return result;
    };

    const skills = searchskill(
        questions[currentQuestion].answer,
        currentAnswer,
    );

    const nextQuestion = () => {
        if (currentQuestion < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        }
        if (textInput) {
            handleGetData(questions[currentQuestion].question, textInput);
            setTextInput('');
        }
    };
    const prevQuestion = () => {
        if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
        const temp = report;
        temp.pop();
        setReport(temp);
    };

    console.log(report);
    return (
        <div className='overview'>
            <div className='container'>
                <div className='overview__title'>
                    <h3>ELIGIBILITY ASSESSMENT</h3>
                </div>
                <div className='overview__desc'>
                    <span>
                        The following eligibility test is to indicate whether or
                        not you are eligible to apply for the ‘Australian
                        Skilled Independent Visa.’ This visa lets invited
                        workers with ‘Skills Australia need’, live and work
                        permanently anywhere in Australia.
                    </span>
                    <span>
                        With a Skilled Independent visa, you can: stay in
                        Australia permanently, work, study and live anywhere in
                        Australia, enrol in Australia’s free public health care
                        scheme, sponsor your relatives to come to Australia,
                        and, if eligible, become an Australian citizen.
                    </span>
                    <span>
                        Disclaimer: This is NOT a visa application and the
                        indicative score provided at the end of the assessment
                        is based upon your truthful answers and does NOT
                        guarantee migration to Australia. Advice from a
                        registered migration agent is recommended.
                    </span>
                    <span>
                        Please begin the assessment by answering the below
                        questions:
                    </span>
                </div>
                <div className='overview__form'>
                    <div className='overview__form__question'>
                        {questions[currentQuestion].question}
                    </div>
                    {/* SELECT */}
                    <div className='overview__form__answer'>
                        {questions[currentQuestion].answer.length > 5 ? (
                            <>
                                <select
                                    className='overview__form__answer__select'
                                    onChange={(e) =>
                                        handleGetData(
                                            questions[currentQuestion].question,
                                            e.target.value,
                                        )
                                    }
                                >
                                    <option value=''>Select option</option>
                                    {questions[currentQuestion].answer.map(
                                        (item, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={item.name}
                                                >
                                                    {item.name}
                                                </option>
                                            );
                                        },
                                    )}
                                </select>

                                <div className='overview__form__question'>
                                    {questions[currentQuestion].subQuestion &&
                                        questions[currentQuestion].subQuestion}
                                </div>

                                {questions[currentQuestion].subQuestion ? (
                                    <select
                                        className='overview__form__answer__select'
                                        onChange={(e) =>
                                            handleGetSubAnswer(
                                                questions[currentQuestion]
                                                    .subQuestion,
                                                e.target.value,
                                            )
                                        }
                                    >
                                        <option value=''>Select option</option>
                                        {skills.map((item, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={item.name}
                                                >
                                                    {item.skill}
                                                </option>
                                            );
                                        })}
                                    </select>
                                ) : (
                                    ''
                                )}
                            </>
                        ) : questions[currentQuestion].answer.length === 0 ? (
                            //input
                            <div className='overview__form__answer__inputtext'>
                                <input
                                    type='text'
                                    name=''
                                    id=''
                                    onChange={(e) => handleGetDataTextInput(e)}
                                    placeholder='Please fill in here'
                                />
                            </div>
                        ) : (
                            // CHECKBOX
                            questions[currentQuestion].answer.map(
                                (item, index) => {
                                    return (
                                        <div
                                        key={index}
                                            className='overview__form__answer__checkbox'
                                            onClick={(e) =>
                                                handleGetData(
                                                    questions[currentQuestion]
                                                        .question,
                                                    item.name
                                                )
                                            }
                                        > 
                                            {item.name}
                                        </div>
                                    );
                                },
                            )
                        )}
                    </div>
                </div>
                <div className='overview__button'>
                    <button onClick={() => prevQuestion()}>Back</button>
                    <button onClick={() => nextQuestion()}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default OverviewFirstPage;
