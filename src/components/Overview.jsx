import React, { useState } from 'react';
import { questions } from '../assets/fake-data/overviewData';


const Overview = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [report, setReport] = useState([]);

    const handleGetData = (ques, ans,) => {
        setReport([...report, {ques, ans,}]);
  
        setCurrentAnswer(ans);
    }

    const searchskill = (answers, nameskill) => {
        let result = [];
        for (let i = 0; i < answers.length; i++) {
            if(answers[i].name === nameskill){
                result = answers[i].skills
            }
        }
        return result;
    }

    const skills = searchskill(questions[currentQuestion].answer, currentAnswer);
    
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
                    <div className='overview__form__answer'>
                        {questions[currentQuestion].answer.length > 5 ? (
                            <>
                            <select className='overview__form__answer__select' onChange={(e) => handleGetData(questions[currentQuestion].question, e.target.value )} >
                                <option value="">Select option</option>
                                {questions[currentQuestion].answer.map((item, index) => {
                                    return (
                                        <option key={index} value={item.name}>{item.name}</option>
                                    );
                                })}
                            </select>
                            <select className='overview__form__answer__select' onChange={(e) => handleGetData(questions[currentQuestion].question, e.target.value )} >
                                {
                                    skills.map((item, index) => {
                                        return(
                                            <option key={index} value={item.name}>{item.skill}</option>
                                        )
                                    })
                                }
                            </select>

                           
                            </>
                        ) : 
        
                        questions[currentQuestion].answer.map((item, index) => {
                            return (
                                <div key={index} className='overview__form__answer__checkbox'>
                                    <input
                                        type='checkbox'
                                        name={item.id}
                                        id=''
                                        value={item.name}
                                        onChange={(e) => handleGetData(questions[currentQuestion].question, e.target.value)}
                                    />
                                    <label htmlFor={item.id}>
                                        {item.name}
                                    </label>
                                </div>
                            );
                        })
                        
                        
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};



export default Overview;
