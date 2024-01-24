import React, { useState } from 'react'
import ProductsSection from '../../components/productsSection/ProductsSection'
import FrontSection from '../../components/home/FrontSection'
import TypeCategory from '../../components/TypeCategory'

import {typeFlashlights, typeWeapons} from '../../data/data'
import {productsFavorite,fleshlightsProdact} from '../../data/dataProdact'
import { blogData } from '../../data/blogData'

import './Home.css'
import BlogSection from '../../components/BlogSection/BlogSection'

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
    <ProductsSection lengthPart={4} title='Хіт продажу' link='catalogue/category-1' textLink="Перейти в каталог" data={productsFavorite}/>
    <ProductsSection isNews={true} lengthPart={3} title='Новинки' link='catalogue/category-1' textLink="Більше новинок" data={productsFavorite}/>
    <ProductsSection isNews={false} lengthPart={4} title='Акції' link='catalogue/category-1' textLink="Всі акції" data={productsFavorite}/>
    <BlogSection title='Наші статті' textLink="Всі акції" data={blogData} lengthPart={4} link="catalogue/category-1"/>
    <section className="flashlights-section">
      <div className="container flashlights-section__container">
        {typeFlashlights.map((item,index)=>(
          <TypeCategory key={index} {...item}  />
        ))}
      </div>
    </section>
    <ProductsSection lengthPart={4} title='Ліхтарі' link='catalogue/category-4' textLink="Перейти в каталог" data={fleshlightsProdact}/>
   </main>
	 
  )
}

export default Home