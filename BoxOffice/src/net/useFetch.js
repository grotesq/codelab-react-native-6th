import axios from 'axios';
import useSwr, {mutate} from 'swr';

function getQueryString(params = {}) {
  const qs = [];
  for (const key in params) {
    qs.push(`${key}=${params[key]}`);
  }
  return qs.join('&');
}

export const fetcher = function (url) {
  // return fetch( params ).then( response => response.json() )
  return axios.get(url).then(response => response.data);
};

export const prefetch = function (url, params = {}) {
  const uri = `${url}?${getQueryString(params)}`;
  return mutate(uri, fetcher(uri));
};

export default function useFetch(url, params = {}) {
  return useSwr(`${url}?${getQueryString(params)}`, fetcher);
}
