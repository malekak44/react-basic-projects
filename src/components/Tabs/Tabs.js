import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import './Tabs.css';

export default function Tabs() {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [index, setIndex] = useState(0);

    const url = 'https://course-api.com/react-tabs-project';

    const fetchJobs = async () => {
        let response = await fetch(url);
        let data = await response.json();
        setJobs(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchJobs();
    }, [])

    if (loading) {
        return (
            <section className="loading section">
                <h1>Loading...</h1>
            </section>
        )
    }
    const { title, dates, company, duties } = jobs[index];

    return (
        <section className="section">
            <div className="title">
                <h2>experience</h2>
                <div className="underline"></div>
            </div>
            <div className="jobs-center">
                <div className="btn-container">
                    {jobs.map((job, id) => {
                        return (
                            <button key={id} onClick={() => setIndex(id)}
                                className={`job-btn ${index === id && "active-btn"}`}>
                                {job.company}</button>
                        )
                    })}
                </div>
                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className="job-date">{dates}</p>
                    {duties.map(duty => <div className="job-desc"><FaAngleDoubleRight className="job-icon" /><p>{duty}</p></div>)}
                </article>
            </div>
            <button type="button" className="btn">more info</button>
        </section>
    )
}