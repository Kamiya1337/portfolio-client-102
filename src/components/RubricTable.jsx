import { portfolioData } from '../data/portfolioData';
import { Target, CheckCircle2, RefreshCw } from 'lucide-react';

export default function RubricTable() {
  const { projects } = portfolioData;

  // TỰ ĐỘNG ĐẾM: Quét qua toàn bộ bài tập để đếm số lượng tệp thật (không phải placeholder)
  const totalMilestones = projects.length; // 6 bài = 6 mục dữ liệu báo cáo
  
  const completedMilestones = projects.reduce((acc, project) => {
    const reportDone = project.report !== "Sẽ cập nhật sau" && project.report !== "" && project.report !== "Không yêu cầu";
    return acc + (reportDone ? 1 : 0);
  }, 0);

  // Công thức tính tiến độ thực tế dựa trên số lượng file thật bạn đã cung cấp
  const progressPercent = Math.round(50 + (completedMilestones / totalMilestones) * 50);

  return (
    <div className="max-w-6xl mx-auto animate-fade-in pb-10 font-sans">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-850 tracking-tight mb-2">Tự Đánh giá theo Rubric môn học</h2>
        <p className="text-slate-500 text-lg">Hệ thống đồng bộ dữ liệu tự động theo thời gian thực dựa trên tệp minh chứng thực tế của bạn.</p>
      </div>

      {/* THANH TIẾN ĐỘ TỰ ĐỘNG ĐỒNG BỘ */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-3">
          <div>
            <h3 className="font-bold text-slate-800 mb-1 flex items-center gap-2">
              <RefreshCw size={16} className="text-[#8D7794] animate-spin" style={{ animationDuration: '8s' }} />
              Portfolio Readiness Score
            </h3>
            <p className="text-sm text-slate-550">
              Trạng thái minh chứng thật: Đã tích hợp thành công <span className="font-bold text-[#8D7794] bg-[#E8E6F0] px-2 py-0.5 rounded border border-[#D7CCE6]">{completedMilestones} trên {totalMilestones}</span> mục dữ liệu.
            </p>
          </div>
          <span className="text-3xl font-black text-[#8D7794] tracking-tight">{progressPercent}%</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-3.5 overflow-hidden border border-slate-200/50">
          <div 
            className="bg-gradient-to-r from-[#8D7794] to-[#DACBE8] h-full rounded-full transition-all duration-700 ease-out" 
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* BẢNG TRẠNG THÁI ĐỘNG CẬP NHẬT THEO FILE DATA */}
      <div className="space-y-4">
        {/* Tiêu chí cố định về giao diện */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 border-l-4 border-l-[#8D7794]">
          <div className="md:w-1/4">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <Target className="text-[#8D7794] flex-shrink-0" size={16} />
              Thiết kế và cấu trúc Portfolio
            </h3>
            <span className="text-[10px] bg-slate-50 border border-slate-100 px-2 py-0.5 rounded text-slate-450 font-medium uppercase tracking-wide mt-1.5 inline-block">
              Tổng quan Layout
            </span>
          </div>
          <div className="md:w-2/5 text-sm text-slate-505 leading-relaxed">
            Giao diện chuyên nghiệp, cấu trúc rõ ràng, điều hướng mượt mà, chuẩn UI/UX học thuật.
          </div>
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border bg-[#E8E6F0] text-[#8D7794] border-[#D7CCE6]">
              <CheckCircle2 size={14} className="text-[#8D7794]" /> Hoàn thành Layout
            </span>
          </div>
          <div className="text-xs italic text-slate-400 line-through">
            Đã xong
          </div>
        </div>

        {/* QUÉT ĐỘNG QUA TỪNG BÀI TẬP ĐỂ TỰ SINH CHỮ VÀ MÀU SẮC */}
        {projects.map((project) => {
          const isReportDone = project.report !== "Sẽ cập nhật sau" && project.report !== "" && project.report !== "Không yêu cầu";
          const isFullyDone = isReportDone;

          return (
            <div key={project.id} className={`bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 border-l-4 ${
              isFullyDone ? 'border-l-emerald-500' : 'border-l-amber-500'
            }`}>
              <div className="md:w-1/4">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <Target className={`${isFullyDone ? 'text-emerald-500' : 'text-amber-500'} flex-shrink-0`} size={16} />
                  {project.title.split(":")[0]}
                </h3>
                <span className="text-[10px] bg-slate-50 border border-slate-100 px-2 py-0.5 rounded text-slate-450 font-medium uppercase tracking-wide mt-1.5 inline-block">
                  {project.chapter}
                </span>
              </div>
              <div className="md:w-2/5 text-sm text-slate-500 leading-relaxed">
                Đầy đủ file văn bản báo cáo chi tiết nội dung học tập và kết quả thực hành.
              </div>
              <div>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border ${
                  isFullyDone 
                    ? "bg-emerald-50 text-emerald-700 border-emerald-100" 
                    : "bg-amber-50 text-amber-700 border-amber-100"
                }`}>
                  <CheckCircle2 size={14} className={isFullyDone ? "text-emerald-600" : "text-amber-600"} /> 
                  {isFullyDone ? "Đạt chuẩn Xuất sắc" : "Thiếu minh chứng"}
                </span>
              </div>
              <div className={`text-xs italic font-semibold ${isFullyDone ? "text-slate-400 line-through" : "text-rose-600 bg-rose-50 border border-rose-100/50 px-2 py-1 rounded"}`}>
                {isFullyDone 
                  ? "Đã đồng bộ" 
                  : "Cần nộp: Báo cáo"
                }
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
