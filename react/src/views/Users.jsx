import { useEffect, useState } from 'react'
import axiosClient from '../axios-client.js'
import { Link } from 'react-router-dom'

export default function Users () {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
    axiosClient.get('/users')
      .then(({ data }) => {
        setLoading(true)
        console.log({ data })
      })
      .catch(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Users</h1>
        <Link to='/users/new' className='btn-add'>Add new</Link>
      </div>
    </div>
  )
}
