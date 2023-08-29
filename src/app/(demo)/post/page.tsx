"use client"

import Link from 'next/link'
import styles from '../../../page.module.css'

export default function Post() {
  return (
    <div className={styles.column_center}>
      <h1>Post</h1>
      <li>
        <Link href="/post/1">POST/1</Link>
      </li>
      <small>P.S. 不確定是不是因為 POST 包在 /src/app/(demo) 內，導致如果是從 Home 頁進入 /post/[id] 的話，不會出現 loading 畫面，<br/>但如果從 /post 進入 /post/[id] 的話就會出現。</small>
    </div>
  )
}