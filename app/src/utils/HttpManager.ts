import { HTTPInterface } from '../interfaces/HTTPInterface';

export default class HTTPManager {
  private exampleBaseURL: string = 'products';

  async fetchAllExamples() {
    const products = await HTTPInterface.GET(`${this.exampleBaseURL}`);
    return products;
  }
}
