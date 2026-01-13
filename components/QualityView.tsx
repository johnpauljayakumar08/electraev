
import React from 'react';
import { MOCK_QUALITY } from '../constants';

export const QualityView: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">First Pass Yield (FPY)</p>
          <p className="text-3xl font-black text-slate-900">99.4%</p>
          <span className="text-emerald-500 text-[10px] font-bold uppercase">+0.2% vs Target</span>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Total NG Items</p>
          <p className="text-3xl font-black text-rose-600">54</p>
          <span className="text-slate-400 text-[10px] font-bold uppercase">Across 12 Batches</span>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Open NCRs</p>
          <p className="text-3xl font-black text-amber-500">2</p>
          <span className="text-slate-400 text-[10px] font-bold uppercase">Avg Resolution: 2.4d</span>
        </div>
        <div className="bg-indigo-600 p-6 rounded-3xl text-white shadow-lg shadow-indigo-100">
          <p className="text-white/70 text-[10px] font-black uppercase tracking-widest mb-1">Quality Score</p>
          <p className="text-3xl font-black">A+</p>
          <span className="text-white/50 text-[10px] font-bold uppercase">Platinum Category</span>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-[2rem] shadow-sm overflow-hidden">
        <div className="p-7 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div>
            <h3 className="text-lg font-black text-slate-800 tracking-tight">Quality Records & Responses</h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">NCR / CAPA / Quality Review</p>
          </div>
          <button className="px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl">Generate CAPA Response</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200">
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Doc Number</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Reference PO</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Type</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">OK vs NG</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_QUALITY.map((record) => (
                <tr key={record.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-5">
                    <p className="text-sm font-black text-slate-800 tracking-tight">{record.id}</p>
                    <p className="text-[10px] text-slate-400 font-medium truncate w-48">{record.description}</p>
                  </td>
                  <td className="px-6 py-5 text-xs font-bold text-indigo-600">
                    {record.orderId}
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-[10px] font-black px-2 py-0.5 bg-slate-100 text-slate-600 rounded-lg uppercase tracking-widest border border-slate-200">{record.type}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex gap-2 text-xs font-bold">
                      <span className="text-emerald-600">OK: {record.okCount}</span>
                      <span className="text-rose-600">NG: {record.ngCount}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`text-[10px] font-black px-3 py-1 rounded-full border uppercase tracking-widest ${record.status === 'CLOSED' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                      {record.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-[10px] font-black text-indigo-600 hover:text-indigo-700 uppercase tracking-widest transition-colors">Open Case</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
