import React, { createContext, useState } from 'react'

const Context = createContext()

const ContextProvider = ({children}) => {
  const [allPhotos, setAllPhotos] = useState([])

  return (
    <Context.Provider value={{allPhotos}}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
