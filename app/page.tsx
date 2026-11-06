const instagram = "https://www.instagram.com/nandoadiletta/";

const works = [
  {
    number: "01",
    title: "Blackwork",
    detail: "Bold forms · Deep contrast",
    image:
      "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1100&q=85",
    alt: "Close-up of detailed black ink tattoo work",
    className: "work-card--blackwork",
  },
  {
    number: "02",
    title: "Fine line",
    detail: "Quiet details · Delicate lines",
    image:
      "https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&w=1100&q=85",
    alt: "Fine line tattoo detail",
    className: "work-card--fineline",
  },
  {
    number: "03",
    title: "Custom pieces",
    detail: "Personal stories · Made to last",
    image:
      "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?auto=format&fit=crop&w=1100&q=85",
    alt: "Artist creating a custom tattoo",
    className: "work-card--custom",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-content page-shell">
          <p className="eyebrow hero-eyebrow">Independent tattoo artist · Available for bookings</p>
          <h1>
            Art that
            <br />
            stays <em>with you.</em>
          </h1>
          <div className="hero-bottom">
            <p className="hero-intro">
              Thoughtful tattoos, personal stories and a lifelong connection
              between art and skin.
            </p>
            <a className="circle-link" href="#selected-work" aria-label="Explore selected work">
              <span>Explore<br />the work</span>
              <span className="circle-arrow" aria-hidden="true">↘</span>
            </a>
          </div>
          <span className="hero-index">Nº 001 — PORTFOLIO</span>
        </div>
        <div className="hero-side-note">NANDO ADILETTA / TATTOO & ART</div>
      </section>

      <section className="intro-strip">
        <div className="page-shell intro-strip-inner">
          <span className="eyebrow">The practice</span>
          <p>
            A personal approach to tattooing. <span>Considered design.</span> Honest
            expression. Art made to become part of you.
          </p>
        </div>
      </section>

      <section className="section work-section page-shell" id="selected-work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Portfolio</p>
            <h2>Selected <em>work.</em></h2>
          </div>
          <p className="section-aside">
            Every piece begins with a conversation and ends with something
            uniquely yours.
          </p>
        </div>

        <div className="work-grid">
          {works.map((work) => (
            <a
              className={`work-card ${work.className}`}
              href={instagram}
              target="_blank"
              rel="noreferrer"
              key={work.number}
            >
              <div
                className="work-image"
                role="img"
                aria-label={work.alt}
                style={{ backgroundImage: `url("${work.image}")` }}
              />
              <div className="work-card-overlay" />
              <span className="work-number">{work.number}</span>
              <div className="work-card-caption">
                <div>
                  <h3>{work.title}</h3>
                  <p>{work.detail}</p>
                </div>
                <span className="work-arrow" aria-hidden="true">↗</span>
              </div>
            </a>
          ))}
        </div>
        <div className="center-link-wrap">
          <a className="text-link" href={instagram} target="_blank" rel="noreferrer">
            View more on Instagram <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="styles-section" id="style">
        <div className="page-shell styles-layout">
          <div className="styles-heading">
            <p className="eyebrow">02 / Approach</p>
            <h2>Made with<br /><em>intention.</em></h2>
            <p>
              From a small, subtle mark to a larger statement piece, the goal
              is always the same: create work that feels personal and
              considered.
            </p>
            <a className="text-link" href={instagram} target="_blank" rel="noreferrer">
              Discuss your idea <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="style-list">
            <a href={instagram} target="_blank" rel="noreferrer" className="style-row">
              <span className="style-row-number">01</span>
              <span className="style-row-title">Blackwork</span>
              <span className="style-row-note">Contrast / Form</span>
              <span className="style-row-arrow">↗</span>
            </a>
            <a href={instagram} target="_blank" rel="noreferrer" className="style-row">
              <span className="style-row-number">02</span>
              <span className="style-row-title">Fine line</span>
              <span className="style-row-note">Precision / Detail</span>
              <span className="style-row-arrow">↗</span>
            </a>
            <a href={instagram} target="_blank" rel="noreferrer" className="style-row">
              <span className="style-row-number">03</span>
              <span className="style-row-title">Illustrative</span>
              <span className="style-row-note">Drawing / Story</span>
              <span className="style-row-arrow">↗</span>
            </a>
            <a href={instagram} target="_blank" rel="noreferrer" className="style-row">
              <span className="style-row-number">04</span>
              <span className="style-row-title">Custom work</span>
              <span className="style-row-note">Personal / Original</span>
              <span className="style-row-arrow">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="about-section page-shell" id="about">
        <div className="about-image-wrap">
          <div
            className="about-image"
            role="img"
            aria-label="Atmospheric tattoo studio detail"
          />
          <span className="image-caption">THE ARTIST'S PROCESS / 2026</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">03 / The artist</p>
          <h2>More than<br />ink on <em>skin.</em></h2>
          <p>
            Tattooing is a collaboration. It is about listening, exploring an
            idea and translating it into an image that belongs to you.
          </p>
          <p>
            Nando Adiletta works across tattoo, style and visual art, bringing
            a distinctive creative perspective to every project.
          </p>
          <a className="text-link" href={instagram} target="_blank" rel="noreferrer">
            Follow the process <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="booking-section" id="booking">
        <div className="booking-bg" aria-hidden="true" />
        <div className="page-shell booking-content">
          <p className="eyebrow">04 / Start a project</p>
          <h2>Your idea.<br /><em>Let's make it real.</em></h2>
          <p>
            Have an idea in mind? Get in touch to discuss your concept and
            enquire about a tattoo session.
          </p>
          <a className="button-link" href={instagram} target="_blank" rel="noreferrer">
            Enquire about a session <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
