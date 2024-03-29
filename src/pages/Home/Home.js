import React from "react";
import { Link } from "react-router-dom";
import projects from './data';
import './Home.scss';
import girl from './images/girl.jpg';

export default function Home() {
    return (
        <>
            <header className="home-header">
                <div className="header-content">
                    <div className="text">
                        <h1>React Basic Projects</h1>
                        <p>These are some of the basic projects of React that I have practiced. These projects cover the basic level of ReactJS. And these are also quite suitable for beginners. I had fun while building these projects. So explore the projects!</p>
                        <a href="https://github.com/malekak44">
                            <button className="header-btn">My Github</button>
                        </a>
                    </div>
                    <img src={girl} alt="girl" />
                </div>
            </header>
            <div className="home-title">
                <h2>Basic Projects</h2>
                <div className="home-underline"></div>
            </div>
            <main id="home">
                <section id="projects">
                    {projects.map(project => <Link to={`/${project.title}`} key={project.id}>
                        <article className="project">
                            <div className="project-img-div">
                                <img src={project.image} className="project-img" alt={project.title} />
                            </div>
                            <footer className="project-footer">
                                <h5>{project.title}</h5>
                            </footer>
                        </article>
                    </Link>)}
                </section>
            </main>
            <footer className="home-footer">
                <p>&copy;Copyright 2021 | All rights reserved</p>
            </footer>
        </>
    );
}