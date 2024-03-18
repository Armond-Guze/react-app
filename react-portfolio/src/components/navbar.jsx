export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Armond Guze
      </a>
      <ul>
        <li><a href="/about-me">About Me</a></li>
        <li><a href="/resume">Resume</a></li>
        <li><a href="/contact-page">Contact Page</a></li>
        <li><a href="/github">Github</a></li>
      </ul>
    </nav>
  );
}
