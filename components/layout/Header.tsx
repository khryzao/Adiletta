const instagram = "https://www.instagram.com/nandoadiletta/";

const links = [
  ["Work", "#selected-work"],
  ["Style", "#style"],
  ["About", "#about"],
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" aria-label="Nando Adiletta home">
          NANDO ADILETTA
          <small>TATTOO ARTIST / VISUAL ART</small>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a href={href} key={label}>{label}</a>
          ))}
          <a href="#booking">Contact</a>
        </nav>

        <a className="header-book" href={instagram} target="_blank" rel="noreferrer">
          Book a session ↗
        </a>

        <details className="mobile-nav">
          <summary>Menu +</summary>
          <nav className="mobile-nav-panel" aria-label="Mobile navigation">
            {links.map(([label, href]) => (
              <a href={href} key={label}>{label}</a>
            ))}
            <a href="#booking">Contact</a>
            <a href={instagram} target="_blank" rel="noreferrer">Book a session ↗</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
