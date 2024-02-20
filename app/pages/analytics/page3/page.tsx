import "./style.css";

export default function AnalyticsPage3() {
  return (
    <>
      <nav>
        <ul>
          <a href="/" className="websk">
            web <br />
            sk
          </a>
          <a href="./page2">
            <img src="/pages-img/analytics/page3/Group 487.svg" alt="menu" />
          </a>
          <a href="#">
            <img
              src="/pages-img/analytics/page3/Group 470.svg"
              alt="schedule"
            />
          </a>
        </ul>
        <a href="./page1">
          <img
            src="/pages-img/analytics/page3/Component 2 – 1.svg"
            alt="exit"
          />
        </a>
      </nav>
      <section>
        <div className="presentations">
          <a href="#" className="brgr-menu-box">
            <div className="brgr-menu"></div>
          </a>
          <h2>Analytics Dashboard</h2>
        </div>
        <ul>
          <li>
            <div className="gauge-box">
              <div className="gauge-fill"></div>
              <div className="percentage">
                <h3>65%</h3>
              </div>
            </div>
            <article>
              <h4>Average Engagement Score</h4>
              <p>
                Benchmark score: <span>75%</span>
              </p>
              <p>
                8 out of 15 presentations score below the desired benchmark.
              </p>
              <p>
                Click on one of the presentations below to review the feedback
                and improve the score.
              </p>
            </article>
          </li>
          <li>
            <div className="gauge-box">
              <div className="gauge-fill"></div>
              <div className="percentage">
                <h3>80%</h3>
              </div>
            </div>
            <article>
              <h4>Average Engagement Score</h4>
              <p>
                Benchmark score: <span>80%</span>
              </p>
              <p>
                3 out of 15 presentations score below the desired benchmark.
              </p>
              <p>
                Click on one of the presentations below to review the feedback
                and improve the score.
              </p>
            </article>
          </li>
          <li>
            <div className="li-header">
              <h5>
                Filter <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </h5>
              <div className="button-titles">
                <h5>Employment Score</h5>
                <h5>Accessibility Score</h5>
              </div>
            </div>
            <div className="title">
              <div className="text">
                <h3>Linear regression with one variable</h3>
                <p>Author: Alan Smithee</p>
              </div>
              <div className="buttons">
                <a href="#" className="red-button">
                  35%
                </a>
                <a href="#" className="green-button">
                  90%
                </a>
                <a href="#" className="review-button">
                  Review
                </a>
              </div>
            </div>
            <div className="title">
              <div className="text">
                <h3>
                  Blockchain for Industry - Part 4 Wider Industry Applications
                </h3>
                <p>Author: Alan Smithee</p>
              </div>
              <div className="buttons">
                <a href="#" className="amber-button">
                  65%
                </a>
                <a href="#" className="green-button">
                  80%
                </a>
                <a href="#" className="review-button">
                  Review
                </a>
              </div>
            </div>
            <div className="title">
              <div className="text">
                <h3>Blockchain for Industry - Part 5 Future of Blockchain</h3>
                <p>Author: Alan Smithee</p>
              </div>
              <div className="buttons">
                <a href="#" className="green-button">
                  80%
                </a>
                <a href="#" className="green-button">
                  80%
                </a>
                <a href="#" className="review-button">
                  Review
                </a>
              </div>
            </div>
            <div className="title">
              <div className="text">
                <h3>
                  Blockchain for Industry - Part 3 Blockchain for Financial
                  Services
                </h3>
                <p>Author: Alan Smithee</p>
              </div>
              <div className="buttons">
                <a href="#" className="amber-button">
                  54%
                </a>
                <a href="#" className="green-button">
                  70%
                </a>
                <a href="#" className="review-button">
                  Review
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
