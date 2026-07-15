import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { AlertCircle, CheckCircle2, XCircle, X, Maximize2 } from 'lucide-react';

export default function EvidenceTable() {
  const { projects } = portfolioData;
  
  // State quản lý việc hiển thị Pop-up (Modal)
  const [previewData, setPreviewData] = useState({ isOpen: false, url: '', type: '' });
  
  // State quản lý tìm kiếm và bộ lọc trạng thái
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all', 'done', 'missing'

  // Hàm mở pop-up
  const openPreview = (e, url, type) => {
    // Nếu là link Drive, giữ nguyên hành vi mở tab mới
    if (type === 'drive') return;
    
    // Nếu là PDF hoặc Ảnh, chặn mở tab mới và bật Pop-up
    e.preventDefault();
    setPreviewData({ isOpen: true, url, type });
  };

  const closePreview = () => setPreviewData({ isOpen: false, url: '', type: '' });

  // Thành phần render liên kết động thông minh
  const EvidenceLink = ({ value, label, type }) => {
    if (value === "Sẽ cập nhật sau" || !value) {
      return <span className="px-2.5 py-1 text-xs font-semibold bg-amber-50 text-amber-700 rounded-md border border-amber-100">Đang chờ</span>;
    }
    if (value === "Không yêu cầu") {
      return <span className="px-2.5 py-1 text-xs font-semibold bg-slate-50 text-slate-400 rounded-md border border-slate-100">---</span>;
    }
    return (
      <a 
        href={value} 
        target="_blank" 
        rel="noreferrer" 
        onClick={(e) => openPreview(e, value, type)}
        className="inline-flex items-center gap-1.5 text-[#8D7794] hover:text-[#735E79] font-medium underline text-sm transition-all group hover:scale-[1.01]"
      >
        {label}
        {type !== 'drive' && <Maximize2 size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
      </a>
    );
  };

  const StatusBadge = ({ isFullyDone }) => {
    if (isFullyDone) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-lg border border-emerald-100 shadow-sm">
          <CheckCircle2 size={14}/> Đã nộp
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-rose-50 text-rose-600 text-xs font-bold rounded-lg border border-rose-100 shadow-sm">
        <XCircle size={14}/> Thiếu MC
      </span>
    );
  };

  // Lọc danh sách dự án
  const filteredProjects = projects.filter((project) => {
    const isReportDone = project.report !== "Sẽ cập nhật sau" && project.report !== "" && project.report !== "Không yêu cầu";
    const isFullyDone = isReportDone;

    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.chapter.toLowerCase().includes(searchTerm.toLowerCase());

    if (statusFilter === 'done') {
      return matchesSearch && isFullyDone;
    }
    if (statusFilter === 'missing') {
      return matchesSearch && !isFullyDone;
    }
    return matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto animate-fade-in pb-10">
      
      {/* KHU VỰC HIỂN THỊ POP-UP (MODAL) XEM TRƯỚC FILE */}
      {previewData.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 md:p-10 animate-fade-in print:hidden">
          <div className="bg-white w-full max-w-5xl h-full max-h-[90vh] rounded-3xl flex flex-col overflow-hidden shadow-2xl border border-slate-200">
            {/* Thanh Header của Modal */}
            <div className="flex justify-between items-center p-4 border-b border-slate-200 bg-slate-50">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
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
            
            {/* Khu vực Nhúng nội dung */}
            <div className="flex-1 bg-slate-250 flex justify-center items-center overflow-auto p-4">
              {previewData.type === 'pdf' ? (
                <iframe 
                  src={previewData.url} 
                  title="PDF Preview" 
                  className="w-full h-full rounded-xl shadow-sm border-none bg-white"
                />
              ) : (
                <img 
                  src={previewData.url} 
                  alt="Minh chứng" 
                  className="max-w-full max-h-full object-contain rounded-xl shadow-sm bg-white"
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* GIAO DIỆN BẢNG CHÍNH */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-850 tracking-tight mb-2">Bảng Kiểm soát Minh chứng</h2>
        <p className="text-slate-505 text-lg">Tổng hợp tình trạng các file báo cáo, hình ảnh và link sản phẩm cần nộp.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200/80 overflow-hidden">
        {/* Bộ lọc tương tác (Control Panel) */}
        <div className="p-5 bg-slate-50/50 border-b border-slate-200/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Tìm bài tập hoặc chương..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-10 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#A187AC]/20 focus:border-[#A187AC] text-sm transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2 text-sm">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                statusFilter === 'all'
                  ? 'bg-[#8D7794] text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-650 hover:bg-slate-50'
              }`}
            >
              Tất cả
            </button>
            <button
              onClick={() => setStatusFilter('done')}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                statusFilter === 'done'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-650 hover:bg-slate-50'
              }`}
            >
              Đã nộp đủ
            </button>
            <button
              onClick={() => setStatusFilter('missing')}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                statusFilter === 'missing'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-650 hover:bg-slate-50'
              }`}
            >
              Thiếu MC
            </button>
          </div>
        </div>

        <div className="bg-[#E8E6F0]/30 border-b border-[#E8E6F0]/50 p-4 flex items-start gap-3">
          <AlertCircle className="text-[#8D7794] mt-0.5 flex-shrink-0" size={18} />
          <p className="text-xs text-slate-600">
            <strong>Mẹo:</strong> Nhấp vào &quot;Xem báo cáo&quot; để duyệt trực tiếp qua cửa sổ xem trước (Pop-up).
          </p>
        </div>
        
        <div className="overflow-x-auto">
          {filteredProjects.length > 0 ? (
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="bg-slate-50/60 border-b border-slate-200/80 text-slate-655 text-xs font-bold uppercase tracking-wider">
                  <th className="p-4 w-2/3">Bài tập / Nhiệm vụ</th>
                  <th className="p-4 w-1/3">File Báo cáo</th>
                  <th className="p-4 text-center">Trạng thái chung</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredProjects.map((project) => {
                  const isReportDone = project.report !== "Sẽ cập nhật sau" && project.report !== "" && project.report !== "Không yêu cầu";
                  const isFullyDone = isReportDone;

                  return (
                    <tr key={project.id} className="hover:bg-slate-50/40 transition-colors">
                      <td className={`p-4 border-l-4 ${isFullyDone ? 'border-l-emerald-500' : 'border-l-rose-400'}`}>
                        <p className="font-bold text-slate-800 text-sm leading-snug">{project.title}</p>
                        <p className="text-xs text-slate-450 mt-1">{project.chapter}</p>
                      </td>
                      <td className="p-4"><EvidenceLink value={project.report} label="Xem báo cáo" type="pdf" /></td>
                      <td className="p-4 text-center">
                        <StatusBadge isFullyDone={isFullyDone} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="py-12 text-center text-slate-450 text-sm">
              Không tìm thấy minh chứng nào khớp với bộ lọc.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
