import React from 'react'
import { IoIosArrowUp,IoIosArrowDown } from 'react-icons/io'
import { useGlobalContaxt } from '../../context'

import ReactSlider from 'react-slider'

const CheckFilter = ({handleFilter,title,data}) => {
  const {catalog} = useGlobalContaxt()
  console.log(data);
  return (
	 <section className='check-filter'>
    <div className="check-filter__container">
      <div className={`check-filter__top ${title === 'Ціна' && 'price'}`}>
        <h4 className="title">{title}</h4>
        <button className='filter__arrow'><IoIosArrowUp/></button>
      </div>
      <div className="check-filter__box">
        {data[0].name
        ?
          <ul className="check-filter__list">
            {data.map((item,index)=>(
              <label key={index} className='check-filter__label' htmlFor={item.name}>
                <input type="checkbox" id={item.name} value={item.name} className='check-filter__check'/>
                <span className='check-filter__name'>{item.name} <span>({item.total})</span></span>
              </label>
            ))}
          </ul>
        :
        <div className='range'>
          {data.map((item,index)=>{
            return(
                <input className='range__input' type="text" placeholder={item} />
            )
          })}
          <div className="range__line">
          <ReactSlider
            // className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            defaultValue={[0, 100]}
            ariaLabe={['Lower thumb', 'Upper thumb']}
            ariaValuetext={state => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            pearling
            minDistance={5}
          />
            </div>
        </div>
        }
      </div>
    </div>
   </section>
  )
}

export default CheckFilter