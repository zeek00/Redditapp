import React from 'react'
import styles from '../Post.module.css'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

//const styles = require("../Post.module.css")
export default function UpVote() {
  return (
    <div>
        <BsFillArrowUpCircleFill className={styles.voteFont} />
    </div>
  )
}
