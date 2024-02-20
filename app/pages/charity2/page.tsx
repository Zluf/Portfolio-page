"use client";
import "./styles/style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-regular-svg-icons/faCircleRight";
import {
  faArrowRight,
  faArrowDown,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faTwitter,
  faSquareFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { SetStateAction, useState } from "react";

export default function Charity2() {
  const [dropDown, setDropDown] = useState<boolean[]>(new Array(3).fill(false));
  const [volunteerDropDown, setVolunteerDropDown] = useState(false);
  const [selectVolunteer, setSelectVolunteer] = useState<null | number>(null);

  const dropDownHandler = (index: number) => {
    setDropDown((prevDropDown) => {
      let newDropDown = [...prevDropDown];
      newDropDown[index] = !newDropDown[index];
      console.log(newDropDown);
      return newDropDown;
    });
  };

  const volunteerDropDownHandler = () => {
    setVolunteerDropDown(!volunteerDropDown);
    setSelectVolunteer(null);
  };

  const selectVolunteerHandler = (option: number) => {
    setSelectVolunteer(option);
    setVolunteerDropDown(!volunteerDropDown);
  };

  return (
    <>
      <header>
        <nav className="flex flex-jc-sb flex-ai-c">
          <a href="/" className="logo">
            web.sk
          </a>

          <ul className="flex">
            <a href="">What We Do</a>
            <a href="">Who We Are</a>
            <a href="">Who We Help</a>
            <a href="">Get Involved</a>
            <a className="scroll-to-forms">Contact Us</a>
          </ul>

          <a href="" className="button flex flex-ai-c">
            Donate Now
          </a>
        </nav>

        <div className="title container">
          <h1>Family Work Volunteering</h1>

          <div className="header__buttons flex flex-jc-sb">
            <a className="button flex flex-ai-c scroll-to-forms">Contact us</a>
            <a href="">
              <div>
                <FontAwesomeIcon icon={faPlay} />
              </div>
              Watch our video
            </a>
          </div>
        </div>

        <div className="triangle"></div>
      </header>

      <section>
        <article className="container">
          <p>
            Last year we provided 127,200 safe nights sleep to people
            experiencing homelessness and helped 263 people move into their new
            home. Our volunteer team support people to learn new skills, regain
            a sense of personal value and get ready to live independently.
          </p>

          <p>
            ‘The #### Volunteers were amazing and they helped me write a CV and
            get it uploaded to some websites. I was a bit worried, because I
            only ever had a part time job before, but they kept telling me I
            could do it, and I started to get my confidence back’ <br />
            <br />
            Brian – Chaplaincy Volunteer
          </p>
        </article>

        <div className="video-link">
          <img
            src="/pages-img/charity2/images/joshua-rodriguez-I1fxrsarwZM-unsplash.png"
            alt="mother and child"
          />
          <a className="play-video flex flex-jc-c flex-ai-c">
            <FontAwesomeIcon icon={faPlay} />
          </a>
        </div>

        <div className="current-roles container">
          <h2>Current roles</h2>
          <ul>
            <li>
              <span>Café Host</span>
              <button
                onClick={dropDownHandler.bind(null, 0)}
                className="pop-down-trigger-1"
              >
                <span
                  className={`vert-1 ${dropDown[0] ? "" : "vert-on"}`}
                ></span>
                <span className="hor"></span>
              </button>
            </li>
            <div className={`pop-down-1 ${dropDown[0] ? "popped-down" : ""}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              magni quo reiciendis fugit, corporis vitae error maiores modi
              architecto provident, est nemo dicta accusamus autem.
            </div>

            <li>
              <span>Activity Leader or Activity Assistant</span>
              <button
                onClick={dropDownHandler.bind(null, 1)}
                className="pop-down-trigger-2"
              >
                <span
                  className={`vert-2 ${dropDown[1] ? "" : "vert-on"}`}
                ></span>
                <span className="hor"></span>
              </button>
            </li>
            <div className={`pop-down-2 ${dropDown[1] ? "popped-down" : ""}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              magni quo reiciendis fugit, corporis vitae error maiores modi
              architecto provident, est nemo dicta accusamus autem.
            </div>

            <li>
              <span>Resettlement – Supporting Residents as they move out</span>
              <button
                onClick={dropDownHandler.bind(null, 2)}
                className="pop-down-trigger-3"
              >
                <span
                  className={`vert-3 ${dropDown[2] ? "" : "vert-on"}`}
                ></span>
                <span className="hor"></span>
              </button>
            </li>
            <div className={`pop-down-3 ${dropDown[2] ? "popped-down" : ""}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              magni quo reiciendis fugit, corporis vitae error maiores modi
              architecto provident, est nemo dicta accusamus autem.
            </div>
          </ul>
        </div>

        <div className="forms-container flex flex-jc-c">
          <div className="forms">
            <h2>Enquiry to volunteer with us</h2>
            <span>I would like to volunteer with</span>

            <div
              onClick={volunteerDropDownHandler}
              className="selected"
              style={{ transform: volunteerDropDown ? "rotateX(180deg)" : "" }}
            >
              {selectVolunteer}
            </div>

            <div
              className={`options-container${
                volunteerDropDown ? " active" : ""
              }`}
            >
              {new Array(10).fill(null).map((_, i) => (
                <div key={i + 1} className={`option ${i + 1}`}>
                  <input
                    type="radio"
                    className="radio"
                    id={`${i + 1}`}
                    name="category"
                  />
                  <label
                    onClick={selectVolunteerHandler.bind(null, i + 1)}
                    htmlFor={`${i + 1}`}
                  >
                    {i + 1}
                  </label>
                </div>
              ))}
            </div>

            <label htmlFor="name">Name</label>
            <input type="text" id="name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" />

            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" />

            <label htmlFor="info">
              Anything you would like to ask or tell us?
            </label>
            <textarea id="info"></textarea>

            <div className="checkbox">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">
                I have read and understand the Privacy Policy*
              </label>
            </div>

            <a href="" className="button flex flex-ai-c">
              <div>Submit Now</div>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="row-1-2 container">
          <div className="row-1 flex flex-jc-sb">
            <nav className="col-1">
              <h3>ABC Charity</h3>
              <address>
                ######## House, ######## Place <br />
                ######, #########, AB12 3CD
              </address>
              <a href="">
                <p>Get Directions</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </nav>

            <nav className="col-2">
              <h3>About</h3>
              <a href="">What We Do</a>
              <a href="">Who We Are</a>
              <a href="">Who We Help</a>
              <a className="scroll-to-forms">Contact Us</a>
            </nav>

            <nav className="col-3">
              <h3>Get Involved</h3>
              <a href="">COVID-19 Appeal</a>
              <a href="">Volunteer</a>
              <a href="">Work For Us</a>
            </nav>

            <nav className="col-4">
              <a href="">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faSquareFacebook} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </nav>

            <nav className="col-5">
              <img
                src="/pages-img/charity2/images/5e73658b6dd39c12f3108581_FR Fundraising Badge WO HR.png"
                alt="FR Fundraising Badge"
              />
            </nav>
          </div>

          <div className="row-2 flex flex-jc-sb">
            <span>
              Registered Company No: 0000000 Charity No: 0000000 HCA No:00000
            </span>
            <span>© 2021 ####</span>
          </div>
        </div>

        <div className="row-3">
          <div className="container flex flex-ai-c">
            <div className="logo">web.sk</div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              exercitationem distinctio ipsum esse animi, ut sunt. Perferendis
              molestiae consectetur expedita saepe minus libero. Reprehenderit
              atque magni consequatur quasi culpa consequuntur!
            </span>
          </div>
        </div>

        <div className="row-4 flex">
          <a href="#">Support & Advice</a>
          <a href="#">Accomodation</a>
          <a href="#">Family Work</a>
          <a href="#">Health & Education</a>
          <a href="#">Training & Education</a>
        </div>
      </footer>
    </>
  );
}
