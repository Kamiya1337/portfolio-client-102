import { Home, BookOpen, FileCheck, CheckSquare, MessageSquare, Menu, X, BookMarked } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen }) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Giới thiệu & Tổng quan' },
    { id: 'projects', icon: BookOpen, label: 'Bài tập / Dự án' },
    { id: 'evidence', icon: FileCheck, label: 'Bảng Minh chứng' },
    { id: 'rubric', icon: CheckSquare, label: 'Rubric / Đánh giá' },
    { id: 'summary', icon: MessageSquare, label: 'Tổng kết cá nhân' },
  ];

  return (
    <>
      {/* Mobile Header - Thêm print:hidden để ẩn khi in */}
      <div className="md:hidden flex items-center justify-between bg-academic-sidebar text-white p-4 shadow-md border-b border-academic-sidebar-border sticky top-0 z-50 print:hidden">
        <div className="flex items-center gap-2 font-bold text-lg">
          <BookMarked className="text-academic-cyan" />
          <span>Learning Portfolio</span>
        </div>
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="p-1 bg-white/10 rounded">
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className={`${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 w-72 bg-gradient-to-b from-[#1C121A] via-[#2C1E2B] to-[#3E2C3D] border-r border-[#4C3447]/20 text-[#DACBE8]/80 transition-transform duration-300 ease-in-out z-40 flex flex-col shadow-2xl print:hidden`}>
          <div className="p-6 border-b border-[#3E2C3D]/60">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#8D7794] to-[#DACBE8] flex items-center justify-center text-white font-bold text-sm tracking-wide shadow-lg ring-2 ring-[#DACBE8]/20">KC</div>
            <div>
              <h2 className="text-xl font-bold text-white leading-tight">Trần Đỗ Khánh Cầm</h2>
              <span className="text-xs text-[#DACBE8] font-medium">Ngôn ngữ Hàn Quốc</span>
              <span className="block text-[11px] text-slate-400 mt-0.5">ULIS - VNU</span>
            </div>
          </div>
        </div>

        <div className="flex-1 py-6 space-y-2 px-4 overflow-y-auto">
          <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Điều hướng</p>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 w-full text-left rounded-xl font-medium transition-all duration-200 group relative overflow-hidden ${
                  isActive 
                    ? 'bg-gradient-to-r from-[#8D7794]/90 to-[#A187AC]/90 text-white shadow-md shadow-[#8D7794]/20 border-l-4 border-[#DACBE8] pl-[12px]' 
                    : 'hover:bg-[#3E2C3D]/60 hover:text-white'
                }`}
              >
                <Icon size={20} className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-[#DACBE8] transition-colors'} />
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="p-6 border-t border-[#3E2C3D]/60 text-xs text-slate-500">
          <p>Môn: Nhập môn CN Số & ƯD AI</p>
          <p className="mt-1">Năm học: 2025-2026</p>
        </div>
      </nav>
      
      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}
