import React from 'react'
import styles from '../Post.module.css'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'

export default function DownVote() {
  return (
    <div>
        <BsFillArrowDownCircleFill className={styles.voteFont} />
    </div>
  )
}
