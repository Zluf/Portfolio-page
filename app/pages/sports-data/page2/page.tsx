import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPlay,
  faSearch,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function SportsDataPage2() {
  return (
    <>
      <div className="layer-1"></div>
      <div className="layer-2">
        <div className="o-wrap">
          <div className="o">
            <div className="sub-o"></div>
          </div>
        </div>
        <div className="o-wrap">
          <div className="o">
            <div className="sub-o"></div>
          </div>
        </div>
      </div>

      <div className="layer-3-container">
        <div className="logo">
          <div className="websk">web.sk</div>
          <img
            src="/pages-img/sports-data/page2/dat-driven-sport.png"
            alt="Data driven sport"
          />
        </div>
        <header>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Articles</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="search-and-login">
            <div className="search-box">
              <input type="text" name="text" placeholder="Search" />
              <a href="#">
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </div>
            <a className="button" href="#">
              Client login
            </a>
          </div>
        </header>
        <div className="thesis">
          <h2>
            We help sports organisations grow relationships with their audiences
            and partners.
          </h2>
          <a className="button" href="#">
            Read our insights
          </a>
        </div>
        <section className="art-con">
          <div className="cont1">
            <div className="black"></div>
            <div className="darkening"></div>
            <div className="win1-text">
              <h3>2018 BT Sport Industry Awards Shortlist</h3>
              <p>
                Everyone at ########### would like to send huge congratulations
                to our clients the AELTC for their shortlisting at this year's
                BT Sport Indusrty Awards.
              </p>
              <a href="#">
                Read More
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
          <div className="cont1">
            <article>
              <h3>Opportunity and threat in sponsorship</h3>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit. Nulla vitae elit libero, a
                pharetra augue.
              </p>
              <div className="banner">
                <img
                  src="/pages-img/sports-data/page2/coat.png"
                  alt="AFC Bournemouth coat of arms"
                />
                <p>AFC Bournemouth</p>
              </div>
              <a href="#">
                Read More
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </article>
            <article>
              <h3>Fusce dapibus, tellus ac cursus commodo, tortor.</h3>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit. Nulla vitae elit libero, a.
              </p>
              <div className="banner">
                <img
                  src="/pages-img/sports-data/page2/cup.png"
                  alt="The Open"
                />
                <p>The Open</p>
              </div>
              <a href="#">
                Read More
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </article>
          </div>
          <div className="cont2">
            <article>
              <h4>UK SPONSORSHIP AWARD FOR TWO CIRCLES</h4>
              <p>Fusce dapibus,tellus ac cursus commodo, tortor.</p>
              <a href="#">
                Find Out More
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </article>
            <article>
              <h5>
                2,367,187
                <FontAwesomeIcon icon={faArrowUp} />
              </h5>
              <p>Fusce dapibus,tellus ac cursus commodo, tortor.</p>
              <a href="#">
                Find Out More
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </article>
          </div>
          <div className="cont2">
            <div className="black"></div>
            <div className="darkening"></div>
            <div className="welcome">
              <h3>
                Welcome to <br /> ###########
              </h3>
              <a href="#">
                <i className="fa fa-play" aria-hidden="true"></i>Play Video
              </a>
              <p>2:34</p>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <div className="addresses">
          <address>
            <h6>London</h6>
            <p>00 ####### Street</p>
            <p>London, ABC1D 2EF</p>
          </address>
          <address>
            <h6>Bern</h6>
            <p>##### #########</p>
            <p>0000 Bern, Switzerland</p>
          </address>
          <address>
            <h6>New York</h6>
            <p>000 #######, New York</p>
            <p>NY 00000, USA</p>
          </address>
        </div>
        <div className="footer-right">
          <div className="copyright">
            <div className="cr-top">
              <p>© 2021, ###########. All Rights Reserved. </p>
              <a href="#">Privacy Policy</a>
            </div>
            <div className="cr-bottom">
              <p>info@################.com</p>
              <p>+44 123 12345678</p>
              <p>+41 12 345 67 89</p>
            </div>
          </div>
          <div className="language">
            <nav>
              <a href="#">
                <img src="/pages-img/sports-data/page2/de.png" alt="" />
                Ger
              </a>
              <a href="#">
                <img src="/pages-img/sports-data/page2/it.png" alt="" />
                Ita
              </a>
              <a href="#">
                <img src="/pages-img/sports-data/page2/fr.png" alt="" />
                <p>Fr</p>
              </a>
              <a href="#">
                <img src="/pages-img/sports-data/page2/uk.png" alt="" />
                GB
              </a>
            </nav>
          </div>
          <nav className="social-media">
            <a href="#">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
