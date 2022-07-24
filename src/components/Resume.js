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
        <h3>Projects: </h3>
        <Experience name="Caltech CS 156b Chest Xray Machine Learning Model"
        date="Apr 2022-Jun 2022" skills="Python, NumPy, Linux/Unix, Git"
        contents={
            ["Developed and trained a neural network architecture in Python to predict 14 diseases from chest Xray images for class competition on EvalAI (Placed 4th out of 17 teams)",
            "Researched and implemented pretrained network architectures such as Densenets/Resnets and data labeling methods with Pytorch"]
          }
        />

        <Experience name="Caltech CS 24 Computer Systems Projects" date="Oct 2021-Dec 2021" skills="C"
        contents={
            ["Projects in C: Implemented code-generation for BASIC to Assembly compiler; designed a memory allocator from scratch; wrote buffer overflow and shellcode hacking exploits; implemented multithreaded password cracker"]
          }
        />

        <Experience name="Gunn High School Colleges Map" date="Jun 2019" 
        skills="JavaScript, HTML"
        contents={
            ["Created a webpage that read data from a spreadsheet with the colleges my high school graduating class committed to and displayed them with markers on a map using JavaScript, Google Maps API, and Google Sheets API"]
          }
        /> 

        <Experience name="JavaScript p5.js Simulations" date="2019-Present" 
        skills="JavaScript, HTML"
        contents={
            ["Created single webpages with math and physics simulations/animations using the p5.js library (see Github)"]
          } 
        />
        </div>

        <div className="resume-experience">
        <h3><b>Experience: </b></h3>

        <Experience name="Summer Research Intern at the Engelhardt Lab at the Gladstone Insitutes" date="Jun 2022-Present" skills="Python, NumPy, Git, Linux/Unix"
        contents={
            ["Project to analyze videos of CAR T cells attacking cancer cells to help develop better cancer therapies",
            "Currently researching cell-movement simulation techniques and using Python to simulate cell movement"]
           }
        />

        <Experience name="Summer Undergraduate Research Fellow at the Pachter Lab at Caltech" date="Jun 2020-Sept 2021" skills="Python, NumPy, Git, Linux/Unix"
        contents={
            ["Worked with the lab's single-cell RNA sequencing analysis software kallisto/bustools",
            "Developed a workflow for studying differential isoform expression in the Clytia hemisphaerica jellyfish with single-cell RNA sequencing data",
            "Implemented logistic regression model using NumPy, Sklearn &amp; Pandas to identify isoforms of interest",
            "Compared performance of a cell-barcode error correction algorithm called Starcode to kallisto’s cell barcode error correction algorithm using Python",
            "Presented my findings and wrote papers summarizing my results."]
            }
        />

        <Experience name="Software Development Intern at NASA Ames Research Center HCI Division" date="Jun 2019-Aug 2019" skills="JavaScript, HTML, Git"
        contents={
            ["Worked in an agile software development and design team to remodel  NASA HUNCH Website and add features to Playbook/Playbook Pro (A mobile and desktop app for planning and scheduling activities for astronauts on analog and space missions)",
            "Added critical features to Playbook including keyboard shortcuts, brand new action dialog box UI, and various scheduling button actions using JavaScript’s Backbone.js library"]
            }
        /> 

        <Experience name="Software Research Intern at NASA Ames Research Center HCI Division" date="Jun 2018-Aug 2018" skills="JavaScript, HTML, Git"
        contents={
            ["Researched the use of IoT technology to help astronauts improve procedural performance and efficiency using sensors connected to an Arduino board",
            "Programmed Arduino to publish sensor data to MQTT server",
            "Created UI using JavaScript/HTML/CSS that displayed sensor data and allowed control of output devices connected to Arduino",
            "Presented to Johnson Space Center engineers who supported further research by HCI division in this area after demo"]
          }
        />

        </div>
        <div className="resume-coursework">
            <h3><p>Relevant Coursework: </p></h3>
            <p>Computational Biology &amp; Bioinformatics; Machine Learning; Computer Systems; Algorithms; Theory of Computation;  Discrete Mathematics;  Datastructures/Algorithms; Functional Programming; Neuroscience; Developmental Biology; Genetics; Cell Biology; Molecular Biology; Applied Mathematics; Probability Models; Differential Equations; Proof-based Calculus and Linear Algebra; MATLAB and Mathematica</p>
        </div>

        <div className="resume-awards">
            <h3><p>Test Scores/Awards: </p></h3>
            <p><b>SAT</b> - 1560/1600; <b>PSAT</b> - 1500/1520; <b>SAT Math Level II</b> - 800/800; <b>SAT Chemistry</b> - 800/800; <b>AP</b>  - 5/5 on Computer Science A, Chemistry, Physics 1, Physics C, Calculus BC, and Statistics Exams</p>
        </div>
    </div>
    );
}

export default Resume;