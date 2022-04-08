import { useEffect, useRef, useState } from "react";
import { AppState, AppStateStatus } from "react-native";

interface IntervalOptions {
  delay: number;
  onTick?: (elapsed: number) => void;
  pauseInBackground?: boolean;
}

/**
 * Background-safe interval. Pauses when the app goes to background
 * and resumes (without losing elapsed time) when it returns.
 */
export function useInterval({ delay, onTick, pauseInBackground = true }: IntervalOptions) {
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const startedAt = useRef<number>(0);
  const accumulated = useRef<number>(0);
  const tickRef = useRef<onTick>();
  tickRef.current = onTick;

  useEffect(() => {
    if (!running) return;

    const id = setInterval(() => {
      const now = Date.now();
      const total = accumulated.current + (now - startedAt.current);
      setElapsed(total);
      tickRef.current?.(total);
    }, delay);

    return () => clearInterval(id);
  }, [running, delay]);

  useEffect(() => {
    if (!pauseInBackground) return;

    const sub = AppState.addEventListener("change", (state: AppStateStatus) => {
      if (state !== "active" && running) {
        accumulated.current += Date.now() - startedAt.current;
        setRunning(false);
      }
    });
    return () => sub.remove();
  }, [running, pauseInBackground]);

  function start() {
    startedAt.current = Date.now();
    setRunning(true);
  }

  function pause() {
    if (!running) return;
    accumulated.current += Date.now() - startedAt.current;
    setRunning(false);
  }

  function reset() {
    accumulated.current = 0;
    setElapsed(0);
    setRunning(false);
  }

  return { elapsed, running, start, pause, reset };
}

type onTick = (elapsed: number) => void;
