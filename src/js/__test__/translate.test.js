/* eslint-disable linebreak-style */
import ErrorRepository from '../map';

test('translate', () => {
  const map = new ErrorRepository();
  expect(map.translate(5)).toBe('Unknown error');
});

test('translate1', () => {
  const map = new ErrorRepository();
  expect(map.translate(2)).toBe('Другая ошибка');
});
