import React from "react";
import './index.css'
import Sataporn_Worasilpchai_Resume_June13 from '../Sataporn_Worasilpchai_Resume_June13.pdf'
import profile_image from '../profile_picture.png'

const Homepage =()=>{

    return(
        <>
        {/* <h1>Hello</h1> */}
        <body>
            
            {/* <div className="sidenav"> </div> */}

            {/* <header>
                WORK IN PROGRESS
            </header> */}

            <main>
                <h2>
                    Sataporn Worasilpchai
                </h2>

                <div className="main-info">
                    <img className="mainimage" src = {profile_image} alt="profile image" style={{width: "200px", height:"200px"}}/>
                    
                    <div class="intro">
                        <p>
                            Thank you for visiting my webpage. My name is Sataporn. I am an applied research scientist working on machine learning and software prototyping. I am incredibly interested in applying the latest research to real-world problems and creating proof of concept for business applications. I'm experienced in big data, synthetic images, and word embeddings. I love working on new projects and exploring the power of machine learning.
                            </p>
            
                            <p>
                            In my previous position at Likewise and US Bank, I worked as a quality engineer with a focus on test automation. I learned a lot from that position, but my passion is in building new things that impact people, rather than solely testing them. Please see my <a href ="https://www.linkedin.com/in/sataporn-w/" target="_blank"  rel="noopener noreferrer">LinkedIn</a> profile for a detailed career timeline.
                            </p>
                            <a href={Sataporn_Worasilpchai_Resume_June13} target="_blank"  rel="noopener noreferrer">
                                Current Resume
                            </a>
                    </div>
                
                </div>
                <ul> Projects and ongoing work:
                    <li className="firstItem">
                        <a href="https://github.com/nonwor/course-vector" target="_blank"  rel="noopener noreferrer"> MOOC Recommender</a>
                        This project utilizes word embeddings to discover courses relevant to job titles or areas of interest. Word embeddings offer flexible context-based searching, eliminating the need for lexicons or word matching.
                    </li>
                    <li> 
                        <a href="https://sitkum.systems/" target="_blank"  rel="noopener noreferrer">
                            SitKum Systems</a>
                        Ongoing research in various domains of machine learning. 
                    </li>
                    <li>
                        <a href="https://rackandstrap.com/" target="_blank"  rel="noopener noreferrer">
                            Rack and Strap</a>
                        An online marketplace for transporting bulky outdoor recreation equipment such as kayaks, canoes, and bikes.
                    </li>

                </ul>

                <div>
                    <h4 className="deatailed-info-title">About Me:</h4>
                    <div className="detailed-info">
                        <p>
                        I grew up in Atlanta, GA, and attended the Georgia Institute of Technology for my undergraduate degrees (ISYE & CS) from 2011 to 2018. During my time there, I explored various industries and studies, and alongside my college experience, I also picked up whitewater kayaking and rock climbing, which influenced some of my decision-making. As I approached the end of my time at Tech, I reflected on my journey and realized that my favorite class was CS-2316. This course involved building an AOL-style chat program, which revealed the inner workings of computers and software and sparked my interest in understanding how it all comes together. With the support of my parents, I decided to stay at Georgia Tech for another two years to pursue a computer science degree.
                        </p>
                        <p>
                        After graduating, I joined Elavon (U.S. Bank) as a Jr. Quality Engineer. I thoroughly enjoyed my time there, working on a brand-new product line, although the project was eventually shelved after I left. During my brief tenure, I had the opportunity to collaborate with incredibly intelligent and talented individuals. I also spent a few weeks during the holiday season building a prototype extension to the main product. As Elavon focused on merchant payment processing, the prototype aimed to enhance the product by incorporating a table and waitlist management system, ultimately improving customer capture and throughput. My responsibilities primarily revolved around developing the backend API portion of the project, which provided a refreshing change from my everyday tasks.
                        </p>
        
                        <p>
                        Following a year at Elavon, I relocated to Seattle for personal reasons and joined Likewise, an early-stage start-up. Likewise operates as a recommendation platform for digital entertainment and has been constructing a fascinating dataset. As the second Quality Assurance (QA) professional at the company, I primarily focused on the web app experience and data integrity. I developed web UI automation tests using Cypress and wrote Python scripts to validate data from third-party sources. Implementing web automation significantly reduced web release time by almost 50%. Moreover, my Python script detected that approximately 10% of the links provided by the third-party were incorrect. I raised this issue to our third-party data provider, and corrections were made to ensure data correctness on the Likewise platform. 
                        </p>
                        <p>
                        After spending two years at Likewise, I made the decision to pursue a Master's degree in Computer Science, specializing in machine learning. My ultimate goal is to apply machine learning techniques to real-world problems and develop software prototypes that serve as solutions. I had a brief opportunity to work towards this objective at Whitepages, and I am currently engaged in similar efforts at Sitkum Systems.
                        </p>

                    </div>

                    <div className="contact-section">
                        <h4>Contact:</h4>
                        <div className="detailed-info">
                            <p>If you are interested in working together, please reach out to me via <a href ="https://www.linkedin.com/in/sataporn-w/" target="_blank"  rel="noopener noreferrer">LinkedIn</a>. I'd love to talk about machine learning and building software prototypes.</p>
                        </div>
                    </div>

                </div>
            </main>

            {/* <footer>
                DO GOOD
            </footer> */}
        </body>
        </>
    )
}

export default Homepage