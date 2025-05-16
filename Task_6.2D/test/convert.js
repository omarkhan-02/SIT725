function convert(input) {
  if (input === 'error') throw new Error('Forced error');
  if (typeof input !== 'string') throw new Error('Input must be a string');
  return input.toUpperCase(); // Example logic
}

module.exports = convert;
