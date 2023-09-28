import React from 'react'
import styles from './Button.module.css'
import { NavLink } from 'react-router-dom';

export default function Button({to, name}) {
  return (
    <NavLink data-testid="button-1" to={to} className={styles.button} >
        {name}
    </NavLink>
  );
}
