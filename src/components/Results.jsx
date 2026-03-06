import React from 'react';

const Results = ({ onBack, onNavigateToReport, analysisData, uploadedImage }) => {
    // Fallback to mock data if analysisData is missing (for initial dev)
    const data = analysisData || {
        diagnosis: 'Basal Cell Carcinoma',
        confidence: 94.2,
        severity_score: 82.5,
        clinical_stage: 'Severe',
        urgency: 'High',
        recommendations: [
            'Punch Biopsy (3mm)',
            'Topical 5-Fluorouracil (5-FU)'
        ],
        differential: [
            { name: 'Basal Cell Carcinoma (BCC)', value: 94.2, color: 'bg-primary' },
            { name: 'Squamous Cell Carcinoma (SCC)', value: 3.1, color: 'bg-slate-400 dark:bg-slate-600' },
            { name: 'Actinic Keratosis', value: 1.8, color: 'bg-slate-400 dark:bg-slate-600' },
            { name: 'Seborrheic Keratosis', value: 0.9, color: 'bg-slate-400 dark:bg-slate-600' },
        ]
    };

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
            {/* Top Navigation Bar */}
            <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 py-3 flex items-center justify-between sticky top-0 z-50">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
                        <div className="bg-primary p-1.5 rounded-lg">
                            <span className="material-symbols-outlined text-white">biotech</span>
                        </div>
                        <h2 className="text-xl font-bold tracking-tight">DermAI <span className="text-primary font-normal">Clinical</span></h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <button onClick={onBack} className="text-sm font-medium hover:text-primary transition-colors">Dashboard</button>
                        <a className="text-sm font-medium text-primary" href="#">Analysis History</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Patient Records</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Protocols</a>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative hidden sm:block">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                        <input className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary w-64 text-slate-950 dark:text-white" placeholder="Search Patient ID..." type="text" />
                    </div>
                    <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                        <span className="text-xs font-bold text-primary">DR</span>
                    </div>
                </div>
            </header>

            <main className="max-w-[1440px] mx-auto p-6">
                {/* Breadcrumb & Title Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                            <button onClick={onBack} className="hover:underline">Analysis History</button>
                            <span className="material-symbols-outlined text-xs">chevron_right</span>
                            <span className="text-slate-900 dark:text-slate-200 font-medium">Patient #4920-X</span>
                        </div>
                        <h1 className="text-3xl font-bold">Diagnostic Analysis Report</h1>
                        <p className="text-slate-500">Left Forearm Lesion • Session Oct 24, 2023 • Dr. Aris Thorne</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={onNavigateToReport}
                            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-bold text-sm hover:bg-slate-50 transition-colors text-slate-900 dark:text-white"
                        >
                            <span className="material-symbols-outlined text-sm">download</span> Export Report
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined text-sm">share</span> Consult Specialist
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Column: Primary AI Detection */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Confidence Gauge Card */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 flex flex-col items-center text-center">
                            <h3 className="text-lg font-bold mb-6 self-start">AI Confidence Score</h3>
                            <div className="relative flex items-center justify-center w-48 h-48 mb-6">
                                {/* Custom SVG Gauge */}
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle className="text-slate-100 dark:text-slate-800" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="12"></circle>
                                    <circle cx="96" cy="96" fill="transparent" r="88" stroke="#137fec" strokeDasharray="552.92" strokeDashoffset="33.17" strokeLinecap="round" strokeWidth="12"></circle>
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-4xl font-black text-primary">{data.confidence}%</span>
                                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest leading-none mt-1">Confidence</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-slate-500 text-sm">Top Predicted Diagnosis</p>
                                <p className="text-2xl font-bold text-primary">{data.diagnosis}</p>
                                <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${data.urgency === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30'}`}>
                                    {data.urgency} Urgency
                                </div>
                            </div>
                        </div>

                        {/* Source Image / Evidence Card */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-sm">Analysis Evidence</h3>
                                <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded font-mono">IMG_8820.RAW</span>
                            </div>
                            <div className="relative aspect-square rounded-lg overflow-hidden mb-3 group cursor-zoom-in">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <p className="text-white text-xs">Localized lesion with telangiectasia detected</p>
                                </div>
                                <img
                                    alt="Clinical skin lesion magnification"
                                    className="w-full h-full object-cover"
                                    src={uploadedImage || "https://lh3.googleusercontent.com/aida-public/AB6AXuAuJJlvpLsw2PFRM3vLTinc_gyOj4mfPl6nt07pzHjjW6RMM0_VkdrniH6QQAZCZXi_YPu3T7F0hrjftJroseaRfzFNGYiFWnP6__X2g7lNluvY3iZUNDNFCxiALVuoZgCnic9PBBCbi5W8ltEfmwyiK8J90aS0EypTVhtP6HNZ4Dq6gT76MFnqeKVwM8IoppbCYWpY97KcKnqL825Xv3x-uoyHvL5YnuD0xaIf1sTw834Qiw4zD5gktkGUJvCsy1TPkQQ31hsTcQ"}
                                />

                            </div>

                        </div>
                    </div>

                    {/* Middle Column: Differential & Severity */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Differential Diagnosis Bar Chart */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                            <h3 className="text-lg font-bold mb-6">Differential Diagnosis</h3>
                            <div className="space-y-6">
                                {data.differential.map((item, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <div className="flex justify-between text-sm font-medium">
                                            <span>{item.name}</span>
                                            <span className={`${idx === 0 ? 'text-primary font-bold' : ''}`}>{item.value}%</span>
                                        </div>
                                        <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                            <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Severity Gauge Card */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                            <h3 className="text-lg font-bold mb-6">Severity & Urgency Scale</h3>
                            <div className="relative pt-6 pb-2">
                                {/* The Scale */}
                                <div className="h-3 w-full bg-gradient-to-r from-green-500 via-yellow-400 to-red-600 rounded-full relative">
                                    {/* Indicator */}
                                    <div className="absolute -top-6 -translate-x-1/2 flex flex-col items-center" style={{ left: `${data.severity_score}%` }}>
                                        <span className="material-symbols-outlined text-slate-900 dark:text-white leading-none">arrow_drop_down</span>
                                    </div>
                                </div>
                                {/* Labels */}
                                <div className="flex justify-between mt-3 text-[11px] font-bold text-slate-500 uppercase tracking-tighter">
                                    <span>Benign / Low</span>
                                    <span>Moderate</span>
                                    <span className="text-red-500">Critical / Immediate</span>
                                </div>
                            </div>
                            <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-lg flex gap-3">
                                <span className="material-symbols-outlined text-red-500">warning</span>
                                <p className="text-xs text-red-700 dark:text-red-400 leading-relaxed">
                                    <strong>Note:</strong> High growth rate probability and structural asymmetry suggest biopsy within 7 days.
                                </p>
                            </div>
                        </div>

                        {/* AI Recommendation Engine */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold">Recommended Pathway</h3>
                                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-bold">Standard BCC Protocol</span>
                            </div>
                            <div className="space-y-3">
                                {data.recommendations.map((rec, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-3 border border-slate-100 dark:border-slate-800 rounded-lg hover:border-primary/50 transition-colors cursor-pointer group">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined text-sm">medical_services</span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold">{rec}</p>
                                                <p className="text-[11px] text-slate-500">Suggested by AI Protocol</p>
                                            </div>
                                        </div>
                                        <button className="p-1 text-primary hover:bg-primary/10 rounded">
                                            <span className="material-symbols-outlined text-lg">add_circle</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Human-in-the-Loop Override */}
                    <div className="lg:col-span-3">
                        <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-xl p-6 sticky top-24">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="material-symbols-outlined text-primary">person_check</span>
                                <h3 className="text-lg font-bold">Physician Override</h3>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Confirmed Diagnosis</label>
                                    <select className="w-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary text-slate-900 dark:text-white">
                                        <option>Basal Cell Carcinoma (BCC)</option>
                                        <option>Squamous Cell Carcinoma (SCC)</option>
                                        <option>Malignant Melanoma</option>
                                        <option>Benign Nevus</option>
                                        <option value="manual">Other (Manual Entry)</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Clinical Notes</label>
                                    <textarea className="w-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary placeholder:text-slate-400 text-slate-900 dark:text-white" placeholder="Type clinical observations or justification for diagnosis..." rows="6"></textarea>
                                </div>
                                <div className="flex items-center gap-2 mb-4">
                                    <input className="rounded text-primary focus:ring-primary" id="reviewed" type="checkbox" />
                                    <label className="text-xs text-slate-500" htmlFor="reviewed">I have reviewed all AI-detected evidence and confirm this diagnosis.</label>
                                </div>
                                <div className="flex flex-col gap-3 pt-2 border-t border-primary/10">
                                    <button
                                        onClick={onNavigateToReport}
                                        className="w-full py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-shadow shadow-lg shadow-primary/20"
                                    >
                                        Confirm & Finalize
                                    </button>
                                    <button className="w-full py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg font-bold text-sm hover:bg-slate-50 transition-colors">
                                        Flag for Peer Review
                                    </button>
                                </div>
                                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-900/30">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="material-symbols-outlined text-sm text-blue-600 dark:text-blue-400">info</span>
                                        <span className="text-[10px] font-bold uppercase text-blue-600 dark:text-blue-400">AI Metadata</span>
                                    </div>
                                    <p className="text-[10px] text-blue-800 dark:text-blue-300">Model: SkinNet-V4.2.0 • Hardware: TensorNode-6 • Latency: 420ms</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="mt-12 border-t border-slate-200 dark:border-slate-800 p-8 text-center bg-white dark:bg-background-dark">
                <p className="text-slate-400 text-xs">© 2023 DermAI Healthcare Systems. All AI results must be validated by a licensed physician. HIPAA Compliant.</p>
            </footer>
        </div>
    );
};

export default Results;
