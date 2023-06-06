import { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Signup () {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmationRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value
    }

    console.log({ payload })
  }

  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className='form'>
        <form onSubmit={onSubmit}>
          <h1 className='title'>Login into your account</h1>
          <input ref={nameRef} type='text' placeholder='Full name' />
          <input ref={emailRef} type='email' placeholder='Email' />
          <input ref={passwordRef} type='password' placeholder='Password' />
          <input ref={passwordConfirmationRef} type='password' placeholder='Password Confirmation' />
          <button className='btn btn-block'>Signup</button>
          <p className='message'>
            Already registered? <Link to='/login'>Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
