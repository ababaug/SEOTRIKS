import '@testing-library/jest-dom';

// Suppress JSDOM navigation error logs in Next.js Link click tests
const originalConsoleError = console.error;
console.error = (...args) => {
  if (
    typeof args[0] === 'string' &&
    args[0].includes('Not implemented: navigation')
  ) {
    return;
  }
  if (
    args[0] &&
    typeof args[0] === 'object' &&
    args[0].message &&
    args[0].message.includes('Not implemented: navigation')
  ) {
    return;
  }
  originalConsoleError(...args);
};
