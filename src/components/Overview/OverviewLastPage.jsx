import React, { useCallback, useEffect, useState, Fragment } from 'react';
import { questions } from '../../assets/fake-data/overviewData2';
import ReportOverview from './ReportOverview';
import Select from './Select';
import InputItem from './Input';
import RadioGroup from './RadioGroupItem';
import RadioGroupItem from './RadioGroupItem';

const OverviewLastPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState({
        question: '',
        answer: '',
    });

    const [report, setReport] = useState([]);
    const [done, setDone] = useState(false);
    // Start options
    const onValidate = (value, name) => {
        setError((prev) => ({
            ...prev,
            [name]: { ...prev[name], errorMsg: value },
        }));
    };
    const [error, setError] = useState({
        answer: {
            isReq: true,
            errorMsg: '',
            onValidateFunc: onValidate,
        },
    });
    const onHandleSelect = useCallback(
        (question, answer) => {
            setCurrentAnswer((prev) => ({
                ...prev,
                question,
                answer,
            }));
        },
        [setCurrentAnswer, currentAnswer],
    );
    const validateForm = () => {
        let isInvalid = false;
        Object.keys(error).forEach((x) => {
            const errObj = error[x];

            if (errObj.errorMsg) {
                isInvalid = true;
            } else if (errObj.isReq && !currentAnswer[x]) {
                isInvalid = true;
                onValidate(true, x);
            }
        });
        return !isInvalid;
    };
    const handleSubmitOption = () => {
        const isValid = validateForm();

        if (!isValid) {
            console.error('Invalid Form!');
            return false;
        }
        const { question, answer } = currentAnswer;

        setReport([...report, { question, answer }]);
        if(currentQuestion === questions.length){
            setDone(true);
            setCurrentAnswer(0);
        }else{
            setCurrentQuestion(currentQuestion + 1);
            setCurrentAnswer({
                question: '',
                answer: '',
            });
        }
    };

    const handlePrevOption = () => {
      if(currentQuestion <= 0){
        setCurrentQuestion(0)
      }else{
        setCurrentQuestion(currentQuestion - 1);
        setCurrentAnswer({
            question: '',
            answer: '',
        });
        let newArr = report;
        newArr.pop()
          setReport(newArr);
      }
    }
    // End options

    // Start input
    const onHandleInput = (data) => {
        const question = questions[currentQuestion].label;
        const answer = data.answer;
        setReport([...report, { question, answer }]);
        if(currentQuestion + 1 === questions.length){
            setDone(true);
            setCurrentAnswer(0);
        }else{
            setCurrentQuestion(currentQuestion + 1);
            setCurrentAnswer({
                question: '',
                answer: '',
            });
        }
    };
    // End input

    // Start Radio
    const onHandleRadio = useCallback(
        (question, answer) => {
            setCurrentAnswer((prev) => ({
                ...prev,
                question,
                answer,
            }));
        },
        [setCurrentAnswer, currentAnswer],
    );
    console.log(report);

    // End Radio
    const render = (item) => {
        switch (item.type) {
            case 'inputText':
                return (
                    <InputItem
                        name='answer'
                        errorMsg='Required fill'
                        title={questions[currentQuestion].label}
                        required={true}
                        onSubmit={onHandleInput}
                        placeholder='Please fill here'
                    />
                );
            case 'checkbox':
                return (
                    <div className='wrap-form-overview'>
                        <RadioGroupItem
                            name='answer'
                            errorMsg={true}
                            title={questions[currentQuestion].label}
                            value={currentAnswer.answer}
                            options={questions[currentQuestion].answer}
                            onChangeFunc={onHandleRadio}
                            {...error.answer}
                        />
                        <button className='btn-temple' onClick={() => handlePrevOption()}>
                            Prev
                        </button>
                        <button className='btn-temple' onClick={() => handleSubmitOption()}>
                            Next
                        </button>
                    </div>
                );
            case 'select':
                return (
                    <div className='wrap-form-overview'>
                        <Select
                            name='answer'
                            title={questions[currentQuestion].label}
                            value={currentAnswer.answer}
                            options={questions[currentQuestion].answer}
                            onChangeFunc={onHandleSelect}
                            placeholder='Select options'
                            {...error.answer}
                        />
                        <button className='btn-temple' onClick={() => handlePrevOption()}>
                            Prev
                        </button>
                        <button className='btn-temple' onClick={() => handleSubmitOption()}>
                            Next
                        </button>
                    </div>
                );
            default:
                return false;
        }
    };

    return (
        <div className='overview'>
            <div className='container'>
              <div className="overview__title__formtop">
                <span>
                  Overview
                </span>
              </div>
              <div className="overview__desc__form">
                <span>
                Disclaimer: Office of immigration Australia does NOT process skilled visa applications and you should always seek advice from a registered migration agent before applying for a skilled independent visa. The information provided on this website is general in nature and is for informational purposes only. The Eligibility Assessment’s indicative score you receive on this website is based on the answers you provide and does NOT guarantee your eligibility. When you do submit an application you will be required to provide supporting evidence for your answers.
                </span>
              </div>
                {done ?<ReportOverview report={report} /> : render(questions[currentQuestion])}
            </div>
        </div>
    );
};
export default OverviewLastPage;
