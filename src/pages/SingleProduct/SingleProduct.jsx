import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link, useParams } from 'react-router-dom'

import { productsFavorite } from '../../data/dataProdact'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { MdBalance } from 'react-icons/md'
import { GiShoppingCart } from 'react-icons/gi'

import photo from '../../images/singleProduct/6cb273a3680abcf0fe3f53c7d15dd296.jpg'
import photo2 from '../../images/singleProduct/89107044ce81cae12ccfb7e8225c3526.jpg'
import photo3 from '../../images/singleProduct/d062ce294063a5a8df2cb4d9de01663a.jpg'
import photo4 from '../../images/singleProduct/f7d7a88d9d8bd77b6e4e224559b01738.jpg'
import './SingleProduct.css'
import Button from '../../components/IU/button/Button'
import Stars from '../../components/IU/Stars/Stars';
import { useState } from 'react'
export const loader = ({ request }) => {
  return new URL(request.url)
}

const photoArr = [
  photo,
  photo2,
  photo3,
  photo4,
]
const SingleProduct = () => {
  const { id } = useParams()

  const product = productsFavorite.find(item => item.id == id);
  const [mainPhoto, setMainPhoto] = useState(product.img);
  const [quantity, setQuantity] = useState(1);

  const handleChangeQuantity = (e,method) => {
    if(method === 'inc'){
      setQuantity( prev => prev < product.lengthTotal ? prev + 1 : prev)
    }else if(method === 'dec'){
      setQuantity(prev => prev <= 0 ? 0 : prev - 1)
    }
  }
  const handleChangeMainPhoto = (e) => {
    let img = e.target.src;
    setMainPhoto(img)
  }
  return (
    <main className='product-page'>
      <div className="product-page__container container">
        <div className="product-page__path path">
          <Link to="/" className='product-page__link'>Головна</Link>
          <IoIosArrowForward />
          <Link to="/catalogue" className='product-page__link'>Category</Link>
          <IoIosArrowForward />
          <span to="/" className='product-page__link'>{product.title}</span>
        </div>
        <div className="product-page__contant">
          <div className="product-page__photo-slide photo-slide">
            <div className="photo-slide__main-photo">
              <img src={mainPhoto} alt={product.title} />
            </div>
            <div className="photo-slide__collection">
              {photoArr.map((photo, i) => {
                return (
                  <div key={i} className="photo-slide__collection-photo">
                    <img onClick={handleChangeMainPhoto}  src={photo} alt={`photo ${i}`} />
                  </div>
                )
              })}
            </div>
          </div>
          <div className="product-page__information product-info">
            <div className="product-info__container">
              <div className="product-info__section section-1">
                <h2 className="product-info__name">{product.title}</h2>
                <Stars addClass='product-info__stars' amounStars={product.stars} />
                <div className='product-info__icons'>
                  <button type='button' className='hover-link cart__balance'><MdBalance /></button>
                  <button type='button' className='cart__heart'><AiOutlineHeart /><AiFillHeart className='hover-icon' /></button>
                </div>
                <div className="product-info__status">В наявності</div>
              </div>
              <div className="product-info__section section-2">
                <div className="product-info__discribe">
                  <div className="product-info__property">Торгова марка:</div>
                  <div className="product-info__value">{product.manufacturer}</div>
                </div>
                <div className="product-info__discribe">
                  <div className="product-info__property">Сталь:</div>
                  <div className="product-info__value">{product.garda}</div>
                </div>
                <div className="product-info__discribe">
                  <div className="product-info__property">Сталь:</div>
                  <div className="product-info__value">{product.garda}</div>
                </div>
                <div className="product-info__discribe">
                  <div className="product-info__property">Рукоять:</div>
                  <div className="product-info__value">{product.handle}</div>
                </div>
              </div>
              <div className="product-info__section section-bottom">
                <div className="product-info__price">{product.price}грн.</div>
                <div className="product-info__available">Достурно на сладі {product.lengthTotal} шт.</div>
                <div className="product-info__add-quantity quantity">
                  <button onClick={(e)=>handleChangeQuantity(e, 'dec')} className='quantity__btn'>-</button>
                  <span className='quantity__number'>{quantity}</span>
                  <button onClick={(e)=>handleChangeQuantity(e, 'inc')} className='quantity__btn'>+</button>
                </div>
                <div className="product-info__action-btns">
                  <Button details='product-info__button ' name="В корзину" icon={<GiShoppingCart />} />
                  <Button details='product-info__button _black' name="Купити в 1 клік" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SingleProduct