import React from 'react';

export const About = () => {
  return (
    <main class="about">
      <article class="about__intro">
        <h2>About The Board Game of Thrones</h2>
        <p>
          The Board Game of Thrones is the result of a semester project in the
          second year of the Frontend developer course from Noroff School of
          technology and digital media.
        </p>
        <p>
          This application is a simple board game look-alike with a Game og
          Thrones theme. The game is based on the API:
          <a href="https://www.w3schools.com/html/html_quotation_elements.asp">
            <em>An API of Ice And Fire</em>
          </a>
        </p>
        <blockquote>
          The world's greatest source for quantified and structured data from
          the universe of Ice and Fire (and the HBO series Game of Thrones).
        </blockquote>
        <br />
        <p>
          The endpoints used for this application has been limited to
          <code>/characters</code> and <code>/houses</code>.
        </p>
      </article>
      <article class="about__resources">
        <h2>Self-made Resources</h2>
        <p>
          These are the resources in the application that are self made. They
          are, of course, heavily inspired by existing media out there.
        </p>
        <section>
          <h3>The Map of westeros</h3>
          <figure class="about__map">
            <img
              src="assets/misc/westeros4.svg"
              alt="map of westeros with game tiles"
            />
            <figcaption>
              Westeros with its most important landmarks and the tiles of the
              game.
            </figcaption>
          </figure>
        </section>
        <section class="about__game-materials">
          <h3>The House Sigils and Tokens of the Game</h3>
          <p>
            The sigils are used in the character select section of the
            application and in the background. The tokens are used on the game
            board.
          </p>
          <section>
            <h4>House Stark of Winterfell</h4>
            <figure class="about__sigil">
              <img
                src="assets/sigils/house_stark_of_winterfell.svg"
                alt="the house sigil of stark of winterfell"
              />
              <figcaption>The big sigil of the Starks</figcaption>
            </figure>
            <figure class="about__token">
              <img
                src="assets/sigils/house_stark_of_winterfell_small.svg"
                alt="the house token of stark of winterfell"
              />
              <figcaption>The small token of the Starks</figcaption>
            </figure>
          </section>
          <section>
            <h4>House Greyjoy of Pyke</h4>
            <figure class="about__sigil">
              <img
                src="assets/sigils/house_greyjoy_of_pyke.svg"
                alt="the house sigil of greyjoy of pyke"
              />
              <figcaption>The big sigil of the Greyjoys</figcaption>
            </figure>
            <figure class="about__token">
              <img
                src="assets/sigils/house_greyjoy_of_pyke_small.svg"
                alt="the house token of greyjoy of pyke"
              />
              <figcaption>The small token of the Greyjoys</figcaption>
            </figure>
          </section>
          <section>
            <h4>House Baratheon of Storm's End</h4>
            <figure class="about__sigil">
              <img
                src="assets/sigils/house_baratheon_of_storms_end.svg"
                alt="the house sigil of baratheon of storms end"
              />
              <figcaption>The big sigil of the Baratheons</figcaption>
            </figure>
            <figure class="about__token">
              <img
                src="assets/sigils/house_baratheon_of_storms_end_small.svg"
                alt="the house token of baratheon of storms end"
              />
              <figcaption>The small token of the Baratheons</figcaption>
            </figure>
          </section>
          <section>
            <h4>House Targaryen of King's Landing</h4>
            <figure class="about__sigil">
              <img
                src="assets/sigils/house_targaryen_of_kings_landing.svg"
                alt="the house sigil of targaryen of kings landing"
              />
              <figcaption>The big sigil of the Targaryens</figcaption>
            </figure>
            <figure class="about__token">
              <img
                src="assets/sigils/house_targaryen_of_kings_landing_small.svg"
                alt="the house token of targaryen of kings landing"
              />
              <figcaption>The small token of the Targaryens</figcaption>
            </figure>
          </section>
          <section>
            <h4>House Lannister of Casterly Rock</h4>
            <figure class="about__sigil">
              <img
                src="assets/sigils/house_lannister_of_casterly_rock.svg"
                alt="the house sigil of lannister of casterly rock"
              />
              <figcaption>The big sigil of the Lannisters</figcaption>
            </figure>
            <figure class="about__token">
              <img
                src="assets/sigils/house_lannister_of_casterly_rock_small.svg"
                alt="the house token of lannister of casterly rock"
              />
              <figcaption>The small token of the Lannisters</figcaption>
            </figure>
          </section>
        </section>
        <section class="about__throne">
          <h3>The Throne</h3>
          <figure>
            <img src="assets/misc/finale_throne.svg" alt="The Iron Throne" />
            <figcaption>The gray Iron Throne</figcaption>
          </figure>
          <figure>
            <img src="assets/misc/logo.svg" alt="The Iron Throne log" />
            <figcaption>The gray Iron Throne logo</figcaption>
          </figure>
        </section>
      </article>
      <article class="about__external-resources">
        <header>
          <h2>External Resources</h2>
          <p>
            The application makes use of a few svgs from{' '}
            <a href="https://thenounproject.com/">The Noun Project</a>. In order
            to satisfy the license their creators needs to be attributed.
          </p>
        </header>
        <section lass="about__svgs">
          <figure class="about__svg">
            <img
              src="assets/misc/svg/noun_attack_2640864.svg"
              alt="svg of sword"
            />
            <figcaption>attack by twist.glyph from the Noun Project</figcaption>
          </figure>
          <figure class="about__svg">
            <img
              src="assets/misc/svg/noun_blizzard_78881.svg"
              alt="svg of snowstorm"
            />
            <figcaption>
              blizzard by Vicons Design from the Noun Project
            </figcaption>
          </figure>
          <figure class="about__svg">
            <img
              src="assets/misc/svg/noun_Castle_991677.svg"
              alt="svg of castle"
            />
            <figcaption>Castle by Edwin PM from the Noun Project</figcaption>
          </figure>
          <figure class="about__svg">
            <img
              src="assets/misc/svg/noun_giant_1890625.svg"
              alt="svg of big man"
            />
            <figcaption>
              giant by Icons Producer from the Noun Project
            </figcaption>
          </figure>
          <figure class="about__svg">
            <img
              src="assets/misc/svg/noun_Knight_1026632.svg"
              alt="svg of knights helmet"
            />
            <figcaption>
              Knight by Robert Bjurshagen from the Noun Project
            </figcaption>
          </figure>
          <figure class="about__svg">
            <img
              src="assets/misc/svg/noun_Marsh weed_294366.svg"
              alt="svg of marsh plants"
            />
            <figcaption>
              Marsh weed by Ángel Santos Freyta from the Noun Project
            </figcaption>
          </figure>
          <figure class="about__svg">
            <img
              src="assets/misc/svg/noun_Palace_3014289.svg"
              alt="svg of palace"
            />
            <figcaption>Palace by mynamepong from the Noun Project</figcaption>
          </figure>
          <figure class="about__svg">
            <img src="assets/misc/svg/noun_Rose_994891.svg" alt="svg of rose" />
            <figcaption>
              Rose by Vectors Market from the Noun Project
            </figcaption>
          </figure>
          <figure class="about__svg">
            <img
              src="assets/misc/svg/noun_throne_1110152.svg"
              alt="svg of throne"
            />
            <figcaption>
              throne by Andrew Doane from the Noun Project
            </figcaption>
          </figure>
          <figure class="about__svg">
            <img
              src="assets/misc/svg/noun_Tower_2660342.svg"
              alt="svg of brick tower"
            />
            <figcaption>Tower by NeMaria from the Noun Project</figcaption>
          </figure>
          <figure class="about__svg">
            <img
              src="assets/misc/svg/noun_White Walker_699094.svg"
              alt="svg of white walker"
            />
            <figcaption>
              White Walker by Evgen Chekrygin from the Noun Project
            </figcaption>
          </figure>
          <figure class="about__svg">
            <img
              src="assets/misc/svg/noun_Wolf_830324.svg"
              alt="svg of howling wolf"
            />
            <figcaption>
              Wolf by Bakunetsu Kaito from the Noun Project
            </figcaption>
          </figure>
        </section>
      </article>
    </main>
  );
};
