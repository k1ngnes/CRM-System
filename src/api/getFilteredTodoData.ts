import { getFilteredToDo } from './api_urls.ts';
import { SetStateAction } from 'react';

export async function getFilteredTodoData(filter: string) {
  const url = getFilteredToDo + '?filter=' + filter;

  fetch(url, {
    method: getFilteredToDo.method,
  })
    .then((response) => {
      response.json();
    })
    .catch((error) => console.log('Error: ', error))
    .then((data) => {
      console.log('Success: ', data);
      return data;
    });
}
