import { useState } from 'react';
import { LandingPage } from '@/pages/LandingPage';
import { Sidebar } from '@/components/layout/Sidebar';
import { Topbar } from '@/components/layout/Topbar';
import { DashboardPage } from '@/pages/DashboardPage';
import { GeoDNAPage } from '@/pages/GeoDNAPage';
import { GeoRiskPage } from '@/pages/GeoRiskPage';
import { GeoRipplePage } from '@/pages/GeoRipplePage';
import { WhatIfPage } from '@/pages/WhatIfPage';
import { TimeMachinePage } from '@/pages/TimeMachinePage';
import { ChangeDetectionPage } from '@/pages/ChangeDetectionPage';
import { WhyHerePage } from '@/pages/WhyHerePage';
import { GeoMysteryPage } from '@/pages/GeoMysteryPage';
import { ReportsPage } from '@/pages/ReportsPage';
import { SavedSimulationsPage } from '@/pages/SavedSimulationsPage';
import { SettingsPage } from '@/pages/SettingsPage';
import type { PageId } from '@/types';

function App() {
  const [entered, setEntered] = useState(false);
  const [activePage, setActivePage] = useState<PageId>('map');

  if (!entered) {
    return <LandingPage onEnter={() => setEntered(true)} />;
  }

  const renderPage = () => {
    switch (activePage) {
      case 'map': return <DashboardPage />;
      case 'geodna': return <GeoDNAPage />;
      case 'georisk': return <GeoRiskPage />;
      case 'georipple': return <GeoRipplePage />;
      case 'whatif': return <WhatIfPage />;
      case 'timemachine': return <TimeMachinePage />;
      case 'changedetection': return <ChangeDetectionPage />;
      case 'whyhere': return <WhyHerePage />;
      case 'geomystery': return <GeoMysteryPage />;
      case 'reports': return <ReportsPage />;
      case 'saved': return <SavedSimulationsPage />;
      case 'settings': return <SettingsPage />;
      default: return <DashboardPage />;
    }
  };

  return (
    <div className="h-screen flex bg-bg-primary text-text-primary overflow-hidden">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar activePage={activePage} />
        <main className="flex-1 min-h-0 p-4">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;
