import React, { useState } from 'react'
import ProductsSection from '../../components/productsSection/ProductsSection'
import FrontSection from '../../components/home/FrontSection'
import TypeCategory from '../../components/TypeCategory'

import {typeFlashlights, typeWeapons} from '../../data/data'
import {prodactsFavorite,fleshlightsProdact} from '../../data/dataProdact'
import { blogData } from '../../data/blogData'

import './Home.css'

const Home = () => {
 
  return (
	 <main className='main home'>
    <FrontSection />
    <div className="type-of-weapons">
      <div className="container type-of-wepons__container">
        {typeWeapons.map((item,index)=>(
          <TypeCategory key={index} {...item}/>
        ))}
      </div>
    </div>
    <ProductsSection lengthPart={4} title='Хіт продажу' link='#' textLink="Перейти в каталог" data={prodactsFavorite}/>
    <ProductsSection isNews={true} lengthPart={3} title='Новинки' link='#' textLink="Більше новинок" data={prodactsFavorite}/>
    <ProductsSection isNews={false} lengthPart={4} title='Акції' link='#' textLink="Всі акції" data={prodactsFavorite}/>
    <ProductsSection isNews={false} isBlog={true} lengthPart={4} title='Наші статті' textLink="Всі акції" data={blogData}/>
    <section className="flashlights-section">
      <div className="container flashlights-section__container">
        {typeFlashlights.map((item,index)=>(
          <TypeCategory key={index} {...item}  />
        ))}
      </div>
    </section>
    <ProductsSection lengthPart={4} title='Ліхтарі' link='#' textLink="Перейти в каталог" data={fleshlightsProdact}/>
   </main>
	 
  )
}

export default Home