import React from 'react'
import { productsFavorite } from '../../data/dataProdact'
import MiniCart from '../../components/IU/MiniCart/MiniCart';
const FavoriteProducts = () => {
  return (
    <section class='cabinet__section'>
      <div class="cabinet__container">
        <h2 class='cabinet__subtitle'>Улюблені товари</h2>
        <div class="cabinet__content favorite">
          <MiniCart data={productsFavorite[0]} isHistory={false} secondClass="favorite__item" />
          <MiniCart data={productsFavorite[0]} isHistory={false} secondClass="favorite__item" />
          <MiniCart data={productsFavorite[0]} isHistory={false} secondClass="favorite__item" />
        </div>
      </div>
    </section>
  )
}

export default FavoriteProducts