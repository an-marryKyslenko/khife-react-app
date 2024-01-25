import React from 'react'
import { contacts, footerData } from '../../data/footerData'
import Button from '../IU/button/Button'
import { IoIosArrowForward } from 'react-icons/io'
import { BiCheckboxChecked, BiCheckbox } from 'react-icons/bi'
import './Footer.css'
import SocialMedia from '../IU/SocialMedia/SocialMedia'

const Footer = () => {
  const { phones, adress, email, works } = contacts;

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <footer className='footer'>
      <div className="footer__top">
        <div className="container">
          <h2 className="footer__title">{footerData.title}</h2>
          <p className="footer__text">{footerData.text}</p>
        </div>
      </div>
      <div className="footer__container container">
        <div className="footer__section">
          {footerData.footerMenu.map((menu, index) => (
            <div key={index} className="footer__menu">
              <h5 className="footer__subtitle">{menu.title}</h5>
              <ul className="footer__list">
                {menu.menu.map((item, index) => (
                  <li className='footer__link hover-link' key={index}><a href="fake">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__section">
          <div className="footer__menu">
            <h5 className="footer__subtitle">{contacts.title}</h5>
            <ul className="footer__list contacts-menu">
              <li className='contacts-menu__item'><span>{phones.icon}</span> {phones.tel}</li>
              <li className='contacts-menu__item'><span>{works.icon}</span> {works.days} {works.hours}</li>
              <li className='contacts-menu__item'><span>{adress.icon}</span> {adress.name} <br /> {adress.street} {adress.office}</li>
              <li className='contacts-menu__item'><span>{email.icon}</span> {email.text}</li>
            </ul>
          </div>
          <div className="footer__menu">
            <h5 className="footer__subtitle">КОРИСНІ ПОСИЛАННЯ</h5>
            <ul className="footer__list">
              <li><a href='pay_delivery'>Способи оплати та доставки</a></li>
            </ul>
          </div>
          <div className="footer__menu">
            <h5 className="footer__subtitle">НАША ГАРАНТІЯ</h5>
            <p className='footer__garanty'>Незадоволені своєю покупкою?Ви можете повернути її протягом30 днів з дати отримання,згідно <span>з нашими правилами</span> </p>
          </div>
          <div className="footer__menu">
            <h5 className="footer__subtitle">НОВИННА РОЗСИЛКА</h5>
            <p>Підпишіться зараз!</p>
            <form onSubmit={handleSubmit} className="footer__form">
              <div className="footer__form-containt">
                <input placeholder='example@gmail.com' type="email" className="footer__field" />
                <Button icon={<IoIosArrowForward />} details="footer__btn" />
              </div>
              <div className="footer__checkbox">
                <input id='footerCheckbox' className='checkbox' type="checkbox" />
                <label htmlFor='footerCheckbox' className='footer__label'>
                  <span className='box-icon'><BiCheckbox /></span>
                  <span className='checked-box'><BiCheckboxChecked /></span>
                  <span>Я прочитав Умови угоди та згоден з умовами</span>
                </label>
              </div>
            </form>
          </div>
          <div className="footer__menu">
            <SocialMedia details="footer__social" />
          </div>
        </div>
        <div className="footer__privat">
          <p>Всі матеріали, розміщені на сайті, мають довідковий характер і не є
            публічної офертою. При копіюванні матеріалів гіперпосилання є обов'язковим!</p>
          <a href="/">Гострі ножі</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer