
import React from 'react';

interface LandingViewProps {
  onSelect: (module: string) => void;
}

export const LandingView: React.FC<LandingViewProps> = ({ onSelect }) => {
  const modules = [
    {
      id: 'supplier',
      title: 'Supplier Portal',
      description: 'Global procurement, PO management, and supplier compliance tracking.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      gradient: 'from-indigo-600 to-indigo-800',
      badge: 'Strategic'
    },
    {
      id: 'inventory',
      title: 'Inventory Hub',
      description: 'Real-time warehouse visibility, SKU management, and stock optimization.',
      icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
      gradient: 'from-emerald-600 to-emerald-800',
      badge: 'Real-time'
    },
    {
      id: 'production',
      title: 'Production Line',
      description: 'Assembly line traceability, OEE analytics, and quality control systems.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      gradient: 'from-sky-600 to-sky-800',
      badge: 'Operational'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-200 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-200 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl w-full z-10 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-block px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600">Enterprise Resource Planning</span>
          </div>
          {/* <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900">Electra <span className="text-indigo-600">EV</span></h1> */}
          <img src={new URL('../assets/maineletraev.jpeg', import.meta.url).href} alt="Electra EV" className="w-62 h-18 object-contain mx-auto" />
          <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">Unified ecosystem for manufacturing, logistics, and vendor management. Select a module to begin.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((m) => (
            <button
              key={m.id}
              onClick={() => onSelect(m.id)}
              className="group relative bg-white border border-slate-200 p-8 rounded-[2.5rem] text-left transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/5 hover:border-indigo-100 overflow-hidden flex flex-col h-full shadow-sm"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${m.gradient} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity`}></div>
              
              <div className="flex justify-between items-start mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${m.gradient} flex items-center justify-center shadow-lg`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={m.icon} />
                  </svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-slate-50 rounded-full text-slate-500 border border-slate-200">{m.badge}</span>
              </div>

              <h3 className="text-2xl font-black mb-3 text-slate-900">{m.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1">{m.description}</p>
              
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-600 group-hover:translate-x-2 transition-transform">
                Enter System
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        <div>
          <p className="text-[10px] font-black uppercase tracking-widest">© 2026 Electra EVs Pvt Ltd.</p>
        </div>
      </div>
    </div>
  );
};
