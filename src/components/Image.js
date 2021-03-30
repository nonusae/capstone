import React, {useState, useContext} from 'react';
import { Context } from '../Context'

function Image({className, img}) {
  const [hovered, setHovered] = useState(false)
  const { toggleFavorite, addItemToCart, cartItems, removeItemFromCart } = useContext(Context)

  const heartIcon = () => {
    if (img.isFavorite) {
      return <i onClick={() => toggleFavorite(img.id)} className='ri-heart-fill favorite'></i>
    } else if (hovered) {
      return hovered && <i onClick={() => toggleFavorite(img.id)} className='ri-heart-line favorite'></i>
    }
  }

  const cartIcon = () => {
    const alreadyInCart = cartItems.some(item => item.id === img.id)

    if (alreadyInCart) {
      return <i className="ri-shopping-cart-fill cart" onClick={() => removeItemFromCart(img)}></i>
    } else if (hovered){
      return <i className="ri-add-circle-line cart" onClick={() => addItemToCart(img)}/>
    }
  }

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img className="image-grid" src={img.url} alt=""/>
      {heartIcon()}
      {cartIcon()}
    </div>
  )
}

export default Image;
