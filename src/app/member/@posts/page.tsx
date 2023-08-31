'use client'
import { useState, useEffect } from 'react'

interface postTs {
  body: string
  id: number
  title: string
  userId: number
}

// NOTE: 如果沒有加 async，loading 的頁面好像就不會出現
export default async function Posts() {
  const [postList, setPostList] = useState<postTs[]>([])

  useEffect(() => {
    const getPost = async () => {
      const userId = window.localStorage.getItem('demo-userId')
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

      const datas = (await res.json()) as postTs[]
      console.log(datas)
      if (!datas.length) throw new Error(`此 userId: ${userId} 沒有相關的 posts`)

      setPostList(datas.slice(0, 10))
    }

    getPost()
  }, [])

  return (
    <>
      <div>Posts</div>
      <ol>
        {postList.map(post => (
          <li key={post.id}>
            userId：{post.userId}
            <br />
            {post.title}
          </li>
        ))}
      </ol>
    </>
  )
}
