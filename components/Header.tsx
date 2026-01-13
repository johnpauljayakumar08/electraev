
import React, { useState } from 'react';
import { ViewType } from '../types';
import { MOCK_NOTIFICATIONS } from '../constants';

interface HeaderProps {
  activeView: ViewType;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (val: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeView, setIsSidebarOpen, isSidebarOpen }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const unreadCount = MOCK_NOTIFICATIONS.filter(n => !n.read).length;

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 md:px-8 shrink-0 shadow-sm">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-lg hover:bg-slate-100 lg:hidden text-slate-500"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex flex-col">
           <h1 className="text-lg font-black text-slate-800 capitalize tracking-tight leading-none">
             {activeView.toLowerCase().replace('_', ' ')}
           </h1>
           <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.15em] mt-1">Electra EV</p>
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <div className="hidden md:flex relative group">
          <input 
            type="text" 
            placeholder="Search POs, Shipments, Raw Materials..." 
            className="w-64 lg:w-96 pl-10 pr-4 py-2 bg-slate-100 border-none rounded-2xl text-xs focus:ring-2 focus:ring-indigo-500 transition-all outline-none font-bold placeholder:text-slate-400"
          />
          <svg className="absolute left-3.5 top-2.5 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2.5 rounded-2xl hover:bg-slate-50 relative text-slate-500 transition-all active:scale-95"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            {unreadCount > 0 && (
              <span className="absolute top-2 right-2 w-4 h-4 bg-rose-500 border-2 border-white rounded-full text-[9px] text-white flex items-center justify-center font-black">
                {unreadCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-4 w-80 bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-top-4 duration-300">
              <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h3 className="font-black text-slate-800 text-xs uppercase tracking-widest">Alerts Center</h3>
                <span className="text-[10px] text-indigo-600 font-black cursor-pointer hover:underline uppercase tracking-widest">Clear All</span>
              </div>
              <div className="max-h-[400px] overflow-y-auto">
                {MOCK_NOTIFICATIONS.map(n => (
                  <div key={n.id} className="p-5 hover:bg-slate-50 border-b border-slate-50 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-start mb-1.5">
                      <h4 className="text-xs font-black text-slate-800 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{n.title}</h4>
                      <span className="text-[9px] text-slate-400 font-bold uppercase">{n.time}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{n.message}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 text-center bg-slate-50/80">
                <button className="text-[10px] font-black text-slate-500 hover:text-slate-800 uppercase tracking-widest">View Operational Logs</button>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4 pl-5 border-l border-slate-100">
          <div className="hidden lg:block text-right">
            <p className="text-xs font-black text-slate-800 leading-none mb-1">Electra EVs</p>
            <p className="text-[10px] text-emerald-600 font-black uppercase tracking-widest">Active Supplier</p>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-indigo-600 border-2 border-white shadow-md flex items-center justify-center text-white font-black text-xs cursor-pointer hover:rotate-6 transition-all active:scale-90">
            EE
          </div>
        </div>
      </div>
    </header>
  );
};
