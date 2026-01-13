
import React from 'react';

export const ProcessFlowView: React.FC = () => {
  const Step = ({ label, description, color, isAction }: { label: string; description?: string; color: string; isAction?: boolean }) => (
    <div className={`relative flex flex-col items-center p-4 rounded-2xl border-2 ${color} bg-white shadow-sm w-48 transition-all hover:scale-105 hover:shadow-md cursor-default`}>
      <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-50">{isAction ? 'Supplier Action' : 'System Step'}</p>
      <h4 className="text-xs font-black text-slate-800 text-center leading-tight uppercase tracking-tight">{label}</h4>
      {description && <p className="text-[9px] text-slate-400 mt-2 font-bold uppercase text-center">{description}</p>}
    </div>
  );

  const Connector = ({ direction = 'v', length = 'h-8' }: { direction?: 'v' | 'h'; length?: string }) => (
    <div className={`${direction === 'v' ? `${length} w-0.5` : `${length} h-0.5`} bg-slate-200 relative`}>
      <div className={`absolute ${direction === 'v' ? 'bottom-0 -left-1' : 'right-0 -top-1'}`}>
        <svg className={`w-2.5 h-2.5 text-slate-200 ${direction === 'h' ? '-rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12l-6-6h12l-6 6z" />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="space-y-8 pb-20">
      <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
        <div className="mb-12">
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Supplier Lifecycle - Battery Assembly Line</h2>
          <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.2em] mt-2">End-to-End Operational Workflow & SAP Integration</p>
        </div>

        <div className="flex flex-col items-center">
          {/* Main Spine */}
          <Step label="Supplier Registration" color="border-indigo-100" isAction />
          <Connector />
          <Step label="Compliance & Approval" description="Document Audit" color="border-indigo-100" isAction />
          <Connector />
          <Step label="PO Release from ERP" description="SAP Triggered" color="border-slate-100" />
          <Connector />
          <Step label="PO Acknowledgement" color="border-indigo-200" isAction />
          <Connector />
          <Step label="Material Dispatch & ASN" color="border-indigo-400" isAction />
          <Connector />
          <Step label="GRN in SAP" color="border-slate-200" />
          <Connector />

          {/* Decision Node */}
          <div className="relative w-48 h-24 border-2 border-indigo-600 rounded-3xl flex items-center justify-center bg-indigo-600 text-white font-black text-xs uppercase tracking-widest shadow-xl rotate-45 group">
             <span className="-rotate-45">Quality Inspection</span>
             
             {/* Branch Labels */}
             <div className="absolute -right-16 top-0 -rotate-45 text-emerald-600 font-black text-[10px] uppercase">PASS (OK)</div>
             <div className="absolute -left-16 bottom-0 -rotate-45 text-rose-600 font-black text-[10px] uppercase">FAIL (NOK)</div>
          </div>

          <div className="flex gap-40 mt-16">
            {/* SUCCESS PATHWAY */}
            <div className="flex flex-col items-center">
               <Connector length="h-12" />
               <Step label="Invoice Submission" color="border-emerald-100 shadow-emerald-50" isAction />
               <Connector />
               <Step label="3-Way Match" description="PO-GRN-Invoice" color="border-emerald-200" />
               <Connector />
               <Step label="Stock Addition" color="border-emerald-300" />
               <Connector />
               <Step label="Supplier Performance" color="border-indigo-600 bg-indigo-50" />
            </div>

            {/* FAILURE PATHWAY */}
            <div className="flex flex-col items-center">
               <Connector length="h-12" />
               <Step label="NCR Raised" description="Non-Conformance" color="border-rose-200 shadow-rose-50" />
               <Connector />
               <Step label="Supplier CAPA" description="Corrective Action" color="border-rose-400 shadow-rose-50" isAction />
               <Connector />
               <Step label="Quality Review" color="border-rose-500 shadow-rose-50" />
               <Connector />
               <Step label="Case Closure" color="border-slate-800 bg-slate-50" />
            </div>
          </div>

          <Connector length="h-12" />
          <div className="bg-slate-900 text-white px-10 py-5 rounded-[2rem] shadow-2xl border-4 border-slate-800 flex flex-col items-center gap-1 group transition-all hover:scale-105">
            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Final Impact</span>
            <h5 className="text-xl font-black uppercase tracking-tight">Performance Update</h5>
            <p className="text-[9px] text-slate-500 font-bold uppercase mt-2">Tier Level Recalculated</p>
          </div>
        </div>
      </div>

      {/* Internal Teams Legend */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2rem] border border-slate-200">
           <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-50 pb-4">Internal Stakeholders</h4>
           <div className="grid grid-cols-2 gap-4">
             {['SCM / Purchase', 'Quality Team', 'Stores / Logistics', 'Finance Hub'].map((team, i) => (
               <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100 font-bold text-xs text-slate-700">
                 <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                 {team}
               </div>
             ))}
           </div>
        </div>
        <div className="bg-white p-8 rounded-[2rem] border border-slate-200">
           <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-50 pb-4">SAP Integration Points</h4>
           <div className="grid grid-cols-2 gap-4">
             {['Supplier Master', 'Purchase Orders', 'GRN Records', 'Payment Status'].map((mod, i) => (
               <div key={i} className="flex items-center gap-3 p-3 bg-indigo-50/50 rounded-2xl border border-indigo-100 font-bold text-xs text-indigo-700">
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM5.884 6.607a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM15.414 6.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM3.707 10.707a1 1 0 011.414-1.414l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM13 13a1 1 0 011.414-1.414l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414z" /></svg>
                 {mod}
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};
