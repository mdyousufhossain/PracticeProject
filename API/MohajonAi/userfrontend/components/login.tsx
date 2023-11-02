'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
type MemberLogin = {
  email: string
  password: string
  successMessage: string | null
  errorMessage: Error | unknown
  statusCode: number | any

}

const MemberLogin: React.FC = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    successMessage: '',
    errorMessage: '',
    statusCode: 0,
  })

  const router = useRouter()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
        console.log(user.email , user.password)
        const response = await fetch(
            'http://localhost:5050/api/v1/member/login', //localhost:5050/api/v1/member/login
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: user.email,
                password: user.password,
              }),
              credentials: 'include'
            }
          )

          const data  = await response.json()
          if (response.ok) {
            // Set the success message and redirect URL.
            console.log(data)
            console.log(response)
            setUser({
              ...user,
              successMessage: 'Member registered successfully!',
              statusCode: response.status,
            })
    
            router.push('/onboarding')
          } else if (response.status === 400) {
            console.log(`HTTP response code: ${response.status}`)
            setUser({
              ...user,
              errorMessage: 'duh',
              statusCode: response.status,
            })
  
          } 
    } catch (Error) {
        setUser({
          ...user,
          errorMessage:Error.message,
        })
        console.log(user.errorMessage)
    }
  }
  return (
      <>
      <div>
        <form 
        method='post'
        action={'http://localhost:5050/api/v1/member/login'}
        onSubmit={handleSubmit}>
          <div className='bg-primary-100 text-text-dark500_light700  flex-center flex-col'>
            <div className='p-4'>
              <label>Name:</label>
              <input
                type='text'
                name='email'
                placeholder='Name'
                value={user.email}
                onChange={handleInputChange}
                className={`px-2 py-2 rounded-sm`}
                required
              />
            </div>
            <div className='p-4'>
              <label>Name:</label>
              <input
                type='text'
                name='password'
                placeholder='Name'
                value={user.password}
                onChange={handleInputChange}
                className={`px-2 py-2 rounded-sm`}
                required
              />
            </div>
          </div>
          <button
          className='btn-secondary py-2 px-6 text-dark500_light700 rounded-sm '
          type='submit'
        >
          Submit
        </button>
        </form>

        <h1>{user.errorMessage}</h1>
      </div>
    </>
  )
}


export default MemberLogin
