import React from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
    return (
        <div className={styles.contact}>
            <h2>Contactez-moi</h2>
            <p>Envoyez-moi un message à l'adresse suivante : contact@exemple.com</p>
        </div>
    );
};

export default Contact;
