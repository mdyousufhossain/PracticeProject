'use client'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

type MemberRegisterState = {
  name: string
  email: string
  password: string
  successMessage: string | null
  errorMessage: Error | any
  statusCode: string | null | number
  filled: any
}

const MemberRegister: React.FC = () => {
  const [state, setState] = useState<MemberRegisterState>({
    name: '',
    email: '',
    password: '',
    successMessage: null,
    errorMessage: null,
    statusCode: null,
  })

  const router = useRouter();

  

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
          statusCode: response.status,
        })
      
        router.push('/onboarding')
      } else if (response.status === 400) {
        console.log(`HTTP response code: ${response.status}`)
        setState({
          ...state,
          errorMessage: 'Fill in all the required information',
          statusCode: response.status,
        })
     
        router.push('/balsal')
      } else if (response.status === 409) {
        console.log(`HTTP response code: ${response.status}`)
        setState({
          ...state,
          errorMessage: 'Email is already in use',
          statusCode: response.status,
        })

        router.push('/bal')
      }
    } catch (Error) {
      // Set the error message.
      setState({ ...state, errorMessage: Error.message })
    }
    console.log(state.statusCode)
  }

  const focusColor = state.statusCode === 409 ? 'focus:outline-black-500' : 'focus:outline-red-500'
  // Render the success message, error message, or redirect the user based on the state variable.
  return (
    <>
      <form
        method='post'
        action={'http://localhost:5050/api/v1/members/register'}
        onSubmit={handleSubmit}
      >
        <div className='bg-primary-100 text-text-dark500_light700  flex-center flex-col'>
          <div className='p-4'>
            <label>Name:</label>
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={state.name}
              onChange={handleInputChange}
              className={`px-2 py-2 rounded-sm  ${focusColor}`}
              required
            />
          </div>
          <div className='p-4'>
            <label>email:</label>

            <input
              type='email'
              name='email'
              placeholder='Email'
              className={`px-2 py-2 rounded-sm ${focusColor}`}
              value={state.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='p-4'>
            <label>password:</label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              className={`px-2 py-2 rounded-sm ${focusColor}`}
              value={state.password}
              onChange={handleInputChange}
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
      <div>
        <h1>this is : {(state.statusCode)} </h1>
        <h1> {state.errorMessage}</h1>
      </div>
    </>
  )
}

export default MemberRegister
