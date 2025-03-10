import { SERVER_URL } from './Consts.js';

export const HTTPInterface = {
  SERVER_URL: `${SERVER_URL}/api`,

  GET: async function (endpoint: string) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`);
    return await response.json();
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  POST: async function (endpoint: string, data: any) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    });

    return await response.json();
  },

  DELETE: async function (endpoint: string) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
      method: 'DELETE',
    });
    return response.status;
  },

  PATCH: async function (endpoint: string) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
      method: 'PATCH',
    });
    return response.status;
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  PUT: async function (endpoint: string, data: any) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    });
    return response.status;
  },
};

export default class HTTPManager {
  private exampleBaseURL: string = 'products';

  async fetchAllExamples() {
    const products = await HTTPInterface.GET(`${this.exampleBaseURL}`);
    return products;
  }
}
