import { RouteTracker } from './route-tracker';

export default function Home() {
  return (
    <>
      <RouteTracker />
      <header className="topbar">
        <div className="topbar-shell">
          <a className="brand" href="#hero">
            <span className="brand-mark" aria-hidden="true" />
            Retro Handheld Museum
          </a>

          <nav className="topnav" aria-label="Primary exhibit navigation">
            <a className="route-link is-active" href="#hero" data-target="hero">
              Foyer
            </a>
            <a className="route-link" href="#origins" data-target="origins">
              Origins
            </a>
            <a className="route-link" href="#color" data-target="color">
              Color
            </a>
            <a
              className="route-link"
              href="#performance"
              data-target="performance"
            >
              Performance
            </a>
            <a
              className="route-link"
              href="#multimedia"
              data-target="multimedia"
            >
              Multimedia
            </a>
            <a
              className="route-link"
              href="#innovation"
              data-target="innovation"
            >
              Innovation
            </a>
            <a className="route-link" href="#reach" data-target="reach">
              Reach
            </a>
            <a className="route-link" href="#modern" data-target="modern">
              Modern
            </a>
          </nav>

          <div className="topbar-status">
            <span className="meta-label">Now viewing</span>
            <span className="status-value" data-route-status="">
              Foyer
            </span>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="hero" data-stage="hero">
          <div className="shell">
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="meta-label meta-label--accent">
                  Permanent Exhibition / Handheld Timeline
                </p>
                <h1>
                  PLAY,
                  <br />
                  PRESERVED.
                </h1>
                <p className="hero-summary">
                  A museum route through the handhelds that made play portable,
                  personal, and worth preserving. Begin with the Game Boy, then
                  follow the design shifts that led to color, touch, depth, and
                  hybrid play.
                </p>
                <p className="hero-note">
                  The opening room treats the Game Boy as an artifact: a small
                  gray object that changed where games could live, from a couch
                  or bedroom floor to a pocket, bus seat, and school hallway.
                </p>
                <a className="hero-cta" href="#origins">
                  Explore the chronology
                </a>
              </div>

              <div className="hero-character" aria-hidden="true">
                <img
                  src="/assets/img/hero-character.png"
                  alt=""
                  className="hero-character-img"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="room room--low" id="origins" data-stage="origins">
          <div className="shell split-room">
            <div className="visual-cell">
              <div className="artifact-stage">
                <p className="artifact-year">1989</p>
                <figure className="photo-frame photo-frame--portrait">
                  <img
                    className="artifact-photo"
                    src="/assets/img/Classic%20Nintendo%20Game%20Boy%20close-up.png"
                    alt="Close-up photo of the Nintendo Game Boy against a white background"
                    decoding="async"
                  />
                </figure>
                <div className="artifact-meta">
                  <p className="artifact-caption">
                    Nintendo Game Boy / monochrome endurance
                  </p>
                  <p className="artifact-note">
                    Local artifact photo / uploaded Game Boy image
                  </p>
                </div>
              </div>
            </div>

            <div className="copy-cell">
              <p className="meta-label meta-label--accent">Room 01 / Origins</p>
              <p className="artifact-name">Nintendo Game Boy</p>
              <h2>Portable, defined.</h2>
              <p className="subheadline">
                Discover the gray artifact that turned gaming into a journey you
                could carry.
              </p>
              <p className="highlight-line">
                <span>Key highlight</span>
                Long battery life made handheld play truly everyday.
              </p>
              <p className="description">
                Its monochrome screen and durable body made portability
                practical, not experimental. This is the object that moved games
                from the living room into daily life.
              </p>
              <p className="scarcity-line">
                <span>Scarcity</span>
                Clean screens, intact battery contacts, and preserved early
                cartridges are increasingly harder to discover in the archive.
              </p>
            </div>
          </div>
        </section>

        <section className="room room--surface" id="color" data-stage="color">
          <div className="shell room-center">
            <p className="meta-label meta-label--accent">
              Room 02 / Color Evolution
            </p>
            <div className="center-intro">
              <p className="artifact-name">Game Boy Color</p>
              <h2>Color, carried.</h2>
              <p className="subheadline">
                Explore the moment handheld worlds stepped out of green haze and
                into a brighter journey.
              </p>
            </div>

            <div className="color-grid">
              <article className="mini-stage">
                <figure className="photo-frame photo-frame--portrait">
                  <img
                    className="artifact-photo"
                    src="/assets/img/Red%20Game%20Boy%20Color%20close-up%20shot.png"
                    alt="Close-up photo of a red Game Boy Color on a white background"
                    decoding="async"
                  />
                </figure>
                <div className="artifact-meta">
                  <p className="artifact-caption">
                    1998 / translucent color shell
                  </p>
                  <p className="artifact-note">
                    Local artifact photo / uploaded Game Boy Color image
                  </p>
                </div>
              </article>

              <article className="statement-card">
                <p className="highlight-line">
                  <span>Key highlight</span>
                  Full color refreshed a classic form without losing
                  portability.
                </p>
                <p className="description">
                  It kept the Game Boy line familiar while making game worlds
                  feel more immediate and alive. This room marks the shift from
                  endurance alone to visual expression.
                </p>
                <p className="scarcity-line">
                  <span>Scarcity</span>
                  Fading translucent shells, battery corrosion, and disappearing
                  boxed units make strong survivors rarer every year.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="room room--high"
          id="performance"
          data-stage="performance"
        >
          <div className="shell performance-layout">
            <div className="performance-copy">
              <p className="meta-label meta-label--accent">
                Room 03 / Performance Expansion
              </p>
              <p className="artifact-name">Game Boy Advance</p>
              <h2>Power, widened.</h2>
              <p className="subheadline">
                Continue the journey into a slimmer handheld built for broader
                ambition.
              </p>
            </div>

            <p className="section-note">
              The landscape orientation marks the shift from toy-like
              portability to a more deliberate piece of personal technology.
            </p>
          </div>

          <div className="shell data-stage-panel">
            <div className="primary-panel primary-panel--photo">
              <figure className="photo-frame photo-frame--shelf">
                <img
                  className="artifact-photo"
                  src="/assets/img/gameboyadvance.png"
                  alt="Close-up photo of a Game Boy Advance on a transparent background"
                  decoding="async"
                />
              </figure>
              <p className="artifact-note">
                Local artifact render / landscape hardware study
              </p>
            </div>

            <div className="secondary-panel">
              <p className="artifact-year artifact-year--inline">2001</p>
              <p className="highlight-line">
                <span>Key highlight</span>
                32-bit performance brought console-scale design into the palm.
              </p>
              <p className="description">
                The horizontal form and stronger hardware expanded what portable
                games could look and feel like. It stands as the point where
                handheld design became sharper, faster, and more assured.
              </p>
              <p className="scarcity-line">
                <span>Scarcity</span>
                Bright original screens, uncracked shells, and preserved
                cartridge libraries are harder to explore intact now.
              </p>
            </div>
          </div>
        </section>

        <section
          className="room room--surface"
          id="multimedia"
          data-stage="multimedia"
        >
          <div className="shell room-head">
            <div>
              <p className="meta-label meta-label--accent">
                Room 04 / Multimedia Era
              </p>
              <p className="artifact-name">PlayStation Portable</p>
              <h2>Media, in motion.</h2>
            </div>

            <p className="section-note">
              Sony recast the handheld as a polished media object, making the
              portable journey feel cinematic and aspirational.
            </p>
          </div>

          <div className="feature-band">
            <div className="shell">
              <div className="wide-stage">
                <figure className="photo-frame photo-frame--wide">
                  <img
                    className="artifact-photo"
                    src="/assets/img/Sony%20PSP%20handheld%20close-up%20shot.png"
                    alt="Close-up photo of a Sony PSP handheld on a white background"
                    decoding="async"
                  />
                </figure>
                <div className="stage-footer">
                  <div className="stage-tags">
                    <span>Model: PSP-1000</span>
                    <span>Display: Widescreen</span>
                  </div>
                  <p className="artifact-note artifact-note--overlay">
                    Local artifact photo / uploaded PSP image
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="shell band-copy">
            <p className="subheadline">
              Discover a handheld that invited visitors to explore games, music,
              and film through one polished object.
            </p>
            <p className="highlight-line">
              <span>Key highlight</span>A widescreen display made handheld
              entertainment feel cinematic.
            </p>
            <p className="description">
              The PSP pushed portability toward multimedia luxury, with a form
              closer to premium electronics than toys. In museum terms, it
              captures the moment handhelds chased a broader media identity.
            </p>
            <p className="scarcity-line">
              <span>Scarcity</span>
              Scratched screens, fragile disc drives, and vanishing UMD media
              make well-kept systems increasingly scarce.
            </p>
          </div>
        </section>

        <section
          className="room room--surface"
          id="innovation"
          data-stage="innovation"
        >
          <div className="shell innovation-layout">
            <div className="innovation-visual">
              <div className="artifact-stage artifact-stage--tall">
                <figure className="photo-frame photo-frame--ds">
                  <img
                    className="artifact-photo"
                    src="/assets/img/nintendods.png"
                    alt="Museum render of an open Nintendo DS on a white studio background"
                    decoding="async"
                  />
                </figure>
                <div className="artifact-meta">
                  <p className="artifact-caption">
                    Nintendo DS / dual-screen curiosity
                  </p>
                  <p className="artifact-note">
                    Local artifact render / dual-screen study
                  </p>
                </div>
              </div>
            </div>

            <div className="innovation-copy">
              <p className="meta-label meta-label--accent">
                Room 05 / Innovation Era
              </p>
              <p className="artifact-name">Nintendo DS</p>
              <h2>Touch changes everything.</h2>
              <p className="subheadline">
                Explore the handheld that split the screen and reopened the
                journey through play.
              </p>
              <p className="highlight-line">
                <span>Key highlight</span>
                Dual screens and touch control changed how portable games were
                imagined.
              </p>
              <p className="description">
                The DS broke the familiar handheld template and made interaction
                itself the exhibit. It opened a new design path through touch,
                asymmetry, and experimentation.
              </p>
              <p className="scarcity-line">
                <span>Scarcity</span>
                Intact hinges, original styluses, and preserved dual-screen
                hardware are steadily disappearing from the archive.
              </p>
            </div>
          </div>

          <div className="shell secondary-feature">
            <article className="inset-card">
              <div className="inset-copy">
                <p className="meta-label">2011 / Nintendo 3DS</p>
                <h3>Depth, revealed.</h3>
                <p className="subheadline">
                  Journey into a device that asked players to discover portable
                  space without glasses.
                </p>
                <p className="highlight-line">
                  <span>Key highlight</span>
                  Glasses-free 3D made depth part of the handheld experience.
                </p>
                <p className="description">
                  The 3DS extended Nintendo&apos;s experimental line with
                  spatial display, cameras, and a stronger digital identity. It
                  represents a bold attempt to make handheld play feel
                  dimensional and new again.
                </p>
                <p className="scarcity-line">
                  <span>Scarcity</span>
                  Aging batteries, worn circle pads, and delisted digital
                  history make complete surviving systems more limited over
                  time.
                </p>
              </div>

              <div className="mini-stage mini-stage--dark">
                <figure className="photo-frame photo-frame--collection">
                  <img
                    className="artifact-photo"
                    src="/assets/img/nintendo3ds.png"
                    alt="Museum render of an open Nintendo 3DS on a white studio background"
                    decoding="async"
                  />
                </figure>
                <p className="artifact-note">
                  Local artifact render / Nintendo 3DS study
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="room room--surface" id="reach" data-stage="reach">
          <div className="shell split-room">
            <div className="visual-cell">
              <div className="artifact-stage">
                <p className="artifact-year">2013</p>
                <figure className="photo-frame photo-frame--portrait">
                  <img
                    className="artifact-photo"
                    src="/assets/img/Blue%20Nintendo%202DS%20console%20close-up.png"
                    alt="Close-up photo of a blue Nintendo 2DS on a transparent background"
                    decoding="async"
                  />
                </figure>
                <div className="artifact-meta">
                  <p className="artifact-caption">
                    Nintendo 2DS / slate form, open access
                  </p>
                  <p className="artifact-note">
                    Local artifact photo / uploaded 2DS image
                  </p>
                </div>
              </div>
            </div>

            <div className="copy-cell">
              <p className="meta-label meta-label--accent">
                Room 06 / Design for Reach
              </p>
              <p className="artifact-name">Nintendo 2DS</p>
              <h2>Simpler, by design.</h2>
              <p className="subheadline">
                Discover the handheld that stripped back complexity to open the
                DS library to the widest possible audience.
              </p>
              <p className="highlight-line">
                <span>Key highlight</span>A wedge-shaped slate form made the
                hardware more durable and approachable for younger players.
              </p>
              <p className="description">
                The 2DS removed the hinge, the glasses-free 3D screen, and the
                premium price tag — creating a deliberate entry point into the
                DS ecosystem. It stands as an artifact of purposeful
                simplification: proof that removing features can itself be a
                design decision.
              </p>
              <p className="scarcity-line">
                <span>Scarcity</span>
                Cracked screens, worn face buttons, and missing styluses make
                clean surviving units increasingly hard to find as the hardware
                ages out of circulation.
              </p>
            </div>
          </div>
        </section>

        <section className="room room--inverse" id="modern" data-stage="modern">
          <div className="shell modern-grid">
            <div className="modern-copy">
              <p className="meta-label meta-label--inverse">
                Room 07 / Modern Era
              </p>
              <p className="artifact-name artifact-name--inverse">
                Nintendo Switch
              </p>
              <h2>The hybrid future.</h2>
              <p className="subheadline">
                Explore the device that turned the journey between handheld and
                home into one continuous motion.
              </p>
              <p className="highlight-line highlight-line--inverse">
                <span>Key highlight</span>
                Dock-to-hand play redefined what portability could mean.
              </p>
              <p className="description description--inverse">
                The Switch collapsed the old divide between portable system and
                living-room console. As an exhibit, it marks the modern moment
                when flexibility became the central design idea.
              </p>
              <p className="scarcity-line scarcity-line--inverse">
                <span>Scarcity</span>
                Early launch units, intact Joy-Con hardware, and limited
                physical editions are already becoming the harder pieces of the
                modern archive.
              </p>
            </div>

            <div className="modern-visual">
              <figure className="photo-frame photo-frame--switch">
                <img
                  className="artifact-photo"
                  src="/assets/img/Nintendo%20Switch%20console%20close-up%20shot.png"
                  alt="Close-up photo of a Nintendo Switch on a white background"
                  decoding="async"
                />
              </figure>
              <p className="artifact-note artifact-note--inverse">
                Local artifact photo / uploaded Switch image
              </p>
            </div>
          </div>
        </section>

        <section className="cta-room">
          <div className="shell cta-shell">
            <p className="meta-label">Collection Preview</p>
            <h2 className="cta-title">The collection continues.</h2>
            <p className="cta-note">
              This gallery focuses on the major milestones. Upcoming rooms will
              expand into preservation stories, regional variants, limited
              editions, and the rare hardware that survives at the edges of the
              archive.
            </p>
            <a className="cta-link" href="#hero">
              Return to the foyer
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div>
            <p className="footer-brand">Retro Handheld Museum</p>
            <p className="footer-copy">
              Preserving portable play as a tactile, historical, and designed
              experience.
            </p>
          </div>
          <div className="footer-links">
            <a href="#origins">Origins</a>
            <a href="#innovation">Innovation</a>
            <a href="#modern">Modern Era</a>
          </div>
        </div>
      </footer>
    </>
  );
}
