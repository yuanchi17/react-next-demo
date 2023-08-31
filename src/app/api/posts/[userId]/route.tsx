// NOTE: http://localhost:3000/api/posts/{id}

import { NextResponse } from 'next/server'

const url = 'https://jsonplaceholder.typicode.com/posts'

export const GET = async (req: Request, { params }: { params: { userId: number } }) => {
  try {
    const res = await fetch(`${url}?userId=${params.userId}`)
    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ message: err.message })
  }
}
