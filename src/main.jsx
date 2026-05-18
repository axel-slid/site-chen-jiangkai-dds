import React from "react";
import { createRoot } from "react-dom/client";
import {
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Clock,
  ExternalLink,
  MapPin,
  Navigation,
  Phone,
  SearchCheck,
  ShieldCheck,
  Star,
} from "lucide-react";
import "./styles.css";

const lead = {
  name: "Chen Jiangkai DDS",
  alternateName: "Jiangkai Chen DDS",
  category: "Dentist",
  phone: "(408) 956-0188",
  phoneHref: "tel:+14089560188",
  address: "430 E Calaveras Blvd, Milpitas, CA 95035",
  shortAddress: "430 E Calaveras Blvd",
  city: "Milpitas, CA 95035",
  rating: "4.7",
  reviewCount: "20",
  hours: "Tue-Sat, 9:00 AM-6:00 PM",
  hoursNote: "Directory-listed hours; call the office to confirm the current schedule.",
  googleMaps:
    "https://maps.google.com/?cid=7530102369688820757&g_mp=Cilnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaE5lYXJieRACGAQgAA",
  yelp: "https://www.yelp.com/biz/jiangkai-chen-dds-milpitas",
};

const editableServices = [
  {
    title: "Preventive visits",
    detail: "Editable placeholder: exams, cleanings, X-rays, and routine checkups.",
  },
  {
    title: "Restorative dentistry",
    detail: "Editable placeholder: fillings, crowns, bridges, and repair visits.",
  },
  {
    title: "Smile-focused care",
    detail: "Editable placeholder: cosmetic options, whitening, and implant consults.",
  },
  {
    title: "Urgent dental needs",
    detail: "Editable placeholder: tooth pain, broken teeth, and same-week availability.",
  },
];

const trustItems = [
  {
    icon: Star,
    label: "Google rating",
    value: `${lead.rating} stars`,
    detail: `${lead.reviewCount} public reviews`,
  },
  {
    icon: Phone,
    label: "Fastest action",
    value: lead.phone,
    detail: "Tap to call from mobile",
  },
  {
    icon: MapPin,
    label: "Milpitas office",
    value: lead.shortAddress,
    detail: lead.city,
  },
  {
    icon: SearchCheck,
    label: "Website gap",
    value: "No site listed",
    detail: "Google profile shows no website",
  },
];

function App() {
  return (
    <>
      <div className="topline">
        <span>Website preview for a Milpitas dental office</span>
        <a href={lead.phoneHref} aria-label={`Call ${lead.name}`}>
          <Phone size={16} aria-hidden="true" />
          {lead.phone}
        </a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${lead.name} home`}>
          <span className="brand-mark">CJ</span>
          <span>
            <strong>{lead.name}</strong>
            <small>{lead.category} in Milpitas</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#visit">Visit</a>
          <a href="#services">Services</a>
          <a href="#reviews">Reviews</a>
          <a href="#owner-note">Preview note</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label={`${lead.name} introduction`}>
          <div className="hero-overlay" />
          <div className="hero-inner">
            <p className="eyebrow">
              <BadgeCheck size={18} aria-hidden="true" />
              Local dentist serving Milpitas
            </p>
            <h1>{lead.name}</h1>
            <p className="hero-copy">
              A phone-first web presence for patients searching from Calaveras
              Boulevard, nearby Milpitas neighborhoods, and Google Maps.
            </p>
            <div className="hero-actions" aria-label="Contact actions">
              <a className="button primary" href={lead.phoneHref}>
                <Phone size={20} aria-hidden="true" />
                Call {lead.phone}
              </a>
              <a
                className="button secondary"
                href={lead.googleMaps}
                target="_blank"
                rel="noreferrer"
              >
                <Navigation size={20} aria-hidden="true" />
                Get directions
              </a>
            </div>
            <div className="hero-meta" aria-label="Business facts">
              <span>
                <Star size={16} aria-hidden="true" />
                {lead.rating} on Google
              </span>
              <span>
                <MapPin size={16} aria-hidden="true" />
                {lead.shortAddress}
              </span>
              <span>
                <Clock size={16} aria-hidden="true" />
                Hours listed online
              </span>
            </div>
          </div>
        </section>

        <section className="trust-grid" aria-label="Quick business facts">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <article className="fact-card" key={item.label}>
                <Icon size={22} aria-hidden="true" />
                <p>{item.label}</p>
                <strong>{item.value}</strong>
                <small>{item.detail}</small>
              </article>
            );
          })}
        </section>

        <section className="section intro-section">
          <div>
            <p className="section-kicker">Milpitas patient experience</p>
            <h2>Clear next steps for people ready to call or visit.</h2>
          </div>
          <p>
            This preview keeps the page practical: visible phone access, exact
            address, map directions, review signals, and local search language
            for a dental office on East Calaveras Boulevard.
          </p>
        </section>

        <section className="section two-column" id="visit">
          <div className="visit-info">
            <p className="section-kicker">Visit information</p>
            <h2>Office details</h2>
            <div className="detail-list">
              <div>
                <MapPin size={20} aria-hidden="true" />
                <span>
                  <strong>{lead.address}</strong>
                  <small>Milpitas, Santa Clara County</small>
                </span>
              </div>
              <div>
                <Phone size={20} aria-hidden="true" />
                <span>
                  <strong>{lead.phone}</strong>
                  <small>Best primary call to action</small>
                </span>
              </div>
              <div>
                <Clock size={20} aria-hidden="true" />
                <span>
                  <strong>{lead.hours}</strong>
                  <small>{lead.hoursNote}</small>
                </span>
              </div>
            </div>
            <div className="inline-actions">
              <a className="button primary" href={lead.phoneHref}>
                <Phone size={18} aria-hidden="true" />
                Call now
              </a>
              <a
                className="button outline"
                href={lead.googleMaps}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={18} aria-hidden="true" />
                Open Google Maps
              </a>
            </div>
          </div>

          <div className="map-panel" aria-label="Map to the office">
            <iframe
              title="Map to Chen Jiangkai DDS"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=430%20E%20Calaveras%20Blvd%2C%20Milpitas%2C%20CA%2095035&output=embed"
            />
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="section-kicker">Editable placeholders</p>
            <h2>Service areas to confirm before launch</h2>
            <p>
              These are typical dental website categories and should be edited
              with the office before publishing as final service claims.
            </p>
          </div>
          <div className="service-grid">
            {editableServices.map((service) => (
              <article className="service-card" key={service.title}>
                <CheckCircle2 size={22} aria-hidden="true" />
                <h3>{service.title}</h3>
                <p>{service.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section review-band" id="reviews">
          <div>
            <p className="section-kicker">Public review signals</p>
            <h2>{lead.rating} stars from {lead.reviewCount} Google reviews.</h2>
            <p>
              The verified Yelp listing can be linked from the finished site so
              patients can compare review sources before calling.
            </p>
          </div>
          <div className="review-actions">
            <a
              className="button primary"
              href={lead.yelp}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={18} aria-hidden="true" />
              View Yelp page
            </a>
            <a
              className="button outline"
              href={lead.googleMaps}
              target="_blank"
              rel="noreferrer"
            >
              <Star size={18} aria-hidden="true" />
              View Google profile
            </a>
          </div>
        </section>

        <section className="section owner-note" id="owner-note">
          <div>
            <p className="section-kicker">Owner preview note</p>
            <h2>Built to fill the missing website field.</h2>
            <p>
              Google Place Details showed no website listed for this dental
              practice. This preview gives patients one reliable page with
              click-to-call, directions, hours context, review links, and basic
              local SEO for searches around Milpitas and East Calaveras
              Boulevard.
            </p>
          </div>
          <ul className="owner-checklist" aria-label="Preview checklist">
            <li>
              <ShieldCheck size={20} aria-hidden="true" />
              No prices, awards, or owner biography were invented.
            </li>
            <li>
              <CalendarCheck size={20} aria-hidden="true" />
              Hours and services are marked for confirmation.
            </li>
            <li>
              <SearchCheck size={20} aria-hidden="true" />
              Yelp and Google links are ready for review handoff.
            </li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>{lead.name}</strong>
          <p>{lead.address}</p>
        </div>
        <a className="button primary" href={lead.phoneHref}>
          <Phone size={18} aria-hidden="true" />
          {lead.phone}
        </a>
      </footer>
    </>
  );
}

export default App;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
