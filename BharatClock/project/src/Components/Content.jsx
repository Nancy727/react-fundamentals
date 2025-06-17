import { useState, useEffect } from "react";

function Content() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>This is the clock that shows the time in Bharat at all times.</p>
      <div className="clock">
        {currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}
      </div>
    </div>
  );
}

export default Content;
