import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
    return (
        <div className={styles.about}>
            <h2>À propos de moi</h2>
            <p>Voici des informations à propos de mon parcours et de mes projets</p>
        </div>
    );
};

export default About;
