import { useEffect, useState } from 'react';

type Metric = {
  value: string;
  label: string;
};

type PromoPanel = {
  background: string;
  logo?: string;
  alt?: string;
  title: string;
  body: string;
};

type Slide = {
  title: string;
  body: string;
  asset: string;
};

type BinModel = {
  name: string;
  asset: string;
  blurb: string;
  specs: Array<{ label: string; value: string }>;
};

type TeamMember = {
  name: string;
  role: string;
  asset: string;
};

const metrics: Metric[] = [
  { value: '01', label: 'find a bin and recycle socially' },
  { value: '02', label: 'track glass, plastic, and aluminum actions' },
  { value: '03', label: 'reward people and places with visible progress' },
];

const slides: Slide[] = [
  {
    title: 'Sociallgreen mobile',
    body: 'Did you know that recycling got social? Store your recycling points, track your performance, and win eco-friendly rewards.',
    asset: '/assets/nexus-1.jpg',
  },
  {
    title: 'Welcome',
    body: 'Start recycle while playing. Use the app to find a bin, observe the green leaderboard, and share your green action.',
    asset: '/assets/nexus-2.jpg',
  },
  {
    title: 'Locate a bin',
    body: 'Single tap on the map. Find your nearest bin, collect your waste, and go recycle socially.',
    asset: '/assets/nexus-3.jpg',
  },
  {
    title: 'Scan the QR',
    body: 'Found the bin? Recycle and use the app to scan the QR code. The app stores your points in your profile.',
    asset: '/assets/nexus-4.jpg',
  },
  {
    title: 'Win badges',
    body: 'Combine your recyclable waste and win badges. Who is the greatest recycler of all? Time will tell.',
    asset: '/assets/nexus-5.jpg',
  },
];

const promos: PromoPanel[] = [
  {
    background: '/assets/bg1.jpg',
    logo: '/assets/ennovation.png',
    alt: 'Ennovation',
    title: 'Sociallgreen gets the 1st place',
    body: 'Small parallax breaks bring back the original pacing without overwhelming the page.',
  },
  {
    background: '/assets/bg2.jpg',
    logo: '/assets/ihu.png',
    alt: 'International Hellenic University',
    title: 'First node of a network',
    body: 'The bin network story started with a real place people could interact with.',
  },
  {
    background: '/assets/bg4.jpg',
    logo: '/assets/microsoft.png',
    alt: 'Microsoft',
    title: 'Our early stage partners',
    body: 'The legacy page used partner panels as proof points. They still help frame the story.',
  },
  {
    background: '/assets/bg5.jpg',
    logo: '/assets/coho.png',
    alt: 'Coho',
    title: 'Our coworking home',
    body: 'The lab section below stays tied to the original workspace and contact identity.',
  },
];

const binModels: BinModel[] = [
  {
    name: 'Compact',
    asset: '/assets/big-bin.png',
    blurb: 'High-visibility installation for campuses, entrances, and public pilots.',
    specs: [
      { label: 'Dimensions', value: '135*40*65 cm' },
      { label: 'Power Supply', value: '220V AC' },
      { label: 'Connectivity', value: '802.11 b/g/n Wi-Fi networks' },
      { label: 'Acceptable Packages', value: 'Aluminium, Plastic, Glass' },
      { label: 'Maximum Package Dimensions', value: '32*9 cm' },
      { label: 'Capacity', value: '159.4 lt' },
      { label: 'Screen', value: '2.8 color TFT' },
      { label: 'Social', value: 'Sociallgreen.com, Facebook, Twitter' },
      { label: 'Extras', value: 'Led indicators, fire shielded' },
    ],
  },
  {
    name: 'Wooden',
    asset: '/assets/aspros-kados.png',
    blurb: 'Flexible indoor unit for office floors and shared lounge environments.',
    specs: [
      { label: 'Dimensions', value: 'Customizable' },
      { label: 'Power Supply', value: '220V AC' },
      { label: 'Connectivity', value: '802.11 b/g/n Wi-Fi networks' },
      { label: 'Acceptable Packages', value: 'Aluminium, Plastic, Glass' },
      { label: 'Maximum Package Dimensions', value: '30*8 cm' },
      { label: 'Capacity', value: 'Custom' },
      { label: 'Screen', value: 'Black/green LCD' },
      { label: 'Social', value: 'Sociallgreen.com, Facebook' },
      { label: 'Extras', value: 'Led indicators' },
    ],
  },
];

const team: TeamMember[] = [
  { name: 'Dimitrios Ntempos', role: 'Team Manager', asset: '/assets/ntempos.jpg' },
  { name: 'Evangelos Almpanidis', role: 'Electronic Engineer', asset: '/assets/vaggel.jpg' },
  { name: 'Georgios Kalaitzoglou', role: 'Software Engineer', asset: '/assets/sliver.jpg' },
  { name: 'Adre', role: 'Team Member', asset: '/assets/adre.jpg' },
  { name: 'Antw', role: 'Team Member', asset: '/assets/antw.jpg' },
  { name: 'Esu', role: 'Team Member', asset: '/assets/esu.jpg' },
  { name: 'Eva', role: 'Team Member', asset: '/assets/eva.jpg' },
  { name: 'Giwrgos', role: 'Team Member', asset: '/assets/giwrgos.jpg' },
  { name: 'Krinis', role: 'Team Member', asset: '/assets/krinis.jpg' },
  { name: 'Natasa', role: 'Team Member', asset: '/assets/natasa.jpg' },
  { name: 'Vivi', role: 'Team Member', asset: '/assets/vivi.jpg' },
];

function PromoDivider({ background, logo, alt, title, body }: PromoPanel) {
  return (
    <section className="promo-divider" style={{ ['--promo-bg' as string]: `url(${background})` }}>
      <div className="promo-divider__overlay">
        {logo ? <img className="promo-divider__logo" src={logo} alt={alt ?? title} /> : null}
        <p className="eyebrow">Legacy parallax panel</p>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </section>
  );
}

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <div className="shell">
      <header className="topbar">
        <a className="brand" href="#hero" aria-label="Sociallgreen home">
          <img src="/assets/logo.png" alt="Sociallgreen" />
          <span>Sociallgreen</span>
        </a>
        <nav className="nav">
          <a href="#how-it-works">How it works</a>
          <a href="#mobile-app">Mobile app</a>
          <a href="#find-bin">Find a bin</a>
          <a href="#deployment">Deployment</a>
          <a href="#team">Team</a>
          <a href="#contact">Lab</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">The original intro, kept recognizable</p>
            <h1>
              Recycling that feels social,
              <span> visible, and worth coming back to.</span>
            </h1>
            <p className="lede">
              You have just landed at Sociallgreen. This is the web instance of the platform that changes the way we recycle,
              adding a bit of fun to everyday recycling while helping organizations reward green actions.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Bring Sociallgreen
              </a>
              <a className="button button-secondary" href="#how-it-works">
                See the flow
              </a>
            </div>
            <div className="metric-row">
              {metrics.map((metric) => (
                <article className="metric-card" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-panel visual-stack">
              <div className="pulse pulse-a" />
              <div className="pulse pulse-b" />
              <img className="bin-left" src="/assets/aspra-twins.png" alt="Sociallgreen white bins" />
              <img className="bin-right" src="/assets/black-twins.png" alt="Sociallgreen black bins" />
            </div>
            <div className="visual-panel visual-note">
              <p>Legacy message</p>
              <strong>Gamified recycling, mobile participation, map discovery, and bin intelligence.</strong>
            </div>
          </div>
        </section>

        <PromoDivider {...promos[0]} />

        <section className="how-section" id="how-it-works">
          <div className="section-copy section-copy--center">
            <p className="eyebrow">How it works</p>
            <h2>Join our recycling community and spread it to the world.</h2>
            <p>
              The original flow image was one of the strongest parts of the old landing page, so this section brings it back as a dedicated moment.
            </p>
          </div>
          <div className="flow-card">
            <img src="/assets/how-it-works.png" alt="How Sociallgreen works flow" />
          </div>
        </section>

        <PromoDivider {...promos[1]} />

        <section className="app-section" id="mobile-app">
          <div className="section-copy">
            <p className="eyebrow">Mobile app</p>
            <h2>The old app walkthrough, rebuilt as a modern carousel.</h2>
            <p>
              The sequence stays the same: discover the app, find a bin, scan, store your points, and compete through badges.
            </p>
            <div className="app-store-row">
              <a href="https://itunes.apple.com/gb/app/sociallgreen/id848272761">
                <img src="/assets/app-store.png" alt="Download on the App Store" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.sociallgreenpr">
                <img src="/assets/google-play.png" alt="Get it on Google Play" />
              </a>
            </div>
          </div>
          <div className="carousel-card">
            <div className="carousel-copy">
              <p className="carousel-kicker">Step {activeSlide + 1}</p>
              <h3>{currentSlide.title}</h3>
              <p>{currentSlide.body}</p>
            </div>
            <div className="carousel-stage">
              <img src={currentSlide.asset} alt={currentSlide.title} />
            </div>
            <div className="carousel-controls">
              <button type="button" onClick={() => setActiveSlide((activeSlide + slides.length - 1) % slides.length)}>
                Prev
              </button>
              <div className="carousel-dots" aria-label="App slides">
                {slides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    className={index === activeSlide ? 'is-active' : ''}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to ${slide.title}`}
                  />
                ))}
              </div>
              <button type="button" onClick={() => setActiveSlide((activeSlide + 1) % slides.length)}>
                Next
              </button>
            </div>
          </div>
        </section>

        <PromoDivider {...promos[2]} />

        <section className="map-section" id="find-bin">
          <div className="section-copy">
            <p className="eyebrow">Find a bin</p>
            <h2>Locate your nearest bin and see what is going on with recycling in your area.</h2>
            <p>
              GitHub Pages cannot host the full old backend map, so this section recreates the old experience as a modern static discovery panel with live-looking markers and network cues.
            </p>
            <div className="map-search">
              <span>Detect green places here...</span>
              <input type="text" placeholder="e.g. Thessaloniki, Greece" aria-label="Search location" />
            </div>
            <div className="material-grid">
              <div>
                <strong>Glass</strong>
                <span>1 leaf per action</span>
              </div>
              <div>
                <strong>Plastic</strong>
                <span>2 leafs per action</span>
              </div>
              <div>
                <strong>Aluminum</strong>
                <span>3 leafs per action</span>
              </div>
            </div>
          </div>
          <div className="map-card">
            <div className="map-surface">
              <div className="map-pin pin-a">IHU</div>
              <div className="map-pin pin-b">CoHo</div>
              <div className="map-pin pin-c">Pilot</div>
              <div className="map-route" />
            </div>
            <div className="map-stats">
              <article>
                <strong>IHU bin</strong>
                <span>First node of the network</span>
              </article>
              <article>
                <strong>Accepted materials</strong>
                <span>Aluminium, Plastic, Glass</span>
              </article>
              <article>
                <strong>Green places</strong>
                <span>Search, visit, scan, recycle</span>
              </article>
            </div>
          </div>
        </section>

        <section className="models" id="deployment">
          <div className="models-copy">
            <p className="eyebrow">Deployment format</p>
            <h2>Install the first social aware recycling platform.</h2>
            <p>
              The two original hardware formats are preserved here, and the characteristic sheet appears with a hover animation inspired by the old site mask effect.
            </p>
            <div className="warehouse-card">
              <img src="/assets/warehouse.png" alt="Warehouse" />
              <div>
                <strong>Available at warehouse</strong>
                <span>6 installations</span>
              </div>
            </div>
          </div>
          <div className="model-cards">
            {binModels.map((model) => (
              <article className="model-card model-card--interactive" key={model.name}>
                <div className="model-card__visual">
                  <img src={model.asset} alt={`${model.name} Sociallgreen bin`} />
                </div>
                <div className="model-card__base">
                  <h3>{model.name}</h3>
                  <p>{model.blurb}</p>
                </div>
                <div className="model-card__mask">
                  <h3>{model.name}</h3>
                  <div className="spec-list">
                    {model.specs.map((spec) => (
                      <p key={spec.label}>
                        <strong>{spec.label}:</strong> {spec.value}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <PromoDivider {...promos[3]} />

        <section className="team-section" id="team">
          <div className="section-copy">
            <p className="eyebrow">Team</p>
            <h2>All the members whose photos were available in the original folder.</h2>
            <p>
              The first homepage showed only three people. This updated version includes every recoverable member photo so the section does not feel artificially incomplete.
            </p>
          </div>
          <div className="team-grid team-grid--expanded">
            {team.map((member) => (
              <article className="team-card" key={member.name}>
                <img src={member.asset} alt={member.name} />
                <div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact contact--lab" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Lab</p>
            <h2>Hello from the original Sociallgreen lab.</h2>
            <p>
              The old contact section showed the workspace at CoHo in Thessaloniki. This version keeps that image and turns it into the contact anchor for the page.
            </p>
            <address className="lab-address">
              <strong>Sociallgreen P.C.</strong>
              <span>10, Stratigou Napoleontos Zerva, 54640</span>
              <span>Thessaloniki, Greece</span>
            </address>
            <a className="button button-primary" href="mailto:hello@sociallgreen.com">
              hello@sociallgreen.com
            </a>
          </div>
          <div className="lab-card">
            <h3>Sociallgreen Lab at CoHo</h3>
            <img src="/assets/lab.jpg" alt="Sociallgreen lab" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
