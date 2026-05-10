import React from 'react';
import { 
  Send, 
  History, 
  Paperclip, 
  BrainCircuit, 
  User,
  Zap,
  Target,
  Handshake,
  Lightbulb,
  AlertCircle
} from 'lucide-react';
import { NeoCard, NeoButton } from '@/src/components/ui/NeoElements';
import { cn } from '@/src/lib/utils';

export const Arena = () => {
  return (
    <div className="h-[calc(100vh-160px)] flex flex-col lg:flex-row gap-8">
      {/* Debate Area */}
      <section className="flex-grow flex flex-col min-w-0 bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 overflow-hidden relative">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#a0e082] opacity-5 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#fd92df] opacity-5 blur-[100px] pointer-events-none"></div>

        {/* Current Challenge Banner */}
        <div className="bg-[#ffc390] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8 relative z-10">
          <div className="flex justify-between items-start mb-2">
            <span className="bg-black text-white px-3 py-1 font-black text-[10px] uppercase tracking-[0.2em]">Current Challenge</span>
            <span className="text-xs font-black uppercase tracking-widest opacity-60">Session: #412</span>
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">The Ethics of Artificial General Intelligence and Human Autonomy</h3>
          <p className="text-sm font-bold opacity-70">
            <span className="bg-black/10 px-2 py-0.5 rounded">Position:</span> You are arguing that AGI requires strict human-controlled "kill-switches" to preserve autonomy.
          </p>
        </div>

        {/* Messages */}
        <div className="flex-grow overflow-y-auto space-y-8 pr-4 custom-scrollbar relative z-10">
          {/* Socratic Opponent Message */}
          <div className="flex flex-col items-start max-w-[85%] space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-black bg-[#ba1a1a] flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <BrainCircuit className="text-white" size={24} />
              </div>
              <span className="font-black uppercase tracking-widest text-xs">Socratic Opponent</span>
            </div>
            <div className="bg-[#ecefe4] border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative transition-transform hover:translate-x-1">
              <p className="text-lg font-medium italic leading-relaxed text-gray-800">
                "If we presuppose that AGI is capable of superior ethical calculation, isn't the human 'kill-switch' merely a mechanism for preserving human ego at the expense of optimal outcomes? Define for me, then, the threshold of 'human autonomy' that justifies potential global inefficiency."
              </p>
            </div>
          </div>

          {/* User Message */}
          <div className="flex flex-col items-end max-w-[85%] ml-auto space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-black uppercase tracking-widest text-xs">You (The Challenger)</span>
              <div className="w-10 h-10 border-2 border-black bg-[#326b1c] flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <User className="text-white" size={24} />
              </div>
            </div>
            <div className="bg-[#a0e082] border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-right transition-transform hover:-translate-x-1">
              <p className="text-lg font-bold leading-relaxed">
                "Efficiency is not the ultimate good. Human autonomy is defined by the capacity for moral error and self-correction. An AGI without a kill-switch removes the 'moral' aspect of existence by automating it, effectively ending the human project."
              </p>
            </div>
          </div>

          {/* Socratic Opponent Message 2 */}
          <div className="flex flex-col items-start max-w-[85%] space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-black bg-[#ba1a1a] flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <BrainCircuit className="text-white" size={24} />
              </div>
              <span className="font-black uppercase tracking-widest text-xs">Socratic Opponent</span>
            </div>
            <div className="bg-[#ecefe4] border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative transition-transform hover:translate-x-1">
              <p className="text-lg font-medium italic leading-relaxed text-gray-800">
                "An intriguing claim. But does 'self-correction' require the power to destroy the system itself? Is a child truly autonomous only when they have the matches to burn the house down? Show me the logic where destruction is a prerequisite for morality."
              </p>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="mt-8 pt-8 border-t-4 border-black relative z-10">
          <div className="flex gap-4">
            <div className="flex-grow bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus-within:translate-x-[-2px] focus-within:translate-y-[-2px] focus-within:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <textarea 
                className="w-full h-24 bg-transparent outline-none font-bold text-lg resize-none placeholder:opacity-30" 
                placeholder="Draft your counter-argument here..."
              ></textarea>
              <div className="flex justify-end gap-3 mt-2">
                <button className="p-2 hover:bg-gray-100 transition-colors"><History size={20} /></button>
                <button className="p-2 hover:bg-gray-100 transition-colors"><Paperclip size={20} /></button>
              </div>
            </div>
            <NeoButton variant="secondary" className="flex flex-col items-center justify-center px-10 gap-2 h-auto shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
              <Send size={32} />
              <span className="text-xl font-black italic tracking-tighter">SEND</span>
            </NeoButton>
          </div>
        </div>
      </section>

      {/* Analysis Sidebar */}
      <aside className="lg:w-96 flex flex-col gap-6">
        <NeoCard variant="surface" className="p-6 h-full flex flex-col shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div className="mb-8">
            <h3 className="text-2xl font-black uppercase italic tracking-tighter">Dialectic Health</h3>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Real-time Analysis</p>
          </div>

          <div className="space-y-8 flex-grow">
            {/* Logic Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-2">
                  <Target size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Logic</span>
                </div>
                <span className="text-xl font-black italic">78%</span>
              </div>
              <div className="h-4 w-full border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <div className="h-full bg-[#a0e082] border-r-2 border-black" style={{ width: '78%' }}></div>
              </div>
              <p className="text-[9px] font-bold uppercase tracking-widest opacity-60">Strengths: Non-contradiction</p>
            </div>

            {/* Evidence Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-2">
                  <Zap size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Evidence</span>
                </div>
                <span className="text-xl font-black italic">45%</span>
              </div>
              <div className="h-4 w-full border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <div className="h-full bg-[#fd92df] border-r-2 border-black" style={{ width: '45%' }}></div>
              </div>
              <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-[#ba1a1a]">
                <AlertCircle size={10} />
                <span>Warning: Anecdotal Fallacy detected</span>
              </div>
            </div>

            {/* Handshake Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-2">
                  <Handshake size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Handshake</span>
                </div>
                <span className="text-xl font-black italic">92%</span>
              </div>
              <div className="h-4 w-full border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <div className="h-full bg-[#ffc390] border-r-2 border-black" style={{ width: '92%' }}></div>
              </div>
              <p className="text-[9px] font-bold uppercase tracking-widest text-[#8e4e00]">Steel-manning is excellent</p>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <div className="bg-[#a0e082] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={20} className="text-[#326b1c]" />
                <h4 className="text-xs font-black uppercase tracking-widest">Master's Hint</h4>
              </div>
              <p className="text-xs font-bold leading-relaxed">
                Try addressing the Opponent's "House on Fire" analogy. They are using a <span className="underline italic">Category Error</span> by equating autonomy with destruction.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <NeoButton variant="primary" className="text-[10px] py-3 px-2">End Arena</NeoButton>
              <NeoButton variant="black" className="text-[10px] py-3 px-2">Save Log</NeoButton>
            </div>
          </div>
        </NeoCard>
      </aside>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #000;
          border-radius: 0px;
        }
      `}</style>
    </div>
  );
};
