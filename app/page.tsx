'use client'
import "./medic.css";
import { FaGithub } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

import Head from 'next/head';
import Image from 'next/image';

import face1 from "../public/hometest.jpg"
import face2 from "../public/clawtest.jpg"

import face3 from "../public/chess.png"
import face4 from "../public/work-2.png"
import face5 from "../public/work-3.png"


import { useState } from 'react';

export default function Home() {
  const [tab, setTab] = useState('skills');

  const opentab = (tabname: any) => {
    setTab(tabname);
  };

  async function handleSubmit(event: any){
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f16ecc6b-3d61-4355-a0d7-b0506d3a759c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
          });
          const result = await response.json();
          if (result.success) {
              alert("Successfully sent message!")
          }
          else{
            alert('Error in sending message. Message was not sent. ')
          }
          event.target.reset();
  }
  return (
      <body>
        <div id = "header">
          <header className = "header">
            <a href = "#" className="logo">Daniel.</a>
              <nav className="navbar">
                <a href = "#header">Home</a>
                <a href = "#about2">About</a>
                <a className = 'asd' href = "#portfolio">Portfolio</a>
                <a href = "#contact">Contact</a>
            </nav>
          </header>

        </div>

        <section className="home" id="about">
          <div className="home-content">
            <h1>Hi, I&apos;m Daniel Fan</h1>
            <h3>Programmer, Chess Player, Explorer</h3>
            <p>&quot;I must understand the world, you see&quot; - Richard Feynman</p>
          </div>
          <div className="home-img">
            <div className="glowing-circle">
              <span></span>
              <span></span>
              <div className="image">
                <Image src={face1} alt="Daniel" />
              </div>
            </div>
          </div>
        </section>

        <section id="about2">
          <div className="about">
            <div className="container">
              <div className="row">
                <div className="about-col-1">
                  <Image src={face2} alt="Claw" />
                </div>
                <div className="about-col-2">
                  <h1 className="sub-title">About Me</h1>
                  <p className="paragraph">
                    Hello! I am an 18-year-old interested in technology from the suburbs of Philadelphia, Pennsylvania (class of 2024)
                    with a heavy interest in computer science...
                  </p>
                  <div className="tab-titles">
                    <p onClick={() => opentab('skills')} className={tab === 'skills' ?"tab-links active-link" : 'tab-links'}>Skills</p>
                    <p onClick={() => opentab('experience')} className={tab === 'experience' ? "tab-links active-link": 'tab-links'}>Experience</p>
                    <p onClick={() => opentab('education')} className={tab === 'education' ? "tab-links active-link" : 'tab-links'}>Education</p>
                    <p onClick={() => opentab('hobbies')} className={tab === 'hobbies' ? "tab-links active-link" : 'tab-links'}>Hobbies</p>
                    <p onClick={() => opentab('other-sites')} className={tab === 'other-sites' ? "tab-links active-link" : 'tab-links'}>Other Sites</p>
                  </div>

                  <div className={tab === 'skills' ? "tab-contents active-tab" : "tab-contents"}>
                    <ul>
                      <li><span>Programming Languages</span> <br/> Fluent in Python, JavaScript, TypeScript, and Java</li>
                      <li><span>Frameworks/Libraries</span> <br/> React, Flask, Node.js, Bootstrap, Next.js</li>
                      <li><span>Technologies</span> <br/> Electron, AWS (Amplify), Firebase (Deployment)</li>
                      <li><span>Tools</span> <br/> PyCharm, IntelliJ IDEA, Visual Studio Code, MongoDB</li>
                    </ul>
                  </div>

                  <div className={tab === 'experience' ? " tab-contents active-tab" : "tab-contents"}>
                    <ul>
                      <li><span>Comet</span> <br/>Project Intern (January &apos;23 - March &apos;23)</li>
                      <li><span>AgilePoint</span> <br/>Software Automation Intern (April &apos;24 - May &apos;24)</li>
                    </ul>
                  </div>

                  <div className={tab === 'education' ? "tab-contents active-tab" : "tab-contents"}>
                    <ul>
                      <li><span>University of Maryland</span> <br/>Incoming Freshman (class of 2028)</li>
                    </ul>
                  </div>

                  <div className={tab === 'hobbies' ? "tab-contents active-tab" : "tab-contents"}>
                    <ul>
                        <li> <span> Chess </span> <br/> ~2000 ELO on Chess.com, started playing in 2020 during the pandemic. </li>
                        <li> <span> Reading </span> <br/> I read primarily history and philosophy with an emphasis on Ancient Greek and Enlightenment thought.  </li>
                        <li> <span> Languages </span> <br/> I think that acquiring new ways of speaking is one of the coolest things a human can do. Fluent in French, Chinese, Spanish, and English. </li>
                        <li> <span> Piano </span> <br/> Began playing when I was 5, now I mainly play recreationally. </li>
                    </ul>
                  </div>

                  <div className={tab === 'other-sites' ? "tab-contents active-tab" : "tab-contents"}>
                    <ul>
                      <li><span>LinkedIn</span> <br/> <a style = {{textDecoration:"none", color: "white"}} href="https://www.linkedin.com/in/daniel-fan-0177a0246/">https://www.linkedin.com/in/daniel-fan-0177a0246/</a></li>
                      <li><span>Github</span> <br/><a style = {{textDecoration:"none", color: "white"}} href="https://github.com/danfanlol">https://github.com/danfanlol</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
        <div id = "portfolio">
                <div className = "container">
                    <h1 className = "cs-tag"> Projects </h1>
                    <div className = "work-list">
                        
                        <div className = "work">
                            <Image src={face3} alt="Daniel" />
                            <div className="layer">
                                <h3> Blindfold Chess Trainor </h3>
                                <p> Appearing to require extraordinary visual-spatial abilities and memory, blindfold chess was considered miraculous for centuries. Under proper training and exercises, however, anybody can learn to play chess blindfolded and become a better chess player, critical thinker, and problem solver.  </p>
                                <a href='https://chessanalytic.web.app'><MdComputer size={38}/> </a>
                            </div>
                        </div>
                        <div className = "work">
                            <Image src={face4} alt="Daniel" />
                            <div className="layer">
                                <h3> Fanaa </h3>
                                <p> Fanaa is a small programming language that supports various fundamental programming concepts such as variable-declaration, function calling, conditional statements, loops, proper order of operations, and iteration. </p>
                                <a href='https://github.com/danfanlol/Fanaa'><FaGithub size={40}/> </a>
                            </div>
                        </div>
                        <div className = "work">
                            <Image src={face5} alt="Daniel" />
                            <div className="layer">
                                <h3> Pathfinding & Sorting Visualizer </h3>
                                <p> Allows visualization of complex searching and sorting algorithms <br/>
                                    Supported Pathfinding Algorithms - BFS, DFS, Dijkstra&apos;s <br/>
                                    Supported Sorting Algorithms - Quicksort, insertion-sort, selection-sort, bogosort <br/>
                                    Supported Pointer Algorithms - Binary Search </p>
                                <a href='https://github.com/danfanlol/AlgorithmVisualizer'><FaGithub size={40}/></a>
                            </div>
                        </div>
                    </div>
                    <a href="https://github.com/danfanlol" className="btn"> See more </a>
                </div>
                
            </div>
        </section>
        <section id="contact">
          <div style = {{padding: "60px 0", backgroundColor: "rgb(4, 1, 20)"}}>
              <div>
                  <form onSubmit = {handleSubmit} id = 'myForm' style={{color: "white", textAlign: "center", marginTop: "-40px"}}>
                      <h1 style= {{fontSize:"50px"}}> Want to get in touch?  </h1>
                      <div className="form-row">
                          <div className="input-group">
                            <input type="text" id="name" name = 'name' required/> 
                            <label htmlFor="name"> Your Name </label>
                          </div>
              
                          <div className="input-group">
                              <input type="text" id="number" name = 'number' required/> 
                              <label htmlFor="number"> Phone Number </label>
                          </div>
                      </div>
          
                      <div className="input-group">
                          <input type="email" id="email" name = 'email' required/> 
                          <label htmlFor="email"> Email </label>
                      </div>
                      <div className="input-group">
                          <textarea id = "message" rows={8} name = 'message' required></textarea>
                          <label htmlFor="message"> Your Message </label>
                      </div>
                      <button type="submit"> Submit </button>
                  </form>
              </div>
          </div>
        </section>
        <section >
          <div className="footer" style={{textAlign:"center"}}>
              <p> Copyright @ Daniel Fan 2024 </p>
          </div>
        </section>
      </body>
  );
}
