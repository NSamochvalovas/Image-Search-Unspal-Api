import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID kes93cna_Wqh_ATn9UXvocPMvpqXbZXSi1ac3A1rI3Q'
  }
})