import React, { useEffect, useState } from 'react';
import { questions } from '../../assets/fake-data/overviewData';
import ReportOverview from './ReportOverview';
import Grid from '../../components/Grid';
import {Link} from 'react-router-dom';

const OverviewFirstPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [textInput, setTextInput] = useState(false);
    const [report, setReport] = useState([]);
    const [done, setDone] = useState(false);

    const handleGetData = (ques, ans) => {
        setReport([...report, { ques, ans }]);
        setCurrentAnswer(ans);
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
        if (currentQuestion === questions.length - 1) {
            setCurrentQuestion(0);
            setDone(true);
        }
        if (textInput) {
            handleGetData(questions[currentQuestion].question, textInput);
        }
        setTextInput('');
    };

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
                    <span>Take the eligibility assessment today!</span>
                </div>

                <div className='overview__block'>
                    <Link to={'start'}>
                    <button className='btn-temple' style={{ fontSize: '15px' }}>
                        <h2>LET'S START OVERVIEW</h2>
                    </button>
                    </Link>

                </div>
                <div className='overview__title'>
                    <h3>How To Find Out If You're Eligible...</h3>
                </div>
                <div className='overview__block'>
                    <Grid col={3} mdCol={3} smCol={1} xsCol={1} gap={20}>
                        <div className='overview__block__item'>
                            <div className='overview__block__item__icon'>
                                <i className='bx bx-search-alt'></i>
                            </div>
                            <div className='overview__block__item__title'>
                                Step 1 - Search For Your Occupation
                            </div>
                            <div className='overview__block__item__desc'>
                                Search the Australian Skilled Occupation /
                                Shortage List below
                            </div>
                        </div>
                        <div className='overview__block__item'>
                            <div className='overview__block__item__icon'>
                                <i className='bx bx-list-ul'></i>
                            </div>
                            <div className='overview__block__item__title'>
                                Step 2 - Complete The Eligibility Assessment
                            </div>
                            <div className='overview__block__item__desc'>
                                Take the ‘Online Migration Assessment.’(5
                                minutes)
                            </div>
                        </div>
                        <div className='overview__block__item'>
                            <div className='overview__block__item__icon'>
                                <i className='bx bxs-user-check'></i>
                            </div>
                            <div className='overview__block__item__title'>
                                Step 3 - Get Results
                            </div>
                            <div className='overview__block__item__desc'>
                                Receive an immediate answer to see if you are
                                eligible to Live and Work in Australia
                                permanently + Receive Your ‘Immigration to
                                Australia Next-Steps Guide’
                            </div>
                        </div>
                    </Grid>
                </div>
                <div className='overview__block'>
                    <div className='overview__title'>
                        <h4>
                            TAKE YOUR ELIGIBILITY ASSESSMENT TODAY & RECEIVE
                            YOUR:
                        </h4>
                    </div>
                    <div className='overview__title'>
                        <h4 style={{color: 'rgb(90, 90, 90)'}}>
                            With this guide you can: Simply click on the blue
                            LINKS at each step in order to access the required
                            immigration forms to fill out + all the information
                            you need.
                        </h4>
                    </div>
                    <div className='overview__title'>
                        <h4 style={{color: 'rgb(90, 90, 90)'}}>IT’S SIMPLE AND EASY!</h4>
                    </div>
                </div>
                <div className="overview__block">
                    <button className='btn-temple' style={{fontSize: '15px'}}>
                        <h2>LET'S START OVERVIEW</h2>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OverviewFirstPage;
