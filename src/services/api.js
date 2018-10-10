import _axios from 'axios'

import { loadFromStorage } from './localstorage'
const HOST = window.location.href.indexOf('localhost') > 0
  ? 'http://localhost:8080'
  : ''

const axios = _axios.create({
  baseURL: HOST
})

const currentUser = loadFromStorage('snak-user')

if (currentUser) {
  axios.defaults.headers.common['Authorization'] = currentUser.token
}

export const snaks = {
  async getAll (skip = 0, limit) {
    const res = await axios.get(`/snaks?skip=${skip}&limit=${limit}`)
    return res.data.items
  },

  async create (snak) {
    const res = await axios.post(`/snaks`, { snak })
    return res.data.snak
  },

  async get (id) {
    const res = await axios.get(`/snaks/${id}`)
    return res.data.snak
  },

  async update (id, snak) {
    const res = await axios.put(`/snaks/${id}`, { snak })
    return res.data.snak
  },

  async delete (slug) {
    const res = await axios.delete(`/snaks/${slug}`)
    return res
  }
}
