import axios from 'axios'

export const getLoginPage = () => {
  return axios
  .get('/api/loginpage', {
      headers: { 'Content-Type': 'application/json' }
  })
  .then(res => {
      return res.data
  })
}
