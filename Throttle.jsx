// Throttle.js
import React, { useEffect } from 'react';

/*
🎯 THROTTLE — Definition:
Throttle limits the execution of a function to once every "X" milliseconds, **no matter how many times the event is triggered**.

🧠 Example use case:
If you're listening to a scroll or mousemove event which fires many times per second, throttle ensures the function only runs every X ms.

🚫 Without throttle: fn() gets called 100s of times.
✅ With throttle: fn() gets called once every limit ms.

🔁 HOW IT WORKS:
- Save last time function ran (lastCall)
- If (current time - lastCall >= limit), run the function and update lastCall
- Otherwise, ignore the call
*/

function throttle(fn, limit) {
  let lastCall = 0;

  return (...args) => {
    const now = Date.now(); // current timestamp in ms

    if (now - lastCall >= limit) {
      lastCall = now; // update last time it ran
      fn(...args); // call the function
    }
  };
}

// 👇 Example Component using Throttle
const Throttle = () => {
  useEffect(() => {
    const onScroll = () => {
      console.log('🔄 Scroll event triggered:', new Date().toLocaleTimeString());
    };

    // Throttled version: only fires once every 1000ms
    // const throttledScroll = throttle(onScroll, 10000);
    const throttledScroll = throttle(onScroll, 1000);

    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return (
    <div style={{ height: '200vh', padding: '20px' }}>
      <h2>🧭 Scroll down to see throttle in action</h2>
      <p>Open dev tools console to watch throttled logs appear once per second.</p>
    </div>
  );
};

export default Throttle;
