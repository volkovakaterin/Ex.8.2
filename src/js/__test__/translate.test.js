/* eslint-disable linebreak-style */
import ErrorRepository from '../map';

test('translate', () => {
  expect(() => {
    const map = new ErrorRepository();
    map.translate(5);
  }).toBe('Unknown error');
});

test('translate1', () => {
  expect(() => {
    const map = new ErrorRepository();
    map.translate(2);
  }).toBe('Другая ошибка');
});
