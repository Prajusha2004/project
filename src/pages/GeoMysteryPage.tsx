import { SectionHeader } from '@/components/ui/Cards';
import { MapPlaceholder } from '@/components/ui/MapPlaceholder';
import { Button } from '@/components/ui/Button';
import { getIcon } from '@/lib/icons';
import * as Icons from 'lucide-react';
import { Check, X, Trophy, Timer, RotateCcw } from 'lucide-react';
import { useGeoMysteryGame } from './GeoMystery/GeoMysteryGame';
import { mysteryLocations } from '@/data/geoMystery';

export function GeoMysteryPage() {
  const {
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
  } = useGeoMysteryGame();

  const difficultyColor = {
    easy: 'text-success bg-success/10 border-success/20',
    medium: 'text-warning bg-warning/10 border-warning/20',
    hard: 'text-danger bg-danger/10 border-danger/20',
  };

  return (
    <div className="h-full overflow-y-auto animate-fade-in">
      <div className="max-w-7xl mx-auto p-5 space-y-4">
        <SectionHeader
          title="GeoMystery"
          subtitle="Where in the world are you?"
          icon="Gamepad2"
          badge="Game"
        />

        {/* Game stats bar */}
        <div className="grid grid-cols-4 gap-3">
          <div className="panel p-3 flex items-center gap-3">
            <Trophy className="w-5 h-5 text-warning" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-text-muted">Score</p>
              <p className="text-lg font-bold text-text-primary">{score}</p>
            </div>
          </div>
          <div className="panel p-3 flex items-center gap-3">
            <Timer className={`w-5 h-5 ${timeLeft < 15 ? 'text-danger' : 'text-accent-cyan'}`} />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-text-muted">Time</p>
              <p className={`text-lg font-mono font-bold ${timeLeft < 15 ? 'text-danger' : 'text-text-primary'}`}>{timeLeft}s</p>
            </div>
          </div>
          <div className="panel p-3 flex items-center gap-3">
            <Icons.Target className="w-5 h-5 text-accent-violet" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-text-muted">Attempts</p>
              <p className="text-lg font-bold text-text-primary">{attempts}</p>
            </div>
          </div>
          <div className="panel p-3 flex items-center gap-3">
            <span className={`text-xs font-mono px-2 py-0.5 rounded border ${difficultyColor[puzzle.difficulty]}`}>
              {puzzle.difficulty.toUpperCase()}
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-text-muted">Puzzle</p>
              <p className="text-lg font-bold text-text-primary">{puzzleIndex + 1}/{mysteryLocations.length}</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {/* Clues */}
          <div className="lg:col-span-2 panel p-5">
            <p className="text-xs text-text-muted font-mono uppercase tracking-wider mb-4">Geographic Clues</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {puzzle.clues.map((clue) => {
                const Icon = getIcon(clue.icon);
                return (
                  <div key={clue.id} className="panel-elevated p-4 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent-cyan" />
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed pt-1">{clue.text}</p>
                  </div>
                );
              })}
            </div>

            {/* Answer input */}
            <div className="mt-5">
              <p className="text-xs text-text-muted font-mono uppercase tracking-wider mb-2">Your Answer</p>
              {!showExplanation ? (
                <div className="flex gap-2">
                  <input
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                    placeholder="Type a city name..."
                    className="flex-1 bg-bg-secondary border border-border-subtle rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan/40 transition-colors"
                  />
                  <Button variant="primary" onClick={handleSubmit}>
                    <Check className="w-4 h-4" />
                    Submit
                  </Button>
                </div>
              ) : (
                <div className={`p-4 rounded-lg border ${feedback === 'correct' ? 'bg-success/10 border-success/30' : 'bg-danger/10 border-danger/30'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    {feedback === 'correct' ? (
                      <><Check className="w-5 h-5 text-success" /><span className="text-success font-semibold">Correct!</span></>
                    ) : (
                      <><X className="w-5 h-5 text-danger" /><span className="text-danger font-semibold">The answer was {puzzle.name}, {puzzle.country}</span></>
                    )}
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{puzzle.explanation}</p>
                </div>
              )}
            </div>

            {/* Actions */}
            {showExplanation && (
              <div className="flex gap-2 mt-4">
                <Button variant="primary" onClick={nextPuzzle}>
                  Next Puzzle
                </Button>
                <Button variant="ghost" onClick={resetGame}>
                  <RotateCcw className="w-4 h-4" />
                  Reset Game
                </Button>
              </div>
            )}
          </div>

          {/* Map + progress */}
          <div className="space-y-4">
            <div className="panel p-4">
              <p className="text-xs text-text-muted font-mono uppercase tracking-wider mb-3">Mystery Map</p>
              <MapPlaceholder
                className="h-44"
                showCrosshair={false}
                markers={[{ x: 50, y: 50, color: '#a78bfa', pulse: true }]}
                interactive={false}
              />
              <p className="text-xs text-text-muted text-center mt-2">Location hidden — deduce from clues</p>
            </div>

            <div className="panel p-4">
              <p className="text-xs text-text-muted font-mono uppercase tracking-wider mb-3">Progress</p>
              <div className="space-y-2">
                {mysteryLocations.map((loc, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${solved[i] ? 'bg-success' : i === puzzleIndex ? 'bg-accent-cyan animate-pulse-slow' : 'bg-border'}`} />
                    <span className={`text-xs ${solved[i] ? 'text-success' : i === puzzleIndex ? 'text-accent-cyan' : 'text-text-muted'}`}>
                      Puzzle {i + 1} {solved[i] ? '— Solved' : ''}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}