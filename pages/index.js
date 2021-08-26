import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section id="home-section" className="background">
        <div className="navmenu">
          <navbar className="navi">
            <div className="logo">Mr.GAPONOV</div>
            <ul>
              <li>
                <a href="#home-section">Home</a>
              </li>
              <li>
                <a href="#about-section">About</a>
              </li>
              <li>
                <a href="#product-section">Product</a>
              </li>
              <li>
                <a href="#contact-section">Contact</a>
              </li>
            </ul>
            <div className="contact">8 (800) 987-65-43</div>
          </navbar>
        </div>

        <div className="row">
          <div className="col">
            <h1>
              INTERIOR IN <span>YOUR HOUSE</span>
            </h1>
            <p>CHOOSE FOR YOURSELF SOMETHING NEW</p>
            <button className="button">
              <span>MORE</span>
            </button>
          </div>
        </div>
      </section>

      <section id="about-section">
        <div>
          <div className="container-about">
            <header className="header-about">
              <h1 className="heading-header">ABOUT COMPANY</h1>
              <p className="paragraf-about">SOME HISTORY</p>
            </header>
            <aside>
              <h2>— 1920</h2>
              <p style={{ color: "#000" }}>
                Amet et delectus accommodare his consul copiosae legendos at vix
                ad putent delectus delicata usu. Vidit dissentiet eos cu eum an
                brute copiosae hendrerit. Eos erant dolorum an. Per facer affert
                ut. Mei iisque mentitum moderatius cu.
              </p>
              <h2>— 1986</h2>
              <p style={{ color: "#000" }}>
                Amet et delectus accommodare his consul copiosae legendos at vix
                ad putent delectus delicata usu. Vidit dissentiet eos cu eum an
                brute copiosae hendrerit. Eos erant dolorum an. Per facer affert
                ut.
              </p>
            </aside>

            <main>
              <img src="/bg10.jpg" alt="image about" />
            </main>
            <footer>
              <button className="button">
                <span>MORE</span>
              </button>
            </footer>
          </div>
        </div>
      </section>

      <section className="display">
        <div className="header-about">
          <h1 className="heading-header">SERVICE</h1>
          <p className="paragraf-about">WE DO IT</p>
        </div>
        <div className="container-service">
          <img className="items" src="/bg24.jpg" />
          <img className="items" src="/bg26.jpg" />
          <img className="items" src="/bg25.jpg" />
        </div>
      </section>

      <section className="display-news">
        <div className="header-about">
          <h1 className="heading-header">NEWS</h1>
          <p className="paragraf-about">LATEST EVENTS</p>
        </div>
        <div className="container-news">
          <div className="flex">
            <img className="item" src="/bg15.jpg" />
            <div className="title">Agustus 25</div>
          </div>
          <div className="description-news">
            <h2>IN A NUMBER OF RECENT JUDICAL</h2>
            <h4>12.09.2018</h4>
            <p>
              Is we miles ready he might going. Own books built put civil fully
              blind fanny. Projection appearance of admiration no. As he totally
              cousins warrant besides ashamed do. Therefore by applauded
              acuteness sup-ported affection it. Except had sex limits county
              enough the figure former add. Do sang my he next mr soon.
            </p>
            <button className="btn-news">More</button>
            <h2>SPECIAL ATETION</h2>
            <h4>12.09.2018</h4>
            <p style={{ color: "#000" }}>
              Admiration we surrounded possession he. Remarkably did increasing
              pccasional too its difficulty far especially. Known tiled but
              sorry joy balls. Bed sudden manner indeed fat now feebly.
              Therefore by
            </p>
            <button className="btn-news">More</button>
          </div>
        </div>
      </section>

      <div className="display-footer">
        <div className="footer">
          <h3 className="h3">SIGN UP FOR COMPANY NEWS</h3>
          <p className="p">
            WOU WILL RECEIVE NOTIFICATIONS ABOUT NEW COMPANY NEWS
          </p>
          <div className="form">
            <input className="input" placeholder="E - mail" />
            <button className="btn">SUBSCRIBE</button>
          </div>
        </div>
        <div className="container-footer">
          <img className="items-footer" src="/bg19.jpg" />
          <img className="items-footer" src="/bg20.jpg" />
          <img className="items-footer" src="/bg21.jpg" />
          <img className="items-footer" src="/bg23.jpg" />
          <img className="items-footer" src="/bg22.jpg" />
        </div>
        <div style={{ paddingTop: "7%" }}>
          <div className="footer-buttom">
            <div className="description-footer">
              <h2 className="h2">Mr.GOPONOV</h2>
              <div className="title-ftr">
                Far concluded not his something extremity. Want four we face an
                he gate. On he of played he ladies answer little though nature.
                Blessing oh do pleasure as so formerly. Took four spot soon led
                size you.
              </div>
            </div>
            <div className="description-footer">
              <h2 className="h2">USEFULL LINKS</h2>
              <div className="title-ftr">
                <div>Vacancy</div>
                <div>Contact</div>
                <div>Gallery</div>
              </div>
            </div>
            <div className="description-footer">
              <h2 className="h2">CONTACT</h2>
              <div className="title-ftr">
                <div>Address : pr-t Tekstilshikov, d. 17, office 3</div>
                <div>Number : 8 (800) 987-65-43</div>
                <div>E-mail : Interior_life@yandex.ru</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
