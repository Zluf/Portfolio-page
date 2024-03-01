import "./style.css";

export default function AnalyticsPage1() {
  return (
    <>
      <div className="colours">
        <a className="websk" href="/">
          web <br />
          sk
        </a>
        <div className="magenta"></div>
        <div className="cyan"></div>
        <div className="white"></div>
      </div>
      <main>
        <form className="login">
          <span>Login</span>
          <label htmlFor="username">Username</label>
          <div className="input-field">
            <input type="text" id="username" name="password" />
            <img
              src="/pages-img/analytics/page1/Group 164.svg"
              alt="MM username icon"
            />
          </div>
          <label htmlFor="password">Password</label>
          <div className="input-field">
            <input type="password" id="password" name="password" />
            <img
              src="/pages-img/analytics/page1/Group 166.svg"
              alt="MM password icon"
            />
          </div>
          <a className="button" href="./page2">
            Login
          </a>
          <a href="#">Lost your password?</a>
        </form>
      </main>
    </>
  );
}
