"use client";
import { useTimer } from "react-timer-hook";
import useTimeStore from "../store/timeStore";
import { useEffect } from "react";
export default function Time() {
  const { isRunning, countDown } = useTimeStore((state) => state);

  useEffect(() => {
    if (isRunning) {
      timerIsRunning ? start() : resume();
    } else {
      pause();
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
  });

  return (
    <div className="py-6">
      <h3 className="leading-[220px] text-[230px]">{minutes}</h3>
      <h3 className="leading-[170px] text-[230px]">{seconds}</h3>
    </div>
  );
}
