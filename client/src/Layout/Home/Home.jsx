import React from 'react'
// import NavBar from '../NavBar/NavBar'
import './Home.css';

function Home() {
  return (
    <div>
     
        
        <div className="section1">
        <div className="container">
            <div className="content-section1">
                <div className="title">
                    <h3>University Managment System</h3>
                </div>
                <div className="content">
                    <p>
                    Welcome to University’s “Become a Student” page and we are so excited that you are considering being a part of the Bulldog Community! Whether you are looking to join the Elementary, 
                    Middle or High School, we want to invite you to take a look and see if our program is right for you. University celebrates individuality with the purpose of building community.
                     We believe in developing well-rounded students who not only meet curriculum standards; but who are emotionally intelligent, self-directed and passionate about growing into the best version of themselves.
                      We're proud of where we come from. We're passionate about who we are. We're excited about who we could be. University Schools is a K–12 public charter school located in Greeley School District 6.
                       For more than 120 years, we have demonstrated our commitment to providing our students with an innovative and pioneering model of education.
                    </p>
                </div>
            </div>
            <div className="image-section1">
                 <img src="https://media.www.kent.ac.uk/se/30782/graduation-ceremony-3_2000w.jpg"></img>
            </div>
        </div>
    </div>

    <div className="wrapper">
        <h2>Our Mission,Vision and Roots</h2>
        <div className="abouts">
            <div className="mva">
                <h3>Mission</h3>
                <p>University Schools will prepare students emotionally and educationally for learning,
                 leading, and caring citizenship in their academic, social, and civic communities.
                </p>
            </div>
            <div className="mva">
            <h3>Vision</h3>
                <p>University Schools envision a caring and supportive environment where students become self-directed through personalized experiences.
                     Students, teachers and parents cooperate to develop autonomous learning in a learner-centered school.</p>
            </div>
            <div className="mva">
            <h3>Our Roots</h3>
                <p>University Schools just celebrated our 130th anniversary! 

For over a century, we have fostered an educational environment centered on teacher-student interaction.

We are proud of our contributions to education, which include:

First kindergarten in Colorado (1892)
First high school to offer a driver’s education program
First middle school west of the Mississippi
First field-testing site for BSCS Biology and Chemistry Study and pilot of the Houghton Mifflin Reading program.
A model school lunch program
First school in the nation to implement a block schedule
First school to integrate the acoustically handicapped (we continue to stand as a national model in this area) </p>
            </div>
        </div>
    </div>

    <div className="video">

        <h2>Check out our work</h2>

        <video  width="600" height="400" controls>
           
            <source src="Video/About.mp4" type="video/mp4"></source>
        </video>
        
        
        
    </div>
<div>

</div>

    
    </div>
  )
}

export default Home