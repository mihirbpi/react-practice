import Experience from './Experience';
const Resume  = () => {
    return (
    <div className="resume">
        <div className="resume-header">
            <p><b>Name: </b>Mihir Borkar</p>

            <p> <b>Email/Phone/LinkedIn/Github: </b> 
            <a href="mailto:mihir.borkar@gmail.com" target="_blank">mihir.borkar@gmail.com</a> /  
            <a href="https://www.linkedin.com/in/mihir-borkar-a2628668/" target="_blank"> LinkedIn</a> /  
            <a href="https://github.com/mihirbpi" target="_blank"> Github</a></p>

            <p><b>General Skills: </b>
            Software Development, Fullstack Development, Machine Learning, Research, Data Analysis</p>

            <p><b>Programming Languages: </b>
            Python, R, MATLAB, SQL, JavaScript, HTML, CSS,  C, Java, Mathematica</p>

            <p><b>Tools/Technologies: </b>
            Jupyter, NumPy, Pandas, Matplotlib, Scikit-learn, PyTorch, TensorFlow, OpenCV, AWS S3, AWS Transcribe,</p ><p>Node.js, Linux/Unix, Github, Shiny</p>
        </div>

        <div className="resume-education">
            <h3><p>Education: </p></h3>
            <p><b>Stanford University,
            Ph.D. Biomedical Data Science</b> - (Sept 2024 - Jun 2029 (expected))
            </p>
            <p><b>California Institute of Technology,
            B.S. Computer Science (minor in Biology) </b> - GPA: 3.9 - (Sept 2019 - Jun 2023)
            </p>
        </div>
        
        <div className="resume-coursework">
            <h3><p>Relevant Coursework: </p></h3>
            <p>Computational Biology; Machine Learning; Relational Databases; Algorithms; Datastructures; Computer Systems; Functional Programming; Theory of Computation; Discrete Mathematics; Genetics; Immunology; Cell Biology; Molecular Biology; Neuroscience; Neural Computation; Applied Mathematics; Applied Linear Algebra; Information Theory; Statistical Inference; Probability Models</p>
        </div>

        <div className="resume-experience">
        <h3><b>Experience: </b></h3>

        <Experience name="Fullstack Developer at Stealth AI Startup" date="Sept 2023-Nov 2023" skills="Electron, AWS Transcribe, AWS S3"
        contents={
            ["Worked on fullstack projects for an early stage AI startup as an independent contractor, paid on a per project basis",
            "Added features to a LLM Electron app. The app allows users to run LLMs locally",
            "Added feature which allows the user to upload an MP3 file, sends it to AWS to be transcribed via AWS Transcribe, stores the transcription in AWS S3, and has the LLM summarize the transcription"]
           }
        />

        <Experience name="Computational Biology Intern at Nuanced Health" date="Jun 2023-Aug 2023" skills="Python, AWS S3, R, Pandas, Jupyter NumPy, Git, Linux/Unix"
        contents={
            ["Analyzed how quality of data from mass spectrometry vendors affects downstream target molecule identification and experimental results",
            "Worked with R, AWS S3, Python, NumPy, Pandas, and Jupyter notebooks to generate summary statistics and plots",
            "Integrated experimental data from various sources across our AWS S3 datastore to generate useful plots and tables in a UI/dashboard created using the Shiny package in R, Allowed our wet lab team to more easily make decisions"]
           }
        />

        <Experience name="Summer Research Intern at the Engelhardt Lab at the Gladstone Insitutes" date="Jun 2022-Sept 2022" skills="Python, NumPy, Jupyter, Git, Linux/Unix"
        contents={
            ["Project to analyze videos of CAR T cells attacking cancer cells to help develop better cancer therapies",
            "Researched cell-movement simulation techniques and used Python to simulate cell movement in Jupyter notebook",
            "Ran simulations and plotted measures like dynamic-time-warping distance between cells using Matplotlib"]
           }
        />

        <Experience name="Summer Undergraduate Research Fellow at the Pachter Lab at Caltech" date="Jun 2021-Sept 2021" skills="Python, NumPy, Git, Jupyter, Linux/Unix"
        contents={
            ["Worked with the lab's single-cell RNA sequencing analysis software kallisto/bustools",
            "Developed a workflow for studying differential isoform expression in the Clytia hemisphaerica jellyfish with single-cell RNA sequencing data",
            "Implemented logistic regression model using NumPy, Sklearn & Pandas to identify isoforms of interest",
            "Presented my findings and wrote papers summarizing my results."]
            }
        />

      <Experience name="Summer Undergraduate Research Fellow at the Pachter Lab at Caltech" date="Jun 2020-Sept 2020" skills="Python, NumPy, Pandas, Jupyter, Git, Linux/Unix"
        contents={
            ["Worked with the lab's single-cell RNA sequencing analysis software kallisto/bustools",
            "Compared performance of a cell-barcode error correction algorithm called Starcode to kallisto’s cell barcode error correction algorithm using Python",
            "Presented my findings and wrote papers summarizing my results."]
            }
        />

        <Experience name="Software Development Intern at NASA Ames Research Center HCI Division" date="Jun 2019-Aug 2019" skills="JavaScript, HTML, Git"
        contents={
            ["Employed through SJSU Research Foundation as a government contractor on projects in the HCI Group at NASA Ames","Worked in an agile software development and design team to remodel  NASA HUNCH Website and add features to Playbook/Playbook Pro (A mobile and desktop app for planning and scheduling activities for astronauts on analog and space missions)",
            "Added critical features to Playbook including keyboard shortcuts, brand new action dialog box UI, and various scheduling button actions using JavaScript’s Backbone.js library"]
            }
        /> 

        <Experience name="Software Research Intern at NASA Ames Research Center HCI Division" date="Jun 2018-Aug 2018" skills="JavaScript, HTML, Git"
        contents={
            ["Employed through SJSU Research Foundation as a government contractor on projects in the HCI Group at NASA Ames","Researched the use of IoT technology to help astronauts improve procedural performance and efficiency using sensors connected to an Arduino board",
            "Programmed Arduino to publish sensor data to MQTT server",
            "Created UI using JavaScript/HTML/CSS that displayed sensor data and allowed control of output devices connected to Arduino",
            "Presented to Johnson Space Center engineers who supported further research by HCI division in this area after demo"]
          }
        />

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

        <div className="resume-awards">
            <h3><p>Test Scores/Awards: </p></h3>

            <p><b>SAT</b> - 1560/1600; <b>PSAT</b> - 1500/1520; <b>SAT Math Level II</b> - 800/800; <b>SAT Chemistry</b> - 800/800; <b>AP</b>  - 5/5 on Computer Science A, Chemistry, Physics 1, Physics C, Calculus BC, and Statistics Exams</p>

            <p><b>PSAT National Merit Finalist</b></p>

            <p><b>Achievement Roll for AMC 12 Math Competition</b> (90th percentile, score of 97.5 in grade 9)</p>
        </div>
    </div>
    );
}

export default Resume;