import axios, { AxiosResponse, AxiosError } from 'axios';

export const get = async <T>(
  url: string,
  headers?: Record<string, string>,
): Promise<AxiosResponse<T>> => {
  const options = {
    headers,
  };

  return axios.get(url, options);
};

export const put = async <T>(
    url: string,
    options?: any,
  ): Promise<AxiosResponse<T>> => {
  
    return axios.put(url, options);
  };