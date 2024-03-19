import "./style.css";

const Pres: React.FC<{ [key: string]: string }> = ({
  entryTitle,
  entryAuthor,
}) => (
  <li>
    <div className="title">
      <p>13 Nov 2020</p>
      <h3>{entryTitle}</h3>
      <p>Author: {entryAuthor}</p>
    </div>
    <nav>
      <a className="button" href="#">
        Pending
      </a>
      <ul>
        <a href="#">
          <img src="/pages-img/analytics/page2/Group 294.svg" alt="bin" />
        </a>
        <a href="#">
          <img src="/pages-img/analytics/page2/Group 161.svg" alt="eye" />
        </a>
        <a href="#">
          <img src="/pages-img/analytics/page2/Group 159.svg" alt="write" />
        </a>
      </ul>
    </nav>
  </li>
);

export default function AnalyticsPage2() {
  return (
    <>
      {/* <nav>
        <a href="/" className="websk">
          web <br />
          sk
        </a>
        <a href="#">
          <img src="/pages-img/analytics/page2/Group 487.svg" alt="menu" />
        </a>
        <a href="./page3">
          <img src="/pages-img/analytics/page2/Group 470.svg" alt="schedule" />
        </a>
        <a href="./page1">
          <img
            src="/pages-img/analytics/page2/Component 2 – 1.svg"
            alt="exit"
          />
        </a>
      </nav>
      <section>
        <div className="presentations">
          <div className="brgr-menu"></div>
          <h2>Presentations.</h2>
        </div>
        <nav className="container">
          <a className="button" href="">
            Add New
          </a>
          <ul>
            <a className="button" href="#">
              All
            </a>
            <a className="button" href="#">
              Draft
            </a>
            <a className="button" href="#">
              Published
            </a>
            <a className="button" href="#">
              Pending
            </a>
          </ul>
        </nav>
        <ul className="container">
          <Pres
            entryTitle="Linear regression with one variable"
            entryAuthor="Alan Smithee"
          />
          <Pres
            entryTitle="Blockchain for Industry - Part 4 - Wider Industry Applications"
            entryAuthor="Alan Smithee"
          />
          <Pres
            entryTitle="Blockchain for Industry - Part 5 - Future of Blockchain"
            entryAuthor="Alan Smithee"
          />
          <Pres
            entryTitle="Blockchain for Industry - Part 3 - Blockchain for Financial
            Services"
            entryAuthor="Alan Smithee"
          />
          <Pres
            entryTitle="Blockchain for Industry - Part 2 - Understanding Blockchain
            Technology"
            entryAuthor="Alan Smithee"
          />
          <Pres
            entryTitle="BlockChain for Industry Part 1 - Introduction to Blockchain"
            entryAuthor="Alan Smithee"
          />
          <Pres
            entryTitle="Session 5: Financial Crises and the Future"
            entryAuthor="Alan Smithee"
          />
          <Pres
            entryTitle="Session 2: The Regulation of Financial Services"
            entryAuthor="Alan Smithee"
          />

          {new Array(4).fill(
            <Pres
              entryTitle="Linear regression with one variable"
              entryAuthor="Alan Smithee"
            />
          )}
        </ul>
        <div className="shadow"></div>
      </section> */}
    </>
  );
}
