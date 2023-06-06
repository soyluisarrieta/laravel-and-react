import { createContext, useContext, useState } from 'react'

// 1. Create context
const StateContext = createContext({
  currentUser: null,
  token: null,
  setUser: () => {},
  setToken: () => {}
})

// 2. Create provider of context
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [token, _setToken] = useState(window.localStorage.getItem('ACCESS_TOKEN'))

  const setToken = (token) => {
    _setToken(token)
    if (token) {
      window.localStorage.setItem('ACCESS_TOKEN', token)
    } else {
      window.localStorage.removeItem('ACCESS_TOKEN')
    }
  }

  return (
    <StateContext.Provider value={{
      user,
      token,
      setUser,
      setToken
    }}
    >
      {children}
    </StateContext.Provider>
  )
}

// 3. Create hook to consume context
export const useStateContext = () => useContext(StateContext)
