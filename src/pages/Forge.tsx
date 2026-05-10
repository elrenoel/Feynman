import React from 'react';
import { 
  Upload, 
  FileText, 
  FileCode, 
  Presentation, 
  Star,
  BrainCircuit,
  Boxes,
  Scale,
  Sparkles,
  Zap,
  HelpCircle,
  Wand2
} from 'lucide-react';
import { NeoCard, NeoButton } from '@/src/components/ui/NeoElements';
import { cn } from '@/src/lib/utils';

export const Forge = () => {
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Mastery Index */}
        <div className="lg:col-span-4 transition-all">
          <NeoCard variant="tertiary" className="p-8 h-full shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-8">
              <Star size={32} fill="currentColor" />
              <h3 className="text-3xl font-black uppercase italic tracking-tighter">Mastery Index</h3>
            </div>
            
            <div className="space-y-10">
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-black uppercase tracking-widest opacity-60">Total Comprehension</span>
                  <span className="text-2xl font-black italic">74%</span>
                </div>
                <div className="h-10 w-full border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                  <div className="h-full bg-[#963b82] border-r-4 border-black" style={{ width: '74%' }}></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Streak</p>
                  <p className="text-2xl font-black italic uppercase">12 Days</p>
                </div>
                <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Nodes</p>
                  <p className="text-2xl font-black italic uppercase">142</p>
                </div>
              </div>
            </div>
          </NeoCard>
        </div>

        {/* Upload Area */}
        <div className="lg:col-span-8">
          <NeoCard className="p-10 h-full border-dashed border-8 border-[#326b1c] bg-[#f8fbf0] hover:bg-[#a0e082]/10 transition-all cursor-pointer group flex flex-col items-center justify-center text-center">
            <div className="relative mb-8">
              <Upload size={80} className="text-[#326b1c] group-hover:scale-110 transition-transform" />
              <div className="absolute -top-4 -right-12 bg-[#fd92df] text-black border-4 border-black px-6 py-2 font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-12">
                AI READY
              </div>
            </div>
            
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">Forge New Knowledge</h2>
            <p className="text-lg font-medium max-w-md opacity-70 mb-10">
              Drop your PDFs, PowerPoints, or Research Papers here to transmute raw data into wisdom.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-3 bg-[#a0e082] border-2 border-black px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase text-sm">
                <FileText size={20} /> PDF
              </div>
              <div className="flex items-center gap-3 bg-[#ffc390] border-2 border-black px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase text-sm">
                <Presentation size={20} /> PPTX
              </div>
              <div className="flex items-center gap-3 bg-[#fd92df] border-2 border-black px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase text-sm">
                <FileCode size={20} /> DOCX
              </div>
            </div>
          </NeoCard>
        </div>

        {/* Battle Map Visualization */}
        <div className="lg:col-span-12">
          <NeoCard variant="surface" className="p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
              <div>
                <h3 className="text-3xl font-black uppercase italic italic">Battle Map: Philosophy of Mind</h3>
                <p className="text-sm font-bold opacity-50 uppercase tracking-widest">Generated 2 hours ago • Active Session</p>
              </div>
              <NeoButton variant="primary" className="border-4 px-10">Regenerate Nodes</NeoButton>
            </div>
            
            <div className="h-[600px] w-full border-4 border-black bg-white relative overflow-hidden">
              {/* Background Dots */}
              <div 
                className="absolute inset-0 opacity-10" 
                style={{ 
                  backgroundImage: 'radial-gradient(circle, black 2px, transparent 2px)', 
                  backgroundSize: '24px 24px' 
                }}
              ></div>
              
              {/* Connecting Lines (Simulated with simple spans for now) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="25%" y1="30%" x2="50%" y2="50%" stroke="black" strokeWidth="4" />
                <line x1="75%" y1="30%" x2="50%" y2="50%" stroke="black" strokeWidth="4" />
                <line x1="50%" y1="75%" x2="50%" y2="50%" stroke="black" strokeWidth="4" />
                <line x1="25%" y1="30%" x2="15%" y2="60%" stroke="black" strokeWidth="2" strokeDasharray="8,8" />
              </svg>

              {/* Node: Cognition (Center) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="bg-[#326b1c] text-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center min-w-[200px]">
                  <p className="text-2xl font-black uppercase italic tracking-widest">Cognition</p>
                  <div className="h-1 bg-white mt-2 mb-2"></div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Core Domain</p>
                </div>
              </div>

              {/* Node: Ontology */}
              <div className="absolute top-[20%] left-[15%] z-10 transition-transform hover:-translate-y-2 cursor-pointer group">
                <div className="bg-[#fd92df] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-w-[180px]">
                  <Boxes size={24} className="mb-2" />
                  <p className="text-xl font-black uppercase">Ontology</p>
                  <p className="text-[10px] font-bold opacity-60">12 Linked Concepts</p>
                </div>
              </div>

              {/* Node: Ethics */}
              <div className="absolute top-[20%] right-[15%] z-10 transition-transform hover:-translate-y-2 cursor-pointer">
                <div className="bg-[#ffc390] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-w-[180px]">
                  <Scale size={24} className="mb-2" />
                  <p className="text-xl font-black uppercase">Ethics</p>
                  <p className="text-[10px] font-bold opacity-60">8 Critical Paths</p>
                </div>
              </div>

              {/* Node: Epistemology */}
              <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 z-10 transition-transform hover:-translate-y-2 cursor-pointer">
                <div className="bg-[#a0e082] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-w-[180px] text-center">
                  <BrainCircuit size={24} className="mx-auto mb-2" />
                  <p className="text-xl font-black uppercase">Epistemology</p>
                  <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Ready for Sparring</p>
                </div>
              </div>

              {/* Legend */}
              <div className="absolute bottom-6 right-6 bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#326b1c] border-2 border-black"></div>
                  <span className="text-[10px] font-black uppercase tracking-wider">Mastered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#fd92df] border-2 border-black"></div>
                  <span className="text-[10px] font-black uppercase tracking-wider">Forging</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#ffc390] border-2 border-black"></div>
                  <span className="text-[10px] font-black uppercase tracking-wider">Unexplored</span>
                </div>
              </div>
            </div>
          </NeoCard>
        </div>

        {/* Action Cards */}
        <div className="lg:col-span-6">
          <NeoCard variant="primary" className="p-6 flex items-center gap-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] cursor-pointer group hover:bg-[#b3f493] transition-colors">
            <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 transition-transform">
              <HelpCircle size={40} />
            </div>
            <div className="space-y-1">
              <h4 className="text-2xl font-black uppercase italic tracking-tighter">Draft Flashcards</h4>
              <p className="text-sm font-medium opacity-80 leading-snug">
                Instantly convert the current Battle Map into an active recall deck.
              </p>
            </div>
          </NeoCard>
        </div>
        
        <div className="lg:col-span-6">
          <NeoCard variant="secondary" className="p-6 flex items-center gap-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] cursor-pointer group hover:bg-[#ffd7ef] transition-colors">
            <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 transition-transform">
              <Wand2 size={40} />
            </div>
            <div className="space-y-1">
              <h4 className="text-2xl font-black uppercase italic tracking-tighter">Synthesize Summary</h4>
              <p className="text-sm font-medium opacity-80 leading-snug">
                Create a 500-word executive summary of all uploaded materials.
              </p>
            </div>
          </NeoCard>
        </div>
      </div>
    </div>
  );
};
