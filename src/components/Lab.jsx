import React, { useState } from 'react';

const Lab = ({ onBack, onAnalyze }) => {
    const [age, setAge] = useState('');
    const [location, setLocation] = useState('Select anatomy...');
    const [duration, setDuration] = useState('1-6 Mo');
    const [selectedImage, setSelectedImage] = useState(null);
    const [rawFile, setRawFile] = useState(null);
    const [rotation, setRotation] = useState(0);
    const [zoom, setZoom] = useState(1);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setRawFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRunAnalysis = (e) => {
        e.preventDefault();
        if (!rawFile) {
            alert('Please upload a clinical image first.');
            return;
        }

        const formData = new FormData();
        formData.append('file', rawFile);
        formData.append('age', age);
        formData.append('location', location);
        formData.append('duration', duration);
        formData.append('rotation', rotation); // Pass metadata if backend supports it
        formData.append('zoom', zoom);

        onAnalyze(formData, selectedImage);
    };

    const handleRotate = (dir) => {
        setRotation(prev => prev + (dir === 'right' ? 90 : -90));
    };

    const handleZoom = (type) => {
        setZoom(prev => {
            if (type === 'in') return Math.min(prev + 0.2, 3);
            if (type === 'out') return Math.max(prev - 0.2, 0.5);
            return 1;
        });
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">
            {/* Top Navigation Bar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-10 py-3 bg-white dark:bg-background-dark sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white cursor-pointer" onClick={onBack}>
                        <span className="material-symbols-outlined text-2xl">biotech</span>
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Diagnostic Submission Lab</h2>
                </div>
                <div className="flex flex-1 justify-end gap-8">
                    <nav className="flex items-center gap-9">
                        <button onClick={onBack} className="text-sm font-medium hover:text-primary transition-colors">Cases</button>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Patients</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Protocols</a>
                    </nav>
                    <div className="flex gap-2">
                        <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            <span className="material-symbols-outlined text-xl text-[20px]">settings</span>
                        </button>
                        <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors relative">
                            <span className="material-symbols-outlined text-xl text-[20px]">notifications</span>
                            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-slate-200 dark:border-slate-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6RHrriOPbBIkhuwXMjeSFEmgkWEDkIZWyKikporp8UMLD7QhomuKfZZkN9Cnj1WpdoT3E_Z3PA8DmlwFYePiZbEOLSQjtQA4QpbuQN76yPz9repjFUcURVDydDfgUCCXCMB54NT64l_eSBVgBQszh2Bn4m_VzUfRrN6_cK24qzs8IC0V6N4M9SIrO1cVK1IlODAOWMnZeZYqWwEE5zVoaOSPfZsZ1W9tuiiyhfSUzRt9Vh8Tiw9fiURigyj8Hwq1wZLYgJbvQGw')" }}></div>
                    </div>
                </div>
            </header>

            <main className="max-w-[1440px] mx-auto px-6 py-8">
                {/* Breadcrumbs & Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
                        <button onClick={onBack} className="hover:text-primary">Cases</button>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <span className="text-slate-900 dark:text-white font-medium">New Submission</span>
                    </div>
                    <h1 className="text-3xl font-black tracking-tight">Clinical Case Intake</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Upload high-resolution images and provide metadata for AI-assisted diagnostic evaluation.</p>
                </div>

                <div className="grid grid-cols-12 gap-8">
                    {/* Left Column: Image Workspace */}
                    <div className="col-span-12 lg:col-span-8 space-y-6">
                        {/* Main Upload & Editor Zone */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                            {/* Toolbar */}
                            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-semibold flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg">image</span>
                                        Primary Lesion View
                                    </span>
                                    <div className="h-4 w-px bg-slate-300 dark:bg-slate-700"></div>
                                    <div className="flex gap-1">
                                        <button
                                            onClick={() => handleRotate('left')}
                                            className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition-colors" title="Rotate Left"
                                        >
                                            <span className="material-symbols-outlined text-xl">rotate_left</span>
                                        </button>
                                        <button
                                            onClick={() => handleRotate('right')}
                                            className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition-colors" title="Rotate Right"
                                        >
                                            <span className="material-symbols-outlined text-xl">rotate_right</span>
                                        </button>
                                        <button
                                            onClick={() => handleZoom('in')}
                                            className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition-colors" title="Zoom In"
                                        >
                                            <span className="material-symbols-outlined text-xl">zoom_in</span>
                                        </button>
                                        <button
                                            onClick={() => handleZoom('out')}
                                            className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition-colors" title="Zoom Out"
                                        >
                                            <span className="material-symbols-outlined text-xl">zoom_out</span>
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={() => { setSelectedImage(null); setRawFile(null); }}
                                    className="text-xs font-bold text-slate-500 hover:text-red-500 flex items-center gap-1 transition-colors"
                                >
                                    <span className="material-symbols-outlined text-sm">delete</span>
                                    REMOVE IMAGE
                                </button>
                            </div>

                            {/* Canvas Area */}
                            <div className="relative min-h-[500px] flex items-center justify-center p-8 bg-slate-50 dark:bg-[#0b1219]">
                                {selectedImage ? (
                                    <div className="relative group cursor-crosshair max-w-full overflow-hidden rounded-lg shadow-2xl">
                                        <div
                                            style={{
                                                transform: `rotate(${rotation}deg) scale(${zoom})`,
                                                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                            }}
                                        >
                                            <img src={selectedImage} alt="Macro clinical photograph" className="max-h-[600px] rounded border-4 border-white dark:border-slate-800" />
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        onClick={() => document.getElementById('fileInput').click()}
                                        className="flex flex-col items-center justify-center gap-4 cursor-pointer group"
                                    >
                                        <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all border-2 border-dashed border-primary/30">
                                            <span className="material-symbols-outlined text-4xl text-primary">upload_file</span>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-lg font-bold">Upload Clinical Image</p>
                                            <p className="text-xs text-slate-500 mt-1">Drag & drop or click to browse high-res macro photos</p>
                                        </div>
                                    </div>
                                )}

                                {selectedImage && (
                                    <div className="absolute top-4 right-4 bg-primary/90 text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-widest flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                                        AI Processing Active
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                            {selectedImage && (
                                <button className="min-w-[120px] aspect-square rounded-lg border-2 border-primary overflow-hidden relative">
                                    <img className="object-cover w-full h-full" src={selectedImage} alt="Thumbnail 1" />
                                    <div className="absolute inset-0 bg-primary/20"></div>
                                </button>
                            )}

                            <button onClick={() => document.getElementById('fileInput').click()} className="min-w-[120px] aspect-square rounded-lg border-2 border-transparent hover:border-slate-400 dark:hover:border-slate-600 overflow-hidden bg-slate-200 dark:bg-slate-800 flex flex-col items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-2xl text-slate-500">add_photo_alternate</span>
                                <span className="text-[10px] font-bold uppercase text-slate-500">Add View</span>
                                <input id="fileInput" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                            </button>
                            <div className="flex-1"></div>
                        </div>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="col-span-12 lg:col-span-4 space-y-6">
                        {/* Quality Check Feedback */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-lg">fact_check</span>
                                Quality Check
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-green-500">check_circle</span>
                                        <div>
                                            <p className="text-sm font-bold text-green-700 dark:text-green-400 leading-none">Resolution</p>
                                            <p className="text-xs text-green-600 dark:text-green-500/80 mt-1">4032 x 3024px (Optimal)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-green-500">center_focus_strong</span>
                                        <div>
                                            <p className="text-sm font-bold text-green-700 dark:text-green-400 leading-none">Focus & Blur</p>
                                            <p className="text-xs text-green-600 dark:text-green-500/80 mt-1">Lesion is sharp and centered</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-amber-500">light_mode</span>
                                        <div>
                                            <p className="text-sm font-bold text-amber-700 dark:text-amber-400 leading-none">Lighting</p>
                                            <p className="text-xs text-amber-600 dark:text-amber-500/80 mt-1">Slight shadow on upper left</p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-amber-500 text-sm">warning</span>
                                </div>
                            </div>
                        </div>

                        {/* Patient Metadata Form */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-lg">clinical_notes</span>
                                Patient Metadata
                            </h3>
                            <form className="space-y-5" onSubmit={handleRunAnalysis}>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Patient Age</label>
                                    <input
                                        className="w-full h-11 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm px-4 focus:ring-primary focus:border-primary transition-all text-slate-950 dark:text-white"
                                        placeholder="Years"
                                        type="number"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Lesion Location</label>
                                    <select
                                        className="w-full h-11 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm px-4 focus:ring-primary focus:border-primary transition-all text-slate-950 dark:text-white"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    >
                                        <option>Select anatomy...</option>
                                        <option>Face - Cheek</option>
                                        <option>Trunk - Upper Back</option>
                                        <option>Limb - Lower Forearm</option>
                                        <option>Scalp - Vertex</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Duration of Lesion</label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {['1-6 Mo', '6-12 Mo', '12+ Mo'].map((d) => (
                                            <button
                                                key={d}
                                                onClick={() => setDuration(d)}
                                                className={`h-10 text-xs font-bold rounded transition-all ${duration === d ? 'bg-primary text-white ring-2 ring-primary' : 'bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
                                                type="button"
                                            >
                                                {d}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="pt-4 space-y-3">
                                    <button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all" type="submit">
                                        <span className="material-symbols-outlined">analytics</span>
                                        RUN AI ANALYSIS
                                    </button>
                                    <button className="w-full h-12 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-lg transition-all" type="reset" onClick={() => { setAge(''); setLocation('Select anatomy...'); setDuration('1-6 Mo'); }}>
                                        RESET CASE
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Technical Specs Mini-Card */}
                        <div className="p-4 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl flex items-center gap-4 text-slate-400">
                            <span className="material-symbols-outlined text-3xl">info</span>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest">Protocol V4.2</p>
                                <p className="text-xs">Images will be stored with 256-bit AES encryption and used for diagnostic inference only.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="mt-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark py-6 px-10">
                <div className="max-w-[1440px] mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <span className="text-xs font-medium text-slate-400">© 2024 Diagnostic Submission Lab</span>
                        <a className="text-xs font-medium text-slate-400 hover:text-primary" href="#">HIPAA Compliance</a>
                        <a className="text-xs font-medium text-slate-400 hover:text-primary" href="#">Data Privacy</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-xs font-medium text-slate-400">Systems Online - Ready for Analysis</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Lab;
