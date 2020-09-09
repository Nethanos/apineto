const formatDate = require('../../src/services/format-date.service');

test('should format a yyyy-mm-dd to dd/mm/yyyy', () => {
  expect(formatDate('2020-09-08')).toBe('08/09/2020');
});