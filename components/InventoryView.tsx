
import React from 'react';
import { MOCK_PRODUCTS } from '../constants';

export const InventoryView: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Active Batch Count</p>
          <p className="text-3xl font-black text-slate-900">12</p>
          <div className="mt-4 flex items-center gap-2 text-indigo-600 text-xs font-bold">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h16a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2v-7z" /></svg>
            <span>Real-time SAP Sync Active</span>
          </div>
        </div>
        <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100 shadow-sm relative overflow-hidden group">
          <p className="text-rose-600/70 text-xs font-bold uppercase tracking-widest mb-2">Low Stock Alerts</p>
          <p className="text-3xl font-black text-rose-700">3</p>
          <p className="mt-4 text-rose-600 text-xs font-semibold underline cursor-pointer">Restock Requirement Pending</p>
        </div>
        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 shadow-sm relative overflow-hidden group">
          <p className="text-amber-600/70 text-xs font-bold uppercase tracking-widest mb-2">Near Expiry Batches</p>
          <p className="text-3xl font-black text-amber-700">2</p>
          <p className="mt-4 text-amber-600 text-xs font-semibold underline cursor-pointer">Quality Review Needed</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div>
            <h3 className="text-lg font-black text-slate-800 tracking-tight">Stock Visibility & Control</h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Real-time Inventory Balance</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white border border-slate-200 text-xs font-black uppercase tracking-widest text-slate-600 rounded-xl">Inventory Adjust</button>
            <button className="px-4 py-2 bg-indigo-600 text-white text-xs font-black uppercase tracking-widest rounded-xl">Add SKU</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200">
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Material / SKU</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Bin Location</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Batch / Lot</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Stock Level</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Expiry Date</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Control</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_PRODUCTS.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-5">
                    <p className="text-sm font-black text-slate-800 tracking-tight">{product.name}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">{product.sku}</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-lg border border-slate-200">{product.binLocation}</span>
                  </td>
                  <td className="px-6 py-5 text-sm font-mono font-bold text-indigo-600">
                    {product.batchLot}
                  </td>
                  <td className="px-6 py-5">
                    <div className="space-y-1.5 w-32">
                      <div className="flex justify-between text-[10px] font-black uppercase text-slate-400">
                        <span>{product.stock} units</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ${product.stock < product.minStock ? 'bg-rose-500' : 'bg-indigo-500'}`} 
                          style={{ width: `${Math.min(100, (product.stock / (product.minStock * 5)) * 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-xs font-bold text-slate-500">
                    {product.expiryDate}
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-[10px] font-black text-indigo-600 hover:text-indigo-700 uppercase tracking-widest border-b border-transparent hover:border-indigo-600 transition-all">Move Item</button>
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
