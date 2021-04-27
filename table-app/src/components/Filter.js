import React, { useState } from 'react'
import styles from '../styles/Filter.module.css'

const options = {
  columns: [
    {name: 'title', title: 'Title'},
    {name: 'count', title: 'Count'},
    {name: 'distance', title: 'Distanse'},
    {name: 'date', title: 'Date'}
  ],
  conditions: [
    {name: 'greater', title: 'Greater'},
    {name: 'less', title: 'Less'},
    {name: 'contains', title: 'Contains'},
    {name: 'equals', title: 'Equals'}
  ]
}

const createOptionsList = (options) => {
  const list = []
  
  options.forEach(item => {
    list.push(<option key={item.name} value={item.name}>{item.title}</option>)
  });

  return list
}

export default function Filter(props){
  const [form, setForm] = useState({
    column: '',
    condition: '', 
    input: '',
  })

  let temp = {...form}

  const change = (event) => {
    if(event.target.getAttribute('data-field') !== 'input' && event.target.value === '')
      return

    temp[event.target.getAttribute('data-field')] = event.target.value
    setForm(temp)
  }

  const click = () => {
    props.callbacks.filter(temp)
  }

  return (
    <div className={styles.container} onChange={change}>
      <select data-field="column" defaultValue={form.column}>
        <option value=''>Select Column</option>
        {createOptionsList(options.columns)}
      </select>
      <select data-field="condition" defaultValue={form.option}>
        <option value=''>Select Condition</option>
        {createOptionsList(options.conditions)}
      </select>
      <input data-field="input" type="text" placeholder="Value" defaultValue={form.input}/>
      <button type="button" onClick={click}>Filter</button>
    </div>
  )
}