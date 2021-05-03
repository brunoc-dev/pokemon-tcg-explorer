import axios from 'axios'
import { POKEMINTCG_API_URL } from './settings'

export default axios.create({ baseURL: POKEMINTCG_API_URL })
