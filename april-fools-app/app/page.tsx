import Link from "next/link";
import { Cpu, Network, ShieldCheck, Zap, ArrowRight, Activity, Globe } from "lucide-react";

// Standard Rick Roll Link
const PRANK_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-cyan-500/30 overflow-hidden relative">
      {/* Immersive background effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

      {/* Navigation Bar */}
      <nav className="border-b border-white/5 bg-[#020617]/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
            <Globe className="w-7 h-7 text-cyan-400" />
            <span>Nexus<span className="text-cyan-400">AI</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <Link href={PRANK_URL} className="hover:text-cyan-400 transition-colors">Platform</Link>
            <Link href={PRANK_URL} className="hover:text-cyan-400 transition-colors">Models</Link>
            <Link href={PRANK_URL} className="hover:text-cyan-400 transition-colors">Enterprise</Link>
            <Link href={PRANK_URL} className="hover:text-cyan-400 transition-colors">Pricing</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href={PRANK_URL} className="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden sm:block">
              Sign In
            </Link>
            <Link
              href={PRANK_URL}
              className="text-sm font-semibold bg-white text-black px-5 py-2.5 rounded-full hover:bg-slate-200 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-24 pb-32 relative z-10 flex flex-col items-center text-center">
        
        {/* Release Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-sm font-medium text-cyan-400 mb-8 animate-fade-in shadow-[0_0_15px_rgba(6,182,212,0.1)]">
          <Activity className="w-4 h-4 animate-pulse" />
          Nexus-v4 Foundation Model is now available
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
          The New Standard <br className="hidden md:block" />
          for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">Autonomous AI</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 flex-1 leading-relaxed">
          Unleash the power of real-time machine intelligence directly in your infrastructure. Nexus AI delivers superhuman cognition, reasoning, and task automation.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0">
          <Link
            href={PRANK_URL}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-cyan-500 text-black font-bold text-lg hover:scale-105 hover:bg-cyan-400 transition-all shadow-[0_0_40px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2"
          >
            Deploy Nexus Now <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href={PRANK_URL}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-slate-200 font-semibold text-lg border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center"
          >
            Read Documentation
          </Link>
        </div>

        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 text-left w-full">
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 backdrop-blur-md hover:bg-slate-900 shadow-xl transition-all group">
            <div className="bg-blue-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Neural Processing Units</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Leverage massive parallel compute through our distributed network of specialized reasoning ASICs.</p>
          </div>
          
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 backdrop-blur-md hover:bg-slate-900 shadow-xl transition-all group">
            <div className="bg-cyan-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Military Grade Security</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Your data never leaves your environment. True end-to-end encryption for all automated inferences.</p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 backdrop-blur-md hover:bg-slate-900 shadow-xl transition-all group">
            <div className="bg-indigo-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Network className="w-7 h-7 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Infinite Scaling</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Agent swarms dynamically scale up based on load, solving highly complex deterministic problems instantly.</p>
          </div>
        </div>
      </main>

      {/* Footer minimal */}
      <footer className="border-t border-white/5 mt-auto py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Nexus AI Research Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href={PRANK_URL} className="hover:text-slate-300">Privacy Policy</Link>
            <Link href={PRANK_URL} className="hover:text-slate-300">Terms of Service</Link>
            <Link href={PRANK_URL} className="hover:text-slate-300">Contact Sales</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
