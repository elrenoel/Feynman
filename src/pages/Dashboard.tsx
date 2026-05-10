import React from 'react';
import { cn } from '@/src/lib/utils';
import { 
  Zap, 
  Flame, 
  ChevronRight, 
  History, 
  ArrowUpRight,
  BrainCircuit,
  Sword,
  Search
} from 'lucide-react';
import { NeoCard, NeoButton } from '@/src/components/ui/NeoElements';

export const Dashboard = () => {
  return (
    <div className="space-y-10">
      {/* Welcome Section */}
      <NeoCard variant="primary" className="p-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2">
          <h1 className="text-5xl font-black tracking-tight uppercase">Welcome back, Scholar.</h1>
          <p className="text-xl font-medium italic opacity-80">
            "The only true wisdom is in knowing you know nothing." — Socrates
          </p>
        </div>
        <div className="flex gap-4">
          <NeoCard className="p-4 flex flex-col items-center min-w-[120px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-[10px] font-black uppercase text-gray-500">Level</span>
            <span className="text-4xl font-black text-[#326b1c]">24</span>
          </NeoCard>
          <NeoCard className="p-4 flex flex-col items-center min-w-[120px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-[10px] font-black uppercase text-gray-500">Rank</span>
            <span className="text-2xl font-black text-[#963b82]">Dialectic</span>
          </NeoCard>
        </div>
      </NeoCard>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* XP Momentum */}
        <div className="md:col-span-4 transition-all">
          <NeoCard variant="surface" className="p-6 h-full">
            <div className="flex items-center gap-2 mb-6">
              <Zap size={20} className="text-[#326b1c]" fill="#326b1c" />
              <h3 className="font-black uppercase tracking-wider">XP Momentum</h3>
            </div>
            
            <div className="space-y-4">
              <div className="h-10 w-full border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                <div className="h-full bg-[#326b1c]" style={{ width: '75%' }}></div>
              </div>
              <div className="flex justify-between text-[10px] font-black uppercase">
                <span>14,250 XP</span>
                <span>18,000 XP (Level 25)</span>
              </div>
              
              <div className="pt-6 border-t-2 border-black/10">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-500 uppercase text-xs tracking-wider">Weekly Growth</span>
                  <span className="text-2xl font-black text-[#326b1c] tracking-tighter">+12.4%</span>
                </div>
              </div>
            </div>
          </NeoCard>
        </div>

        {/* Active Battle Maps */}
        <div className="md:col-span-8">
          <NeoCard className="p-6 h-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-black uppercase tracking-wider">Active Battle Maps</h3>
              <button className="text-xs font-black uppercase underline tracking-wider text-[#326b1c]">View All</button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Ethics & Virtue', progress: 70, tier: 'Tier III Challenge', color: '#326b1c' },
                { label: 'Epistemology 101', progress: 45, tier: 'Tier I Core', color: '#963b82' },
                { label: 'Stoic Resilience', progress: 85, tier: 'Blitz Master', color: '#8e4e00' },
              ].map((map, i) => (
                <div key={i} className="p-4 border-2 border-black bg-[#ecefe4] flex items-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="16" fill="none" stroke="white" strokeWidth="4" />
                      <circle 
                        cx="18" cy="18" r="16" fill="none" stroke={map.color} strokeWidth="4" 
                        strokeDasharray="100" strokeDashoffset={100 - map.progress}
                        transform="rotate(-90 18 18)"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black">{map.progress}%</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-black uppercase text-xs truncate">{map.label}</p>
                    <p className="text-[10px] font-bold text-gray-500 uppercase truncate">{map.tier}</p>
                  </div>
                </div>
              ))}
            </div>
          </NeoCard>
        </div>

        {/* Daily Streak */}
        <div className="md:col-span-4">
          <NeoCard variant="tertiary" className="p-6 h-full relative overflow-hidden">
             <div className="flex justify-between items-start mb-6">
              <div className="space-y-1">
                <h3 className="font-black uppercase text-xs tracking-wider opacity-60">Daily Streak</h3>
                <p className="text-5xl font-black tracking-tighter">14 DAYS</p>
              </div>
              <Flame size={48} className="text-[#8e4e00]" fill="currentColor" />
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => (
                <div key={d} className="h-6 border-2 border-black bg-white/30 flex items-center justify-center font-black text-[10px]">{d}</div>
              ))}
              {Array.from({ length: 14 }).map((_, i) => (
                <div key={i} className={cn(
                  "aspect-square border-2 border-black flex items-center justify-center",
                  i < 11 ? "bg-[#8e4e00] text-white" : "bg-white"
                )}>
                  {i < 11 && <ChevronRight size={12} className="rotate-90" />}
                </div>
              ))}
            </div>
          </NeoCard>
        </div>

        {/* Recent Epiphanies */}
        <div className="md:col-span-8">
          <NeoCard className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <BrainCircuit size={20} className="text-[#963b82]" />
              <h3 className="font-black uppercase tracking-wider">Recent Epiphanies</h3>
            </div>
            
            <div className="space-y-3">
              {[
                { title: 'Unpacked the "Ship of Theseus" Paradox', meta: 'Identity & Metaphysics · 2 hours ago', icon: <History className="text-white" size={16} /> },
                { title: 'Refined Argument: Determinism vs. Free Will', meta: 'Modern Sparring Arena · 5 hours ago', icon: <Search className="text-white" size={16} /> },
                { title: 'Achieved "Dialectic Mastery" Milestone', meta: 'Global Achievement · Yesterday', icon: <ArrowUpRight className="text-white" size={16} /> },
              ].map((item, i) => (
                <div key={i} className="group p-4 border-2 border-black bg-white flex gap-4 items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#fd92df] hover:translate-x-1 hover:-translate-y-1 transition-all cursor-pointer">
                  <div className="bg-[#963b82] p-2 border-2 border-black group-hover:bg-white group-hover:text-[#963b82] transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-black text-sm">{item.title}</p>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{item.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </NeoCard>
        </div>

        {/* Current Path */}
        <div className="md:col-span-8">
          <NeoCard className="p-8 flex flex-col md:flex-row gap-8 items-center bg-white">
            <div className="w-full md:w-1/3">
              <NeoCard className="aspect-square relative overflow-hidden border-4">
                <img 
                  src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1000&auto=format&fit=crop" 
                  alt="Philosophy" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </NeoCard>
            </div>
            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-black tracking-tight underline decoration-4 decoration-[#a0e082] underline-offset-8">Current Path: The Cave Allegory</h2>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Deep dive into Plato's most famous metaphor. Understand the perception of reality and the duty of the philosopher-king.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <NeoButton variant="primary">Resume Exploration</NeoButton>
                <NeoButton variant="ghost" className="border-2 border-black px-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">View Resources</NeoButton>
              </div>
            </div>
          </NeoCard>
        </div>

        {/* Forge Master Challenge */}
        <div className="md:col-span-4">
          <NeoCard variant="secondary" className="p-6 h-full relative overflow-hidden flex flex-col">
            <div className="relative z-10 space-y-6 flex-grow">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Sword size={24} />
                  <h3 className="text-2xl font-black uppercase tracking-tighter">Forge Master Challenge</h3>
                </div>
                <p className="font-bold opacity-80 leading-snug">
                  Test your logical consistency against a Level 50 Socratic Agent.
                </p>
              </div>
              <NeoButton variant="black" className="w-full py-4 text-xs font-black shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]">
                Enter Arena
              </NeoButton>
            </div>
            
            {/* Shapes */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-4 border-black bg-white rotate-12 opacity-50"></div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 border-4 border-black bg-[#a0e082] -rotate-12 opacity-50"></div>
          </NeoCard>
        </div>
      </div>
    </div>
  );
};
