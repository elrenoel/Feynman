import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Zap, 
  ShieldCheck, 
  Bell, 
  Settings, 
  Search,
  Menu,
  X,
  Sparkles
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { NeoButton } from './ui/NeoElements';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const SidebarItem = ({ icon, label, active, onClick }: SidebarItemProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-3 w-full p-4 transition-all uppercase font-bold tracking-wider border-2 border-transparent",
      active 
        ? "bg-[#a0e082] text-black border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-1 -translate-y-1" 
        : "text-gray-600 hover:bg-[#ecefe4] hover:translate-x-1"
    )}
  >
    {icon}
    <span>{label}</span>
  </button>
);

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  setActivePage: (page: string) => void;
}

export const Layout = ({ children, activePage, setActivePage }: LayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#f8fbf0] font-sans text-black">
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8fbf0] border-b-4 border-black px-6 md:px-12 py-4 flex justify-between items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-black italic text-[#326b1c]">is.feynman</h1>
          </div>
          
          <nav className="hidden md:flex gap-6">
            <button className="font-bold uppercase tracking-wider text-gray-600 hover:text-black">Knowledge</button>
            <button className="font-bold uppercase tracking-wider text-gray-600 hover:text-black">Community</button>
            <button className="font-bold uppercase tracking-wider text-[#326b1c] border-b-4 border-[#326b1c]">Vault</button>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-white border-2 border-black px-3 py-1 gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Search size={18} />
            <input type="text" placeholder="SEARCH NODES..." className="bg-transparent outline-none uppercase font-bold text-xs" />
          </div>
          
          <button className="p-2 border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
            <Bell size={20} />
          </button>
          <button className="p-2 border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
            <Settings size={20} />
          </button>
          
          <div className="w-10 h-10 border-2 border-black bg-white p-0.5 overflow-hidden shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Felix" alt="Avatar" className="w-full h-full object-cover" />
          </div>

          <button 
            className="md:hidden p-2 border-2 border-black bg-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-full w-64 pt-24 pb-8 bg-[#ecefe4] border-r-4 border-black transition-transform z-40",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="px-6 mb-8">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="text-[#326b1c]" size={24} fill="#326b1c" />
            <span className="text-xl font-black uppercase">Socratic.AI</span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">AI-Powered Learning</p>
        </div>

        <div className="flex flex-col gap-2 px-2">
          <SidebarItem 
            icon={<LayoutDashboard size={20} />} 
            label="Command Center" 
            active={activePage === 'dashboard'} 
            onClick={() => setActivePage('dashboard')}
          />
          <SidebarItem 
            icon={<BookOpen size={20} />} 
            label="Knowledge Forge" 
            active={activePage === 'forge'} 
            onClick={() => setActivePage('forge')}
          />
          <SidebarItem 
            icon={<Zap size={20} />} 
            label="Sparring Arena" 
            active={activePage === 'arena'} 
            onClick={() => setActivePage('arena')}
          />
          <SidebarItem 
            icon={<ShieldCheck size={20} />} 
            label="Master's Vault" 
            active={activePage === 'vault'} 
            onClick={() => setActivePage('vault')}
          />
        </div>

        <div className="mt-auto px-4">
          <NeoButton variant="secondary" className="w-full text-xs py-4">
            Upgrade to Pro
          </NeoButton>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 pt-24 min-h-screen">
        <div className="p-6 md:p-10 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};
