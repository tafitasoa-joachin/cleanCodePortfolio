import React from 'react';
import styles from './Project.module.css';

const Project: React.FC = () => {
    return (
        <div className={styles.project}>
            <h2>Mes Projets</h2>
            <p>Voici quelques-uns de mes projets passés et en cours</p>
        </div>
    );
};

export default Project;
