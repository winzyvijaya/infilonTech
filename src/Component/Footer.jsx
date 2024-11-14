import React from 'react';
import './FooterComponent.css';

function LogoDescription() {
    return (
        <div className="footer-container">
            <div className="logo-image">
                <img 
                    src="https://placeholder.pics/svg/37x29" 
                    alt="logo icon" 
                />
                <h1 className="brand-name">whitepace</h1>
            </div>
            <div className="description-text">
                <p>
                    whitepace was created for the new ways we live and work. We make a better workspace around the world.
                </p>
            </div>
        </div>
    );
}

const ProductSection = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Product</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}><a style={styles.linkHighlighted} href="#">Overview</a></li>
        <li style={styles.listItem}><a style={styles.link} href="#">Pricing</a></li>
        <li style={styles.listItem}><a style={styles.link} href="#">Customer stories</a></li>
      </ul>
    </div>
  );
};

const ResourcesSection = () => {
  return (
    <div className="resources-section">
      <h2 className="resources-title">Resources</h2>
      <ul className="resources-list">
        <li><a href="#" className="resources-link">Blog</a></li>
        <li><a href="#" className="resources-link">Guides & tutorials</a></li>
        <li><a href="#" className="resources-link">Help center</a></li>
      </ul>
    </div>
  );
}

function CompanySection() {
    return (
        <div className="company-section">
            <h2>Company</h2>
            <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Media kit</a></li>
            </ul>
        </div>
    );
}

function TryButtonSection() {
    return (
        <div className="try-button-section">
            <h2 className="title">Try It Today</h2>
            <p className="description">Get started for free.<br/>Add your whole team as your needs grow.</p>
            <button className="start-today-button">
                Start today <span className="icon">→</span>
            </button>
        </div>
    );
}

function TermsAndConditions() {
    return (
        <footer className="footer">
            <ul className="footer-list">
                <li className="footer-item">
                    <a href="#" className="footer-link">
                        <span className="icon-placeholder"><img src="https://placeholder.pics/svg/19x19" alt="icon" width="19" height="19"/></span>
                        English
                        <span className="arrow-placeholder"><img src="https://placeholder.pics/svg/20x14" alt="arrow" width="20" height="14"/></span>
                    </a>
                </li>
                <li className="footer-item"><a href="#" className="footer-link">Terms & privacy</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Security</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Status</a></li>
                <li className="footer-item"><span className="footer-text">©2021 Whitespace LLC.</span></li>
            </ul>
        </footer>
    );
}

function SocialIcons() {
    return (
        <div className="social-icons">
            <img src="https://placeholder.pics/svg/32x32" alt="Facebook" className="icon" />
            <img src="https://placeholder.pics/svg/32x32" alt="Twitter" className="icon" />
            <img src="https://placeholder.pics/svg/32x32" alt="LinkedIn" className="icon" />
        </div>
    );
}

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <LogoDescription />
            <ProductSection />
            <ResourcesSection />
            <CompanySection />
            <TryButtonSection />
            <TermsAndConditions />
            <SocialIcons />
        </div>
    );
}
const styles = {
    container: {
      backgroundColor: '#003366',
      padding: '15px',
      width: '205.25px',
    },
    title: {
      color: '#FFFFFF',
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: '18px',
      letterSpacing: '-0.36px',
      lineHeight: '21.78px',
      marginBottom: '15px',
    },
    list: {
      listStyleType: 'none',
      padding: 0,
    },
    listItem: {
      marginBottom: '15px',
    },
    link: {
      color: '#FFFFFF',
      textDecoration: 'none',
      fontFamily: 'Inter',
      fontWeight: 400,
      fontSize: '16px',
      letterSpacing: '-0.32px',
      lineHeight: '20px',
    },
    linkHighlighted: {
      color: '#FFE492',
      textDecoration: 'none',
      fontFamily: 'Inter',
      fontWeight: 400,
      fontSize: '16px',
      letterSpacing: '-0.32px',
      lineHeight: '20px',
    },
  };