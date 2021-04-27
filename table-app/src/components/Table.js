import React, { useState } from 'react'
import styles from '../styles/Table.module.css'
import cx from 'classnames'
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';

const columns = {
  'title': {title: 'Title', sortable: true},
  'count': {title: 'Count', sortable: true},
  'distance': {title: 'Distance', sortable: true},
  'date': {title: 'Date', sortable: false}
}

const cycle = [{order: null, icon: <FaSort />}, {order: 'ASC', icon: <FaSortUp />}, {order: 'DESC', icon: <FaSortDown />}]

const sortBar = (index) => {
  return (cycle[index].icon)
}

const tableHeader = (orders) => {
  const headers = []

  Object.entries(columns).forEach(item => {
    const [key, options] = item
    headers.push(
      <th key={key} data-column-name={key}>
        <span>
          {options.title}
          {options.sortable ? sortBar(orders[key]) : null}
        </span>
      </th>
    )
  })
  
  return (
    <tr className={cx(styles.row, styles.header)}>
      {headers}
    </tr>
  )
}

const tableRows = (data) => {
  const tr_list = []
  
  data.forEach((item, index) => {
    let td_list = []

    Object.keys(columns).forEach(key => {
      let date
      
      if(key === 'date'){
        date = new Date(item[key])
        date = String(date).split(' ')
        date = [date[1], `${date[2]},`, date[3]].join(' ')
      }
      td_list.push(<td key={key}>{ date ? String(date) : item[key] }</td>)
    })

    tr_list.push(<tr key={index} className={styles.row}>{td_list}</tr>)
  })
  
  return tr_list
}

export default function Table(props){
  const [orders, setOrders] = useState({
    'title': 0,
    'count': 0,
    'distance': 0,
  })
  
  function click(e){
    const column = e.target.getAttribute('data-column-name')

    if(!(orders[column] !== undefined))
      return

    const list = []
    const temp = {...orders}
    temp[column] === 2 ? temp[column] = 0 : temp[column] += 1
    setOrders(temp)
       
    Object.entries(temp).forEach((item) => {
      const [key, value] = item

      if(value !== 0){
        list.push({'column': key, 'orient': cycle[value].order})
      }
    })
    
    props.callbacks.sort(list)
  }

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead onClick={(e) => click(e)} className={styles.table}>
          {tableHeader(orders)}
        </thead>
        <tbody>
          {tableRows(props.data)}
        </tbody>
      </table>
    </div>
  )
}