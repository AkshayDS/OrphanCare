// src/pages/OrphanageDashboard.tsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  MapPin,
  Phone,
  User,
  Edit,
  Plus,
  ShoppingCart,
  Bed,
  Utensils,
  BookOpen,
  PenTool,
  Package,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import styles from "../styles/OrphanageDashboard.module.css";

interface Requirement {
  category: string;
  name: string;
  quantity: string;
  unit: string;
}

const OrphanageDashboard: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [requirements, setRequirements] = useState<Requirement[]>([]);

  // ✅ Capture new requirement when coming back from AddRequirement page
  useEffect(() => {
    if (location.state && (location.state as any).newRequirement) {
      const newReq = (location.state as any).newRequirement as Requirement;
      setRequirements((prev) => [...prev, newReq]);
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  const renderRequirements = (category: string) => {
    return requirements
      .filter((r) => r.category?.toLowerCase() === category.toLowerCase())
      .map((r, idx) => (
        <motion.div
          key={idx}
          className={styles.requirementCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <span>{r.name}</span>
          <span>
            {r.quantity} {r.unit}
          </span>
        </motion.div>
      ));
  };

  return (
    <div className={styles.orphanageDashboard}>
      <Header userType="orphanage" />

      {/* Profile Section */}
      <section className={styles.profileSection}>
        <motion.div
          className={styles.container}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`${styles.welcomeText} ${styles.typingEffect}`}>
            Welcome back,{" "}
          <span className={styles.highlight}>Abhyadama</span> <span className={styles.wave}>👋</span>
          </h2>
          <p className={`${styles.subtitle} ${styles.fadeIn}`}>
                We’re glad to see you again! Here’s your profile overview.
          </p>


          <motion.div
            className={styles.profileCard}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className={styles.profileIcon}>
              <User size={48} color="var(--primary-maroon)" />
            </div>
            <div className={styles.profileInfo}>
              <h3>Abhyadama</h3>
              <div className={styles.contactItem}>
                <MapPin size={16} />
                <span>Whitefield Post, Bengaluru 560066</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={16} />
                <span>+91 9876543210</span>
              </div>
            </div>
            <Link
              to="/orphanage/profile-complete"
              className={`${styles.btn} ${styles.btnEdit}`}
            >
              <Edit size={16} />
              Edit Your Profile
            </Link>
          </motion.div>

          {/* Stats Section */}
          <div className={styles.statsSection}>
            {[
              { number: "800+", label: "Students" },
              { number: "500+", label: "Male" },
              { number: "300+", label: "Female" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className={styles.statCard}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <hr className={styles.hrrr} />

      {/* Orphanage Needs Section */}
      <section className={styles.needsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Orphanage Needs</h2>

          {/* Basic Needs */}
          <div className={styles.needGroup}>
            <h3>Basic Needs</h3>
            <div className={styles.needCards}>
              {[
                { icon: <ShoppingCart />, title: "Groceries", link: "groceries" },
                { icon: <Bed />, title: "Bedding", link: "bedding" },
                { icon: <Utensils />, title: "Food", link: "food" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className={styles.needCard}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={styles.needIcon}>{item.icon}</div>
                  <span className={styles.needTitle}>{item.title}</span>
                  <button
                    className={styles.addBtn}
                    onClick={() => navigate(`/add-requirement/${item.link}`)}
                  >
                    <Plus size={18} />
                  </button>
                </motion.div>
              ))}

              {renderRequirements("groceries")}
              {renderRequirements("bedding")}
              {renderRequirements("food")}
            </div>
          </div>

          {/* Educational Supplies */}
          <div className={styles.needGroup}>
            <h3>Educational Supplies</h3>
            <div className={styles.needCards}>
              {[
                { icon: <PenTool />, title: "Stationaries", link: "stationaries" },
                { icon: <BookOpen />, title: "Books", link: "books" },
                { icon: <Package />, title: "Others", link: "educational-others" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className={styles.needCard}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  <div className={styles.needIcon}>{item.icon}</div>
                  <span className={styles.needTitle}>{item.title}</span>
                  <button
                    className={styles.addBtn}
                    onClick={() => navigate(`/add-requirement/${item.link}`)}
                  >
                    <Plus size={18} />
                  </button>
                </motion.div>
              ))}

              {renderRequirements("stationaries")}
              {renderRequirements("books")}
              {renderRequirements("educational-others")}
            </div>
          </div>

          {/* Other Needs */}
          <div className={styles.needGroup}>
            <h3>Other Needs</h3>
            <div className={styles.needCardsSingle}>
              <motion.div
                className={styles.needCard}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Package className={styles.needIcon} size={28} />
                <span className={styles.needTitle}>General</span>
                <button
                  className={styles.addBtn}
                  onClick={() => navigate("/add-requirement/general")}
                >
                  <Plus size={18} />
                </button>
              </motion.div>

              {renderRequirements("general")}
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>OrphanCare Network © 2025</p>
      </footer>
    </div>
  );
};

export default OrphanageDashboard;
