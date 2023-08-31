import { notFound } from 'next/navigation'

export default function DemoNotFound({ params }: { params: { userId: string } }) {
  const userId = params?.userId
  if (userId === 'errorrrrr') throw new Error('Demo Error')
  else if (userId === '17') notFound()

  return <div>userId: {userId}</div>
}
