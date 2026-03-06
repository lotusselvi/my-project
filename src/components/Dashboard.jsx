import React, { useState, useEffect } from 'react';

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?q=80&w=2070&auto=format&fit=crop',
        title: 'Dermatologist AI Suite',
        desc: 'Precision neural network analysis for clinical dermatological classification.'
    },
    {
        image: '/dermatologist_3.jpg',
        title: 'Clinical Dermatology',
        desc: 'Advanced visual assessment and specialized dermatologist workflows.'
    },
    {
        image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop',
        title: 'Clinical Workflow',
        desc: 'Automated documentation and professional report generation for HIPAA environments.'
    }
];

const Dashboard = ({ user, onLogout, onNavigateToLab, onNavigateToHistory, onNavigateToReport }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300 font-display">
            {/* Nav Bar */}
            <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center gap-2">
                            <div className="bg-primary p-1.5 rounded-lg">
                                <span className="material-icons-round text-white text-2xl">biotech</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">DermAnalyze<span className="text-primary">AI</span></span>
                        </div>

                        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
                            <button className="text-primary font-bold">Dashboard</button>
                            <button onClick={onNavigateToLab} className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Scan Page</button>
                            <button className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Integration</button>
                            <button className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Help Center</button>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400" onClick={toggleDarkMode}>
                                <span className="material-icons-round dark:hidden">dark_mode</span>
                                <span className="material-icons-round hidden dark:block">light_mode</span>
                            </button>
                            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800"></div>
                            <div className="flex items-center gap-3 group relative cursor-pointer" onClick={onLogout}>
                                <div className="text-right hidden sm:block">
                                    <p className="text-xs font-semibold">{user?.username || 'Dr. Sarah Mitchell'}</p>
                                    <p className="text-[10px] text-slate-500 dark:text-slate-400">Dermatology Dept.</p>
                                </div>
                                <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center border-2 border-transparent group-hover:border-red-400 transition-all">
                                    <span className="material-icons-round text-slate-500 group-hover:text-red-500 transition-colors">logout</span>
                                </div>
                                <div className="absolute right-0 top-full mt-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-bold">Sign Out</div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
                {/* Hero Slider - Full Width */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 aspect-[21/9] shadow-xl group">
                    {slides.map((slide, idx) => (
                        <div
                            key={idx}
                            className={`absolute inset-0 transition-all duration-1000 transform ${idx === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
                        >
                            <img
                                alt={slide.title}
                                className="w-full h-full object-cover opacity-80 dark:opacity-60"
                                src={slide.image}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">{slide.title}</h2>
                                <p className="text-slate-200 text-lg md:text-xl max-w-2xl">{slide.desc}</p>
                                <div className="flex gap-2 mt-8">
                                    {slides.map((_, i) => (
                                        <div
                                            key={i}
                                            onClick={() => setCurrentSlide(i)}
                                            className={`h-1.5 rounded-full cursor-pointer transition-all ${i === currentSlide ? 'w-16 bg-primary' : 'w-4 bg-white/20'}`}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    <button
                        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-md p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 z-20 border border-white/20"
                    >
                        <span className="material-icons-round text-3xl">chevron_left</span>
                    </button>
                    <button
                        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-md p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 z-20 border border-white/20"
                    >
                        <span className="material-icons-round text-3xl">chevron_right</span>
                    </button>
                </div>

                {/* Main Interaction Area */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                        <span className="material-icons-round text-primary">bolt</span>
                        Quick Start
                    </h3>
                    <div
                        onClick={onNavigateToLab}
                        className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-all cursor-pointer group shadow-sm hover:shadow-md flex items-center gap-8"
                    >
                        <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 text-primary rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform">
                            <span className="material-icons-round text-5xl">upload_file</span>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-2xl font-bold mb-2">Upload Clinical Scan</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-lg">Initialize AI processing for dermoscopic evidence and generate professional physician reports.</p>
                        </div>
                        <div className="hidden md:flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold group-hover:bg-blue-600 transition-colors">
                            Start Analysis <span className="material-icons-round">arrow_forward</span>
                        </div>
                    </div>
                </div>

                {/* Clinical Overview Content at Bottom */}
                <section className="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <div className="max-w-4xl">
                        <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-6 flex items-center gap-2">
                            <div className="w-8 h-px bg-primary"></div>
                            Clinical Overview
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                                    DermAnalyze AI provides comprehensive clinical assistance for general dermatologists, offering rapid edge-based analysis of skin lesions. Our neural network architecture is trained on extensive dermatoscopic datasets to identify subtle morphological patterns and assist in dermatologist decision-making.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                                    This tool is designed to augment clinical expertise, streamline workflow, and improve patient throughput while maintaining the highest standards of HIPAA-compliant data security.
                                </p>
                                <div className="pt-4 flex items-center gap-3 text-primary">
                                    <span className="material-icons-round">verified_user</span>
                                    <span className="text-xs font-bold uppercase tracking-widest">Medical Grade AI Assistant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="mt-12 border-t border-slate-200 dark:border-slate-800 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                        © 2024 DermAnalyze Clinical Suite. Built for HIPAA Compliance. No data stored locally.
                    </p>
                    <div className="flex gap-6">
                        <a className="text-xs text-slate-400 hover:text-primary transition-colors" href="#">Privacy Policy</a>
                        <a className="text-xs text-slate-400 hover:text-primary transition-colors" href="#">Security Audit</a>
                        <a className="text-xs text-slate-400 hover:text-primary transition-colors" href="#">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Dashboard;
