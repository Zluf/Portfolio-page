export default function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="#hero">
        <img src="img/sk-logo.png" alt="Slav Konovalov SK logo" />
      </a>
      <nav>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
      </nav>
    </header>
  );
}
