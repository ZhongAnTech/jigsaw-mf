
import './history';

export default function hijackers() {

  const listeners = [], timeouts = [], intervals = [];

  return {
    addEventListener() {
      window.addEventListener.apply(window, arguments);
      const args = Array.prototype.slice.call(arguments);
      listeners.push(args);
    },
    setTimeout() {
      timeouts.push(setTimeout.apply(null, arguments))
    },
    setInterval() {
      intervals.push(setInterval.apply(null, arguments))
    },
    __tailor_free() {
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
      listeners.forEach(args => window.removeEventListener.apply(window, args))
    }
  }
}