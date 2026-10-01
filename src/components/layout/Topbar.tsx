import { Search, Bell, ChevronDown, Globe } from 'lucide-react';
import { useState } from 'react';
import type { PageId } from '@/types';
import { navItems } from '@/data/navigation';

interface TopbarProps {
  activePage: PageId;
}

export function Topbar({ activePage }: TopbarProps) {
  const [search, setSearch] = useState('');
  const currentNav = navItems.find((n) => n.id === activePage);

  return (
    <header className="h-14 shrink-0 bg-bg-secondary border-b border-border-subtle flex items-center justify-between px-5 gap-4">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-text-muted">GeoSphere</span>
        <span className="text-text-muted">/</span>
        <span className="text-text-primary font-medium">{currentNav?.label ?? 'Map'}</span>
      </div>

      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search location..."
            className="w-full bg-bg-panel border border-border-subtle rounded-lg pl-9 pr-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan/40 transition-colors"
          />
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-lg hover:bg-bg-panel text-text-muted hover:text-text-primary transition-colors relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan" />
        </button>
        <div className="h-6 w-px bg-border-subtle" />
        <button className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-bg-panel transition-colors">
          <div className="w-7 h-7 rounded-full bg-accent-cyan/15 border border-accent-cyan/30 flex items-center justify-center">
            <Globe className="w-3.5 h-3.5 text-accent-cyan" />
          </div>
          <span className="text-sm text-text-secondary">Analyst</span>
          <ChevronDown className="w-3.5 h-3.5 text-text-muted" />
        </button>
      </div>
    </header>
  );
}
