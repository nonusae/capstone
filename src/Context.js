import React, { createContext, useState, useEffect } from 'react'

const Context = createContext()
const URL = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

const ContextProvider = ({children}) => {
  const [allPhotos, setAllPhotos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL)
      const data = await response.json()

      setAllPhotos(data)
    }

    fetchData()
  }, [])

  return (
    <Context.Provider value={{allPhotos}}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
