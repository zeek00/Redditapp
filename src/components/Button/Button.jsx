import React from 'react'
import styles from './Button.module.css'
import { Link } from 'react-router-dom';
import PostsRoutes from '../../app/routes';

export default function Button(props) {
  return (
    <Link to={PostsRoutes.bestPostsRoute()} className={styles.button} >
        {props.name}
    </Link>
  );
}
