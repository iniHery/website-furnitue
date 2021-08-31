import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className="body">
      <section id="home-section" className="background-hero">
        <div className="hero">
          <h1>Mr.GAPONOV</h1>
          <nav className="navi">
            <ul>
              <a href="#home-section">Home</a>
              <a href="#about-section">About</a>
              <a href="#product-section">Galery</a>
              <a href="#contact-section">Contact</a>
            </ul>
          </nav>
          <nav className="mobile-nav">
            <h2>Mr.GAPONOV</h2>
            <button onClick={() => setShowMobileNav(!showMobileNav)}>=</button>
            <div
              className={`mobile-nav-content ${showMobileNav ? "visible" : ""}`}
            >
              <a>Home</a>
              <a>About</a>
              <a>Galery</a>
              <a>Contact</a>
            </div>
          </nav>
          <h3>8 (800) 987-65-43</h3>
        </div>
        <div className="container-main">
          <div className="main-title">
            <h1>
              INTERIOR IN
              <br />
              YOUR HOUSE
            </h1>
            <p>CHOOSE FOR YOURSELF SOMETHING NEW</p>
            <button className="button">
              <span>MORE</span>
            </button>
          </div>
        </div>
      </section>
      <section id="about-section">
        <div className="about">
          <div className="about-header">
            <h4>ABOUT COMPANY</h4>
            <p>SOME HISTORY</p>
          </div>
          <div className="content-main">
            <div>
              <h2>— 1920</h2>
              <p>
                Amet et delectus accommodare his consul copiosae legendos at vix
                ad putent delectus delicata usu. Vidit dissentiet eos cu eum an
                brute copiosae hendrerit. Eos erant dolorum an. Per facer affert
                ut. Mei iisque mentitum moderatius cu.
              </p>
              <h2>— 1986</h2>
              <p>
                Amet et delectus accommodare his consul copiosae legendos at vix
                ad putent delectus delicata usu. Vidit dissentiet eos cu eum an
                brute copiosae hendrerit. Eos erant dolorum an. Per facer affert
                ut.
              </p>
              <div>
                <button>More</button>
              </div>
            </div>
            <div className="content-img">
              <img src="/bg10.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section id="service-section">
        <div className="service">
          <div className="content-service">
            <h4>SERVICE</h4>
            <p>WE DO IT</p>
          </div>
          <div className="main-service">
            <img src="/bg27.jpg" />
            <img src="/bg26.jpg" />
            <img src="/bg25.jpg" />
          </div>
        </div>
      </section>

      <section id="home-section" className="news">
        <div className="news-header">
          <h4>NEWS</h4>
          <p>LATEST EVENTS</p>
        </div>
        <div className="content-news">
          <div className="img-news">
            <img src="/bg15.jpg" />
            <h3>Agustus 25</h3>
          </div>
          <div className="title-news">
            <h2>IN A NUMBER OF RECENT JUDICAL</h2>
            <h5>12.09.2018</h5>
            <p>
              Is we miles ready he might going. Own books built put civil fully
              blind fanny. Projection appearance of admiration no. As he totally
              cousins warrant besides ashamed do. Therefore by applauded
              acuteness sup-ported affection it. Except had sex limits county
              enough the figure former add. Do sang my he next mr soon.
            </p>
            <button>More</button>
            <h2>SPECIAL ATETION</h2>
            <h5>12.09.2018</h5>
            <p>
              Admiration we surrounded possession he. Remarkably did increasing
              pccasional too its difficulty far especially. Known tiled but
              sorry joy balls. Bed sudden manner indeed fat now feebly.
              Therefore by
            </p>
            <button>More</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-header">
          <h4>SIGN UP FOR COMPANY NEWS</h4>
          <p>WOU WILL RECEIVE NOTIFICATIONS ABOUT NEW COMPANY NEWS</p>
          <div className="">
            <input placeholder="E - mail" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="mobile-main">
          <div className="content-footer">
            <div className="monile-footer">
              <img src="/bg19.jpg" />
              <img src="/bg20.jpg" />
              <img src="/bg21.jpg" />
              <img src="/bg23.jpg" />
              <img src="/bg22.jpg" />
            </div>
          </div>
        </div>

        <div className="footer-buttom">
          <div className="items-footer">
            <h2>Mr.GOPONOV</h2>
            <p>
              Far concluded not his something extremity. Want four we face an he
              gate. On he of played he ladies answer little though nature.
              Blessing oh do pleasure as so formerly. Took four spot soon led
              size you.
            </p>
          </div>
          <div className="items-footer" style={{ paddingBottom: "28px" }}>
            <h2>USEFULL LINKS</h2>
            <p>
              <div>Vacancy</div>
              <div>Contact</div>
              <div>Gallery</div>
            </p>
          </div>
          <div className="items-footer" style={{ paddingBottom: "8px" }}>
            <h2>CONTACT</h2>
            <p>
              <div>Address : pr-t Tekstilshikov, d. 17, office 3</div>
              <div>Number : 8 (800) 987-65-43</div>
              <div>E-mail : Interior_life@yandex.ru</div>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
