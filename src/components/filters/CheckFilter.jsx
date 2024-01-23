import React, { useEffect, useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { useGlobalContaxt } from '../../context'

const CheckFilter = ({ handleFilter, title, data, isOpen }) => {
  const { catalog } = useGlobalContaxt()
  const [value, setValue] = useState({ min: data[0], max: data[1] })
  const [input, setInput] = useState(null)
  const [openSection, setOpenSection] = useState(isOpen)
  const spiceGap = (data[1] - data[0]) / 10;

  function handlerRange(e, type) {
    const target = e.target
    setInput(target)
    setValue(prev => ({ ...prev, [type]: target.value }))

  }

  useEffect(() => {
    if (input) {
      const parent = input.classList.contains('range__input') ? input.parentElement : input.parentElement.nextElementSibling
      const progress = parent.querySelector('.range__progress');
      if (value.min < data[0]) {
        value.min = data[0]
      }
      if (value.max > data[1]) {
        value.max = data[1]
      }
      progress.style.left = ((value.min - input.min) / (input.max - input.min)) * 100 + "%";
      progress.style.right = ((input.max - value.max) / (input.max - input.min)) * 100 + "%";
      console.log(parent);
    }
  }, [value])
  const handleOpen = () => {
    setOpenSection(prev => !prev)
  }
  return (
    <section className='check-filter'>
      <div className="check-filter__container">
        <div className={`check-filter__top ${title === 'Ціна' && 'price'}`}>
          <h4 className="filter__title">{title}</h4>
          <button className='filter__arrow' onClick={handleOpen}>{openSection ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
        </div>
        <div className={`check-filter__box ${openSection && '_visible'}`} >
          {data[0].name
            ?
            <ul className="check-filter__list">
              {data.map((item, index) => (
                <label key={index} className='check-filter__label' htmlFor={item.name}>
                  <input type="checkbox" id={item.name} value={item.name} className='check-filter__check' />
                  <span className='check-filter__name'>{item.name} <span>({item.total})</span></span>
                </label>
              ))}
            </ul>
            :
            <div className='range'>
              <div className="range__price">
                <input type="number" min={data[0]} max={data[1]} step={spiceGap} className="range__number" data-number="number-min" value={value.min} onChange={(e) => handlerRange(e, 'min')} />
                <input type="number" min={data[0]} max={data[1]} step={spiceGap} className="range__number" data-number="number-max" value={value.max} onChange={(e) => handlerRange(e, 'max')} />
              </div>
              <div className="range__slider">
                <div className="range__progress" ></div>
                <input type="range" min={data[0]} step={spiceGap} max={data[1]} value={value.min} onChange={(e) => handlerRange(e, 'min')} className="range__input min-range" />
                <input type="range" min={data[0]} step={spiceGap} max={data[1]} value={value.max} onChange={(e) => handlerRange(e, 'max')} className="range__input" />

              </div>
            </div>
          }
        </div>
      </div>
    </section>
  )
}

export default CheckFilter