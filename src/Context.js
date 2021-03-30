import React, { createContext, useState, useEffect } from 'react'

const Context = createContext()
const URL = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

const ContextProvider = ({children}) => {
  const [allPhotos, setAllPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])

  const toggleFavorite = (id) => {
    const updatedPhotos = allPhotos.map(photo => (
      photo.id === id ? {...photo, isFavorite: !photo.isFavorite} : {...photo}
    ))

    setAllPhotos(updatedPhotos)
  }

  const addItemToCart = (item) => {
    setCartItems(cartItems => [...cartItems, item])
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL)
      const data = await response.json()

      setAllPhotos(data)
    }

    fetchData()
  }, [])

  return (
    <Context.Provider value={{allPhotos, toggleFavorite, cartItems, addItemToCart}}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
