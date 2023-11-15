import Vue from 'vue'
import selectedValue from '../helpers/selectedValue'

Vue.filter('formatDate', (value) => {
  const date = new Date(value)
  return date.toLocaleString(['en-US'], {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  })
})

Vue.filter('selected_value', selectedValue);