import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const services = [
  { icon: "🔧", title: "Plumbers", text: "Repairs, fittings & emergencies" },
  { icon: "📚", title: "Tutors", text: "School, college & exam support" },
  { icon: "❤️", title: "Caregivers", text: "Trusted care for families" },
  { icon: "⚡", title: "Electricians", text: "Safe electrical work nearby" },
  { icon: "🧹", title: "Home help", text: "Cleaning & everyday support" },
  { icon: "💻", title: "Tech help", text: "Devices, apps & setup" },
];

function Logo() {
  return (
    <div className="logo">
      <div className="logo-mark">⚯</div>
      <span>Likxo <b>Gig</b></span>
    </div>
  );
}

function App() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("Barasat, North 24 Parganas");
  const [notice, setNotice] = useState("");

  const findService = () => {
    setNotice(
      query.trim()
        ? `Searching for ${query} near ${location}…`
        : "Choose a service to search nearby."
    );
  };

  const action = (message) => {
    setNotice(message);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-inner">
          <a className="brand" href="#top" onClick={() => setNotice("")}><Logo /></a>
          <nav>
            <a href="#how">How it works</a>
            <a href="#categories">Categories</a>
            <a href="#about">About</a>
          </nav>
          <div className="nav-actions">
            <button className="language">◎ English <span>⌄</span></button>
            <button className="login" onClick={() => action("Login screen coming next.")}>Log in</button>
            <button className="primary small" onClick={() => action("Welcome! Let's create your cooperative account.")}>
              Get started <span>→</span>
            </button>
          </div>
        </div>
      </header>

      {notice && <div className="notice">{notice}<button onClick={() => setNotice("")}>×</button></div>}

      <main id="top">
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="pill"><span>⚯</span> A cooperative, not a corporation</div>
              <h1>Trusted local help,<br />owned by the<br />community.</h1>
              <p>
                Likxo Gig connects households with plumbers, tutors, caregivers
                and more — as a member-owned cooperative where workers keep a
                fair share and neighbours help neighbours.
              </p>

              <div className="hero-buttons">
                <button className="primary" onClick={() => document.getElementById("categories").scrollIntoView({behavior:"smooth"})}>
                  Find a service <span>→</span>
                </button>
                <button className="secondary" onClick={() => action("Provider registration will open here.")}>
                  Become a provider
                </button>
              </div>

              <div className="trust-row">
                <span>♢ ID &amp; skill verified</span>
                <span>♧ 8% flat co-op fee</span>
                <span className="rating">☆ 4.8 average rating</span>
              </div>
            </div>

            <div className="hero-demo">
              <div className="float-card worker">
                <span>♧</span>
                <div><small>Worker keeps</small><strong>92%</strong></div>
              </div>

              <div className="search-panel">
                <div className="search-box">
                  <div className="search-icon">⌕</div>
                  <div className="search-copy">
                    <small>{location}</small>
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Plumber near me"
                      aria-label="Service search"
                    />
                  </div>
                  <button onClick={findService}>Search</button>
                </div>

                <Provider name="Dr. Alok Roy" initials="AR" distance="Habra · 4.9 km" price="₹460" />
                <Provider name="Nandini Sen" initials="NS" distance="Barasat · 2.4 km" price="₹420" />

                <div className="next-slot">
                  <div>
                    <small>▣ &nbsp; Next slot</small>
                    <strong>Today · 4:00 PM</strong>
                  </div>
                  <button onClick={() => action("Booking selected — Today at 4:00 PM.")}>Book now</button>
                </div>
              </div>

              <div className="float-card verified">
                <span>♢</span>
                <div><small>Verified by</small><strong>Local co-op</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          <Stat icon="♢" number="2,400+" label="Verified providers" />
          <Stat icon="♧" number="18,600+" label="Households served" />
          <Stat icon="⚯" number="64" label="Village co-ops" />
          <Stat icon="♧" number="92%" label="Fair-wage share to workers" />
        </section>

        <section className="categories" id="categories">
          <div className="section-heading">
            <div>
              <h2>Everyday services from people near you</h2>
              <p>Choose a category to see verified cooperative members nearby.</p>
            </div>
            <button className="view-all" onClick={() => action("Showing all service categories.")}>View all →</button>
          </div>
          <div className="service-grid">
            {services.map((s) => (
              <button className="service-card" key={s.title} onClick={() => {
                setQuery(s.title.slice(0, -1));
                setNotice(`${s.title} selected. Search results are ready.`);
              }}>
                <div className="service-icon">{s.icon}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                <span className="arrow">→</span>
              </button>
            ))}
          </div>
        </section>

        <section className="how" id="how">
          <div className="section-label">HOW IT WORKS</div>
          <h2>Local help, without the middleman.</h2>
          <div className="steps">
            <Step n="01" title="Find a verified member" text="Browse trusted cooperative workers in your area." />
            <Step n="02" title="Book & get the job done" text="Agree on the service and schedule directly." />
            <Step n="03" title="Everyone benefits" text="Workers earn fairly and the community grows stronger." />
          </div>
        </section>

        <section className="about" id="about">
          <div>
            <div className="section-label">THE CO-OPERATIVE MODEL</div>
            <h2>Built for the people who use it.</h2>
          </div>
          <p>
            Instead of extracting value from every booking, Likxo Gig keeps the
            platform simple and transparent. Members share ownership, workers
            get a fairer share, and communities help shape the service.
          </p>
        </section>
      </main>

      <footer>
        <Logo />
        <span>© 2026 Likxo Gig · Community-owned local services</span>
      </footer>
    </div>
  );
}

function Provider({name, initials, distance, price}) {
  return (
    <div className="provider">
      <div className="avatar">{initials}<i /></div>
      <div className="provider-info">
        <strong>{name} <em>✓</em></strong>
        <small>{distance}</small>
      </div>
      <div className="provider-right">
        <span className="stars">☆☆☆☆☆</span>
        <strong>{price}</strong>
      </div>
    </div>
  );
}

function Stat({icon, number, label}) {
  return <div className="stat"><div className="stat-icon">{icon}</div><div><strong>{number}</strong><span>{label}</span></div></div>;
}

function Step({n,title,text}) {
  return <div className="step"><span>{n}</span><h3>{title}</h3><p>{text}</p></div>;
}

createRoot(document.getElementById("root")).render(<App />);
