import { ApiUrl } from '../helpers/types.ts';

export const addToDo: ApiUrl = {
  url: 'https://easydev.club/api/v1/todos',
  method: 'POST',
};

export const editToDo: ApiUrl = {
  url: 'https://easydev.club/api/v1/todos/',
  method: 'PUT',
};

export const deleteToDo: ApiUrl = {
  url: 'https://easydev.club/api/v1/todos/',
  method: 'DELETE',
};

export const getToDo: ApiUrl = {
  url: 'https://easydev.club/api/v1/todos/',
  method: 'GET',
};

export const getFilteredToDo: ApiUrl = {
  url: 'https://easydev.club/api/v1/todos',
  method: 'GET',
};
