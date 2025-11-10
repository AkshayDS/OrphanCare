import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Calendar, Camera, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import styles from '../styles/ProfileComplete.module.css';

const MAX_IMAGE_MB = 2;

const DonorProfileComplete: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: '',
    address: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      if (profileImage?.startsWith('blob:')) URL.revokeObjectURL(profileImage);
    };
  }, [profileImage]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please select an image file (JPG, PNG, etc.).');
      return;
    }
    if (file.size > MAX_IMAGE_MB * 1024 * 1024) {
      setError(`Image must be ≤ ${MAX_IMAGE_MB}MB.`);
      return;
    }

    setError(null);
    const url = URL.createObjectURL(file);
    setProfileImage(url);
  };

  const handleRemoveImage = () => {
    if (profileImage?.startsWith('blob:')) URL.revokeObjectURL(profileImage);
    setProfileImage(null);
    setError(null);
    const input = document.getElementById('profilePic') as HTMLInputElement | null;
    if (input) input.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      navigate('/donor/dashboard');
    }, 1500);
  };

  return (
    <div className={styles.profileComplete}>
      <Header userType="donor" />

      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className={styles.header}>
            <h1>Complete your profile</h1>

            <motion.div
              className={styles.avatarSection}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              <div className={styles.avatarWrap} aria-label="Profile photo">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className={styles.avatarImg}
                  />
                ) : (
                  <div className={styles.avatarPlaceholder}>
                    <User size={56} />
                  </div>
                )}

                <button
                  type="button"
                  className={styles.cameraBtn}
                  onClick={() => document.getElementById('profilePic')?.click()}
                  aria-label={profileImage ? 'Change photo' : 'Upload photo'}
                >
                  <Camera size={18} />
                </button>
                <input
                  id="profilePic"
                  type="file"
                  accept="image/*"
                  className={styles.hiddenInput}
                  onChange={handleImageUpload}
                />
              </div>

              <div className={styles.avatarActions}>
                {profileImage && (
                  <button
                    type="button"
                    className={styles.removeBtn}
                    onClick={handleRemoveImage}
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>
                )}
                <p className={styles.helpText}>JPG or PNG, up to {MAX_IMAGE_MB}MB.</p>
                {error && <p className={styles.errorText}>{error}</p>}
              </div>
            </motion.div>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <motion.div
              className={styles.formRow}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className={styles.formGroup}>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Enter your first name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Enter your last name"
                />
              </div>
            </motion.div>

            <motion.div
              className={styles.formRow}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className={styles.formGroup}>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <div className={styles.dateField}>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className={styles.formGroup}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className={styles.select}
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </motion.div>

            <motion.div
              className={styles.formGroup}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className={`${styles.input} ${styles.textarea}`}
                placeholder="Enter your complete address"
                rows={4}
              />
            </motion.div>

            <motion.button
              type="submit"
              className={`${styles.btn} ${styles.btnConfirm}`}
              disabled={isLoading}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLoading ? <span className="spinner"></span> : 'Confirm & Save'}
            </motion.button>
          </form>

          <br />
          <div className={styles.footer}>
            <span>OrphanCare Network</span>
          </div>
        </motion.div>

        <div className={styles.decorations}>
          <div className={styles.decoration1}>
            <User size={24} />
          </div>
          <div className={styles.decoration2}>
            <Calendar size={24} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DonorProfileComplete;
