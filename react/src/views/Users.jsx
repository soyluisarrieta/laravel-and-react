import { useEffect, useState } from 'react'
import axiosClient from '../axios-client.js'

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
    <>
      <h1>Users</h1>
    </>
  )
}
