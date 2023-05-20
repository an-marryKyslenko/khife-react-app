import React, { useState } from 'react'

import CheckFilter from './CheckFilter'
import RangeFilter from './RangeFilter'

import './Filters.css'
import {prodactsFavorite}from '../../data/dataProdact'
import {dataFilter} from '../../data/dataFilter'
const Filters = ({details}) => {
  const [filter, setFilter] = useState([])
  const handleFilter = (newOne)=>{
    setFilter(prev=>([...prev,newOne]))
  }
  return (
  <section className={`${details} filters`}>
    <h3 className="filters__title">Фільтер товарів</h3>
      {dataFilter.map((filter,index)=>{
        const {title,data}=filter
        return (
          <CheckFilter key={index} data={data} title={title} />
        )
      })}
  </section>
  )
}

export default Filters