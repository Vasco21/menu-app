import React from 'react';
import { useIntl } from 'react-intl';
import Switch from 'react-switch';
import { FaHeart, FaBars } from 'react-icons/fa';
import reactLogo from './assets/logo.png';


const Main = ({
    collapsed,
    rtl,
    image,
    handleToggleSidebar,
    handleCollapsedChange,
    handleRtlChange,
    handleImageChange,
  }) => {
    const intl = useIntl();
    return (
      <main>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
        <header>
          <h1>
            <img width={80} src={reactLogo} alt="react logo" /> {intl.formatMessage({ id: 'Creative Power Developer' })}
          </h1>
          <p>{intl.formatMessage({ id: 'With Creativity we can impliment new features and overcome our Dreams!!!' })}</p>
          <div className="social-bagdes">
            <a
              href="https://github.com/Vasco21/menu-app"
              target="_blank"
              rel="Vasco Eti"
            >
              <img
                alt="GitHub stars"
                src="https://img.shields.io/github/stars/Vasco21/menu-app?style=social"
              />
            </a>
            <a
              href="https://github.com/Vasco21/menu-app"
              target="_blank"
              rel="Vasco Eti"
            >
              <img
                alt="GitHub forks"
                src="https://img.shields.io/github/forks/Vasco21/menu-app?style=social"
              />
            </a>
          </div>
        </header>
        <div className="block ">
          <Switch
            height={16}
            width={30}
            checkedIcon={false}
            uncheckedIcon={false}
            onChange={handleCollapsedChange}
            checked={collapsed}
            onColor="#219de9"
            offColor="#bbbbbb"
          />
          <span> {intl.formatMessage({ id: 'collapsed' })}</span>
        </div>
        <div className="block">
          <Switch
            height={16}
            width={30}
            checkedIcon={false}
            uncheckedIcon={false}
            onChange={handleRtlChange}
            checked={rtl}
            onColor="#219de9"
            offColor="#bbbbbb"
          />
          <span> {intl.formatMessage({ id: 'rtl' })}</span>
        </div>
        <div className="block">
          <Switch
            height={16}
            width={30}
            checkedIcon={false}
            uncheckedIcon={false}
            onChange={handleImageChange}
            checked={image}
            onColor="#219de9"
            offColor="#bbbbbb"
          />
          <span> {intl.formatMessage({ id: 'image' })}</span>
        </div>
  
        <footer>
          <small>
            © {new Date().getFullYear()} made with <FaHeart style={{ color: 'red' }} /> by -{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://myportfolio-webapp.herokuapp.com">
                Vasco Eti
            </a>
          </small>
          <br />
          <div className="social-bagdes">
            <a href="https://github.com/Vasco21" target="_blank" rel="noopener noreferrer">
              <img
                alt="GitHub followers"
                src="https://img.shields.io/github/followers/Vasco21?label=github&style=social"
              />
            </a>
            <a href="https://twitter.com/Qvary34" target="_blank" rel="noopener noreferrer">
              <img
                alt="Twitter Follow"
                src="https://img.shields.io/twitter/follow/Vasco21?label=twitter&style=social"
              />
            </a>
          </div>
        </footer>
      </main>
    );
  };
  
  export default Main;