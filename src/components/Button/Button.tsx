// Composant Button
import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    label: string;
    color: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, color, onClick }) => {
    return (
        <button
            className={styles.button}
            style={{ backgroundColor: color }}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
