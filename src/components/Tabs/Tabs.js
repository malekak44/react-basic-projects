import React, { useState } from 'react';
import './Tabs.css';
import data from '../../data/tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

export default function Tabs() {
    const [jobs, setJobs] = useState(data);
    const [value, setValue] = useState(0);

    const { company, dates, duties, title } = jobs[value];
    return (
        <section className="section">
            <div className="title">
                <h2>experience</h2>
                <div className="underline"></div>
            </div>
            <div className="jobs-center">
                <div className="btn-container">
                    {jobs.map((item, index) => {
                        return (
                            <button
                                key={item.id}
                                onClick={() => setValue(index)}
                                className={`job-btn ${index === value && 'active-btn'}`}
                            >
                                {item.company}
                            </button>
                        )
                    })}
                </div>
                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className="job-date">{dates}</p>
                    {duties.map((duty, index) => {
                        return (
                            <div key={index} className="job-desc">
                                <FontAwesomeIcon icon={faAngleDoubleRight} className="job-icon" />
                                <p>{duty}</p>
                            </div>
                        )
                    })}
                </article>
            </div>
            <button type="button" className="btn">
                more info
            </button>
        </section>
    )
}