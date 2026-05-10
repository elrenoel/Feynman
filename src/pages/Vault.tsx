import React from 'react';
import { cn } from '@/src/lib/utils';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';
import { 
  Medal, 
  Bolt, 
  Flame, 
  History, 
  CheckCircle2, 
  MessageSquare,
  BookOpen,
  Lock,
  Search,
  ShieldCheck,
  Zap,
  Anchor,
  Wand2,
  Award
} from 'lucide-react';
import { NeoCard, NeoButton } from '@/src/components/ui/NeoElements';

const radarData = [
  { subject: 'Logic', A: 120, fullMark: 150 },
  { subject: 'Ethics', A: 98, fullMark: 150 },
  { subject: 'Rhetoric', A: 86, fullMark: 150 },
  { subject: 'Empiricism', A: 99, fullMark: 150 },
  { subject: 'Dialectic', A: 85, fullMark: 150 },
  { subject: 'Metaphysics', A: 65, fullMark: 150 },
];

export const Vault = () => {
  return (
    <div className="space-y-10">
      {/* Profile Header */}
      <NeoCard variant="primary" className="p-8 relative overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#fd92df] opacity-10 -rotate-12 translate-x-12 -translate-y-12"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="relative">
            <div className="w-40 h-40 rounded-full border-4 border-black bg-white flex items-center justify-center overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-0 bg-[#fd92df] text-black border-4 border-black px-4 py-2 font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-6">
              LVL 42
            </div>
          </div>
          
          <div className="text-center md:text-left flex-grow space-y-4">
            <h1 className="text-6xl font-black uppercase tracking-tighter">Master Oracle</h1>
            <p className="text-lg font-medium max-w-xl opacity-80 leading-snug">
              Architect of Logic, Purveyor of Reason. Currently dominating the Sparring Arena with a 98% dialectic efficiency rating.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="bg-white border-2 border-black px-4 py-2 flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase text-xs">
                <Bolt size={16} fill="#326b1c" className="text-[#326b1c]" /> 2.4K XP
              </div>
              <div className="bg-white border-2 border-black px-4 py-2 flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase text-xs">
                <Medal size={16} fill="#963b82" className="text-[#963b82]" /> 12 Medals
              </div>
              <div className="bg-white border-2 border-black px-4 py-2 flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase text-xs">
                <Flame size={16} fill="#8e4e00" className="text-[#8e4e00]" /> 15 Day Streak
              </div>
            </div>
          </div>
        </div>
      </NeoCard>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Mastery Radar */}
        <div className="lg:col-span-7">
          <NeoCard className="p-8 h-full">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-black italic uppercase">Mastery Radar</h2>
              <ShieldCheck size={32} />
            </div>
            
            <div className="h-[400px] w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#000" strokeWidth={1} strokeOpacity={0.1} />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ fill: '#000', fontSize: 10, fontWeight: 900, textTransform: 'uppercase' }} 
                  />
                  <Radar
                    name="Mastery"
                    dataKey="A"
                    stroke="#326b1c"
                    strokeWidth={4}
                    fill="#a0e082"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </NeoCard>
        </div>

        {/* Recent Feats */}
        <div className="lg:col-span-5">
          <NeoCard variant="tertiary" className="p-8 h-full">
             <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-black italic uppercase">Recent Feats</h2>
              <History size={32} />
            </div>
            
            <div className="space-y-4">
              {[
                { title: 'Solved: Epistemological Paradox', meta: '2 hours ago • +150 XP', color: '#a0e082', icon: <CheckCircle2 size={18} /> },
                { title: 'Debate Winner: Kant vs. Mill', meta: 'Yesterday • +400 XP', color: '#fd92df', icon: <MessageSquare size={18} /> },
                { title: 'Finished: The Republic Analysis', meta: '3 days ago • +100 XP', color: '#ffb778', icon: <BookOpen size={18} /> },
                { title: 'Unlocked: Advanced Syllogisms', meta: '5 days ago', color: '#ecefe4', icon: <Lock size={18} />, locked: true },
              ].map((feat, i) => (
                <div key={i} className={cn(
                  "bg-white border-2 border-black p-4 flex items-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-x-1 hover:-translate-y-1 cursor-pointer",
                  feat.locked && "opacity-60"
                )}>
                  <div className="p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" style={{ backgroundColor: feat.color }}>
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="font-black uppercase text-xs">{feat.title}</h3>
                    <p className="text-[10px] font-bold text-gray-500 uppercase">{feat.meta}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <NeoButton variant="ghost" className="w-full mt-8 border-2 border-black">View All Feats</NeoButton>
          </NeoCard>
        </div>

        {/* Earned Honors */}
        <div className="lg:col-span-12">
          <NeoCard variant="secondary" className="p-8">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-black italic uppercase">Earned Honors</h2>
              <Award size={32} />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { label: 'The Logic Wizard', sub: 'Master of Deduction', icon: <Wand2 size={32} />, color: '#a0e082' },
                { label: 'Stoic Anchor', sub: 'Unshakable Reasoning', icon: <Anchor size={32} />, color: '#ffc390' },
                { label: 'Dialectic Spark', sub: 'Speed Debate Winner', icon: <Zap size={32} fill="currentColor" />, color: '#fd92df' },
                { label: 'Truth Seeker', sub: '50 Queries Solved', icon: <Search size={32} />, color: '#ffd7ef' },
                { label: 'Ethics Guardian', sub: 'Moral Framework Pro', icon: <ShieldCheck size={32} />, color: '#ecefe4' },
                { label: 'Omniscient Mind', sub: 'Locked', icon: <Lock size={32} />, color: '#f2f5ea', locked: true },
              ].map((honor, i) => (
                <div key={i} className={cn(
                  "bg-white border-4 border-black p-6 flex flex-col items-center text-center gap-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-2 cursor-pointer group",
                  honor.locked && "border-dashed opacity-40 grayscale"
                )}>
                  <div className="w-20 h-20 border-2 border-black rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: honor.color }}>
                    {honor.icon}
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-xs leading-tight mb-1">{honor.label}</h4>
                    <p className="text-[10px] font-bold text-gray-500 uppercase">{honor.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </NeoCard>
        </div>
      </div>
    </div>
  );
};
