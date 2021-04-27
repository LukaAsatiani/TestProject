import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Table from '../components/Table'
import Pagination from '../components/Pagination'
import Filter from '../components/Filter'

const updateData = async (callbacks, options) => {
  axios.post(`http://localhost:3001/table`, options)
    .then(res => {
      if(res.data.success){
        callbacks.setData(res.data.table)
        if(callbacks.setPagesCount)
          callbacks.setPagesCount(res.data.count)
        if(callbacks.setPage)
          callbacks.setPage(1)
      }
    })
}

export default function Main(){
  const pageLimit = 5
  const [pagesCount, setPagesCount] = useState(1)
  const [orders, setOrders] = useState(null)
  const [filter, setFilter] = useState({})
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])

  const setCurrentPage = (page) => {
    setPage(page)
    updateData({setData, setPagesCount}, {
      limit: pageLimit,
      page: page,
      order: orders,
      filter: filter
    })
  }

  const sort = (data) => {
    setOrders(data)
    updateData({setData, setPagesCount}, {
      limit: pageLimit,
      page: page,
      order: data,
      filter: filter
    })
  }

  const filterF = (data) => {
    setFilter(data)
    updateData({setData, setPagesCount, setPage}, {
      limit: pageLimit,
      page: page,
      order: orders,
      filter: data
    })
  }

  useEffect(() => {
    updateData({setData, setPagesCount}, {
      limit: pageLimit,
      page: page,
      order: orders,
      filter: filter
    })
  }, [])

  return (
    <>
      <Filter callbacks={{filter: filterF}}/>
      <Table data={data} callbacks={{sort}}/>
      <Pagination key={page} pagesCount={pagesCount} current={page} callbacks={{setCurrentPage}}/>
    </>
  )
}