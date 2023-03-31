import axios from 'axios';
import prisma from '../lib/prisma';

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  // const request = axios.get(baseUrl);
  // return request.then((response) => response.data);
  //const users = await prisma.phonebook.findMany();
  const users = prisma.phonebook.findMany();

  if (users === 'undefined')
    users = {
      name: '',
      number: '',
    };
  console.log('users', users);
  return users;
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const del = (id, newObject) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default {
  getAll: getAll,
  create: create,
  update: update,
  delete: del,
};
