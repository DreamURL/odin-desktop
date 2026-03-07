import React from 'react';
import { 
  Search, FileText, ShieldCheck, MessageSquare, Zap, Layout, 
  Briefcase, GraduationCap, Code, User, ArrowRight, Database, 
  ServerOff, Lock, HardDrive, Sparkles
} from 'lucide-react';

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
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl">O</div>
          <span className="font-serif font-semibold text-xl tracking-tight">Odin</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-black transition-colors">Features</a>
          <a href="#use-cases" className="hover:text-black transition-colors">Use Cases</a>
          <a href="#security" className="hover:text-black transition-colors">Security</a>
        </div>
        <a href="https://github.com/DreamURL/odin-desktop/releases/latest" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors no-underline">
          Download Free
        </a>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 md:pt-24 pb-16 px-4 text-center">
        <Pill icon={Sparkles}>AI-Powered Desktop Search</Pill>
        <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mt-8 mb-6 max-w-4xl mx-auto leading-[1.1]">
          AI Superpowers for<br />Your Documents.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          An AI desktop application that truly understands your files. Stop wandering through folders and start conversing with your knowledge base in natural language.
        </p>
        <a href="https://github.com/DreamURL/odin-desktop/releases/latest" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 mx-auto no-underline">
          Get Started with Odin <ArrowRight size={18} />
        </a>

        {/* Hero Mockup */}
        <div className="w-full max-w-5xl mx-auto mt-16 md:mt-20 rounded-2xl overflow-hidden border border-black/10 shadow-2xl bg-white flex flex-col h-[500px] md:h-[600px] text-left">
          {/* Header */}
          <div className="h-12 border-b border-black/5 flex items-center px-4 gap-2 bg-[#fdfcfb]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            <div className="mx-auto text-xs font-medium text-gray-400 font-mono">Odin Desktop</div>
          </div>
          {/* Body */}
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <div className="w-64 border-r border-black/5 p-4 bg-[#fdfcfb] hidden md:block">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 mt-2">Indexed Locations</div>
              <div className="space-y-1">
                <div className="flex items-center gap-3 text-sm text-gray-800 bg-gray-100/80 p-2.5 rounded-lg font-medium">
                  <Database size={16} className="text-gray-500"/> Project Alpha
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 p-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                  <Database size={16} className="text-gray-400"/> Financial Reports
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 p-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                  <Database size={16} className="text-gray-400"/> Research Papers
                </div>
              </div>
            </div>
            {/* Main Chat */}
            <div className="flex-1 flex flex-col bg-white relative">
              <div className="flex-1 p-4 md:p-8 overflow-y-auto space-y-8 pb-32">
                <div className="flex gap-4 max-w-3xl mx-auto w-full">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 border border-gray-200"><User size={14} className="text-gray-600"/></div>
                  <div className="pt-1.5 text-gray-800 text-[15px] leading-relaxed">What product had the highest revenue growth in last year's Q4 sales report?</div>
                </div>
                <div className="flex gap-4 max-w-3xl mx-auto w-full">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 font-serif text-sm">O</div>
                  <div className="pt-1.5 text-gray-800 space-y-4 text-[15px] leading-relaxed w-full">
                    <p>Based on the <span className="text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded cursor-pointer text-sm font-medium border border-blue-100">Q4_Sales_Report_2023.pdf</span>, the product with the highest revenue growth was <strong>Projector Pro X</strong>.</p>
                    <div className="p-4 border border-gray-100 rounded-xl bg-[#fdfcfb] text-sm text-gray-600 shadow-sm">
                      "The Projector Pro X saw an unprecedented 142% year-over-year growth in Q4, driven primarily by enterprise bulk orders in the APAC region..."
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-white via-white to-transparent pt-12">
                <div className="max-w-3xl mx-auto relative shadow-lg rounded-2xl">
                  <input type="text" placeholder="Ask anything about your documents..." className="w-full pl-5 pr-12 py-4 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black/5 text-[15px]" readOnly />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"><ArrowRight size={16}/></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section id="features" className="py-20 md:py-24 px-4">
        <Pill icon={Search}>Built for massive file systems</Pill>
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mt-6 mb-12 md:mb-16 text-center max-w-3xl mx-auto leading-tight">
          Enterprise grade AI for your personal desktop.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="col-span-1 md:col-span-2 bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 border border-amber-100">
              <Zap className="text-amber-500" size={24} />
            </div>
            <h3 className="font-serif text-2xl mb-3 font-medium">Instant File Search</h3>
            <p className="text-gray-600 leading-relaxed text-[15px]">Indexes massive directory structures in a flash. Once indexed, subsequent searches show instant results, saving you hours of manual digging through nested folders.</p>
          </div>
          
          <div className="col-span-1 bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 border border-blue-100">
              <FileText className="text-blue-500" size={24} />
            </div>
            <h3 className="font-serif text-2xl mb-3 font-medium">Universal Formats</h3>
            <p className="text-gray-600 leading-relaxed text-[15px]">PDF, Word, Excel, PowerPoint, HWP, and text files. We read and analyze them all seamlessly.</p>
          </div>
          
          <div className="col-span-1 bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mb-6 border border-green-100">
              <ShieldCheck className="text-green-500" size={24} />
            </div>
            <h3 className="font-serif text-2xl mb-3 font-medium">Complete Privacy</h3>
            <p className="text-gray-600 leading-relaxed text-[15px]">All AI processing happens locally. Your sensitive documents never leave your computer or get sent to external servers.</p>
          </div>
          
          <div className="col-span-1 md:col-span-2 bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 border border-purple-100">
              <MessageSquare className="text-purple-500" size={24} />
            </div>
            <h3 className="font-serif text-2xl mb-3 font-medium">Converse with Documents</h3>
            <p className="text-gray-600 leading-relaxed text-[15px]">Select a searched document and ask follow-up questions. "Summarize the core points in 3 lines" — get intelligent, context-aware answers instantly based on your actual files.</p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20 md:py-24 px-4 bg-white border-y border-black/5">
        <Pill icon={Briefcase}>From chaos to clarity</Pill>
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mt-6 mb-12 md:mb-16 text-center max-w-3xl mx-auto leading-tight">
          Trusted by knowledge workers.
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: GraduationCap, title: "Researchers", desc: "Quickly find needed info in papers, research materials, and summarize complex contents." },
            { icon: Briefcase, title: "Business", desc: "Extract and analyze core data from reports, contracts, and presentations instantly." },
            { icon: User, title: "Students", desc: "Search and organize necessary content from class materials and assignment files." },
            { icon: Code, title: "Developers", desc: "Find code examples, API references, or explanations buried in project documentation." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-[#f7f6f3] border border-black/5">
              <item.icon className="mb-5 text-gray-700" size={28} strokeWidth={1.5} />
              <h3 className="font-serif text-xl mb-2 font-medium">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-24 px-4">
        <Pill icon={Layout}>Intelligent AI utilization</Pill>
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mt-6 mb-16 md:mb-20 text-center max-w-3xl mx-auto leading-tight">
          Four steps to a smarter workflow.
        </h2>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="hidden md:block absolute top-8 left-12 right-12 h-px bg-gray-200 -z-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {[
              { num: "01", title: "Install Odin", desc: "Download and run the lightweight desktop application." },
              { num: "02", title: "Select Folders", desc: "Choose which directories or drives to include in your knowledge base." },
              { num: "03", title: "Index Files", desc: "Let the local AI process and understand your documents." },
              { num: "04", title: "Ask Questions", desc: "Converse naturally with your data and get instant answers." }
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

      {/* Security / CTA */}
      <section id="security" className="py-20 md:py-24 px-4 bg-white border-t border-black/5 text-center">
        <Pill icon={ShieldCheck}>Security and privacy first</Pill>
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mt-6 mb-6 max-w-3xl mx-auto leading-tight">
          Secure. Private. Mission critical.
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed text-[15px]">
          Odin is built for professionals who work on confidential, critical content. It is secure, private, and respects your data always. All processing happens on your machine.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 md:mb-16">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 text-sm font-medium text-gray-700 bg-[#f7f6f3]">
            <ServerOff size={16} className="text-gray-500" /> 100% Local Processing
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 text-sm font-medium text-gray-700 bg-[#f7f6f3]">
            <Lock size={16} className="text-gray-500" /> No Cloud Uploads
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 text-sm font-medium text-gray-700 bg-[#f7f6f3]">
            <HardDrive size={16} className="text-gray-500" /> Data Sovereignty
          </div>
        </div>

        <a href="https://github.com/DreamURL/odin-desktop/releases/latest" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 mx-auto no-underline">
          Download Odin Free <ArrowRight size={18} />
        </a>
      </section>

      {/* Footer */}
      <footer className="py-10 md:py-12 px-6 md:px-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white font-serif font-bold text-xs">O</div>
          <span className="font-serif font-semibold text-gray-900">Odin Desktop</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
        </div>
        <div>&copy; {new Date().getFullYear()} Odin AI. All rights reserved.</div>
      </footer>
    </div>
  );
}
