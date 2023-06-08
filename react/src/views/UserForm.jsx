import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosClient from '../axios-client.js'

export default function UserForm () {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
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

  return (
    <div>
      UserForm
    </div>
  )
}
