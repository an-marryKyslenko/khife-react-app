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
import user1 from '../../images/users/cfb936cfff1d5f9e7c60032e279676fa.jpg'
import user2 from '../../images/users/eb0a9061365d719723d3199f490812ce.jpg'
import './SingleProduct.css'
import Button from '../../components/IU/button/Button'
import Stars from '../../components/IU/Stars/Stars';
import { useState } from 'react'
import Comment from '../../components/IU/Comment/Comment'
import Options from '../../components/IU/Options/Options'
import ProductsSection from '../../components/productsSection/ProductsSection'
export const loader = ({ request }) => {
  return new URL(request.url)
}

const photoArr = [
  photo,
  photo2,
  photo3,
  photo4,
]
const users = [
  {
    name: 'Tolik Tolik',
    rating: 4,
    date: '12.04.2023',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor luctus et consectetur augue. Dolor egestas nunc pellentesque hac fringilla. Enim hac scelerisque eu tellus feugiat vel. Ut ac nec eleifend fermentum dictum ullamcorper phasellus at sed.',
    image: user1
  },
  {
    name: 'Sara Tonik',
    rating: 5,
    date: '01.10.2023',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor luctus et consectetur augue. Dolor egestas nunc pellentesque hac fringilla. Enim hac scelerisque eu tellus feugiat vel. Ut ac nec eleifend fermentum dictum ullamcorper phasellus at sed.',
    image: user2
  },
]
const delivery = [
  {
    id: 'urk',
    country: 'Україна',
    city: ['Київ', 'Вінниця', 'Одеса', 'Харків']
  },
  {
    id: 'pl',
    country: 'Польща',
    city: ['Вроцлав', 'Варшава', 'Гданьск', 'Краків']
  },
  {
    id: 'mol',
    country: 'Молдова',
    city: ['Кешенів', 'Бєльц', 'Тирасполь']
  },
  {
    id: 'chr',
    country: 'Чехія',
    city: ['Прага', 'Брно', 'Плзунь', 'Ліберуц']
  },
]
const SingleProduct = () => {
  const { id } = useParams()
  const product = productsFavorite.find(item => item.id == id);
  const [mainPhoto, setMainPhoto] = useState(product.img);
  const [quantity, setQuantity] = useState(1);

  const handleChangeQuantity = (e, method) => {
    if (method === 'inc') {
      setQuantity(prev => prev < product.lengthTotal ? prev + 1 : prev)
    } else if (method === 'dec') {
      setQuantity(prev => prev <= 0 ? 0 : prev - 1)
    }
  }
  const handleChangeMainPhoto = (e) => {
    let img = e.target.src;
    setMainPhoto(img)
  }

  const [mainDetailsSection, setMainDetailsSection] = useState('description')
  const handleChangeDetailsSection = (e, section) => {
    setMainDetailsSection(section)
  }

  const [deliveryCoutry, setDeliveryCountry] = useState(delivery[0].country)
  const deliveryCity = delivery.find(item => item.country === deliveryCoutry).city;

  const hasComment = true;
  const isAuth = true;
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
                    <img onClick={handleChangeMainPhoto} src={photo} alt={`photo ${i}`} />
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
                  <button onClick={(e) => handleChangeQuantity(e, 'dec')} className='quantity__btn'>-</button>
                  <span className='quantity__number'>{quantity}</span>
                  <button onClick={(e) => handleChangeQuantity(e, 'inc')} className='quantity__btn'>+</button>
                </div>
                <div className="product-info__action-btns">
                  <Button details='product-info__button ' name="В корзину" icon={<GiShoppingCart />} />
                  <Button details='product-info__button _black' name="Купити в 1 клік" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="prooduct-page__details details">
          <div className="details__titles">
            <button className={`details__title ${mainDetailsSection === 'description' ? '_active' : ''}`} onClick={(e) => handleChangeDetailsSection(e, 'description')}>Опис</button>
            <button className={`details__title ${mainDetailsSection === 'characteristic' ? '_active' : ''}`} onClick={(e) => handleChangeDetailsSection(e, 'characteristic')}>Характеристика</button>
            <button className={`details__title ${mainDetailsSection === 'comments' ? '_active' : ''}`} onClick={(e) => handleChangeDetailsSection(e, 'comments')}>Коментарії</button>
            <button className={`details__title ${mainDetailsSection === 'delivery' ? '_active' : ''}`} onClick={(e) => handleChangeDetailsSection(e, 'delivery')}>Доставка</button>
          </div>
          <div className="details__contant">
            <div className={`details__section ${mainDetailsSection != 'description' ? '_hide' : '_open'}`}>
              <p className='details__text'>A light, handy knife with a blade that has gentle concave lenticular descents htmlFor two-thirds of the blade width, forming a thin,
                perfectly cutting blade with a thickness of about 0.6 mm in the vicinity of the tangs.</p>
              <p className='details__text'>The butt of the blade with the back of the hilt has one smooth arc-shaped line. On the heel in front of the hilt there is a butt notch htmlFor precision work. </p>
              <p className='details__text'>Some care should be taken when working with large side loads on the blade, due to the small thickness of the blade in the working part.
                in the working part.</p>
              <p className='details__text'>Mounting of the hilt is of the plated type. On the top of the hilt, the function of which is performed by the shank protruding from under the laths,
                there is a hole htmlFor a safety lanyard. This knife is a handy assistant when working with food and hunting htmlFor hog and waterfowl.</p>
              <p>Translated with DeepL.com (free version)</p>
            </div>
            <div className={`details__section columns ${mainDetailsSection != 'characteristic' ? '_hide' : '_open'}`}>
              <div className="details__column">
                <h4 className="details__subtitle">Технічні характеристики</h4>
                <div className="details__item">
                  <p className='details__property'>Загальна довжина, мм:</p>
                  <p className='details__value'>227</p>
                </div>
                <div className="details__item">
                  <p className='details__property'>Довжина клинка, мм:</p>
                  <p className='details__value'>112</p>
                </div>
                <div className="details__item">
                  <p className='details__property'>Ширина клинка, мм:</p>
                  <p className='details__value'>25</p>
                </div>
                <div className="details__item">
                  <p className='details__property'>Товщина обуха, мм:</p>
                  <p className='details__value'>21</p>
                </div>
              </div>
              <div className="details__column">
                <h4 className="details__subtitle">Використані матеріали</h4>
                <div className="details__item">
                  <p className='details__property'>Сталь:</p>
                  <p className='details__value'>95Х18</p>
                </div>
                <div className="details__item">
                  <p className='details__property'>Руків'я:</p>
                  <p className='details__value'>Накладки карельска береза</p>
                </div>
              </div>
              <div className="details__column">
                <h4 className="details__subtitle">Виробництво</h4>
                <div className="details__item">
                  <p className='details__property'>Виробництво:</p>
                  <p className='details__value'></p>
                </div>
              </div>
            </div>
            <div className={`details__section ${mainDetailsSection != 'comments' ? '_hide' : '_open'}`}>
              {hasComment ?
                <div className='details__commnets'>
                  {users.map(user => (
                    <Comment key={user.name} user={user} isAuth={isAuth} />
                  ))}
                </div>
                :
                <p>У цього товару немає відгуків. Станьте першим, хто залишив відгук про цей товар!</p>
              }
              {isAuth && (
                <div className="details__add-comment">
                  <Button details='details__button _black' name="Написати відгук" />
                </div>
              )}
            </div>
            <div className={`details__section ${mainDetailsSection != 'delivery' ? '_hide' : '_open'}`}>
              <div className="details__row">
                <h4>Країна:</h4>
                <Options details="details__options" category='країну' title={deliveryCoutry} data={delivery} setDeliveryCountry={setDeliveryCountry} />
              </div>
              <div className="details__row">
                <h4>Місто:</h4>
                <Options details="details__options" category='місто' data={deliveryCity} />
              </div>
            </div>
          </div>
        </div>
        <ProductsSection lengthPart={4} title='Хіт продажу' link='catalogue/category-1' textLink="Перейти в каталог" data={productsFavorite}/>
      </div>
    </main>
  )
}

export default SingleProduct