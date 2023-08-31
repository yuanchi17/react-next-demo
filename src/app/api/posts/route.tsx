// NOTE: http://localhost:3000/api/posts

import { NextResponse } from 'next/server'

const url = 'https://jsonplaceholder.typicode.com/posts'

export const GET = async () => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ message: err.message })
  }
}

export const POST = async (req: Request) => {
  const { title, body, userId } = await req.json()
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body, userId }),
    })
    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ message: err.message })
  }
}
