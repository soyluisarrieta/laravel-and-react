import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosClient from '../axios-client.js'

export default function UserForm () {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(false)
  const [user, setUser] = useState({
    id: null,
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

  useEffect(() => {
    if (!id) return

    setLoading(true)
    axiosClient.get(`/users/${id}`)
      .then(({ data }) => {
        setUser(data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <h1>
        {user.id
          ? `Update User: ${user.name}`
          : 'New User'}
      </h1>
      <div className='card animated fadeInDown'>
        {loading && (
          <div className='text-center'>Loading...</div>
        )}

        {errors && (
          <div className='alert'>
            {Object.keys(errors).map(key => (
              <p key={key}>{errors[key][0]}</p>
            ))}
          </div>
        )}

        {!loading && (
          <form onSubmit={handleSubmit}>
            <input
              onChange={({ target }) => setUser({ ...user, name: target.value })}
              value={user.name}
              type='text'
              placeholder='Name'
            />
            <input
              onChange={({ target }) => setUser({ ...user, email: target.value })}
              value={user.email}
              type='email'
              placeholder='Email'
            />
            <input
              onChange={({ target }) => setUser({ ...user, password: target.value })}
              type='password'
              placeholder='Password'
            />
            <input
              onChange={({ target }) => setUser({ ...user, password_confirmation: target.value })}
              type='password'
              placeholder='Password Confirmation'
            />
            <button type='submit' className='btn'>Save</button>
          </form>
        )}
      </div>
    </>
  )
}
