import React, { useState } from 'react'

import CheckFilter from './CheckFilter'
import RangeFilter from './RangeFilter'

import './Filters.css'
import { prodactsFavorite } from '../../data/dataProdact'
import { dataFilter } from '../../data/dataFilter'
import { IoIosArrowBack } from 'react-icons/io'

const Filters = ({ details, isShow, setIsShow }) => {
  const [filter, setFilter] = useState([])
  const handleFilter = (newOne) => {
    setFilter(prev => ([...prev, newOne]))
  }
  const handleShowFilter = () => {
    setIsShow(false)
  }
  return (
    <section className={`${details} filters ${isShow ? '_show' : ''}`}>
      <div className="filters__container">
        <h3 className="filters__title"><span onClick={handleShowFilter}><IoIosArrowBack /></span>Фільтер товарів</h3>
        {dataFilter.map((filter, index) => {
          const { title, data } = filter
          return (
            <CheckFilter key={index} data={data} title={title} isOpen={!isShow} />
          )
        })}
      </div>
    </section>
  )
}

export default Filters