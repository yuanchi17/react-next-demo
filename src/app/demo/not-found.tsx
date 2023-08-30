import Link from 'next/link'

import { headers } from 'next/headers'

export default async function NotFound() {
  const headersList = headers()
  const domain = headersList.get('host')
  console.log('domain')
  console.log(domain)
  return (
    <>
      <h2>----- Not Found -----</h2>
      <p>userId 17 is not Found</p>
      <Link href='/demo'>Go Demo Page</Link>
    </>
  )
}
