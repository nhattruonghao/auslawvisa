import React from 'react';
import { Link } from 'react-router-dom';

function ReportOverview(props) {
    const { report } = props;
    return (
        <div className='report'>
            <div className="report__title">
                <h2>
                Review and confirm your answers
                </h2>
            </div>
            <div className="report__subtitle">
                <h3>
                Please review your answers before continuing: 
                </h3>
            </div>
            <div className='report-overview'>
                {report.map((item, index) => {
                    return (
                        <div key={index} className='report-overview__result'>
                            <div className='report-overview__question'>
                                <span>Question</span>: {item.question}
                            </div>
                            <div className='report-overview__answer'>
                                <span>Your Answer</span>: {item.answer}
                            </div>
                        </div>
                    );
                })}
                <div className='report-overview__button'>
                    <Link to='/thanks' >
                    <button>Xác nhận</button>
                    </Link>
                    <button>Hủy bỏ</button>
                </div>
            </div>
        </div>
    );
}

export default ReportOverview;
