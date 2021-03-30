import React, {useState, useContext} from 'react';
import { Context } from '../Context'

function Image({className, img}) {
  const [hovered, setHovered] = useState(false)
  const { toggleFavorite, addItemToCart, cartItems } = useContext(Context)

  const heartIcon = () => {
    if (img.isFavorite) {
      return <i onClick={() => toggleFavorite(img.id)} className='ri-heart-fill favorite'></i>
    } else {
      return hovered && <i onClick={() => toggleFavorite(img.id)} className='ri-heart-line favorite'></i>
    }
  }

  const cartIcon = () => {
    if (cartItems.some(item => item === img)) {
      return <i className="ri-shopping-cart-fill cart"></i>
    } else {
      return hovered && <i className="ri-add-circle-line cart" onClick={() => addItemToCart(img)}/>
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
