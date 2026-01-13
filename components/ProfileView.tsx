
import React from 'react';

export const ProfileView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
        <div className="h-40 bg-slate-900 relative">
          <div className="absolute -bottom-14 left-10 w-28 h-28 rounded-3xl bg-white p-1.5 shadow-xl border border-slate-100">
             <div className="w-full h-full bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black">
               EE
             </div>
          </div>
          <div className="absolute bottom-4 right-8 flex gap-2">
             <button className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-xl transition-all">Edit Cover</button>
             <button className="px-4 py-2 bg-white text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg transition-all">Update Logo</button>
          </div>
        </div>
        <div className="pt-20 pb-10 px-10">
           <div className="flex justify-between items-start mb-10">
             <div>
               <h2 className="text-3xl font-black text-slate-900 tracking-tight">Electra EVs</h2>
               <p className="text-slate-500 font-bold text-lg mt-1">Tier 1 Strategic Manufacturing Partner</p>
               <div className="flex gap-4 mt-4">
                  <span className="text-[10px] font-black uppercase bg-slate-100 text-slate-500 px-3 py-1.5 rounded-full border border-slate-200">PAN: BRTXXXX88G</span>
                  <span className="text-[10px] font-black uppercase bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-full border border-indigo-100">GSTIN: 07AAACB22XX11</span>
               </div>
             </div>
             <div className="flex flex-col items-end gap-2">
               <div className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-2xl border border-emerald-100">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                 <span className="text-[11px] font-black uppercase tracking-widest">KYC Verified</span>
               </div>
               <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Member since 2018</p>
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             <div className="space-y-8">
               <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100 pb-3">Entity Details</h3>
               <div className="space-y-5">
                 {[
                   { label: 'Registered Name', val: 'Electra EVs Pvt Ltd.' },
                   { label: 'Business Type', val: 'Large Scale Enterprise (LSE)' },
                   { label: 'MSME Status', val: 'Registered (Udyam-229)' },
                   { label: 'HQ Location', val: 'Industrial Area, Pune, MH' },
                 ].map((d, i) => (
                   <div key={i} className="flex justify-between items-center">
                     <span className="text-xs text-slate-500 font-bold uppercase tracking-tight">{d.label}</span>
                     <span className="text-sm font-black text-slate-900">{d.val}</span>
                   </div>
                 ))}
               </div>
             </div>

             <div className="space-y-8">
               <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100 pb-3">Financial Gateway</h3>
               <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                  <div>
                    <p className="text-[10px] text-slate-400 font-black mb-1 uppercase tracking-widest">Settlement Bank</p>
                    <p className="text-sm font-black text-slate-900">HDFC Corporate Banking Hub</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-black mb-1 uppercase tracking-widest">Account Number</p>
                    <p className="text-sm font-mono font-bold text-slate-700 uppercase tracking-tighter">XXXX XXXX 8892 1100</p>
                  </div>
                  <button className="w-full py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:border-indigo-200 transition-all">Change Account Nodes</button>
               </div>
             </div>
           </div>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-10">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-black text-slate-800 tracking-tight">Compliance & Audits</h3>
          <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest border-b-2 border-indigo-100 hover:border-indigo-600 transition-all">Upload New Certificate</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'BIS IS 16046 (Battery Safety)', status: 'Active', expiry: 'Jan 2026' },
            { name: 'ISO 45001:2018 (Occupational Health)', status: 'Active', expiry: 'Oct 2024' },
            { name: 'NABL Accredited Testing Log', status: 'In Review', expiry: 'May 2024' },
            { name: 'Factory Pollution Board NOC', status: 'Active', expiry: 'Dec 2025' },
          ].map((doc, i) => (
            <div key={i} className="flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl border border-slate-100 group hover:border-indigo-200 hover:bg-white transition-all">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-emerald-600 shadow-sm border border-slate-50">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-black text-slate-800 tracking-tight">{doc.name}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Validity: {doc.expiry}</p>
                </div>
              </div>
              <span className={`text-[10px] font-black px-3 py-1 rounded-full border uppercase tracking-widest ${doc.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                {doc.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
