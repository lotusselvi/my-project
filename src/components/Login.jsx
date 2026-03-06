import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Dermatologist');
    const [remember, setRemember] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({ username, password, role, remember });
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-display">
            {/* Top Navigation Bar */}
            <header className="w-full border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-background-dark/50 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-3">
                            <div className="text-primary">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <span className="text-lg font-bold tracking-tight">
                                Dermalyze <span className="text-primary">Clinical</span>
                            </span>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="hidden md:flex items-center gap-4 text-sm font-medium opacity-70">
                                <a className="hover:text-primary transition-colors" href="#">Support</a>
                                <a className="hover:text-primary transition-colors" href="#">Security Status</a>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-bold uppercase tracking-wider">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                System Online
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-grow flex items-center justify-center p-4 py-12">
                <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left Side: Welcome and Context */}
                    <div className="hidden lg:flex flex-col justify-center h-full pr-8">
                        <h1 className="text-4xl font-bold leading-tight mb-4 text-slate-950 dark:text-white">
                            Precision Diagnostics <br />
                            <span className="text-primary">Secure Clinical Portal</span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            Access high-fidelity dermatological imaging and AI-assisted analysis tools. Please verify your credentials to enter the clinical environment.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                                <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                                <div>
                                    <p className="font-semibold text-sm">HIPAA Compliant</p>
                                    <p className="text-xs opacity-70">End-to-end encrypted patient data</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                                <span className="material-symbols-outlined text-primary text-3xl">shield_with_heart</span>
                                <div>
                                    <p className="font-semibold text-sm">Role-Based Access</p>
                                    <p className="text-xs opacity-70">Secured workspace management</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Login Card */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl overflow-hidden">
                        <div className="p-8">
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold mb-2">Clinical Login</h2>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Identify yourself to continue to the workspace.</p>
                            </div>
                            <form className="space-y-5" onSubmit={handleSubmit}>
                                {/* Username */}
                                <div>
                                    <label className="block text-sm font-medium mb-1.5 opacity-80" htmlFor="username">Username or Medical ID</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <span className="material-symbols-outlined text-[20px]">badge</span>
                                        </span>
                                        <input
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                            id="username"
                                            placeholder="e.g. DR-442938"
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div>
                                    <div className="flex justify-between mb-1.5">
                                        <label className="text-sm font-medium opacity-80" htmlFor="password">Password</label>
                                        <a className="text-xs font-semibold text-primary hover:underline" href="#">Forgot password?</a>
                                    </div>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <span className="material-symbols-outlined text-[20px]">lock</span>
                                        </span>
                                        <input
                                            className="w-full pl-10 pr-12 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                            id="password"
                                            placeholder="••••••••"
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <button
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-primary"
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            <span className="material-symbols-outlined text-[20px]">
                                                {showPassword ? 'visibility_off' : 'visibility'}
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                {/* Role Selection (Gateway) */}
                                <div>
                                    <label className="block text-sm font-medium mb-3 opacity-80">Select Role Gateway</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <label className="cursor-pointer">
                                            <input
                                                className="peer sr-only"
                                                name="role"
                                                type="radio"
                                                checked={role === 'Dermatologist'}
                                                onChange={() => setRole('Dermatologist')}
                                            />
                                            <div className="flex flex-col items-center justify-center p-3 rounded-lg border-2 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30 peer-checked:border-primary peer-checked:bg-primary/5 transition-all text-center">
                                                <span className="material-symbols-outlined text-primary mb-1 text-2xl">stethoscope</span>
                                                <span className="text-[10px] font-bold uppercase tracking-tight">Dermatologist</span>
                                            </div>
                                        </label>
                                        <label className="cursor-pointer">
                                            <input
                                                className="peer sr-only"
                                                name="role"
                                                type="radio"
                                                checked={role === 'Technician'}
                                                onChange={() => setRole('Technician')}
                                            />
                                            <div className="flex flex-col items-center justify-center p-3 rounded-lg border-2 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30 peer-checked:border-primary peer-checked:bg-primary/5 transition-all text-center">
                                                <span className="material-symbols-outlined text-primary mb-1 text-2xl">biotech</span>
                                                <span className="text-[10px] font-bold uppercase tracking-tight">Technician</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <input
                                        className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary"
                                        id="remember"
                                        type="checkbox"
                                        checked={remember}
                                        onChange={(e) => setRemember(e.target.checked)}
                                    />
                                    <label className="text-xs font-medium opacity-70" htmlFor="remember">Recognize this workstation for 12 hours</label>
                                </div>

                                <button
                                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
                                    type="submit"
                                >
                                    Sign In to Dashboard
                                    <span className="material-symbols-outlined text-[20px]">login</span>
                                </button>

                                <div className="relative py-2">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-white dark:bg-slate-900 px-2 text-slate-500">Or SSO Access</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-3">
                                    <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" type="button">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                                        </svg>
                                        <span className="text-sm font-semibold">Medical ID Single Sign-On</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-800/30 p-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest opacity-60">
                            <span>V4.2.0-STABLE</span>
                            <span className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-[12px]">lock_person</span>
                                Secure Session
                            </span>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full py-8 border-t border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-6">
                        <span>© 2024 Dermalyze Clinical. All Rights Reserved.</span>
                        <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                        <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">support_agent</span>
                            <span>IT Support: +1 (800) 555-DERM</span>
                        </div>
                        <div className="h-4 w-px bg-slate-200 dark:border-slate-800"></div>
                        <span>Server: US-EAST-01</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Login;
