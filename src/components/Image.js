import React, {useState, useContext} from 'react';
import { Context } from '../Context'

function Image({className, img}) {
  const [hovered, setHovered] = useState(false)
  const { toggleFavorite } = useContext(Context)

  const heartIcon = () => {
    if (img.isFavorite) {
      return <i onClick={() => toggleFavorite(img.id)} className='ri-heart-fill favorite'></i>
    } else {
      return hovered && <i onClick={() => toggleFavorite(img.id)} className='ri-heart-line favorite'></i>
    }
  }

  const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img className="image-grid" src={img.url} alt=""/>
      {heartIcon()}
      {cartIcon}
    </div>
  )
}

export default Image;
