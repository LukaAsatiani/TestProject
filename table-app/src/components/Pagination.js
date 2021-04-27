import React from 'react'
import styles from '../styles/Pagination.module.css'
import cx from 'classnames'

const items = (pagesCount, current = 1) => {
  let expand = 2
  if(current > pagesCount)
    current = pagesCount

  const pages = () => {
    if(pagesCount < 3)
      return ['1', '2'].splice(0, pagesCount)
  

    const list = () => {
      let temp = []
      
      for(let i = Math.max(current - expand, 2); i <= Math.min(current + expand, pagesCount - 1); i++){
        temp.push(String(i))
      }

      if(temp[0] !== '2')
        temp = ['#', ...temp]

      if(temp[temp.length - 1] !== String(pagesCount - 1))
        temp = [...temp, '#']

      return temp
    }
    
    return ['1', ...list(), String(pagesCount)]
  }

  const list = ['«', ...pages(), '»']
  const items = []
  
  const types = {
    '«': 'previous',
    '»': 'next',
    '#': 'space'
  }

  list.forEach((item, index) => {
    const type = types[item] || 'page'
    const content = item === '#' ? '...' : item
    const classNames = item === String(current) ? 
      styles['active-link'] : 
      item === '#' ?
        styles.item :
        cx(styles.item, styles.link)
        
    items.push(
      <li
        key={index}
        data-item-type={type} 
        className={classNames}
      >
        {content}
      </li>
    )
  });
  
  return items
}

export default function Pagination(props){
  function click(e){
    const type = e.target.getAttribute('data-item-type')
    let page = props.current

    switch (type) {
      case 'page':
        page = parseInt(e.target.innerText)
        break;
      case 'previous':
        if(page > 1)
          page -= 1
        break;
      case 'next':
        if(page < props.pagesCount)
          page += 1
        break;    
      default:
        break;
    }

    if(page && page !== props.current)
      props.callbacks.setCurrentPage(page)
  }
  
  return (
    <div className={styles.container}>
      <ul onClick={(e) => click(e)}>
        {items(props.pagesCount, props.current)}
      </ul>
    </div>
  )
}