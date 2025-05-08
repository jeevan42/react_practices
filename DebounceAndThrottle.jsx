// DebounceAndThrottle.js
import React, { useEffect } from 'react';

/*
✅ Debounce:
- Waits for a pause in events before executing a function.
- Example: Search input where you wait until the user stops typing before making an API call.

✅ Throttle:
- Ensures a function executes at most once in a specified time interval.
- Example: Scroll or resize events, where frequent execution can slow down performance.
*/

// Debounce Implementation
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer); // cancel previous
    timer = setTimeout(() => fn(...args), delay); // set new timer
  };
}

// Throttle Implementation
function throttle(fn, limit) {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}

const DebounceAndThrottle = () => {
  useEffect(() => {
    const handleResize = () => {
      console.log('🟢 RESIZE EVENT Triggered:', new Date().toLocaleTimeString());
    };

    const handleScroll = () => {
      console.log('🟡 SCROLL EVENT Triggered:', new Date().toLocaleTimeString());
    };

    // Debounced version of resize
    const debouncedResize = debounce(handleResize, 1000);

    // Throttled version of scroll
    const throttledScroll = throttle(handleScroll, 1000);

    window.addEventListener('resize', debouncedResize);
    window.addEventListener('scroll', throttledScroll);

    // Cleanup
    return () => {
      window.removeEventListener('resize', debouncedResize);
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return (
    <div style={{ padding: '20px', height: '200vh' }}>
      <h2>Debounce & Throttle Demo</h2>
      <p>🖱 Try resizing the window (debounced)</p>
      <p>🧭 Try scrolling the page (throttled)</p>
    </div>
  );
};

export default DebounceAndThrottle;
