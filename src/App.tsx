import React from 'react';
import {
  Search, FileText, ShieldCheck, MessageSquare, Zap, Layout,
  GraduationCap, Code, User, ArrowRight, Github,
  ServerOff, Lock, HardDrive, Sparkles, Cpu, Database
} from 'lucide-react';

const DOWNLOAD_URL = "https://github.com/DreamURL/odin-desktop/releases/latest/download/Odin_Setup.exe";
const GITHUB_URL = "https://github.com/DreamURL/odin-desktop";

function Pill({ children, icon: Icon }: { children: React.ReactNode, icon?: React.ElementType }) {
  return (
    <div className="border border-black/10 rounded-full px-4 py-1.5 text-xs font-medium text-gray-600 flex items-center gap-2 w-fit mx-auto bg-white/50 backdrop-blur-sm">
      {Icon && <Icon size={14} className="text-gray-400" />}
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f6f3] text-[#111] font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-8 py-6 max-w-7xl mx-auto">
        <span className="font-serif font-semibold text-xl tracking-tight">Odin</span>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-black transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-black transition-colors">How It Works</a>
          <a href="#tech" className="hover:text-black transition-colors">Tech</a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors flex items-center gap-1.5">
            <Github size={16} /> GitHub
          </a>
        </div>
        <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors no-underline">
          Download for Windows
        </a>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 md:pt-24 pb-16 px-4 text-center">
        <Pill icon={Sparkles}>Free &amp; Open Source</Pill>
        <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mt-8 mb-6 max-w-4xl mx-auto leading-[1.1]">
          Search your files.<br />Ask your documents.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          A desktop app that indexes every file on your drives and lets you chat with documents using a local AI. No cloud, no subscriptions, no data leaves your machine.
        </p>
        <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 mx-auto no-underline">
          Download for Windows <ArrowRight size={18} />
        </a>

        {/* Hero Screenshot */}
        <div className="w-full max-w-5xl mx-auto mt-16 md:mt-20 rounded-2xl overflow-hidden border border-black/10 shadow-2xl">
          <img src="/image/results.png" alt="Odin Desktop - searching files and chatting with documents" className="w-full h-auto block" />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-24 px-4">
        <Pill icon={Search}>What it does</Pill>
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mt-6 mb-12 md:mb-16 text-center max-w-3xl mx-auto leading-tight">
          Find any file. Understand any document.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="col-span-1 md:col-span-2 bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 border border-amber-100">
              <Zap className="text-amber-500" size={24} />
            </div>
            <h3 className="font-serif text-2xl mb-3 font-medium">Instant File Search</h3>
            <p className="text-gray-600 leading-relaxed text-[15px]">Reads the NTFS Master File Table directly to index millions of files in seconds — the same technique used by Everything search. Once indexed, changes are tracked in real-time via USN Journal.</p>
          </div>

          <div className="col-span-1 bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 border border-blue-100">
              <FileText className="text-blue-500" size={24} />
            </div>
            <h3 className="font-serif text-2xl mb-3 font-medium">Read Any Format</h3>
            <p className="text-gray-600 leading-relaxed text-[15px]">PDF, Word, Excel, PowerPoint, HWP, and plain text. Select a file from search results and the AI reads it for you.</p>
          </div>

          <div className="col-span-1 bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mb-6 border border-green-100">
              <ShieldCheck className="text-green-500" size={24} />
            </div>
            <h3 className="font-serif text-2xl mb-3 font-medium">100% Offline</h3>
            <p className="text-gray-600 leading-relaxed text-[15px]">Everything runs on your machine. The AI model runs locally, files are never uploaded anywhere. Works without an internet connection.</p>
          </div>

          <div className="col-span-1 md:col-span-2 bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 border border-purple-100">
              <MessageSquare className="text-purple-500" size={24} />
            </div>
            <h3 className="font-serif text-2xl mb-3 font-medium">Chat with Documents</h3>
            <p className="text-gray-600 leading-relaxed text-[15px]">Select a file from your search results and ask questions about it. "Summarize this report" or "What are the key financials?" — the AI answers based on the actual content of your file.</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 md:py-24 px-4 bg-white border-y border-black/5">
        <Pill icon={Layout}>How it works</Pill>
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mt-6 mb-16 md:mb-20 text-center max-w-3xl mx-auto leading-tight">
          Up and running in under a minute.
        </h2>

        <div className="max-w-5xl mx-auto relative">
          <div className="hidden md:block absolute top-8 left-12 right-12 h-px bg-gray-200 -z-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {[
              { num: "01", title: "Install", desc: "Download the installer and run it. No account needed." },
              { num: "02", title: "Auto Index", desc: "Odin automatically scans all your NTFS drives on first launch." },
              { num: "03", title: "Search", desc: "Type a filename or keyword. Results appear instantly from millions of files." },
              { num: "04", title: "Ask", desc: "Select a document and ask questions in natural language. The AI answers from the file content." }
            ].map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center md:items-start md:text-left">
                <div className="w-16 h-16 rounded-2xl bg-white border border-black/10 shadow-sm flex items-center justify-center font-serif text-xl font-medium mb-6">
                  {step.num}
                </div>
                <h3 className="font-serif text-xl mb-2 font-medium">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="py-20 md:py-24 px-4">
        <Pill icon={Code}>Under the hood</Pill>
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mt-6 mb-12 md:mb-16 text-center max-w-3xl mx-auto leading-tight">
          Built with real technology.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Database, title: "NTFS MFT Parsing", desc: "Reads the Master File Table directly via Windows kernel APIs for near-instant indexing of millions of files." },
            { icon: Cpu, title: "Local LLM", desc: "Runs Llama 3.2 or any GGUF model locally via llama-cpp-python. Also supports Ollama for easy model management." },
            { icon: Search, title: "USN Journal", desc: "Tracks file system changes in real-time without rescanning. New, deleted, and renamed files are detected automatically." },
            { icon: Code, title: "Open Source", desc: "Electron + React frontend, Python + FastAPI backend. Full source code available on GitHub." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
              <item.icon className="mb-5 text-gray-700" size={28} strokeWidth={1.5} />
              <h3 className="font-serif text-xl mb-2 font-medium">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 md:py-24 px-4 bg-white border-y border-black/5">
        <Pill icon={User}>Who it's for</Pill>
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mt-6 mb-12 md:mb-16 text-center max-w-3xl mx-auto leading-tight">
          Anyone who works with files.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: GraduationCap, title: "Researchers", desc: "Find specific data across hundreds of papers and summarize contents without reading every page." },
            { icon: User, title: "Office Workers", desc: "Locate that one report from last quarter buried somewhere in your C: drive. Then ask the AI to summarize it." },
            { icon: GraduationCap, title: "Students", desc: "Search across lecture notes, assignment files, and references. Ask questions about specific documents." },
            { icon: Code, title: "Developers", desc: "Find config files, documentation, or logs across project directories. Ask the AI to explain what a file does." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-[#f7f6f3] border border-black/5">
              <item.icon className="mb-5 text-gray-700" size={28} strokeWidth={1.5} />
              <h3 className="font-serif text-xl mb-2 font-medium">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy / CTA */}
      <section className="py-20 md:py-24 px-4 text-center">
        <Pill icon={ShieldCheck}>Privacy</Pill>
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mt-6 mb-6 max-w-3xl mx-auto leading-tight">
          Your files stay on your computer.
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed text-[15px]">
          There is no server, no account, no telemetry. The AI model runs locally on your CPU. Your documents are processed entirely on your machine and never sent anywhere.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 md:mb-16">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 text-sm font-medium text-gray-700 bg-white">
            <ServerOff size={16} className="text-gray-500" /> No Server
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 text-sm font-medium text-gray-700 bg-white">
            <Lock size={16} className="text-gray-500" /> No Account Required
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 text-sm font-medium text-gray-700 bg-white">
            <HardDrive size={16} className="text-gray-500" /> No Telemetry
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 md:py-12 px-6 md:px-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto text-sm text-gray-500">
        <span className="font-serif font-semibold text-gray-900">Odin Desktop</span>
        <div className="flex flex-wrap justify-center gap-6">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">GitHub</a>
          <a href={`${GITHUB_URL}/issues`} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Report a Bug</a>
          <a href={`${GITHUB_URL}/releases`} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Releases</a>
          <a href="/privacy.html" className="hover:text-black transition-colors">Privacy Policy</a>
        </div>
        <div>&copy; {new Date().getFullYear()} Odin Desktop</div>
      </footer>
    </div>
  );
}
