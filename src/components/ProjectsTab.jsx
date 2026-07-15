import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ChevronRight, ArrowLeft, FileText, Image as ImageIcon, X, ExternalLink } from 'lucide-react';

export default function ProjectsTab() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { projects } = portfolioData;

  // THÊM MỚI: State quản lý việc hiển thị Pop-up xem trước file
  const [previewData, setPreviewData] = useState({ isOpen: false, url: '', type: '' });

  // THÊM MỚI: Hàm mở và đóng Pop-up Modal
  const openPreview = (e, url, type) => {
    e.preventDefault();
    setPreviewData({ isOpen: true, url, type });
  };

  const closePreview = () => {
    setPreviewData({ isOpen: false, url: '', type: '' });
  };

  if (selectedProject) {
    return (
      <div className="max-w-4xl mx-auto animate-fade-in pb-10 relative">
        
        {/* KHỐI POP-UP (MODAL) HIỂN THỊ TRỰC TIẾP TRÊN WEB */}
        {previewData.isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 md:p-10 animate-fade-in print:hidden">
            <div className="bg-white w-full max-w-5xl h-full max-h-[90vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl border border-slate-200">
              {/* Header Pop-up */}
              <div className="flex justify-between items-center p-4 border-b border-slate-200 bg-slate-50">
                <h3 className="font-bold text-slate-800">
                  {previewData.type === 'pdf' ? 'Trình xem PDF (Báo cáo)' : 'Trình xem Hình ảnh (Screenshot)'}
                </h3>
                <div className="flex items-center gap-4">
                  <a href={previewData.url} target="_blank" rel="noreferrer" className="text-sm text-[#8D7794] hover:underline font-medium">
                    Mở thẻ mới
                  </a>
                  <button onClick={closePreview} className="p-1.5 bg-slate-200 hover:bg-rose-500 hover:text-white text-slate-700 rounded-lg transition-colors">
                    <X size={20} />
                  </button>
                </div>
              </div>
              
              {/* Nội dung nhúng file */}
              <div className="flex-1 bg-slate-200 flex justify-center items-center overflow-auto p-4">
                {previewData.type === 'pdf' ? (
                  <iframe 
                    src={previewData.url} 
                    title="PDF Preview" 
                    className="w-full h-full rounded shadow-sm border-none bg-white"
                  />
                ) : (
                  <img 
                    src={previewData.url} 
                    alt="Minh chứng" 
                    className="max-w-full max-h-full object-contain rounded shadow-sm bg-white"
                  />
                )}
              </div>
            </div>
          </div>
        )}

        {/* Nút quay lại */}
        <button 
          onClick={() => setSelectedProject(null)}
          className="flex items-center gap-2 text-slate-500 hover:text-[#8D7794] mb-6 font-medium bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200 w-fit transition-all hover:scale-102 hover:shadow-md"
        >
          <ArrowLeft size={18} /> Quay lại danh sách
        </button>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
          {/* Detail Header - academic language and culture theme */}
          <div className={`bg-gradient-to-br ${
            selectedProject.id === 1 ? 'from-[#1C121A] via-[#2A1B27] to-[#503A55]' :
            selectedProject.id === 2 ? 'from-[#1C121A] via-[#2A1B27] to-[#402A45]' :
            selectedProject.id === 3 ? 'from-[#1C121A] via-[#2A1B27] to-[#4C3552]' :
            selectedProject.id === 4 ? 'from-[#1C121A] via-[#2A1B27] to-[#593D50]' :
            selectedProject.id === 5 ? 'from-[#1C121A] via-[#2A1B27] to-[#5C474C]' :
            'from-[#1C121A] via-[#2A1B27] to-[#3D293C]'
          } p-8 text-white relative overflow-hidden`}>
            
            {/* Restrained open-book and page-line watermark */}
            <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.07] scale-125 translate-x-1/4 -translate-y-1/4 z-0 pointer-events-none text-cyan-400">
              <svg viewBox="0 0 500 500" className="w-full h-full" fill="none" stroke="currentColor">
                <path d="M250 150 C210 115 150 112 105 135 V330 C155 305 210 312 250 350 Z" strokeWidth="4" />
                <path d="M250 150 C290 115 350 112 395 135 V330 C345 305 290 312 250 350 Z" strokeWidth="4" />
                <path d="M250 150 V350" strokeWidth="3" />
                <path d="M135 180 C175 165 210 170 230 185 M135 220 C175 205 210 210 230 225 M135 260 C175 245 210 250 230 265" strokeWidth="2" />
                <path d="M365 180 C325 165 290 170 270 185 M365 220 C325 205 290 210 270 225 M365 260 C325 245 290 250 270 265" strokeWidth="2" />
              </svg>
            </div>

            {/* Lớp z-10: Nội dung hiển thị nổi lên trên */}
            <div className="relative z-10">
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-lg uppercase tracking-wider mb-4 inline-block backdrop-blur-sm border border-white/10">
                {selectedProject.chapter}
              </span>
              <h2 className="text-3xl font-extrabold mb-3 leading-tight drop-shadow-md tracking-tight">{selectedProject.title}</h2>
              <p className="text-slate-300 text-lg max-w-3xl drop-shadow font-light">{selectedProject.shortDesc}</p>
            </div>
          </div>

          {/* Detail Body */}
          <div className="p-8 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <div className={`w-2 h-6 rounded-full ${
                    selectedProject.id === 1 ? 'bg-[#8D7794]' :
                    selectedProject.id === 2 ? 'bg-[#A187AC]' :
                    selectedProject.id === 3 ? 'bg-[#B39CB5]' :
                    selectedProject.id === 4 ? 'bg-[#DACBE8]' :
                    selectedProject.id === 5 ? 'bg-[#F0DAE1]' :
                    'bg-[#D7CCE6]'
                  }`}></div>
                  Mục tiêu nhiệm vụ
                </h3>
                <p className={`text-slate-600 leading-relaxed p-5 rounded-2xl border ${
                  selectedProject.id === 1 ? 'bg-gradient-to-br from-[#E8E6F0]/50 to-[#D7CCE6]/30 border-[#E8E6F0]/70' :
                  selectedProject.id === 2 ? 'bg-gradient-to-br from-[#D7CCE6]/50 to-[#DACBE8]/30 border-[#D7CCE6]/70' :
                  selectedProject.id === 3 ? 'bg-gradient-to-br from-[#A187AC]/20 to-[#B39CB5]/10 border-[#A187AC]/30' :
                  selectedProject.id === 4 ? 'bg-gradient-to-br from-[#DACBE8]/50 to-[#F0DAE1]/30 border-[#DACBE8]/70' :
                  selectedProject.id === 5 ? 'bg-gradient-to-br from-[#B39CB5]/20 to-[#DACBE8]/10 border-[#B39CB5]/30' :
                  'bg-gradient-to-br from-[#F0DAE1]/50 to-[#E8E6F0]/30 border-[#F0DAE1]/70'
                }`}>
                  {selectedProject.target}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <div className={`w-2 h-6 rounded-full ${
                    selectedProject.id === 1 ? 'bg-[#8D7794]' :
                    selectedProject.id === 2 ? 'bg-[#A187AC]' :
                    selectedProject.id === 3 ? 'bg-[#B39CB5]' :
                    selectedProject.id === 4 ? 'bg-[#DACBE8]' :
                    selectedProject.id === 5 ? 'bg-[#F0DAE1]' :
                    'bg-[#D7CCE6]'
                  }`}></div>
                  Kỹ năng áp dụng
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {selectedProject.skills?.map((skill, idx) => (
                    <span key={idx} className={`px-3 py-1.5 text-sm font-medium rounded-xl border ${
                      selectedProject.id === 1 ? 'bg-[#E8E6F0]/40 text-[#8D7794] border-[#E8E6F0]' :
                      selectedProject.id === 2 ? 'bg-[#D7CCE6]/40 text-[#A187AC] border-[#D7CCE6]' :
                      selectedProject.id === 3 ? 'bg-[#DACBE8]/40 text-[#B39CB5] border-[#DACBE8]' :
                      selectedProject.id === 4 ? 'bg-[#F0DAE1]/40 text-[#8D7794] border-[#F0DAE1]' :
                      selectedProject.id === 5 ? 'bg-[#B39CB5]/20 text-[#8D7794] border-[#B39CB5]/30' :
                      'bg-[#E8E6F0]/40 text-[#A187AC] border-[#E8E6F0]'
                    }`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-50/40 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-805 mb-3 border-b border-slate-100 pb-2">Quá trình thực hiện</h3>
              <p className={`text-slate-700 leading-relaxed text-justify pl-4 border-l-4 ${
                selectedProject.id === 1 ? 'border-l-[#8D7794]' :
                selectedProject.id === 2 ? 'border-l-[#A187AC]' :
                selectedProject.id === 3 ? 'border-l-[#B39CB5]' :
                selectedProject.id === 4 ? 'border-l-[#DACBE8]' :
                selectedProject.id === 5 ? 'border-l-[#F0DAE1]' :
                'border-l-[#D7CCE6]'
              }`}>
                {selectedProject.process}
              </p>
            </div>

            {/* Evidence Section - ĐÃ ĐỒNG BỘ POP-UP */}
            <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200/60">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Sản phẩm & Minh chứng</h3>
              
              <div className="max-w-md mx-auto">
                {/* 1. Khối Báo cáo */}
                <div className="bg-white p-6 rounded-xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center gap-3 hover:border-[#8D7794] transition-colors">
                  <FileText className="text-[#8D7794]" size={36} />
                  <span className="text-base font-semibold text-slate-700">Báo cáo (PDF/Word)</span>
                  
                  {selectedProject.report === "Sẽ cập nhật sau" || !selectedProject.report ? (
                    <span className="text-xs font-bold px-3 py-1.5 bg-[#F0DAE1] text-[#8D7794] rounded-lg mt-1">Sẽ cập nhật sau</span>
                  ) : selectedProject.report === "Không yêu cầu" ? (
                    <span className="text-xs font-bold px-3 py-1.5 bg-slate-100 text-slate-500 rounded-lg mt-1">Không yêu cầu</span>
                  ) : (
                    <a 
                      href={selectedProject.report} 
                      onClick={(e) => openPreview(e, selectedProject.report, 'pdf')}
                      className="px-6 py-2.5 bg-gradient-to-r from-[#8D7794] to-[#A187AC] text-white text-sm font-bold rounded-lg hover:brightness-110 transition-all mt-1 shadow-sm"
                    >
                      Xem Báo cáo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid View
  return (
    <div className="max-w-6xl mx-auto pb-10 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-850 tracking-tight mb-2">Các bài tập thành phần</h2>
        <p className="text-slate-500 text-lg">Danh sách các bài học trọng tâm từ Chương 1 đến Chương 6.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          // Dynamic gradient for cards depending on ID
          const cardGradients = [
            'from-[#8D7794] to-[#A187AC]',
            'from-[#A187AC] to-[#B39CB5]',
            'from-[#B39CB5] to-[#DACBE8]',
            'from-[#DACBE8] to-[#F0DAE1]',
            'from-[#D7CCE6] to-[#E8E6F0]',
            'from-[#F0DAE1] to-[#B39CB5]'
          ];
          const grad = cardGradients[(project.id - 1) % cardGradients.length];

          return (
            <div key={project.id} className="bg-white rounded-2xl shadow-sm border border-slate-200/80 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden group">
              {/* Colored top accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${grad}`} />
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded uppercase tracking-wide border border-slate-100">
                    {project.chapter}
                  </span>
                  <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded border border-emerald-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    Hoàn thiện
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-[#8D7794] transition-colors">{project.title}</h3>
                <p className="text-slate-450 text-sm mb-4 line-clamp-3 leading-relaxed">{project.shortDesc}</p>
                
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.skills?.slice(0, 2).map((skill, idx) => (
                    <span key={idx} className="text-[11px] font-medium px-2 py-0.5 bg-slate-50 text-slate-500 rounded border border-slate-100">
                      {skill}
                    </span>
                  ))}
                  {project.skills?.length > 2 && <span className="text-[11px] font-medium px-2 py-0.5 bg-slate-50 text-slate-500 rounded border border-slate-100">+{project.skills.length - 2}</span>}
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedProject(project)}
                className="w-full py-4 bg-slate-50 text-slate-700 font-semibold border-t border-slate-100 hover:bg-slate-100 hover:text-[#8D7794] transition-all flex justify-center items-center gap-2 group-hover:bg-slate-50/50"
              >
                Xem chi tiết báo cáo <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
