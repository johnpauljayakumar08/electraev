
import React, { useState } from 'react';
import { MOCK_ORDERS } from '../constants';
import { OrderStatus } from '../types';

export const DashboardOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ALL' | OrderStatus>('ALL');
  
  const totalPOs = MOCK_ORDERS.length;
  const deliveredPOs = MOCK_ORDERS.filter(o => o.status === OrderStatus.DELIVERED).length;
  
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const stats = [
    { label: 'Total POs Received', value: totalPOs.toString(), change: '+8%', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V15a2 2 0 01-2 2z', color: 'indigo' },
    { label: 'Total POs Delivered', value: deliveredPOs.toString(), change: '+12%', icon: 'M5 13l4 4L19 7', color: 'emerald' },
    { label: 'Revenue Earned (YTD)', value: formatCurrency(94100000), change: '+22.8%', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'sky' },
    { label: 'Pending Payouts', value: formatCurrency(6450000), change: '-5.4%', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z', color: 'amber' },
  ];

  const colorMap: any = {
    indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    amber: 'bg-amber-50 text-amber-600 border-amber-100',
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    sky: 'bg-sky-50 text-sky-600 border-sky-100',
  };

  const tabs = [
    { id: 'ALL', label: 'All Orders', count: MOCK_ORDERS.length },
    { id: OrderStatus.NEW, label: 'Awaiting', count: MOCK_ORDERS.filter(o => o.status === OrderStatus.NEW).length },
    { id: OrderStatus.IN_PROGRESS, label: 'In Progress', count: MOCK_ORDERS.filter(o => o.status === OrderStatus.IN_PROGRESS).length },
    { id: OrderStatus.DELIVERED, label: 'Delivered', count: MOCK_ORDERS.filter(o => o.status === OrderStatus.DELIVERED).length },
  ];

  const filteredOrders = MOCK_ORDERS.filter(o => activeTab === 'ALL' || o.status === activeTab);

  const getStatusBadge = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.NEW: return <span className="text-[9px] font-black bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full border border-amber-100 uppercase">Awaiting Action</span>;
      case OrderStatus.IN_PROGRESS: return <span className="text-[9px] font-black bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full border border-blue-100 uppercase">In Manufacturing</span>;
      case OrderStatus.DELIVERED: return <span className="text-[9px] font-black bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full border border-emerald-100 uppercase">Closed / Delivered</span>;
      default: return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Electra EVs</h2>
          <p className="text-slate-500 mt-1 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Supplier Dashboard • VoltCore Network
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
            Export GST Statement
          </button>
          <button className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
            Bulk Accept POs
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl ${colorMap[stat.color]}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.icon} />
                </svg>
              </div>
              <span className={`text-[10px] font-black px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-rose-50 text-rose-600 border border-rose-100'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</h3>
            <p className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Comprehensive PO Progress Section */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        <div className="p-7 border-b border-slate-100 bg-slate-50/30">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="text-lg font-black text-slate-800 tracking-tight">Purchase Order Lifecycle</h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Operational Flow & Order Progress</p>
            </div>
            <div className="flex bg-slate-200/50 p-1.5 rounded-2xl gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${
                    activeTab === tab.id 
                      ? 'bg-white text-indigo-600 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {tab.label}
                  <span className={`px-1.5 py-0.5 rounded-md text-[8px] ${activeTab === tab.id ? 'bg-indigo-600 text-white' : 'bg-slate-300 text-slate-600'}`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto max-h-[600px]">
          {filteredOrders.length > 0 ? (
            <div className="divide-y divide-slate-50">
              {filteredOrders.map((po, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 hover:bg-slate-50 transition-colors group">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-indigo-600 group-hover:border-indigo-200 transition-all">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                         <p className="text-sm font-black text-slate-900 uppercase tracking-tight">{po.productName}</p>
                         <span className="text-[9px] font-black text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">#{po.id}</span>
                         {getStatusBadge(po.status)}
                      </div>
                      <div className="flex items-center gap-4 text-[11px] font-bold text-slate-500">
                        <p>Qty: <span className="text-slate-900">{po.quantity} Units</span></p>
                        <p>Value: <span className="text-slate-900 font-black">{formatCurrency(po.amount)}</span></p>
                        <p className="hidden sm:block">Expected: <span className="text-slate-900">{po.expectedDelivery}</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4 md:mt-0">
                    {po.status === OrderStatus.NEW && (
                      <>
                        <button className="flex-1 md:flex-none px-4 py-2 bg-white border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-rose-500 hover:border-rose-200 transition-all rounded-xl">Reject</button>
                        <button className="flex-1 md:flex-none px-4 py-2 bg-indigo-600 text-[10px] font-black uppercase tracking-widest text-white rounded-xl hover:bg-indigo-700 shadow-md shadow-indigo-100 transition-all">Accept PO</button>
                      </>
                    )}
                    {po.status === OrderStatus.IN_PROGRESS && (
                      <button className="flex-1 md:flex-none px-4 py-2 bg-white border border-indigo-200 text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:bg-indigo-50 transition-all rounded-xl">Create Shipment (ASN)</button>
                    )}
                    {po.status === OrderStatus.DELIVERED && (
                      <button className="flex-1 md:flex-none px-4 py-2 bg-white border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-600 hover:border-slate-800 transition-all rounded-xl">View GRN Receipt</button>
                    )}
                    <button className="p-2 bg-slate-100 text-slate-400 rounded-xl hover:text-indigo-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-slate-400">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="text-sm font-black uppercase tracking-widest opacity-40">No records found for this category</p>
            </div>
          )}
        </div>
        <div className="p-4 bg-slate-50/50 text-center border-t border-slate-100">
          <button className="text-[10px] font-black text-slate-500 hover:text-indigo-600 uppercase tracking-widest transition-colors">Download Global Order Summary (PDF)</button>
        </div>
      </div>
    </div>
  );
};
