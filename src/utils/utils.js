

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const numberWithCommas =(x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export { capitalize, numberWithCommas };