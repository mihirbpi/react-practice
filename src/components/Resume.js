import Experience from './Experience';
const Resume  = () => {
    return (
    <div className="resume">
        <div className="resume-header">
            <p><b>Name: </b>Mihir Borkar</p>

            <p><b>School/Degree/Graduation Year: </b>
            California Institute of Technology / BS Computer Science (minor Biology) / June 2023 </p>

            <p> <b>Email/Phone/LinkedIn/Github: </b> 
            <a href="mihir.borkar@gmail.com" target="_blank">mihir.borkar@gmail.com</a> /  
            <a href="https://www.linkedin.com/in/mihir-borkar-a2628668/" target="_blank"> LinkedIn</a> /  
            <a href="https://github.com/mihirbpi" target="_blank"> Github</a></p>

            <p><b>Programming Languages: </b>
            Python, C, Java, JavaScript, MATLAB, Mathematica, HTML</p>

            <p><b>Tools/Technologies: </b>
            NumPy, Jupyter, p5.js, Arduino, Git, Linux/Unix, Microsoft Office</p>
        </div>
        <div className="resume-projects">
        <h3><b>Projects: </b></h3>
        
        <Experience name="Caltech CS 156b Chest Xray Machine Learning Model"
        date="Apr 2022-Jun 2022"
        content={<div>
        <p>Developed and trained a neural network architecture in Python to predict 14 diseases from chest Xray images for class competition on EvalAI (Placed 4th out of 17 teams)</p>
        <p>Researched and implemented pretrained network architectures such as Densenets/Resnets and data labeling methods with Pytorch</p></div>}/>

        <Experience name="Caltech CS 24 Computer Systems Projects" date="Oct 2021-Dec 2021" 
        content={<div>
        <p>Projects in C: Implemented code-generation for BASIC to Assembly compiler; designed a memory allocator from scratch; wrote buffer overflow and shellcode hacking exploits; implemented multithreaded password cracker </p>
        </div>}/>

        <Experience name="Gunn High School Colleges Map" date="Jun 2019" 
        content={<div>
        <p>Created a webpage that read data from a spreadsheet with the colleges my high school graduating class committed to and displayed them with markers on a map using JavaScript, Google Maps API, and Google Sheets API</p>
        </div>}/> 

        <Experience name="JavaScript p5.js Simulations" date="2019-Present" 
        content={<div>
        <p>Created single webpages with math and physics simulations/animations using the p5.js library (see Github) </p>
        </div>}/>
        </div>

        <div className="resume-experience">
        <h3><b>Experience: </b></h3>

        <Experience name="Summer Research Intern at the Engelhardt Lab at the Gladstone Insitutes" date="Jun 2022-Present" 
        content={<div>
        <p>Project to analyze videos of CAR T cells attacking cancer cells to help develop better cancer therapies</p>
        <p>Currently researching cell-movement simulation techniques and using Python to simulate cell movement</p></div>}/>

        <Experience name="Summer Undergraduate Research Fellow at the Pachter Lab at Caltech" date="Jun 2020-Sept 2021" 
        content={<div>
        <p>Worked with the lab's single-cell RNA sequencing analysis software kallisto/bustools </p>
        <p>Developed a workflow for studying differential isoform expression in the Clytia hemisphaerica jellyfish with single-cell RNA sequencing data</p>
        <p>Implemented logistic regression model using NumPy, Sklearn &amp; Pandas to identify isoforms of interest</p>
        <p>Compared performance of a cell-barcode error correction algorithm called Starcode to kallisto’s cell barcode error correction algorithm using Python</p>
        <p>Presented my findings and wrote papers summarizing my results.</p></div>}/>

        <Experience name="Software Development Intern at NASA Ames Research Center HCI Division" date="Jun 2019-Aug 2019" 
        content={<div>
        <p>Worked in an agile software development and design team to remodel  NASA HUNCH Website and add features to Playbook/Playbook Pro (A mobile and desktop app for planning and scheduling activities for astronauts on analog and space missions) </p>
        <p>Added critical features to Playbook including keyboard shortcuts, brand new action dialog box UI, and various scheduling button actions using JavaScript’s Backbone.js library</p>
        </div>}/> 

        <Experience name="Software Research Intern at NASA Ames Research Center HCI Division" date="Jun 2018-Aug 2018" 
        content={<div>
        <p>Researched the use of IoT technology to help astronauts improve procedural performance and efficiency using sensors connected to an Arduino board </p>
        <p>Programmed Arduino to publish sensor data to MQTT server</p>
        <p>Created UI using JavaScript/HTML/CSS that displayed sensor data and allowed control of output devices connected to Arduino</p>
        <p>Presented to Johnson Space Center engineers who supported further research by HCI division in this area after demo
        </p>
        </div>}/>

        </div>

        <div className="resume-coursework">
            <p><h3>Relevant Coursework: </h3></p>
            <p>Computational Biology &amp; Bioinformatics; Machine Learning; Computer Systems; Algorithms; Theory of Computation;  Discrete Mathematics;  Datastructures/Algorithms; Functional Programming; Neuroscience; Developmental Biology; Genetics; Cell Biology; Molecular Biology; Applied Mathematics; Probability Models; Differential Equations; Proof-based Calculus and Linear Algebra; MATLAB and Mathematica</p>
        </div>

        <div className="resume-awards">
            <p><h3>Test Scores/Awards: </h3></p>
            <p><b>SAT</b> - 1560/1600; <b>PSAT</b> - 1500/1520; <b>SAT Math Level II</b> - 800/800; <b>SAT Chemistry</b> - 800/800; <b>AP</b>  - 5/5 on Computer Science A, Chemistry, Physics 1, Physics C, Calculus BC, and Statistics Exams
</p>
        </div>
    </div>
    );
}

export default Resume;