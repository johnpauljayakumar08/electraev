
import React from 'react';
import { MOCK_INVOICES } from '../constants';

export const PaymentsView: React.FC = () => {
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3 space-y-6">
          <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl border border-slate-800">
             <div className="absolute top-0 right-0 p-12 opacity-5">
               <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg>
             </div>
             <div className="relative z-10">
               <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">Settlement Account Balance</p>
               <h3 className="text-5xl font-black mb-8 tracking-tighter">{formatCurrency(8440000)}</h3>
               <div className="flex gap-4">
                 <button className="px-6 py-3 bg-white text-slate-900 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-indigo-50 transition-colors shadow-lg">Initiate Withdrawal</button>
                 <button className="px-6 py-3 bg-slate-800 text-slate-100 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-slate-700 transition-colors border border-slate-700">Bank Statements</button>
               </div>
             </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-lg font-bold text-slate-800">Recent GST Invoices</h3>
              <button className="text-xs text-indigo-600 font-black uppercase tracking-widest hover:underline">Batch Download (ZIP)</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Invoice No.</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Order ID</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Gross Amount</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {MOCK_INVOICES.map((inv) => (
                    <tr key={inv.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-bold text-slate-900">{inv.id}</td>
                      <td className="px-6 py-4 text-xs text-indigo-600 font-bold uppercase">#{inv.orderId}</td>
                      <td className="px-6 py-4 text-sm font-black text-slate-900">{formatCurrency(inv.amount)}</td>
                      <td className="px-6 py-4">
                        <span className={`text-[10px] font-black px-2 py-1 rounded-full border uppercase tracking-widest ${inv.status === 'PAID' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                          {inv.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Payment Calendar</h3>
            <div className="space-y-6">
              {[
                { label: 'Next Settlement Date', val: 'May 28, 2024', sub: 'Weekly Payout Cycle' },
                { label: 'Pending Processing', val: formatCurrency(6450000), sub: 'Verification ongoing' },
                { label: 'FY Earnings (Lakhs)', val: '₹94.1L', sub: 'Post TDS deduction' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-bold text-slate-800">{item.label}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">{item.sub}</p>
                  </div>
                  <p className="text-sm font-black text-slate-900">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
