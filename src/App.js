import logo from "./logo.svg";
import "./App.css";
// Import all CSS files
import "./css/about.css";
import "./css/footer.css";
import "./css/header.css";
import "./css/menu.css";
import "./css/nav.css";
import "./css/services.css";
import "./css/special.css";
import "./css/strength.css";
import "./css/styles.css";
import "./css/testi.css";

// Import all images
import badge2 from "./img/badge-2.png";
import featuresIcon1 from "./img/features-icon-1.png";
import featuresIcon2 from "./img/features-icon-2.png";
import featuresIcon3 from "./img/features-icon-3.png";
import testiAvatar from "./img/testi-avatar.jpg";
import badge2Bg from "./img/badge-2-bg.png";
import aboutAbsImage from "./img/about-abs-image.jpg";
import badge1 from "./img/badge-1.png";
import event1 from "./img/event-1.jpg";
import event2 from "./img/event-2.jpg";
import heroSlider1 from "./img/hero-slider-1.jpg";
import heroSlider2 from "./img/hero-slider-2.jpg";
import heroSlider3 from "./img/hero-slider-3.jpg";
import service1 from "./img/service-1.jpg";
import service2 from "./img/service-2.jpg";
import service3 from "./img/service-3.jpg";
import logoSvg from "./img/logo.svg";
import heroIcon from "./img/hero-icon.png";
import specialDishBanner from "./img/special-dish-banner.jpg";
import shape5 from "./img/shape-5.png";
import shape6 from "./img/shape-6.png";
import featuresIcon4 from "./img/features-icon-4.png";
import event3 from "./img/event-3.jpg";

function App() {
  return (
    <div>
      <div className="container" id="home">
        {/* <!-- 
            PRELOAD
        --> */}
        {/* Supprimer la section de préchargement */}
        {/* <div className="preload">
          <div className="preload-circle"></div>
          <p>Grilli</p>
        </div> */}
        <div className="primary-screen">
          {/* <!-- 
                TOPBAR 
            --> */}
          <div className="topbar padding-2 over-slider">
            <div className="topbar-section">
              <div className="topbar__item">
                <ion-icon name="location-outline"></ion-icon>
                <p>Restaurant St, Delicious City, London 9578, UK</p>
              </div>
              <div className="separator"></div>
              <div className="topbar__item">
                <ion-icon name="time-outline"></ion-icon>
                <p>Daily: 8.00 am to 10.00 pm</p>
              </div>
            </div>
            <div className="topbar-section">
              <div className="topbar__item">
                <ion-icon name="call-outline"></ion-icon>
                <p>+1 123 456 7890</p>
              </div>
              <div className="separator"></div>
              <div className="topbar__item">
                <ion-icon name="mail-outline"></ion-icon>
                <p>booking@restaurant.com</p>
              </div>
            </div>
          </div>

          {/* <!-- 
                NAV 
            --> */}
          <nav className="padding-2 over-slider">
            <img src={logo} width="160" height="50" alt="Grilli Logo" />
            <div className="nav__items">
              <a href="#home" className="nav-items--active">
                Home
              </a>
              <a href="#menu">Menus</a>
              <a href="#about">About Us</a>
              <a href="#chefs">Our Chefs</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="nav-right">
              <button className="btn btn-secondary" data-text="Come on!">
                <span>Find a table</span>
              </button>
              <div className="aside-open">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </nav>

          {/* <!-- 
                ASIDE (RESPONSIVE)
            --> */}
          <aside>
            <div className="aside-close">
              <ion-icon name="close-circle-outline"></ion-icon>
            </div>
            <img src={logoSvg} width="160" height="50" alt="" />
            <div className="nav__items">
              <a href="#home" className="nav-items--active">
                <span>Home</span>
              </a>
              <a href="#menu">
                <span>Menus</span>
              </a>
              <a href="#about">
                <span>About Us</span>
              </a>
              <a href="#chefs">
                <span>Our Chefs</span>
              </a>
              <a href="#contact">
                <span>Contact</span>
              </a>
            </div>
            <h2>Visit Us</h2>
            <p>Restaurant St, Delicious City, London 9578, UK</p>
            <p>Open: 9.30 am - 2.30pm</p>
            <p>booking@grilli.com</p>
            <div className="separator"></div>
            <h3 className="highlight">Booking Request</h3>
            <strong>
              <a href="tel:+88123123456">+88-123-123456</a>
            </strong>
          </aside>
          <div className="aside-overlay"></div>

          {/* <!-- 
                HEADER 
            --> */}
          <header className="padding-5">
            <div className="slider-control slider-prev over-slider">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </div>
            <div className="slider-control slider-next over-slider">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>

            <div className="slider-item">
              <div className="slider-bg">
                <img src={heroSlider1} alt="" />
              </div>
              <h2 reveal className="subtitle" style={{ "--delay-item": 0 }}>
                Tradational & Hygine
              </h2>
              <h1 reveal className="title" style={{ "--delay-item": 1 }}>
                For the love of delicious food
              </h1>
              <p reveal className="paragraph" style={{ "--delay-item": 2 }}>
                Come with family & feel the joy of mouthwatering food
              </p>
              <button
                className="btn"
                data-text="View Our Menu"
                reveal
                style={{ "--delay-item": 3 }}
              >
                <span>Taste the dish</span>
              </button>
            </div>

            <div className="slider-item">
              <div className="slider-bg">
                <img src={heroSlider2} alt="" />
              </div>
              <h2 reveal className="subtitle" style={{ "--delay-item": 0 }}>
                Delightful Experience
              </h2>
              <h1 reveal className="title" style={{ "--delay-item": 1 }}>
                Flavors Inspired by the Seasons
              </h1>
              <p reveal className="paragraph" style={{ "--delay-item": 2 }}>
                Come with family & feel the joy of mouthwatering food
              </p>
              <button
                className="btn"
                data-text="View Our Menu"
                reveal
                style={{ "--delay-item": 3 }}
              >
                <span>Taste the dish</span>
              </button>
            </div>

            <div className="slider-item">
              <div className="slider-bg">
                <img src={heroSlider3} alt="" />
              </div>
              <h2 reveal className="subtitle" style={{ "--delay-item": 0 }}>
                Amazing & Delicious
              </h2>
              <h1 reveal className="title" style={{ "--delay-item": 1 }}>
                Where every flavor tells a story
              </h1>
              <p reveal className="paragraph" style={{ "--delay-item": 2 }}>
                Come with family & feel the joy of mouthwatering food
              </p>
              <button
                className="btn"
                data-text="View Our Menu"
                reveal
                style={{ "--delay-item": 3 }}
              >
                <span>Taste the dish</span>
              </button>
            </div>
          </header>

          <div className="book over-slider">
            <img src={heroIcon} alt="" />
            <p>Book A Table</p>
          </div>
        </div>
        {/* <!-- primary-screen --> */}
        <div className="back-top" title="Go to top">
          <ion-icon name="caret-up-outline"></ion-icon>
        </div>

        {/* <!-- 
            SERVICE
        --> */}
        <section className="services padding-2" id="chefs">
          <h3 className="subtitle">Flavors For Royalty</h3>
          <h2 className="section-title">We Offer Top Notch</h2>
          <p className="paragraph">
            The best social network is a table full of good food and surrounded
            by people you love. We cook with love so you can eat with a
            conscience.
          </p>
          <div className="services-box">
            <div className="service">
              <picture>
                <img src={service1} alt="" />
              </picture>
              <h2>Breakfast</h2>
              <button>View Menu</button>
            </div>
            <div className="service">
              <picture>
                <img src={service2} alt="" />
              </picture>
              <h2>Appetizers</h2>
              <button>View Menu</button>
            </div>
            <div className="service">
              <picture>
                <img src={service3} alt="" />
              </picture>
              <h2>Drinks</h2>
              <button>View Menu</button>
            </div>
          </div>
        </section>

        {/* <!-- 
            ABOUT 
        --> */}
        <section className="about padding-2" id="about">
          <div className="about__info">
            <h3 className="subtitle">Our Story</h3>
            <h2 className="section-title">Every Flavor Tells a Story</h2>
            <p className="paragraph">
              Grilli® challenges the boundaries of cuisine by drawing its
              influences from the culinary roots of our team members. We combine
              traditional and innovative techniques to create unique offerings
              using local ingredients in all of its dishes. Grilli® is based on
              hospitality with our staff's commitment to provide you with a
              memorable experience every time you walk through the door.
            </p>
            <h3 className="highlight">Book Through Call</h3>
            <strong>+80 (400) 123 4567</strong>
            <button className="btn" data-text="Read more">
              <span>Read more</span>
            </button>
          </div>
          <div className="about__image">
            <div className="badge">
              <img src={badge2} alt="" />
              <img src={badge2Bg} alt="" />
            </div>
            <picture>
              <img src={aboutAbsImage} alt="" />
            </picture>
          </div>
        </section>

        {/* <!-- 
            SPECIAL DISH 
        --> */}
        <section className="special-dish">
          <div className="special__image">
            <img src={specialDishBanner} alt="" />
          </div>
          <div className="special__info">
            <img src={badge1} alt="" />
            <h2 className="subtitle">Special Dish</h2>
            <h1 className="section-title">Lobster Tortellini</h1>
            <p className="paragraph">
              This is another dish that will amaze you from the first bite, we
              present the Lobster Tortellini that integrates the most special
              and unique flavors of the house. We elaborate a versatile dish
              with a subtle yet aesthetic innovation.
            </p>
            <div className="price">
              <span>$40.00</span>
              <span>$20.00</span>
            </div>
            <button className="btn" data-text="View All Menu">
              <span>View All Menu</span>
            </button>
          </div>
        </section>

        {/* <!-- 
              MENU
            --> */}
        <section classNameName="menu padding-2" id="menu">
          <h3 classNameName="subtitle over-slider">Special Selection</h3>
          <h2 classNameName="section-title over-slider">Delicious Menu</h2>
          <div classNameName="menu-box over-slider"></div>

          <p classNameName="winter over-slider">
            **During winter daily from <b>7:00 pm</b> to <b>9:00 pm</b>
          </p>
          <button classNameName="btn over-slider" data-text="View All Menu">
            <span>View All Menu</span>
          </button>

          <img
            src={shape5}
            width="921"
            height="1036"
            loading="lazy"
            alt=""
            classNameName="shape shape-2"
          />
          <img
            src={shape6}
            width="700"
            height="800"
            loading="lazy"
            alt=""
            classNameName="shape shape-3"
          />
        </section>

        {/* <!-- 
              TESTIMONIALS
            --> */}
        <section className="testi padding-2" id="contact">
          <h2 className="section-title">
            <span>”</span>I wanted to thank you for inviting me down for that
            amazing dinner the other night. The food was extraordinary.
          </h2>
          <div className="testi__separator">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="avatar">
            <img src={testiAvatar} alt="" />
            <h3 className="subtitle">Sam Jhonson</h3>
          </div>
        </section>

        {/* <!--
            RESERVATION
        --> */}
        <div className="container-reservation padding-2">
          <section className="reservation">
            <form>
              <h2 className="section-title">Online Reservation</h2>
              <p className="paragraph">
                Booking request <a href="tel:+88123123456">+88-123-123456</a> or
                fill out the order form
              </p>
              <div className="inputs">
                <div>
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Your Name"
                    autocomplete="off"
                    required
                  />
                  <input
                    className="input-field"
                    type="tel"
                    placeholder="Phone Number"
                    autocomplete="off"
                    inputmode="numeric"
                    required
                  />
                </div>
                <div>
                  <span>
                    <ion-icon name="person-outline"></ion-icon>
                    <select name="person" className="input-field" required>
                      <option value="1-Person">1 Person</option>
                      <option value="2-Person">2 Person</option>
                      <option value="3-Person">3 Person</option>
                      <option value="4-Person">4 Person</option>
                      <option value="5-Person">5 Person</option>
                      <option value="6-Person">6 Person</option>
                      <option value="7-Person">7 Person</option>
                    </select>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                  </span>
                  <input
                    className="input-field"
                    id="reservation-date"
                    type="date"
                  />
                  <span>
                    <ion-icon name="time-outline"></ion-icon>
                    <select name="hour" className="input-field" required>
                      <option value="08:00am">08 : 00 am</option>
                      <option value="09:00am">09 : 00 am</option>
                      <option value="10:00am">10 : 00 am</option>
                      <option value="11:00am">11 : 00 am</option>
                      <option value="12:00am">12 : 00 am</option>
                      <option value="01:00pm">01 : 00 pm</option>
                      <option value="02:00pm">02 : 00 pm</option>
                      <option value="03:00pm">03 : 00 pm</option>
                      <option value="04:00pm">04 : 00 pm</option>
                      <option value="05:00pm">05 : 00 pm</option>
                      <option value="06:00pm">06 : 00 pm</option>
                      <option value="07:00pm">07 : 00 pm</option>
                      <option value="08:00pm">08 : 00 pm</option>
                      <option value="09:00pm">09 : 00 pm</option>
                      <option value="10:00pm">10 : 00 pm</option>
                    </select>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                  </span>
                </div>
                <textarea
                  className="input-field"
                  cols="30"
                  rows="7"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                className="btn btn-secondary"
                data-text="Know you will enjoy it"
              >
                <span>Book A Table</span>
              </button>
            </form>

            <div className="reservation-right">
              <h2 className="section-title">Contact Us</h2>
              <h3 className="highlight">Booking Request</h3>
              <strong>+88-123-123456</strong>
              <div className="separator"></div>
              <h3>Location</h3>
              <p>Restaurant St, Delicious City, London 9578, UK</p>
              <h3>Lunch Time</h3>
              <p>Monday to Sunday 11.00 am - 2.30pm</p>
              <h3>Dinner Time</h3>
              <p>Monday to Sunday 05.00 pm - 10.00pm</p>
            </div>
          </section>
        </div>

        {/* <!-- 
            STRENGTH
        --> */}
        <section className="strength padding-2">
          <h3 className="subtitle">Why Choose Us</h3>
          <h2 className="section-title">Our Strength</h2>
          <div className="strength-box">
            <div className="strength__item">
              <img src={featuresIcon1} alt="" />
              <h2>Hygienic Food</h2>
              <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
            </div>
            <div className="strength__item">
              <img src={featuresIcon2} alt="" />
              <h2>Fresh Environment</h2>
              <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
            </div>
            <div className="strength__item">
              <img src={featuresIcon3} alt="" />
              <h2>Skilled Chefs</h2>
              <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
            </div>
            <div className="strength__item">
              <img src={featuresIcon4} alt="" />
              <h2>Event & Party</h2>
              <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
            </div>
          </div>
        </section>

        {/* <!-- 
            UPDATES
        --> */}
        <section className="updates padding-5">
          <h3 className="subtitle">Recent Updates</h3>
          <h2 className="section-title">Upcoming Event</h2>
          <div className="updates-box">
            <div className="updates__item">
              <img src={event1} alt="" />
              <h3 className="subtitle">Food, Flavour</h3>
              <h2>Flavour so good you’ll try to eat with your eyes.</h2>
              <div className="tag-date">16/01/2023</div>
            </div>
            <div className="updates__item">
              <img src={event2} alt="" />
              <h3 className="subtitle">Healthy Food</h3>
              <h2>Flavour so good you’ll try to eat with your eyes.</h2>
              <div className="tag-date">05/01/2023</div>
            </div>
            <div className="updates__item">
              <img src={event3} alt="" />
              <h3 className="subtitle">Recipie</h3>
              <h2>Flavour so good you’ll try to eat with your eyes.</h2>
              <div className="tag-date">29/12/2022</div>
            </div>
          </div>
          <button className="btn" data-text="You'll love it">
            <span>View Our Blog</span>
          </button>
        </section>

        {/* <!-- 
            FOOTER
        --> */}
        <footer>
          <div className="footer__links">
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#about">About us</a>
            <a href="#chefs">Our Chefs</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="getInToch padding-2">
            <img src={logoSvg} alt="" />
            <p className="text">
              Restaurant St, Delicious City, London 9578, UK
            </p>
            <a href="mailto:booking@grilli.com" className="text">
              booking@grilli.com
            </a>
            <a href="tel:+88123123456" className="text">
              Booking Request : +88-123-123456
            </a>
            <p className="text">Open : 09:00 am - 01:00 pm</p>
            <div className="footer-separator">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h2 className="section-title">Get News & Offers</h2>
            <h3>
              Subscribe us & Get <span>25% Off.</span>
            </h3>
            <div className="subscribe">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="email"
                inputmode="email"
                placeholder="Your email"
                maxlength="70"
              />
              <button className="btn btn-secondary" data-text="Appreciated!">
                <span>Subscribe</span>
              </button>
            </div>
          </div>
          <div className="footer__links">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              Youtube
            </a>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noreferrer"
            >
              Google Maps
            </a>
          </div>
          <p className="credits">
            Grilli ~ Designed by{" "}
            <a
              href="https://github.com/codewithsadee"
              target="_blank"
              rel="noreferrer"
            >
              codewithsadee
            </a>{" "}
            ~ Developed by{" "}
            <a
              href="https://github.com/iannellotomas"
              target="_blank"
              rel="noreferrer"
            >
              iannellotomas
            </a>
          </p>
        </footer>
      </div>
      {/* Supprimer la section de préchargement */}
      {/* <div className="preload">
        <div className="preload-circle"></div>
        <p>Grilli</p>
      </div> */}
      <img
        src="path/to/image.jpg"
        alt="Description de l'image"
        style={{ width: "100px", height: "100px" }}
      />
      <a href="https://example.com" target="_blank" rel="noreferrer">
        Lien
      </a>
      {/* <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script> */}
    </div>
  );
}

export default App;
