"use client";
import { useTimer } from "react-timer-hook";
import useTimeStore from "../store/timeStore";
import { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function Time() {
  const { isRunning, countDown } = useTimeStore((state) => state);
  const [style, api] = useSpring(() => ({ to: {} }));

  useEffect(() => {
    const config = {
      tension: 180,
      friction: 11,
    };
    if (isRunning) {
      timerIsRunning ? start() : resume();
      api.start({
        to: { fontVariationSettings: "'wght' 800, 'wdth' 110, 'opsz' 14" },
        config,
      });
    } else {
      pause();
      api.start({
        to: { fontVariationSettings: "'wght' 400, 'wdth' 110, 'opsz' 14" },
        config,
      });
    }
  }, [isRunning]);

  useEffect(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + countDown);

    restart(time);
    pause();
  }, [countDown]);

  let time = new Date();
  time.setSeconds(time.getSeconds() + countDown);

  const {
    seconds,
    minutes,
    isRunning: timerIsRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: time,
    onExpire: () => handleTimerFinished(),
  });

  function handleTimerFinished() {
    //reset timer dont need to when moved to break it takes break
    //move to short or long break
    //make a sound
    console.log("Done!!!");
  }
  return (
    <div className="py-6">
      <animated.div style={style}>
        <animated.h3 className="leading-[220px] text-[230px]">
          {minutes}
        </animated.h3>
        <animated.h3 className="leading-[170px] text-[230px]">
          {seconds}
        </animated.h3>
      </animated.div>
    </div>
  );
}
