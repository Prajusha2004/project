import { useState, useEffect, useRef } from 'react';
import { SectionHeader, ChartCard } from '@/components/ui/Cards';
import { MapPlaceholder } from '@/components/ui/MapPlaceholder';
import { timeLayers } from '@/data/timeMachine';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

export function TimeMachinePage() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const layer = timeLayers[index];

  useEffect(() => {
    if (playing) {
      timer.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % timeLayers.length);
      }, 1500);
    } else if (timer.current) {
      clearInterval(timer.current);
    }
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [playing]);

  return (
    <div className="h-full overflow-y-auto animate-fade-in">
      <div className="max-w-7xl mx-auto p-5 space-y-4">
        <SectionHeader
          title="Time Machine"
          subtitle={`Geographic change over time — ${layer.label}`}
          icon="Clock"
          badge="1900 → Present"
        />

        {/* Map */}
        <ChartCard title="Historical Map" subtitle={layer.description} icon="Map">
          <MapPlaceholder
            className="h-80"
            showCrosshair={false}
            year={layer.year}
            interactive={false}
          />
        </ChartCard>

        {/* Coverage stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Urban Coverage', value: layer.urbanCoverage, color: 'text-warning', bg: 'bg-warning/60' },
            { label: 'Vegetation', value: layer.vegetationCoverage, color: 'text-success', bg: 'bg-success/60' },
            { label: 'Water Bodies', value: layer.waterCoverage, color: 'text-accent-blue', bg: 'bg-accent-blue/60' },
          ].map((stat) => (
            <div key={stat.label} className="panel p-4">
              <p className="text-[11px] uppercase tracking-wider text-text-muted">{stat.label}</p>
              <p className={`text-2xl font-bold mt-1 ${stat.color}`}>{stat.value}%</p>
              <div className="h-1.5 rounded-full bg-bg-secondary overflow-hidden mt-2">
                <div className={`h-full rounded-full ${stat.bg} transition-all duration-500`} style={{ width: `${stat.value}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="panel p-5">
          {/* Timeline track */}
          <div className="relative mb-8">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-border-subtle" />
            <div className="flex justify-between items-center relative">
              {timeLayers.map((tl, i) => (
                <button
                  key={tl.year}
                  onClick={() => { setIndex(i); setPlaying(false); }}
                  className="flex flex-col items-center group"
                >
                  <div
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                      i === index
                        ? 'bg-accent-cyan border-accent-cyan scale-125 shadow-[0_0_12px_rgba(34,211,238,0.5)]'
                        : i < index
                        ? 'bg-accent-cyan/40 border-accent-cyan/40'
                        : 'bg-bg-secondary border-border group-hover:border-accent-cyan/40'
                    }`}
                  />
                  <span className={`mt-2 text-xs font-mono ${i === index ? 'text-accent-cyan' : 'text-text-muted'}`}>
                    {tl.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Playback controls */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => { setIndex(Math.max(0, index - 1)); setPlaying(false); }}
              className="p-2.5 rounded-lg bg-bg-panel border border-border-subtle hover:border-accent-cyan/30 text-text-secondary hover:text-text-primary transition-colors"
            >
              <SkipBack className="w-4 h-4" />
            </button>
            <button
              onClick={() => setPlaying(!playing)}
              className="p-3 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/20 transition-colors"
            >
              {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            <button
              onClick={() => { setIndex(Math.min(timeLayers.length - 1, index + 1)); setPlaying(false); }}
              className="p-2.5 rounded-lg bg-bg-panel border border-border-subtle hover:border-accent-cyan/30 text-text-secondary hover:text-text-primary transition-colors"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Population */}
        <div className="panel p-4 flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-text-muted">Population</p>
            <p className="text-2xl font-bold text-text-primary mt-1">{layer.population}</p>
          </div>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-wider text-text-muted">Year</p>
            <p className="text-2xl font-bold text-accent-cyan mt-1 font-mono">{layer.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
