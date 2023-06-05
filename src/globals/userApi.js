import { Api_register } from './constants.js';

export const RegisterApi = (user) => {
  return fetch(Api_register, {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
  });
};