import React from 'react';

const History = ({ onBack }) => {
    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased font-display">
            {/* Side Navigation Bar */}
            <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark hidden lg:flex flex-col">
                <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-10 cursor-pointer" onClick={onBack}>
                        <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
                            <span className="material-symbols-outlined">biotech</span>
                        </div>
                        <div>
                            <h1 className="text-sm font-bold leading-none">DermAnalysis Pro</h1>
                            <p className="text-xs text-slate-500 mt-1">Clinical Portal v2.4</p>
                        </div>
                    </div>
                    <nav className="space-y-1 flex-1">
                        <button onClick={onBack} className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors w-full text-left">
                            <span className="material-symbols-outlined">dashboard</span>
                            <span className="text-sm font-medium">Dashboard</span>
                        </button>
                        <a className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg transition-colors" href="#">
                            <span className="material-symbols-outlined text-fill-1">group</span>
                            <span className="text-sm font-medium">Patient List</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
                            <span className="material-symbols-outlined">calendar_today</span>
                            <span className="text-sm font-medium">Appointments</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
                            <span className="material-symbols-outlined">analytics</span>
                            <span className="text-sm font-medium">Analytics</span>
                        </a>
                    </nav>
                    <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
                        <a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
                            <span className="material-symbols-outlined">settings</span>
                            <span className="text-sm font-medium">Settings</span>
                        </a>
                        <div className="mt-4 flex items-center gap-3 px-3">
                            <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAquVRVg8q-MEiOCghnev9yR4JhjCcm76-9cUWZDiqKGlt1ghfqUWPcQeWDFTxbPcOPdUsJEct74sUZtKls5nzCrd1miJEv7fe-73bqyoEQr3pD97lIKVSVTr8xe9VmQcEgSGrtjE2ygNRdS56yH6ZGg_mIA54YBMZvtKku1aKuY-kT5qqr1r-cdROeHQZmSEOnC6aNDN--Jd1q3npSP07JJfaCuTFSabcnuwcbCLtVCBuiFqMKANgiirpCnxr85ap7IR3txRrxg')" }}></div>
                            <div className="flex-1 overflow-hidden">
                                <p className="text-xs font-semibold truncate">Dr. Sarah Chen</p>
                                <p className="text-[10px] text-slate-500 truncate">Senior Dermatologist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 bg-white dark:bg-background-dark shrink-0">
                    <div className="flex items-center gap-4">
                        <nav className="flex items-center gap-2 text-xs font-medium">
                            <button onClick={onBack} className="text-slate-500 hover:text-primary">Patients</button>
                            <span className="material-symbols-outlined text-[14px] text-slate-400">chevron_right</span>
                            <a className="text-slate-500 hover:text-primary" href="#">John Doe</a>
                            <span className="material-symbols-outlined text-[14px] text-slate-400">chevron_right</span>
                            <span className="text-slate-900 dark:text-white">Lesion Progression</span>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                            <input className="pl-10 pr-4 py-1.5 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary w-64 text-slate-950 dark:text-white" placeholder="Search patient records..." type="text" />
                        </div>
                        <button className="size-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative">
                            <span className="material-symbols-outlined text-xl">notifications</span>
                            <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
                        </button>
                        <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">file_download</span>
                            Export Report
                        </button>
                    </div>
                </header>

                {/* Page Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-8 space-y-6">
                    {/* Patient Banner & Summary Stats */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        <div className="lg:col-span-1 space-y-4">
                            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 h-full">
                                <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">John Doe</h2>
                                <p className="text-sm text-slate-500 mt-1">ID: #88219 • Male, 42y</p>
                                <div className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded-lg">
                                    <p className="text-[10px] uppercase font-bold text-primary tracking-wider">Active Diagnosis</p>
                                    <p className="text-sm font-semibold mt-0.5">Psoriasis Vulgaris</p>
                                </div>
                                <div className="mt-6 flex flex-col gap-2">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-slate-500">Last Visit</span>
                                        <span className="font-medium">Oct 12, 2023</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-slate-500">Treatment Plan</span>
                                        <span className="font-medium">Biologics (IL-17i)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Severity Graph Card */}
                            <div className="md:col-span-2 bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 relative overflow-hidden">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-900 dark:text-white">Severity Score Trend (PASI)</h3>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">12 month historical</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="flex items-center gap-1 text-[10px] font-bold text-green-500">
                                            <span className="material-symbols-outlined text-[14px]">arrow_downward</span> 12% Improved
                                        </span>
                                    </div>
                                </div>
                                {/* Mock Graph */}
                                <div className="relative h-24 mt-6 flex items-end gap-1">
                                    {[85, 82, 78, 88, 72, 65, 60, 54].map((h, idx) => (
                                        <div key={idx} className={`flex-1 bg-primary/10 h-full rounded-t-sm relative group ${idx === 3 ? 'border-2 border-white dark:border-background-dark' : ''} ${idx === 7 ? 'border-2 border-primary border-dashed bg-primary/5' : ''}`}>
                                            <div className="absolute bottom-0 left-0 w-full bg-primary rounded-t-sm" style={{ height: `${h}%` }}></div>
                                            <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-10">Score: {h}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-2 px-1">
                                    <span className="text-[10px] text-slate-400 font-bold">JAN</span>
                                    <span className="text-[10px] text-slate-400 font-bold">MAR</span>
                                    <span className="text-[10px] text-slate-400 font-bold">MAY</span>
                                    <span className="text-[10px] text-slate-400 font-bold">JUL</span>
                                    <span className="text-[10px] text-slate-400 font-bold">SEP</span>
                                    <span className="text-[10px] text-slate-400 font-bold">NOV</span>
                                </div>
                            </div>
                            {/* Quick Stats Card */}
                            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-xs text-slate-500 font-medium">Current Severity</p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-black text-slate-900 dark:text-white">74<span className="text-sm font-normal text-slate-500">/100</span></span>
                                            <span className="text-xs font-bold text-primary">Moderate</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                        <div>
                                            <p className="text-[10px] text-slate-500 uppercase font-bold">Total Scans</p>
                                            <p className="text-xl font-bold">12</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-slate-500 uppercase font-bold">Duration</p>
                                            <p className="text-xl font-bold">8 mo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Comparison Viewer Section */}
                    <div className="bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden flex flex-col h-[600px]">
                        {/* Comparison Header/Toolbar */}
                        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/20">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <span className="size-2 bg-primary rounded-full"></span>
                                    <span className="text-xs font-bold">Baseline: <span className="font-normal text-slate-500">Jan 12, 2023</span></span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="size-2 bg-green-500 rounded-full"></span>
                                    <span className="text-xs font-bold">Current: <span className="font-normal text-slate-500">Oct 12, 2023</span></span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded flex items-center gap-1 text-[10px] font-bold">
                                    <span className="material-symbols-outlined text-[18px]">zoom_in</span> Zoom Sync
                                </button>
                                <div className="h-4 w-px bg-slate-200 dark:border-slate-800 mx-2"></div>
                                <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded">
                                    <span className="material-symbols-outlined text-[18px]">grid_on</span>
                                </button>
                                <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded">
                                    <span className="material-symbols-outlined text-[18px]">fullscreen</span>
                                </button>
                            </div>
                        </div>
                        {/* Dual View Comparison */}
                        <div className="flex-1 flex overflow-hidden relative">
                            {/* Scan A (Before) */}
                            <div className="w-1/2 h-full border-r border-slate-200 dark:border-slate-800 relative group overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPFR397leOPu1wj0O8SdNlcmL9Wnx-D8MG7SOUVmt4WWgUV-UwtUvw4zsO0HrVoV0oGdrFevNLDMB25XaePRFcRarecUfqqaLXnVCEihyUmh84WTNYNYcKCHbDF1rbPQqh-M-d2GMvM9qJGfztmHufBZtGOQQU74reicblgntSzPFGk3ugnXSxr7DyHujZ4U64BYJ0I9xjtIATYKK2_TGfY4Y1My5LOLpMnYe5OICrGyOMs5YEZpbIOLuY2e76RezHszfgez4LvQ')" }}></div>
                                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-[10px] px-3 py-1.5 rounded-full font-bold">JAN 12, 2023</div>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border-4 border-primary/20"></div>
                            </div>
                            {/* Scan B (After) */}
                            <div className="w-1/2 h-full relative group overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCu3NpUX7NcAwfoy3zoiK3soE7fAMdjpYxKMb6TsWTTlGoVa6ENfxJMcncR8l663b0NttRjn0a2n8Q7Qe0EoRgbcrjy9hBiiMtGrGCZ1UioEJNvWvzHbsx5cGMFZdKod5ecGmJWL8PvUdzn7Cot1JOvgzGi74IgjcChPxI05EMGwYjnIFg0f2hmXcOlHsErmW23tuze0CwdDOfB8l4CYMP2Z_V13jHLmciXDMoXzTzs2fTxywmHjwvkY7SRL6yFjNuvRky-gNVYWw')" }}></div>
                                <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-md text-white text-[10px] px-3 py-1.5 rounded-full font-bold">OCT 12, 2023 (FOLLOW-UP)</div>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border-4 border-green-500/20"></div>
                            </div>
                            {/* Vertical Slider Handle Mock */}
                            <div className="absolute inset-y-0 left-1/2 w-1 bg-white/50 backdrop-blur-md -translate-x-1/2 z-10 pointer-events-none shadow-xl">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10 rounded-full bg-white dark:bg-slate-800 shadow-2xl flex items-center justify-center border border-slate-300 dark:border-slate-600">
                                    <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">unfold_more</span>
                                </div>
                            </div>
                        </div>
                        {/* Timeline Rail */}
                        <div className="h-24 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center px-8 overflow-x-auto no-scrollbar gap-12 relative">
                            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 mx-24 z-0"></div>
                            {[
                                { date: 'Jan 12', sub: 'Baseline', active: true },
                                { date: 'Feb 15', active: false },
                                { date: 'Mar 22', active: false },
                                { date: 'May 10', active: false },
                                { date: 'Jun 04', active: false },
                                { date: 'Jul 18', active: false, opacity: 'opacity-50' },
                                { date: 'Aug 30', active: true },
                                { date: 'Oct 12', sub: 'Current', active: true, current: true },
                            ].map((node, idx) => (
                                <div key={idx} className={`flex-shrink-0 flex flex-col items-center gap-2 relative z-10 ${node.opacity || ''}`}>
                                    <div className={`size-3 rounded-full ${node.current ? 'bg-green-500 border-4 border-green-500/30' : node.active ? 'bg-primary border-4 border-primary/30' : 'bg-slate-400'} outline outline-4 outline-background-dark/20`}></div>
                                    <div className="text-center">
                                        <p className={`text-[10px] font-bold ${node.active || node.current ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>{node.date}</p>
                                        {node.sub && <p className={`text-[9px] ${node.current ? 'text-green-500 font-bold uppercase' : 'text-slate-500'}`}>{node.sub}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Detail Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Clinical Findings Comparison */}
                        <div className="lg:col-span-2 bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                            <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-[20px]">description</span>
                                Clinical Findings Analysis
                            </h3>
                            <div className="overflow-hidden border border-slate-100 dark:border-slate-800 rounded-lg">
                                <table className="w-full text-left text-xs">
                                    <thead>
                                        <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 border-b border-slate-100 dark:border-slate-800">
                                            <th className="px-4 py-3 font-bold uppercase tracking-wider">Metric</th>
                                            <th className="px-4 py-3 font-bold uppercase tracking-wider">Jan 2023</th>
                                            <th className="px-4 py-3 font-bold uppercase tracking-wider">Oct 2023</th>
                                            <th className="px-4 py-3 font-bold uppercase tracking-wider">Change</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                        {[
                                            { metric: 'Erythema', before: 'Severe (3.2)', after: 'Mild (1.4)', change: '-56%' },
                                            { metric: 'Induration', before: 'Moderate (2.5)', after: 'Minimal (0.8)', change: '-68%' },
                                            { metric: 'Desquamation', before: 'Severe (3.8)', after: 'Moderate (2.1)', change: '-44%' },
                                        ].map((row, idx) => (
                                            <tr key={idx}>
                                                <td className="px-4 py-3 font-medium">{row.metric}</td>
                                                <td className="px-4 py-3">{row.before}</td>
                                                <td className="px-4 py-3">{row.after}</td>
                                                <td className="px-4 py-3 text-green-500 font-bold">{row.change}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* Treatment Notes Sidebar */}
                        <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-bold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-[20px]">sticky_note_2</span>
                                    Clinical Notes
                                </h3>
                                <button className="text-primary hover:underline text-[10px] font-bold uppercase tracking-wider">+ Add Note</button>
                            </div>
                            <div className="space-y-4">
                                <div className="p-3 bg-slate-50 dark:bg-slate-800/30 rounded-lg border-l-2 border-primary">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-[10px] font-bold text-slate-500">OCT 12, 2023</span>
                                        <span className="text-[9px] px-1.5 py-0.5 bg-green-500/20 text-green-600 dark:text-green-400 rounded uppercase font-black">Stable</span>
                                    </div>
                                    <p className="text-[11px] leading-relaxed italic">"Significant reduction in plaque thickness observed after 6 months of biologic therapy. Patient reports 0 pruritus. Minimal scaling remaining on bilateral elbows."</p>
                                </div>
                                <div className="p-3 bg-slate-50 dark:bg-slate-800/30 rounded-lg border-l-2 border-slate-300">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-[10px] font-bold text-slate-500">JUN 04, 2023</span>
                                    </div>
                                    <p className="text-[11px] leading-relaxed">"Initial response positive. No adverse reactions reported. Continue current dosage."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default History;
