import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from './data';
import './Home.scss';

export default function Home() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(data);
    }, []);


    return (
        <>
            <header>

            </header>
            <div className="home-title">
                <h2>Basic Projects</h2>
                <div className="underline"></div>
            </div>
            <main>
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
        </>
    );
}