import React, { useRef, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import "./About.css";

// import 'https://kit.fontawesome.com/a076d05399.js';
// import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css';
// import 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js';
// import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js';

const About = (props) => {
  return (
    <div>
      <div className="jumbotron text-center">
        <h1>Car-O-Pedia</h1>
        <p>Where renting gets easy !</p>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <h2>About Company Page</h2>
            <h4>
              Car-O-Pedia makes renting easy. Wheather you plan to travel to a
              hill station in an SUV, or rent a bike on the beaches of Goa,
              We've got you covered.
            </h4>
            <p>
              We offer market's best rates and offer full insurance for your
              trip, to make you worry-less and free.
            </p>
          </div>
          <div className="col-sm-4">
            <i
              className="fas fa-car"
              style={{
                float: "right",
                fontSize: "148px",
                color: "red",
              }}
            ></i>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-grey">
        <div className="row">
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-globe logo"></span>
          </div>
          <div className="values col-sm-8">
            <h2>Our Values</h2>
            <h4>
              <strong>MISSION:</strong> To offer reliable services and make
              renting easy.{" "}
            </h4>
            <p>
              <strong>VISION:</strong> The vision of this project is to provide
              a website where users may reserve cars and make service requests
              from anywhere in the world. Car-O-Pedia will allow customers to
              make reservations for their cars from any location in the world. A
              customer can reserve a car after setting up an account on the
              website. fully integrated online system. It includes details about
              the kind of car model they want to drive.
            </p>
          </div>
        </div>
      </div>

      <div className="Team text-center">
        <h1>Our Team</h1>
        <div className="Team_Container">
          <div className="col-md-2">
            <img
              className="img-fluid img-thumbnail"
              src="https://media-exp1.licdn.com/dms/image/D4D35AQEUeWbE8ZTYQQ/profile-framedphoto-shrink_800_800/0/1663731945286?e=1670968800&v=beta&t=bTK1X5VthLC6MIgna4eeIZEalyBy-G2rdYf4efXtO8g"
              alt=""
            />
          </div>
          <div className="col-md-2">
            <img
              className="img-fluid img-thumbnail"
              src="https://avatars.githubusercontent.com/u/50455396?v=4"
              alt=""
            />
          </div>
          <div className="col-md-2">
            <img
              className="img-fluid img-thumbnail"
              src="https://media-exp1.licdn.com/dms/image/D4E03AQFth6JTfajRng/profile-displayphoto-shrink_400_400/0/1667513271397?e=1675900800&v=beta&t=ExdIqO_He7nxhcm5fMGj6ihE_bNrnJUJbg4gINNsjcM"
              alt=""
            />
          </div>
          <div className="col-md-2">
            <img
              className="img-fluid img-thumbnail"
              src="https://media-exp1.licdn.com/dms/image/D4E35AQFMHRHT7Ve-WQ/profile-framedphoto-shrink_400_400/0/1667868498208?e=1670968800&v=beta&t=PmCWG_wSYXELf_Nd63_S6M8Ara9Ln230VPKHOcCMWt0"
              width="500"
              height="600"
              alt=""
            />
          </div>
          <div className="col-md-2">
            <img
              className="img-fluid img-thumbnail"
              src="https://media-exp1.licdn.com/dms/image/D4E03AQFwGEVKr77l8Q/profile-displayphoto-shrink_800_800/0/1667520049982?e=1675900800&v=beta&t=fbcyXtcmk63j-tZxdEK7TQWL6u60vYwNr8Urb0yrego"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
