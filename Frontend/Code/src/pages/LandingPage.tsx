import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Gift, BookOpen, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import styles from '../styles/LandingPage.module.css';

const LandingPage: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.landingPage}>
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className={styles.heroTitle}>
              Hope <span className={styles.highlight}>begins here</span>
            </h1>
            <p className={styles.heroText}>
              Welcome to OrphanCare Network.  
              You can be the reason a child smiles today.  
              Join our mission to bring hope and happiness to children in need.
            </p>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link to="/register" className={styles.ctaBtn}>
                💖 Get Started
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className={styles.mission}>
        <div className={styles.container}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             Our Mission 
          </motion.h2>

          <motion.p 
            className={styles.missionText}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            To connect caring donors with
             orphanages in need, creating a
             bridge of hope that transforms lives
            and builds stronger communities 
            for our children.
          </motion.p>

          <div className={styles.missionImages}>
            <motion.div 
              className={styles.imageCard}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-d4cc-61f7-b320-b124690c1c18/raw?se=2025-09-23T09%3A38%3A20Z&sp=r&sv=2024-08-04&sr=b&scid=91e7adbb-9421-50ec-990b-82d9bc513f38&skoid=1e4bb9ed-6bb5-424a-a3aa-79f21566e722&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-22T20%3A51%3A59Z&ske=2025-09-23T20%3A51%3A59Z&sks=b&skv=2024-08-04&sig=6llAFdkucGCPPSHDDqNeWfNYSrJjarLCCKWKEH4ITD0%3D"
                alt="Children learning together"
                loading="lazy"
              />
            </motion.div>
            <motion.div 
              className={styles.imageCard}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://sdmntprnortheu.oaiusercontent.com/files/00000000-2340-61f4-b88b-cf41d82b51ed/raw?se=2025-09-23T09%3A38%3A20Z&sp=r&sv=2024-08-04&sr=b&scid=941c6b60-a7b1-54d1-b38c-4121024f880f&skoid=1e4bb9ed-6bb5-424a-a3aa-79f21566e722&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-23T01%3A48%3A09Z&ske=2025-09-24T01%3A48%3A09Z&sks=b&skv=2024-08-04&sig=J7jw3rr4yW5iOiY4T6AArfnqhxIfL6UcxgVRVpNER70%3D"
                alt="Happy children playing"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Donate Section */}
      <section id="donate" className={styles.howToDonate}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>How to Donate?</h2>
          <div className={styles.donationSteps}>
            <motion.div 
              className={styles.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.stepIcon}>
                <Users size={32} />
                <span className={styles.stepNumber}>1</span>
              </div>
              <h3>Register as Donor</h3>
            </motion.div>

            <div className={styles.heartbeat}>
              <svg viewBox="0 0 200 50" className={styles.heartbeatLine}>
                <path d="M0,25 L50,25 L60,5 L70,45 L80,15 L90,35 L100,25 L200,25" 
                      stroke="var(--primary-maroon)" strokeWidth="2" fill="none" />
              </svg>
              <Heart size={24} fill="var(--primary-maroon)" color="var(--primary-maroon)" className={styles.heartIcon} />
            </div>

            <motion.div 
              className={styles.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className={styles.stepIcon}>
                <BookOpen size={32} />
                <span className={styles.stepNumber}>2</span>
              </div>
              <h3>View orphanage requirements</h3>
            </motion.div>

            <div className={styles.heartbeat}>
              <svg viewBox="0 0 200 50" className={styles.heartbeatLine}>
                <path d="M0,25 L50,25 L60,5 L70,45 L80,15 L90,35 L100,25 L200,25" 
                      stroke="var(--primary-maroon)" strokeWidth="2" fill="none" />
              </svg>
            </div>

            <motion.div 
              className={styles.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className={styles.stepIcon}>
                <Gift size={32} />
                <span className={styles.stepNumber}>3</span>
              </div>
              <h3>Donate what you want</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <motion.div 
            className={styles.aboutCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className={styles.sectionTitle}>About Us</h2>
            <p>
              OrphanCare Network is a dedicated platform that bridges the gap between 
              generous donors and orphanages in need. We believe that every child deserves 
              love, care, and opportunity to thrive.
            </p>
            <p>
              Through our platform, we facilitate meaningful connections that transform 
              lives, ensuring that resources reach the children who need them most while 
              making the donation process transparent and impactful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h3>OrphanCare Network</h3>
              <p>OrphanCare Network is a Non-Profit Organization.</p>
            </div>
            <div className={styles.footerSection}>
              <h4>Contact Us</h4>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <Mail size={16} />
                  <span>adminforquaries@gmail.com</span>
                </div>
                <div className={styles.contactItem}>
                  <Phone size={16} />
                  <span>+91 9113676054</span>
                </div>
              </div>
            </div>
            <div className={styles.footerSection}>
              <h4>Follow Us</h4>
              <div className={styles.socialLinks}>
                <a href="https://www.facebook.com/share/1ELHJY3XaP/" aria-label="Facebook"><Facebook size={20} /></a>
                <a href="https://www.instagram.com/orphan_cn?igsh=ZGtybWQ1ZzYzbXE4" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="https://x.com/orphan_cn?t=usWdg3W6zXSk_TSXJ3UWEw&s=08" aria-label="Twitter"><Twitter size={20} /></a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2025 OrphanCare Network. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
