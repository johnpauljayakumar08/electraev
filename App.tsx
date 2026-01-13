
import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardOverview } from './components/DashboardOverview';
import { OrdersView } from './components/OrdersView';
import { InventoryView } from './components/InventoryView';
import { PaymentsView } from './components/PaymentsView';
import { AnalyticsView } from './components/AnalyticsView';
import { ProfileView } from './components/ProfileView';
import { ASNView } from './components/ASNView';
import { QualityView } from './components/QualityView';
import { GenealogyView } from './components/GenealogyView';
import { ProcessFlowView } from './components/ProcessFlowView';
import { LandingView } from './components/LandingView';
import { LoginView } from './components/LoginView';
import { ViewType } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('LANDING');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  // Responsive sidebar handling
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleModuleSelect = (module: string) => {
    setSelectedModule(module);
    setActiveView('LOGIN');
  };

  const handleLoginSuccess = () => {
    setActiveView('OVERVIEW');
  };

  const handleLogout = () => {
    setActiveView('LANDING');
    setSelectedModule(null);
  };

  const renderContent = () => {
    switch (activeView) {
      case 'LANDING':
        return <LandingView onSelect={handleModuleSelect} />;
      case 'LOGIN':
        return (
          <LoginView 
            onLogin={handleLoginSuccess} 
            onBack={() => setActiveView('LANDING')} 
            moduleName={selectedModule || 'System'}
          />
        );
      default:
        return (
          <div className="flex h-screen bg-slate-50 overflow-hidden font-sans text-slate-900">
            <Sidebar 
              activeView={activeView} 
              setActiveView={setActiveView} 
              isOpen={isSidebarOpen} 
              setIsOpen={setIsSidebarOpen}
              onLogout={handleLogout}
            />
            
            <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'ml-0'}`}>
              <Header activeView={activeView} setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
              
              <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
                {renderView()}
              </main>
            </div>
          </div>
        );
    }
  };

  const renderView = () => {
    switch (activeView) {
      case 'OVERVIEW': return <DashboardOverview />;
      case 'FLOW': return <ProcessFlowView />;
      case 'ORDERS': return <OrdersView />;
      case 'ASN': return <ASNView />;
      case 'INVENTORY': return <InventoryView />;
      case 'QUALITY': return <QualityView />;
      case 'GENEALOGY': return <GenealogyView />;
      case 'PAYMENTS': return <PaymentsView />;
      case 'ANALYTICS': return <AnalyticsView />;
      case 'PROFILE': return <ProfileView />;
      default: return <DashboardOverview />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 font-sans text-slate-900">
      {renderContent()}
    </div>
  );
};

export default App;
