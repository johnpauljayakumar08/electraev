
import React from 'react';
import { MOCK_ASNS } from '../constants';
import { ASNStatus } from '../types';

export const ASNView: React.FC = () => {
  const getStatusColor = (status: ASNStatus) => {
    switch (status) {
      case ASNStatus.PUBLISHED: return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      case ASNStatus.IN_TRANSIT: return 'bg-blue-50 text-blue-600 border-blue-100';
      case ASNStatus.IN_YARD: return 'bg-amber-50 text-amber-600 border-amber-100';
      case ASNStatus.PUTAWAY: return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      default: return 'bg-slate-100 text-slate-500 border-slate-200';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-xl font-black text-slate-800 tracking-tight">Advanced Shipping Notifications</h2>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">SAP SNC Logistics Module</p>
        </div>
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all">Create New ASN</button>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">ASN Number</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Purchase Order</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Carrier / SCAC</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Delivery Date (ETA)</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_ASNS.map((asn) => (
                <tr key={asn.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-5">
                    <span className="font-mono text-xs font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">#{asn.id}</span>
                    <p className="text-[9px] text-slate-400 font-bold uppercase mt-1">G.Weight: {asn.grossWeight} KG</p>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm font-bold text-slate-800 tracking-tight">{asn.orderId}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Ship-to: {asn.shipTo}</p>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-slate-600">{asn.carrier}</p>
                    <span className="text-[10px] font-black text-indigo-500 uppercase tracking-tighter">SCAC: {asn.scacId}</span>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-slate-900">{asn.eta}</p>
                    <p className="text-[9px] text-slate-400 font-bold uppercase">Departed: {asn.shippingDate}</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`text-[10px] font-black px-3 py-1 rounded-full border uppercase tracking-widest ${getStatusColor(asn.status)}`}>
                      {asn.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-[10px] font-black text-slate-400 hover:text-indigo-600 uppercase tracking-widest transition-colors">Details</button>
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
