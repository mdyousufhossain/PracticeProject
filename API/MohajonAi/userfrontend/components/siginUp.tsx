'use client'
import { ChangeEvent, FormEvent, useState } from 'react'

type MemberRegisterState = {
  name: string
  email: string
  password: string
  successMessage: string | null
  errorMessage: Error | unknown
  redirectUrl: string | null
}

const MemberRegister: React.FC = () => {
  const [state, setState] = useState<MemberRegisterState>({
    name: '',
    email: '',
    password: '',
    successMessage: null,
    errorMessage: null,
    redirectUrl: null,
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch(
        'http://localhost:5050/api/v1/members/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: state.name,
            email: state.email,
            password: state.password,
          }),
        }
      )

      const data = await response.json()

      if (response.ok) {
        // Set the success message and redirect URL.
        setState({
          ...state,
          successMessage: 'Member registered successfully!',
          redirectUrl: '/authenticate',
        })
      } else if (response.status === 400) {
        console.log(`HTTP response code: ${response.status}`)
        setState({
          ...state,
          errorMessage: 'Fill in all the required information',
          redirectUrl: '/something',
        })
      } else if (response.status === 409) {
        console.log(`HTTP response code: ${response.status}`)
        setState({
          ...state,
          errorMessage: 'Email is already in use',
          redirectUrl: '/login',
        })
      }
    } catch (Error ) {
      // Set the error message.
      setState({ ...state, errorMessage: Error.message })
    }
  }

  // Render the success message, error message, or redirect the user based on the state variable.

  return (
    <form
      method='post'
      action={'http://localhost:5050/api/v1/members/register'}
      onSubmit={handleSubmit}
    >
      <div className='p-4 m-4 text-cyan-600'>
        <div className='p-4'>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={state.name}
            onChange={handleInputChange}
            className='text-black-600'
          />
        </div>
        <div className='p-4'>
          <label>email:</label>

          <input
            type='email'
            name='email'
            placeholder='Email'
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div className='p-4'>
          <label>password:</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default MemberRegister
