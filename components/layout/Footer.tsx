const instagram = "https://www.instagram.com/nandoadiletta/";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <a className="brand" href="#home">
          NANDO ADILETTA
          <small>TATTOO ARTIST / VISUAL ART</small>
        </a>
        <p className="footer-copy">© {new Date().getFullYear()} Nando Adiletta. All rights reserved.</p>
        <div className="footer-social">
          <a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
