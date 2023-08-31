'use client'

import { useState, useEffect } from 'react'

export default function Member() {
  const [account, setAccount] = useState('')
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    setIsLogin(!!window.localStorage.getItem('demo-userId'))
  }, [])

  return (
    <>
      <h1>Member</h1>
      <div>Login</div>

      {isLogin ? (
        <button
          style={{ margin: '5px' }}
          onClick={() => {
            window.localStorage.removeItem('demo-userId')
            window.location.reload()
          }}
        >
          登出
        </button>
      ) : (
        <>
          <input
            placeholder='account'
            type='text'
            style={{ margin: '5px' }}
            onChange={e => setAccount(e.target.value)}
          />
          <button
            onClick={() => {
              window.localStorage.setItem('demo-userId', account)
              window.location.reload()
            }}
          >
            登入
          </button>
        </>
      )}
    </>
  )
}
