import { getIcon } from '@/lib/icons';
import { navItems, navSections } from '@/data/navigation';
import type { PageId } from '@/types';
import { GlobeIcon } from '@/components/ui/GlobeIcon';
interface SidebarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export function Sidebar({ activePage, onNavigate }: SidebarProps) {
  return (
    <aside className="w-60 shrink-0 h-full bg-bg-secondary border-r border-border-subtle flex flex-col">
      {/* Logo */}
      <div className="h-14 flex items-center gap-2.5 px-5 border-b border-border-subtle">
        <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center">
          <GlobeIcon />
        </div>
        <span className="text-sm font-bold tracking-wider">GEOSPHERE</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {navSections.map((section) => (
          <div key={section.id} className="mb-6">
            <p className="px-3 mb-2 text-[10px] font-mono uppercase tracking-widest text-text-muted">
              {section.label}
            </p>
            <div className="space-y-0.5">
              {navItems
                .filter((item) => item.section === section.id)
                .map((item) => {
                  const Icon = getIcon(item.icon);
                  const active = activePage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onNavigate(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 group ${
                        active
                          ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20'
                          : 'text-text-secondary hover:text-text-primary hover:bg-bg-panel border border-transparent'
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${active ? 'text-accent-cyan' : 'text-text-muted group-hover:text-text-secondary'}`} />
                      <span className="truncate">{item.label}</span>
                      {active && <span className="ml-auto w-1 h-1 rounded-full bg-accent-cyan" />}
                    </button>
                  );
                })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-border-subtle">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-slow" />
          <span className="font-mono">System Online</span>
        </div>
      </div>
    </aside>
  );
}