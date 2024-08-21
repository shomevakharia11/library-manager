import axios from 'axios';

const API_URL = 'http://localhost:8080/api/books';

const getAllBooks = async () => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  return response.data;
};

const createBook = async (book) => {
  const response = await axios.post(API_URL, book, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  return response.data;
};

export default {
  getAllBooks,
  createBook
};