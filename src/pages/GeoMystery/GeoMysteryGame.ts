import { useState, useEffect, useRef } from 'react';
import { mysteryLocations } from '@/data/geoMystery';

export function useGeoMysteryGame() {
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [timerActive, setTimerActive] = useState(true);
  const [showExplanation, setShowExplanation] = useState(false);
  const [solved, setSolved] = useState<boolean[]>(Array(mysteryLocations.length).fill(false));
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const puzzle = mysteryLocations[puzzleIndex];

  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      timer.current = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    } else if (timeLeft === 0) {
      setTimerActive(false);
      setFeedback('wrong');
      setShowExplanation(true);
    }
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [timerActive, timeLeft]);

  const handleSubmit = () => {
    if (!answer.trim()) return;
    setAttempts((a) => a + 1);
    const correct = answer.toLowerCase().trim() === puzzle.name.toLowerCase();
    if (correct) {
      setFeedback('correct');
      setScore((s) => s + Math.max(10, timeLeft));
      setSolved((prev) => prev.map((v, i) => (i === puzzleIndex ? true : v)));
      setTimerActive(false);
      setShowExplanation(true);
    } else {
      setFeedback('wrong');
      setShowExplanation(true);
      setTimerActive(false);
    }
  };

  const nextPuzzle = () => {
    const next = (puzzleIndex + 1) % mysteryLocations.length;
    setPuzzleIndex(next);
    setAnswer('');
    setFeedback(null);
    setShowExplanation(false);
    setTimeLeft(60);
    setTimerActive(true);
  };

  const resetGame = () => {
    setPuzzleIndex(0);
    setAnswer('');
    setScore(0);
    setAttempts(0);
    setFeedback(null);
    setShowExplanation(false);
    setTimeLeft(60);
    setTimerActive(true);
    setSolved(Array(mysteryLocations.length).fill(false));
  };

  return {
    puzzle,
    puzzleIndex,
    answer,
    setAnswer,
    score,
    attempts,
    feedback,
    timeLeft,
    showExplanation,
    solved,
    handleSubmit,
    nextPuzzle,
    resetGame,
  };
}