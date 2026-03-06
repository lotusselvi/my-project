import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const Report = ({ onBack, analysisData, uploadedImage, metadata }) => {
    const reportRef = useRef();
    // Current date for the report
    const formattedDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const data = analysisData || {
        diagnosis: 'Basal Cell Carcinoma',
        confidence: 94.2,
        severity_score: 82.5,
        clinical_stage: 'Severe',
        urgency: 'High',
        recommendations: [
            ' Punch Biopsy (3mm) required',
            ' Topical 5-Fluorouracil (5-FU)'
        ]
    };

    const handlePrint = () => {
        window.print();
    };

    const handleExportPDF = () => {
        const element = reportRef.current;
        const opt = {
            margin: 0,
            filename: `Dermalyze_Report_${new Date().getTime()}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, letterRendering: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        // New Promise-based usage:
        html2pdf().set(opt).from(element).save();
    };

    return (
        <div className="flex h-screen flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 print:bg-white print:text-black">
            {/* Top Navigation Bar - Hidden on print */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 md:px-10 py-3 z-50 sticky top-0 print:hidden">
                <div className="flex items-center gap-4 cursor-pointer" onClick={onBack}>
                    <div className="text-primary">
                        <svg className="size-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold leading-tight tracking-tight">Dermalyze AI</h2>
                </div>
                <div className="flex flex-1 justify-end gap-6 items-center">
                    <nav className="hidden md:flex items-center gap-6">
                        <button onClick={onBack} className="text-sm font-medium hover:text-primary transition-colors">Dashboard</button>
                        <a className="text-sm font-medium hover:text-primary transition-colors text-primary" href="#">Patient Records</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Analytics</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Settings</a>
                    </nav>
                    <div className="flex gap-2">
                        <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            <span className="material-symbols-outlined">help</span>
                        </button>
                    </div>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDmQjbZw42Dguc6r1YB5pxvXjIU45IbsYOIMHJS7fSlLe0yuFMbWsfaUkSOBOMiInDyJu4qsPENSNFdKdUPlrj-PGNr8dCabYGInASzhKqzJNgRu7NAtrGSBgvkGM0j8a9UCC-NPh90vi0qhCPsP2DV30mOWAPZFYb2nTbd7KjXNmDRWgY2uE7OuJ9sU2xZsZPaAw-02iZGReeifgOCWXxtqxQOenY1jlu2McM4yWghI3ClvfM6x6W1R-3xeiNLU3PJpNzjaoUtEQ')" }}></div>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden print:block print:overflow-visible">
                {/* Left Sidebar Controls - Hidden on print */}
                <aside className="w-80 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark p-6 overflow-y-auto hidden lg:block print:hidden">
                    <div className="mb-8">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Report Controls</h3>
                        <div className="space-y-4">
                            <button
                                onClick={handleExportPDF}
                                className="w-full bg-primary text-white py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                            >
                                <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                                Export to PDF
                            </button>
                            <button
                                onClick={handlePrint}
                                className="w-full bg-slate-100 dark:bg-slate-800 py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                            >
                                <span className="material-symbols-outlined text-[20px]">print</span>
                                Print Report
                            </button>
                        </div>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Report Content</h3>
                        <div className="space-y-3">
                            {[
                                { label: 'Include AI Analysis', checked: true },
                                { label: 'Include High-Res Image', checked: true },
                                { label: 'Include Severity Scores', checked: true },
                                { label: 'Full Patient History', checked: false }
                            ].map((item, idx) => (
                                <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                                    <input defaultChecked={item.checked} className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox" />
                                    <span className="text-sm font-medium">{item.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                        <div className="flex items-center gap-2 text-primary mb-2">
                            <span className="material-symbols-outlined text-[20px]">info</span>
                            <span className="text-xs font-bold uppercase">Pro Tip</span>
                        </div>
                        <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                            The report is optimized for A4 printing. Use 'Save as PDF' in the print dialog for digital distribution.
                        </p>
                    </div>
                </aside>

                {/* Main Preview Area */}
                <main className="flex-1 overflow-y-auto bg-slate-100 dark:bg-slate-900/50 p-4 md:p-8 flex flex-col items-center print:p-0 print:bg-white print:overflow-visible">
                    {/* Breadcrumbs - Hidden on print */}
                    <nav className="w-full max-w-[210mm] flex items-center gap-2 text-sm text-slate-500 mb-6 print:hidden">
                        <button onClick={onBack} className="hover:text-primary">Patients</button>
                        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                        <span className="text-slate-900 dark:text-white font-medium italic">New Analysis</span>
                        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                        <span className="text-slate-900 dark:text-white font-medium">Clinical Report Preview</span>
                    </nav>

                    {/* Document Surface */}
                    <div ref={reportRef} className="bg-white text-slate-900 p-[15mm] flex flex-col shadow-2xl w-[210mm] min-h-[297mm] print:shadow-none print:w-full print:p-0">
                        {/* Hospital Letterhead Header */}
                        <div className="flex justify-between items-start border-b-2 border-slate-900 pb-8 mb-8">
                            <div className="flex gap-4 items-center">
                                <div className="bg-primary p-3 rounded-lg text-white print:bg-black">
                                    <span className="material-symbols-outlined text-[32px]">health_and_safety</span>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-black tracking-tight text-slate-900 uppercase">City Dermatology Center</h1>
                                    <p className="text-sm font-medium text-slate-500">123 Medical Plaza, Suite 400, Chicago IL</p>
                                    <p className="text-sm font-medium text-slate-500">Tel: (555) 123-4567 | clinical@cityderm.com</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="bg-slate-100 px-4 py-2 rounded-lg inline-block mb-2">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Report ID</p>
                                    <p className="text-sm font-bold">CLIN-{new Date().getFullYear()}-001-NEW</p>
                                </div>
                                <p className="text-xs font-medium text-slate-500">Generated: {formattedDate}</p>
                            </div>
                        </div>

                        {/* Patient Demographics Bar */}
                        <div className="grid grid-cols-4 gap-4 bg-slate-50 p-4 rounded-lg mb-8 border border-slate-200">
                            {[
                                { label: 'Patient Name', val: 'New Analysis' },
                                { label: 'Age / Sex', val: metadata?.age ? `${metadata.age} Y` : 'Undisclosed' },
                                { label: 'Lesion Loc.', val: metadata?.location || 'Undisclosed' },
                                { label: 'Consulting Doctor', val: 'Dr. Sarah Chen' }
                            ].map((item, idx) => (
                                <div key={idx}>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                                    <p className="text-sm font-bold">{item.val}</p>
                                </div>
                            ))}
                        </div>

                        {/* Scan Analysis Section */}
                        <div className="grid grid-cols-12 gap-8 mb-8">
                            {/* Image Column */}
                            <div className="col-span-12 md:col-span-7">
                                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[16px]">image</span> Clinical Scan Preview
                                </h3>
                                <div className="relative group">
                                    <div className="aspect-square bg-slate-200 rounded-xl overflow-hidden border border-slate-300 flex items-center justify-center">
                                        {uploadedImage ? (
                                            <img src={uploadedImage} alt="Clinical Lesion" className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="text-slate-400 italic">No image available</span>
                                        )}
                                    </div>
                                    {/* UI Bounding Box Simulation Overlay */}
                                    <div className="absolute inset-0 p-12 pointer-events-none">
                                        <div className="w-32 h-32 border-4 border-primary rounded-lg relative">
                                            <div className="absolute -top-6 left-0 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                                                AI-TARGET: LESION_DETECTION
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[11px] text-slate-500 mt-3 italic">Location: {metadata?.location || 'Targeted area'}. Clinical capture verified by AI ROI detection.</p>
                            </div>
                            {/* Scores Column */}
                            <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
                                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[16px]">analytics</span> AI Diagnosis
                                </h3>
                                {/* Probability Cards */}
                                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs font-bold text-slate-700">Diagnosis Confidence</span>
                                        <span className="text-sm font-black text-primary">{data.confidence}%</span>
                                    </div>
                                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                                        <div className="bg-primary h-full" style={{ width: `${data.confidence}%` }}></div>
                                    </div>
                                    <p className="text-[10px] text-slate-500 mt-2 font-medium uppercase leading-none">Result: <span className="text-primary font-bold">{data.diagnosis.replace(/_/g, ' ')}</span></p>
                                </div>
                                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs font-bold text-slate-700">Clinical Severity</span>
                                        <span className="text-sm font-black text-slate-900">{data.severity_score}/100</span>
                                    </div>
                                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                                        <div className="bg-slate-900 h-full" style={{ width: `${data.severity_score}%` }}></div>
                                    </div>
                                    <p className="text-[10px] text-slate-500 mt-2 font-medium uppercase leading-none">Stage: <span className="font-bold">{data.clinical_stage}</span></p>
                                </div>
                                <div className="mt-4 p-4 border border-dashed border-slate-300 rounded-xl flex-1">
                                    <h4 className="text-[10px] font-black uppercase text-slate-400 mb-3">AI Recommendations</h4>
                                    <ul className="space-y-3">
                                        {(data.recommendations || []).map((text, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-600 leading-tight">
                                                <span className={`material-symbols-outlined text-[16px] text-primary mt-0.5`}>check_circle</span>
                                                {text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Clinical Notes Section */}
                        <div className="mb-8 flex-1 text-slate-900">
                            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[16px]">edit_note</span> Clinical Analysis
                            </h3>
                            <div className="min-h-[150px] p-6 bg-slate-50 border border-slate-200 rounded-xl text-sm leading-relaxed text-slate-800">
                                <p className="mb-4">The Dermalyze AI diagnostic system has analyzed the clinical photograph of the skin lesion. The model predicts the presence of <span className="font-bold text-primary">{data.diagnosis.replace(/_/g, ' ')}</span> with a confidence score of <span className="font-bold">{data.confidence}%</span>.</p>
                                <p className="mb-4 font-bold text-slate-900 border-b border-slate-200 pb-1">Automated Clinical Assessment:</p>
                                <p className="mb-4 italic">Analysis indicates a <span className="uppercase font-black">{data.urgency} Urgency</span> status. The calculated clinical severity is <span className="font-bold">{data.clinical_stage}</span>, necessitating professional review and potential follow-up diagnostic procedures.</p>
                                <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white p-2 border border-slate-200 rounded self-start">
                                    <span className="material-symbols-outlined text-sm">verified</span> Verified by DermAI V4.2 Protocol
                                </div>
                            </div>
                        </div>

                        {/* Footer Signature Area */}
                        <div className="mt-auto border-t border-slate-200 pt-8 flex justify-between items-end">
                            <div className="w-1/3">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">Doctor's Digital Signature</p>
                                <div className="border-b border-slate-900 pb-2 flex items-end gap-2">
                                    <span className="font-serif italic text-lg text-slate-800">D. Sarah Chen, MD</span>
                                    <span className="text-[10px] text-slate-300 mb-1">DR-SCH-882</span>
                                </div>
                                <p className="text-[10px] mt-1 text-slate-500 italic">Signed electronically on {formattedDate}</p>
                            </div>
                            <div className="w-1/3 text-right">
                                <p className="text-[9px] text-slate-400 leading-tight italic">
                                    This automated report serves as diagnostic assistance. Final clinical decisions must be made by a qualified healthcare professional in accordance with HIPAA standards.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Spacer for scroll bottom */}
                    <div className="h-10 print:hidden"></div>
                </main>
            </div>

            {/* Footer Branding - Hidden on print */}
            <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-4 px-10 text-center text-xs text-slate-400 print:hidden">
                © {new Date().getFullYear()} Dermalyze AI Healthcare Systems. Clinical Decision Support.
            </footer>
        </div>
    );
};

export default Report;
