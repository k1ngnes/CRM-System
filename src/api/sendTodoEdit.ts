import { editToDo } from './api_urls.ts';
import { TodoRequest } from '../helpers/types.ts';

export const sendTodoEdit = (id: number, isDone?: boolean, title?: string) => {
  const url = editToDo.url + id.toString();
  const request: TodoRequest = {
    isDone: isDone,
    title: title,
  };

  fetch(url, {
    method: editToDo.method,
    body: JSON.stringify(request),
  })
    .then((response) => response.json())
    .catch((error) => console.log('Error: ', error))
    .then((response) => {
      console.log('Success: ', response);
      return response;
    });
};
