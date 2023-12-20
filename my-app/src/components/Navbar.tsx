export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        {" "}
        ProgressPilot
      </a>
      <ul>
        <li>
          <a href="/forum"> Forum</a>
        </li>

        <li>
          <a href="/about"> About</a>
        </li>

        <li>
          <a href="/accout"> Account</a>
        </li>
      </ul>
    </nav>
  );
}
