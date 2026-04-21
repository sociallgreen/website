import { useEffect, useState } from 'react';

type Metric = {
  value: string;
  label: string;
};

type PromoPanel = {
  background: string;
};

type Sponsor = {
  name: string;
  logo: string;
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

const asset = (fileName: string) => `${import.meta.env.BASE_URL}assets/${fileName}`;

const metrics: Metric[] = [
  { value: '01', label: 'find a bin and recycle socially' },
  { value: '02', label: 'track glass, plastic, and aluminum actions' },
  { value: '03', label: 'reward people and places with visible progress' },
];

const slides: Slide[] = [
  {
    title: 'Sociallgreen mobile',
    body: 'Did you know that recycling got social? Store your recycling points, track your performance, and win eco-friendly rewards.',
    asset: asset('nexus-1.png'),
  },
  {
    title: 'Home screen',
    body: 'Start recycle while playing. Use the app to find a bin, observe the green leaderboard, and share your green action.',
    asset: asset('nexus-2.png'),
  },
  {
    title: 'Locate a bin',
    body: 'Single tap on the map. Find your nearest bin, collect your waste, and go recycle socially.',
    asset: asset('nexus-3.png'),
  },
  {
    title: 'Scan the QR',
    body: 'Found the bin? Recycle and use the app to scan the QR code. The app stores your points in your profile.',
    asset: asset('nexus-4.png'),
  },
  {
    title: 'Win badges',
    body: 'Combine your recyclable waste and win badges. Who is the greatest recycler of all? Time will tell.',
    asset: asset('nexus-5.png'),
  },
];

const promos: PromoPanel[] = [
  {
    background: asset('reverseBottle.jpg'),
  },
  {
    background: asset('6.jpg'),
  },
  {
    background: asset('4.jpg'),
  },
  {
    background: asset('whiteBottle.jpg'),
  },
  {
    background: asset('wideBottle.jpg'),
  },
  {
    background: asset('bottomBottle.jpg'),
  },
];

const sponsors: Sponsor[] = [
  { name: 'Ennovation', logo: asset('ennovation.png') },
  { name: 'd-studio', logo: asset('dstudio-partner.png') },
  { name: 'International Hellenic University', logo: asset('ihu.png') },
  { name: 'Web Summit', logo: asset('websummit.png') },
  { name: 'Microsoft', logo: asset('microsoft.png') },
  { name: 'Coho', logo: asset('coho.png') },
];

const binModels: BinModel[] = [
  {
    name: 'Compact',
    asset: asset('big-bin.png'),
    blurb: 'High-visibility installation for campuses, entrances, and public pilots.',
    specs: [
      { label: 'Dimensions', value: '135*40*65 cm' },
      { label: 'Power Supply', value: '220V AC' },
      { label: 'Connectivity', value: '802.11 b/g/n Wi-Fi networks' },
      { label: 'Acceptable Packages', value: 'Aluminium, Plastic, Glass' },
      { label: 'Maximum Package Dimensions', value: '32*9 cm' },
      { label: 'Capacity', value: '159.4 lt' },
      { label: 'Screen', value: '2.8 color TFT' },
      { label: 'Social', value: 'Sociallgreen, Facebook, Twitter' },
      { label: 'Extras', value: 'Led indicators, fire shielded' },
    ],
  },
  {
    name: 'Wooden',
    asset: asset('aspros-kados.png'),
    blurb: 'Flexible indoor unit for office floors and shared lounge environments.',
    specs: [
      { label: 'Dimensions', value: 'Customizable' },
      { label: 'Power Supply', value: '220V AC' },
      { label: 'Connectivity', value: '802.11 b/g/n Wi-Fi networks' },
      { label: 'Acceptable Packages', value: 'Aluminium, Plastic, Glass' },
      { label: 'Maximum Package Dimensions', value: '30*8 cm' },
      { label: 'Capacity', value: 'Custom' },
      { label: 'Screen', value: 'Black/green LCD' },
      { label: 'Social', value: 'Sociallgreen, Facebook' },
      { label: 'Extras', value: 'Led indicators' },
    ],
  },
];

const team: TeamMember[] = [
  { name: 'Dimitrios Ntempos', role: 'Product, founder', asset: asset('ntempos.jpg') },
  { name: 'Evangelos Almpanidis', role: 'Hardware, founder', asset: asset('vaggel.jpg') },
  { name: 'Konstantinos Papadopoulos', role: 'Software, founder', asset: asset('esu.jpg') },
  { name: 'George Lapatas', role: 'Software', asset: asset('giwrgos.jpg') },
  { name: 'Antonis Karanaftis', role: 'Design', asset: asset('antw.jpg') },
  { name: 'Andreas Monastiriotis', role: 'Hardware', asset: asset('adre.jpg') },
  { name: 'Eva Kavaliotou', role: 'UX', asset: asset('eva.jpg') },
  { name: 'Georgios Kalaitzoglou', role: 'Software', asset: asset('sliver.jpg') },
  { name: 'Vivian Paraschou', role: 'Marketing', asset: asset('vivi.jpg') },
  { name: 'Antonios Krinis', role: 'Software', asset: asset('krinis.jpg') },  
  { name: 'Rodanthi Chalatsoglou', role: 'Design', asset: asset('ro.jpg') },
  { name: 'Anastasia Migkotzidou', role: 'Product', asset: asset('natasa.jpg') },
];

function PromoDivider({ background }: PromoPanel) {
  return (
    <section className="promo-divider" aria-hidden="true">
      <div className="promo-divider__bg" style={{ backgroundImage: `url(${background})` }} />
    </section>
  );
}

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openModelSpecs, setOpenModelSpecs] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 780) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentSlide = slides[activeSlide];
  const previousSlide = slides[(activeSlide + slides.length - 1) % slides.length];
  const nextSlide = slides[(activeSlide + 1) % slides.length];
  const currentYear = new Date().getFullYear();
  const toggleModelSpecs = (modelName: string) => {
    setOpenModelSpecs((current) => ({
      ...current,
      [modelName]: !current[modelName],
    }));
  };

  return (
    <div className="shell">
      <header className="topbar">
        <a className="brand" href="#hero" onClick={() => setIsMenuOpen(false)} aria-label="Sociallgreen home">
          <img src={asset('logo.png')} alt="Sociallgreen" />
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`} id="site-navigation">
          <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>Recycle</a>
          <a href="#mobile-app" onClick={() => setIsMenuOpen(false)}>Mobile</a>
          <a href="#find-bin" onClick={() => setIsMenuOpen(false)}>Bins</a>
          <a href="#deployment" onClick={() => setIsMenuOpen(false)}>Install</a>
          <a href="#team" onClick={() => setIsMenuOpen(false)}>Team</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Lab</a> 
        </nav>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="hero-copy">
            {/* <p className="eyebrow">The original intro, kept recognizable</p> */}
            <h1>
              Recycling that feels visible.
              {/* <span> social, and worth coming back to.</span> */}
            </h1>
            <p className="lede">
              You have just landed at Sociallgreen. This is the web instance of the platform that changes the way we recycle,
              adding a bit of fun to everyday recycling while helping organizations reward green actions.
            </p>
            <div className="hero-actions">
              <div className="hero-material-row" aria-label="Recyclable materials">
                <img src={asset('plastic.png')} alt="Plastic bottle" />
                <img src={asset('glass.png')} alt="Glass bottle" />
                <img src={asset('alum.png')} alt="Aluminum can" />
              </div>
            </div>
            {/* <div className="metric-row">
              {metrics.map((metric) => (
                <article className="metric-card" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div> */}
          </div>

          <div className="hero-visual">
            <div className="visual-panel visual-stack">
              <div className="hero-status">Mothballed!</div>
              <div className="hero-bins">
                <img className="bin-left" src={asset('black-twins.png')} alt="Sociallgreen white bins" />
                <img className="bin-right" src={asset('aspra-twins.png')} alt="Sociallgreen black bins" />
              </div>
            </div>
            {/* <div className="visual-panel visual-note">
              <p>Legacy message</p>
              <strong>Gamified recycling, mobile participation, map discovery, and bin intelligence.</strong>
            </div> */}
          </div>
        </section>

        <PromoDivider {...promos[0]} />

        <section className="how-section" id="how-it-works">
          {/* <div className="section-copy section-copy--center">
            <h2>Simply.</h2>
          </div> */}
          <div className="flow-card">
            <img src={asset('how-it-works.png')} alt="How Sociallgreen works flow" />
          </div>
        </section>

        <PromoDivider {...promos[1]} />

        <section className="app-section" id="mobile-app">
          {/* <div className="section-header-row">
            <p className="eyebrow">Mobile app</p>
            <h2>Mobile apps.</h2>
          </div> */}
          <div className="section-body-grid section-body-grid--app">
            <div className="carousel-card">
              <div className="carousel-stage">
                <div className="carousel-stage__layer carousel-stage__layer--back carousel-stage__layer--prev" aria-hidden="true">
                  <img src={previousSlide.asset} alt="" />
                </div>
                <div className="carousel-stage__layer carousel-stage__layer--back carousel-stage__layer--next" aria-hidden="true">
                  <img src={nextSlide.asset} alt="" />
                </div>
                <div className="carousel-stage__layer carousel-stage__layer--active">
                  <img src={currentSlide.asset} alt={currentSlide.title} />
                </div>
              </div>
              <div className="carousel-copy carousel-copy--body">
                <h3 className="app-section__slide-title">{currentSlide.title}</h3>
                <p className="app-section__slide-body">{currentSlide.body}</p>
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
              {/* <div className="app-store-row app-store-row--carousel" aria-label="Store links unavailable">
                <div className="store-badge store-badge--disabled" aria-disabled="true">
                  <img src={asset('app-store.png')} alt="App Store (not available)" />
                  <span>Currently unavailable</span>
                </div>
                <div className="store-badge store-badge--disabled" aria-disabled="true">
                  <img src={asset('google-play.png')} alt="Google Play (not available)" />
                  <span>Currently unavailable</span>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <PromoDivider {...promos[2]} />

        <section className="map-section" id="find-bin">
          {/* <div className="section-header-row">
            <p className="eyebrow">Find a bin</p>
            
          </div> */}
          <div className="section-body-grid section-body-grid--map">
            
            <div className="section-copy">
              <h2>Locate a bin.</h2>
              {/* <p>Locate the nearest Sociallgreen, and check out what's recycled.</p> */}
              <div className="map-search">
                <span>Type a location to view Sociallgreens.</span>
                <input type="text" placeholder="e.g. Thessaloniki, Greece" aria-label="Search location" />
              </div>
              <div className="map-badge">
                <strong className="map-badge__title">Verified by Sociallgreen.</strong>
                <div className="map-badge__body">
                  <span>Official Sociallgreen nodes are marked with a badge, ensuring authenticity and trust.</span>
                  <img src={asset('badge.png')} alt="Sociallgreen recycling badge" />
                </div>
              </div>
              
            </div>
            <div className="map-card">
              <div className="map-surface">
                <div className="map-surface__terrain" aria-hidden="true">
                  <div className="map-block map-block-a" />
                  <div className="map-block map-block-b" />
                  <div className="map-block map-block-c" />
                  <div className="map-block map-block-d" />
                  <div className="map-road map-road-a" />
                  <div className="map-road map-road-b" />
                  <div className="map-road map-road-c" />
                </div>
                <div className="map-route" />
                <div className="map-watermark">Thessaloniki Center</div>
                <div className="map-location map-location--ihu">
                  <img src={asset('kadakiM.png')} alt="IHU marker" />
                  <span>IHU</span>
                </div>
                <div className="map-location map-location--coho">
                  <img src={asset('kadakiM.png')} alt="Coho marker" />
                  <span>Coho</span>
                </div>
                <div className="map-location map-location--tiff">
                  <img src={asset('kadakiM.png')} alt="TIFF marker" />
                  <span>TIFF</span>
                </div>
                <div className="map-location map-location--auth">
                  <img src={asset('kadakiM.png')} alt="Auth marker" />
                  <span>AUTH</span>
                </div>
                <div className="map-location map-location--uom">
                  <img src={asset('kadakiM.png')} alt="UOM marker" />
                  <span>UOM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PromoDivider {...promos[3]} />

        <section className="models" id="deployment">
          <div className="section-header-row">
            {/* <p className="eyebrow">Deployment format</p> */}
            
          </div>
          <div className="section-body-grid section-body-grid--models">
            
            <div className="models-copy">
              <h2>Install a bin.</h2>
              <p>Sociallgreen bins were designed to be easily deployable in various locations. Both models are easy to setup and maintain. Contact us for more information.</p>
              <div className="deployment-actions">
                <div className="warehouse-card">
                  <img src={asset('warehouse.png')} alt="Warehouse" />
                  <div>
                    <strong>Available at warehouse:</strong>
                    <span>Currently unavailable</span>
                  </div>
                </div>
                <span className="button button-primary button-disabled" aria-disabled="true">
                  Bring Sociallgreen to your space
                </span>
              </div>
            </div>
            <div className="model-cards">
              {binModels.map((model, index) => {
                const isSpecsOpen = Boolean(openModelSpecs[model.name]);
                const specsId = `model-specs-${index}`;

                return (
                <article className={`model-card model-card--interactive ${isSpecsOpen ? 'is-open' : ''}`} key={model.name}>
                  <div className="model-card__visual">
                    <img src={model.asset} alt={`${model.name} Sociallgreen bin`} />
                  </div>
                  <div className="model-card__base">
                    <h3>{model.name}</h3>
                    <p>{model.blurb}</p>
                  </div>
                  <button
                    type="button"
                    className={`model-card__toggle ${isSpecsOpen ? 'is-open' : ''}`}
                    onClick={() => toggleModelSpecs(model.name)}
                    aria-expanded={isSpecsOpen}
                    aria-controls={specsId}
                  >
                    <span>{isSpecsOpen ? 'Close' : 'Specs'}</span>
                  </button>
                  <div className="model-card__mask">
                    <div className="spec-list" id={specsId}>
                      {model.specs.map((spec) => (
                        <div className="spec-row" key={spec.label}>
                          <strong>{spec.label}:</strong>
                          <span>{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
              })}
            </div>
          </div>
        </section>

        <PromoDivider {...promos[4]} />

        <section className="team-section" id="team">
          <div className="section-copy">
            {/* <p className="eyebrow">Team</p> */}
            <h2>Team.</h2>
            <p>People at Sociallgreen from 2012 to 2014.</p>
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

        <PromoDivider {...promos[5]} />

        <section className="contact contact--lab" id="contact">
          {/* <div className="section-header-row">
            
          </div> */}
          <div className="section-body-grid section-body-grid--contact">
            <div className="contact-copy">
              <h2>Say Hello.</h2>
              <p>Sociallgreen is currently unavailable. We might answer emails occasionally, or not, depending on our general availability. There is no physical office at the moment.</p>
              <address className="lab-address">
                <strong>Sociallgreen P.C.</strong>
                <span><s>10, Stratigou Napoleontos Zerva, 54640</s></span>
                <span><s>Thessaloniki, Greece</s></span>
              </address>
              <p>Use the following address to reach out:</p>
              <a className="button button-primary" href="mailto:hello@sociallgreen.com">
                hello@sociallgreen.com
              </a>
            </div>
            <div className="lab-card">
              <img src={asset('lab.jpg')} alt="Sociallgreen lab" />
              <h3>Original Sociallgreen lab [Now Closed] </h3>
            </div>
          </div>
        </section>

        <section className="sponsors-section" id="sponsors">
          <div className="section-copy section-copy--center">
            {/* <p className="eyebrow">Sponsors</p> */}
            <h2>Partners that backed us.</h2>
            {/* <p>Moved out of the divider images so the page can stay cleaner while still keeping the original ecosystem visible.</p> */}
          </div>
          <div className="sponsors-grid">
            {sponsors.map((sponsor) => (
              <article className="sponsor-card" key={sponsor.name} aria-label={sponsor.name}>
                <img src={sponsor.logo} alt={sponsor.name} />
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Sociallgreen (C) 2012 to 2014 - This website was updated in {currentYear}.</p>
      </footer>
    </div>
  );
}

export default App;
