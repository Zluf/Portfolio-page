import PortfolioEntry from "./PortfolioEntry";
import classes from "./Portfolio.module.scss";
import "@/styles/portfolio.scss";

export default function Portfolio() {
  return (
    <section className={classes.portfolio}>
      <h2>Personal Projects</h2>
      <p>
        Web applications developed from my own concepts to address challenges
        within personal commitments or everyday routines.
      </p>

      {/* 🎌 PAGE: Precision Gym */}
      <PortfolioEntry
        title="Gym Tracker App"
        links={{
          href: ["https://precision-gym.netlify.app/"],
          github: "https://github.com/Zluf/precision-gym-app-react",
        }}
        skills={["ReactJS", "Firebase", "Database", "CSS"]}
        img={{
          src: ["img/precision-gym.png"],
          alt: "screenshot precision-gym app",
        }}
        description="A front-end application enabling users to monitor their gym progress by entering pertinent data. Conceived during workout sessions, this app was developed to facilitate tracking and improvement."
        bulletpoints={[
          "User Input",
          "Data manipulation",
          "Storing and Fetching Database",
          "User Account Authentication",
        ]}
      />

      <h2>Custom Web Pages</h2>
      <p>
        Web applications and pages crafted using mock-ups and assets sourced
        from frontendmentor.io to hone and enhance my skills through practice.
      </p>

      {/* 🎌 PAGE: Tic Tac Toe  */}
      <PortfolioEntry
        title="Tic Tac Toe"
        links={{
          href: ["https://tic-tac-toe-by-slavk.netlify.app/"],
          github: "https://github.com/Zluf/tic-tac-toe",
        }}
        skills={["ReactJS", "Vite", "CSS", "Animations"]}
        img={{
          src: ["img/tic-tac-toe.png"],
          alt: "screenshot tic tac toe game",
        }}
        description="Tic Tac Toe game built with ReactJS Functional Components with Vite build tool."
        bulletpoints={[
          "Animation sequences for Xs, Os and crossing out winning combination",
          "Score that gets updated",
          "Tie result",
          "Hover states for the current player's move",
          "Color harmony generated by Adobe Color Wheel",
        ]}
      />

      {/* 🎌 PAGE:E-Commerce  */}
      <PortfolioEntry
        title="E-Commerce Page"
        links={{
          href: ["/pages/e-commerce-page/"],
          github: "https://github.com/Zluf/e-commerce-app",
        }}
        skills={["ReactJS", "CSS", "Desktop", "Mobile"]}
        img={{
          src: ["img/e-commerce-page.png"],
          alt: "screenshot product page for an e-commerce company",
        }}
        description="E-Commerce product page built with ReactJS Functional
            Components."
        bulletpoints={[
          "Optimal layout for desktop, tablet and mobile devices",
          "Hover states for interactive elements on the page",
          "Clicking on the large product image opens a lightbox gallery",
          "Clicking on the small thumbnail images switches the largeproduct page",
          "Set product quantity can be added to the cart",
          "The cart can be viewed and emptied",
        ]}
      />

      {/* 🎌 PAGE: Advice Generator  */}
      <PortfolioEntry
        title="Advice Generator App"
        links={{
          href: ["/pages/advice-generator-app/"],
          github: "https://github.com/Zluf/advise-generator-app/",
        }}
        skills={["HTML", "CSS", "JavaScript", "API", "Desktop", "Mobile"]}
        img={{
          src: ["img/advice.png"],
          alt: "screenshot app that generates text from API",
        }}
        description="An app that generates random advice text from an external API."
        bulletpoints={[
          "Optimal layout for desktop and mobile devices",
          "Hover states for interactive elements on the page",
          "Clicking the button generates a new piece of advice",
        ]}
      />

      <h2>Private Tutoring Projects</h2>
      <p>
        Web pages created based on mock-ups and assets supplied by Tom Parson
        during private tutoring sessions on Front End Development. These
        projects feature unique designs by Huddle Digital for real-life
        scenarios. To maintain confidentiality, any client names and specifics
        have been altered.
      </p>

      {/* 🎌 PAGE: Interior Design  */}
      <PortfolioEntry
        title="Interior Design Landing page"
        links={{
          href: ["/pages/interior/"],
          github: "https://github.com/Zluf/Interiors-page",
        }}
        skills={["HTML", "Sass", "Desktop", "Mobile"]}
        img={{
          src: ["img/interior.png"],
          alt: "screenshot landing page for an interior design service",
        }}
      />

      {/* 🎌 PAGE: Charity 2  */}
      <PortfolioEntry
        title="Charity page 2"
        links={{
          href: ["/pages/charity2/"],
          github: "https://github.com/Zluf/Charity-page-2",
        }}
        skills={["HTML", "Sass", "JavaScript", "Desktop"]}
        img={{
          src: ["img/charity2.png"],
          alt: "screenshot homepage for a charity",
        }}
      />

      {/* 🎌 PAGE: Analytics  */}
      <PortfolioEntry
        title="Analytics page"
        links={{
          href: [
            "/pages/analytics/page1",
            "/pages/analytics/page2",
            "/pages/analytics/page3",
          ],
          github: "https://github.com/Zluf/Analytics-page",
        }}
        skills={["HTML", "CSS", "Desktop", " Mobile"]}
        img={{
          src: [
            "img/analytics-1.png",
            "img/analytics-2.png",
            "img/analytics-3.png",
          ],
          alt: "screenshot login page for an analytics service",
        }}
      />

      {/* 🎌 PAGE: Sports Data  */}
      <PortfolioEntry
        title="Sports Data page"
        links={{
          href: ["/pages/sports-data/", "/pages/sports-data/page2"],
          github: "https://github.com/Zluf/Sports-data-page",
        }}
        skills={["HTML", "CSS", "Desktop"]}
        img={{
          src: ["img/sports-1.png", "img/sports-2.png"],
          alt: "screenshot a sports analytics page",
        }}
      />

      {/* 🎌 PAGE: Debt Solutions  */}
      <PortfolioEntry
        title="Debt Solutions page"
        links={{
          href: ["/pages/debt-solutions", "/pages/debt-solutions/page2"],
          github: "https://github.com/Zluf/Debt-Solutions-page",
        }}
        skills={["HTML", "CSS", "Desktop", " Mobile"]}
        img={{
          src: ["img/debt-1.png", "img/debt-2.png"],
          alt: "screenshot page for a debt solutions service",
        }}
      />

      {/* 🎌 PAGE: Charity 1  */}
      <PortfolioEntry
        title="Charity page 1"
        links={{
          href: ["/pages/charity1/"],
          github: "https://github.com/Zluf/Charity-page-1",
        }}
        skills={["HTML", "CSS", "Desktop"]}
        img={{
          src: ["img/charity1.png"],
          alt: "screenshot page for a charity organization",
        }}
      />
    </section>
  );
}
