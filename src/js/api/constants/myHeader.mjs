import { load } from '../localStorage';

export const headers = (contentType) => {
  const token = storage.load('token');
  const headers = {};

  if (contentType) {
    headers['Content-Type'] = contentType;
  }
  if (token) {
    headers.Authorization = 'Bearer ${token}';
  }

  return headers;
};
