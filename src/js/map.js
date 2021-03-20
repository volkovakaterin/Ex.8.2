/* eslint-disable linebreak-style */
export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Ошибка'],
      [2, 'Другая ошибка'],
      [3, 'Ещё одна ошибка'],
    ]);
  }

  translate(code) {
    if (this.errors.get(code) === undefined) {
      return 'Unknown error';
    } return this.errors.get(code);
  }
}
