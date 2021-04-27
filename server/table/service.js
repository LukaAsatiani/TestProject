const pool = require("../db");

const table = 'test'

const columns = {
  'title': {orderable: true}, 
  'count': {orderable: true}, 
  'distance': {orderable: true},
  'date': {orderable: false}
}

const conditions = {
  greater: (column, value) => {
    return `WHERE ${column} > ${value}`
  },
  less: (column, value) => {
    return `WHERE ${column} < ${value}`
  },
  contains: (column, value) => {
    return `WHERE ${column} LIKE '%${value}%'`
  },
  equals: (column, value) => {
    return `WHERE ${column} = '${value}'`
  } 
}

const pageQ = (page, limit) => {
  if(!page || !limit || page <= 0 || limit <= 0)
    return ''

  return `LIMIT ${limit} OFFSET ${(page - 1) * limit}`
}

const filterQ = (filter) => {
  if(!filter)
    return ''

  const {column, condition, input} = filter
    
  if(!column || !condition || !input)
    return ''
  
  return conditions[condition](column, input)
}

const orderQ = (order) => {
  if(!order)
    return ''

  let str = 'ORDER BY'

  order.forEach(item => {
    if(!columns[item.column] || !columns[item.column].orderable)
      

    if(columns[item.column] && columns[item.column].orderable && !['ASC', 'DESC'].includes(item.orient))
      item.orient = 'ASC'
  
    str = [str, `${item.column} ${item.orient},`].join(' ')
  });
  
  if(str === 'ORDER BY')
    return ''

  return str.substring(0, str.length - 1)
}

module.exports = {
  get: (data, callback) => {
    pool.query(
      `SELECT * FROM ${table} ${filterQ(data.filter)} ${orderQ(data.order)} ${pageQ(data.page, data.limit)}`,
      (error, results, fields) => {
        if (!error)
          return callback(null, results);
      }
    );
  }
}