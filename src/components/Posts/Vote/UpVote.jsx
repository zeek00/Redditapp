import React from 'react'
import styles from '../Post.module.css'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'


export default function UpVote() {
  return (
    <div>
        <BsFillArrowUpCircleFill className={styles.voteFont} />
    </div>
  )
}
