import React from "react";
import "./services.css";

function Services() {
  return (
    <section id="services">
      
      <h2>Education & Projects</h2>
      <div className="container services__container">
        
        <article className="service">
          <div className="service__head">
            <h3>Education</h3>
          </div>
          <ul className="service__list">
          <li>
              
              <h3 ><b className="college">Indira Gandhi National University</b>, Masters</h3>
             
          </li>
          <li> <h5>2023-2025, Computer Apllication, New Delhi</h5></li><br />

            <li>
              
              <h3 ><b className="college">SD Mnagement group of colleges</b>, Bachelors</h3>
             
            </li>
            <li> <h5>2020-2023, Computer Science ,MZN ,Uttarpradesh</h5></li><br />
            <li>
             
              <h3><b className="college">SFDAV Public School</b>, Intermediate Education</h3>
             
            </li>
            <li><h5>2018-2020, PCM, MZN, Uttar Pradesh</h5></li><br />
            <li>
              <h3><b className="college">SFDAV Public School</b>, High School</h3>
            </li>
            <li>
             <h5>2017-2018, MZN, Uttar Pradesh</h5>
            </li>
            
          </ul>
        </article>
       
      </div>
    </section>
  );
}

export default Services;
