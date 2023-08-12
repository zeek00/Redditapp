import React from 'react'
import styles from './Button.module.css'
import { NavLink } from 'react-router-dom';
import PostsRoutes from '../../app/routes';

export default function Button(props) {
  return (
    <NavLink to={props.to} className={styles.button} >
        {props.name}
    </NavLink>
  );
}
