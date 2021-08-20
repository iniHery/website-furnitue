import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="background">
      <div className="navmenu">
        <nav className="navi">
          <div className="logo">Hery.Furniture</div>
          <ul>
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="list">Galery</a>
            </li>
            <li>
              <a href="galery">Contact</a>
            </li>
          </ul>
          <div className="contact">(+62) 819 - 9939 - 2230</div>
        </nav>
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
    </div>
  );
}
