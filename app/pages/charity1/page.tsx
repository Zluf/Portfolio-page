import "./style.css";
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

const Location: React.FC<{ src: string }> = ({ src }) => (
  <li>
    <img src={src} alt="#### Hostel" />
    <h3>#### Hostel</h3>
    <div className="contact">
      <address>#### House, ##### Place ###### AB12 3CD</address>
      <a href="tel.:0123 456 789">0123 456 789</a>
      <p>Alan Smithee</p>
      <a href="email:alansmithee@sampledomain.org">
        alansmithee@sampledomain.org
      </a>
    </div>
    <a href="#">
      <button type="button" name="button">
        Discover more
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </a>
  </li>
);

export default function Charity1() {
  return (
    <>
      <header>
        <img
          className="man-reading"
          src="/pages-img/charity1/man-reading.png"
          alt="man-reading.png"
        />

        <nav>
          <div className="logo-and-list">
            <a href="/" className="logo">
              web.sk
            </a>
            <ul>
              <li>
                <a href="#">What We Do</a>
              </li>
              <li>
                <a href="#">Who We Are</a>
              </li>
              <li>
                <a href="#">Who We Help</a>
              </li>
              <li>
                <a href="#">Get Involved</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <button type="button" className="button" name="button">
            Donate Now
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </nav>
      </header>

      <section>
        <div className="container">
          <h2>Accomodation</h2>
          <p>We believe that everyone should have a safe place to stay.</p>
          <div className="explore-and-watch">
            <a href="#">
              <button type="button" name="button">
                Explore <FontAwesomeIcon icon={faArrowDown} />
              </button>
            </a>
            <a href="#">
              <button className="circle-button" type="button" name="button">
                <FontAwesomeIcon icon={faPlay} />
              </button>
              <p>Watch our video</p>
            </a>
          </div>

          <ul>
            <Location src={"/pages-img/charity1/./room-1.png"} />
            <Location src={"/pages-img/charity1/./room-2.png"} />
            <Location src={"/pages-img/charity1/./room-3.png"} />
            <Location src={"/pages-img/charity1/./room-4.png"} />
            <Location src={"/pages-img/charity1/./room-5.png"} />
            <Location src={"/pages-img/charity1/./room-6.png"} />
          </ul>
        </div>
        {/* <div>
          <div style={{ background: "red" }}>fdsfsdfsfsd</div>
        </div> */}

        <a className="play-video-container" href="#">
          <div className="play-video">
            <img
              src="/pages-img/charity1/cafe.png"
              alt="two people in a cafe"
            />
            <div className="play-button">
              <button type="button" name="button">
                <FontAwesomeIcon icon={faPlay} />
              </button>
            </div>
          </div>
        </a>

        <div className="what-we-do">
          <p>What we do</p>
          <h2>
            We run three hostels across Hertfordshire and Buckinghamshire which
            provide over 400 rooms
          </h2>
          <a href="#">
            <button type="button" name="button">
              Volunteer
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </a>
        </div>

        <div className="our-stories">
          <img
            src="/pages-img/charity1/our-stories.png"
            alt="man facing camera"
          />
          <div className="rectangle-layer">
            <img
              src="/pages-img/charity1/empty-rectangle.png"
              alt="semi-transparent layer"
            />
          </div>
          <div className="triangle-layer-1">
            <img
              src="/pages-img/charity1/empty-rectangle.png"
              alt="semi-transparent layer"
            />
          </div>
          <div className="triangle-layer-2">
            <img
              src="/pages-img/charity1/empty-rectangle.png"
              alt="semi-transparent layer"
            />
          </div>
          <div className="story-example">
            <p>Our Stories</p>
            <h3>
              Adrian moved into YMCA as an under 18’s placement two years ago
              from Hertfordshire County Council.
            </h3>
            <a href="#">
              <button type="button" name="button">
                Read Story <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </a>
          </div>
        </div>
      </section>
      <footer className="container">
        <div className="navigation">
          <nav>
            <h4>
              <a href="#">ABC Charity</a>
            </h4>
            <br />
            <address>
              ABC House, ABC Street <br />
              ABC Town, ABC County, AB12 3CD
            </address>
            <br />
            <a className="get-directions" href="#">
              Get Directions
              <FontAwesomeIcon icon={faCircleRight} />
            </a>
          </nav>
          <nav>
            <h4>About</h4>
            <br />
            <a href="#">What We Do</a>
            <br />
            <a href="#">Who We Are</a>
            <br />
            <a href="#">Who We Help</a>
            <br />
            <a href="#">Contact Us</a>
            <br />
          </nav>
          <nav>
            <h4>Get Involved</h4>
            <br />
            <a href="#">COVID-19 Appeal</a>
            <br />
            <a href="#">Volunteer</a>
            <br />
            <a href="#">Work For Us</a>
            <br />
          </nav>
          <nav>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <br />
            <a href="#">
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
            <br />
            <a href="#">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <br />
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <br />
          </nav>
          <a href="#">
            <img
              src="/pages-img/charity1/fr-fundraising.png"
              alt="FR Fundraising"
            />
          </a>
        </div>
        <p>Registered Company No: 1234567 Charity No: 1234567 HCA No:A12345</p>
        <p>© 2020 ABC Charity</p>
        <div className="lower-footer">
          <div className="logo">web.sk</div>
          <p>
            YMCA enables people to develop their full potential in mind, body
            and spirit. Inspired by, and faithful to, our Christian values, we
            create supportive, inclusive and energising communities, where young
            people can truly belong, contribute and thrive.
          </p>
        </div>
      </footer>
      <div className="bottom-links">
        <a href="#">Support & Advice</a>
        <a href="#">Accomodation</a>
        <a href="#">Family Work</a>
        <a href="#">Health & Wellbeing</a>
        <a href="#">Training & Education</a>
      </div>
    </>
  );
}
