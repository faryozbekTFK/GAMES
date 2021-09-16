import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import facebook from "./imgs/facebook.svg";
import twitter from "./imgs/twitter.svg";
import telegram from "./imgs/telegram.svg";
import instagram from "./imgs/instagram.svg";

function App() {
  return (
    <footer className="footer bg-dark d-flex align-items-center">
      <div className="about d-flex flex-column">
        <h3 className="logo text-warning font-weight-lighter">Logo</h3>
        <h6 className="about">
          Copyright © 2021. LogoIpsum. All rights reserved.
        </h6>
        <div className="messengers d-flex">
          <div className="messengerBg bg-white">
            <img src={facebook} alt="facebook" />
          </div>
          <div className="messengerBg bg-white">
            <img src={twitter} alt="twitter" />
          </div>
          <div className="messengerBg bg-white">
            <img src={telegram} alt="telegram" />
          </div>
          <div className="messengerBg bg-white">
            <img src={instagram} alt="instagram" />
          </div>
        </div>
      </div>

      <div className="menus d-flex">
        <div className="menu">
          <h6>Services</h6>
          <h6>Email Marketing</h6>
          <h6>Campaigns</h6>
          <h6>Branding</h6>
          <h6>Offline</h6>
        </div>
        <div className="menu">
          <h6>About</h6>
          <h6>Our Story</h6>
          <h6>Benefits</h6>
          <h6>Team</h6>
          <h6>Careers</h6>
        </div>
      </div>
    </footer>
  );
}

export default App;
