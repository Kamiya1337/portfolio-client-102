import { portfolioData } from '../data/portfolioData';
import { BookOpenText, Library, Layers, Quote } from 'lucide-react';

export default function HomeTab({ setActiveTab }) {
  const { student, overview } = portfolioData;

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-fade-in pb-10">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl border border-[#4C3447]/60 bg-gradient-to-br from-[#1C121A] via-[#2A1B27] to-[#3D293C] p-8 text-white shadow-2xl md:p-12">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full opacity-[0.08] md:w-1/2">
          <div className="absolute right-10 top-10 h-64 w-48 rounded-t-full border border-[#DACBE8]" />
          <div className="absolute right-24 top-24 h-64 w-48 rounded-t-full border border-[#A187AC]" />
          <Quote className="absolute bottom-8 right-14 text-[#DACBE8]" size={120} strokeWidth={1} />
        </div>

        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[minmax(0,1.65fr)_minmax(280px,0.9fr)]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-block rounded-full border border-[#DACBE8]/30 bg-[#DACBE8]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#DACBE8]">
              Báo cáo Cuối kỳ
            </div>

            <h1 className="mb-4 text-4xl font-extrabold leading-tight md:text-5xl tracking-tight">
              Digital Technology & <br />
              <span className="bg-gradient-to-r from-[#DACBE8] via-[#A187AC] to-[#B39CB5] bg-clip-text text-transparent">
                AI Learning Portfolio
              </span>
            </h1>

            <p className="mb-6 text-lg font-light text-slate-300 md:text-xl">
              Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo
            </p>

            <div className="mb-8 max-w-2xl rounded-2xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-sm shadow-inner">
              <p className="mb-5 leading-relaxed text-slate-300">{student.bio}</p>

              <div className="flex flex-wrap gap-2">
                {student.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="rounded-md border border-[#4C3447]/60 bg-[#3A2537]/40 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button
                onClick={() => setActiveTab('projects')}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#8D7794] to-[#A187AC] px-6 py-3 font-semibold text-white shadow-lg shadow-[#8D7794]/20 hover:brightness-110 active:scale-95 transition-all"
              >
                <Layers size={18} /> Xem bài tập
              </button>

              <button
                onClick={() => setActiveTab('evidence')}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <Library size={18} /> Minh chứng
              </button>
            </div>
          </div>

          <aside className="relative mx-auto w-full max-w-sm rounded-[24px] border border-white/10 bg-[#251724]/80 p-5 shadow-2xl shadow-[#1C111C]/40 backdrop-blur-md">
            <Quote
              className="absolute right-2 top-2 text-[#DACBE8]/20"
              size={58}
              strokeWidth={1.5}
            />

            <div className="pointer-events-none absolute bottom-10 right-8 h-24 w-24 rounded-full bg-[#DACBE8]/10 blur-xl" />

            <div className="relative">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#DACBE8]">
                Student Profile
              </p>

              <div className="mb-5 rounded-[22px] border border-white/10 bg-white/5 p-3 shadow-lg shadow-[#1C111C]/30">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/avatar.jpg"
                    alt="Trần Đỗ Khánh Cẩm"
                    className="h-72 w-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                  />

                  <span className="absolute bottom-3 left-3 rounded-lg bg-slate-950/90 border border-white/10 px-3 py-2 text-xs font-bold text-slate-200 shadow-sm backdrop-blur-sm">
                    Trần Đỗ Khánh Cẩm
                  </span>
                </div>
              </div>

              <p className="mb-1 text-sm font-semibold text-slate-300">
                {student.id} · ULIS - VNU
              </p>

              <p className="text-sm font-bold leading-relaxed text-white">
                {student.major}
              </p>

              <p className="mt-1 text-xs leading-relaxed text-slate-400">
                {student.university}
              </p>
            </div>
          </aside>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[
          { label: 'Bài học', value: '07', desc: 'Chủ đề lý thuyết', border: 'border-l-4 border-l-[#8D7794]' },
          { label: 'Sản phẩm', value: '06', desc: 'Bài tập thực hành', border: 'border-l-4 border-l-[#A187AC]' },
          { label: 'Kỹ năng số', value: '06+', desc: 'Nhóm năng lực lõi', border: 'border-l-4 border-l-[#DACBE8]' },
          { label: 'Mức điểm kỳ vọng', value: '10', desc: 'Xuất sắc', border: 'border-l-4 border-l-[#F0DAE1]' },
        ].map((stat, i) => (
          <div key={i} className={`bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center ${stat.border}`}>
            <h3 className="text-4xl font-extrabold text-slate-800 mb-1 tracking-tight">{stat.value}</h3>
            <p className="font-bold text-slate-700 text-sm">{stat.label}</p>
            <p className="text-xs text-slate-400 mt-1">{stat.desc}</p>
          </div>
        ))}
      </div>

      {/* Course Overview Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <BookOpenText className="text-[#8D7794]" size={28} />
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-850 tracking-tight mb-2">Tổng quan Năng lực Học phần</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {overview.map((item) => {
            const Icon = item.icon;
            
            // Generate color scheme depending on competency ID
            const getColors = (id) => {
              switch (id) {
                case 1: return { border: 'hover:border-[#8D7794]/50 border-l-4 border-l-[#8D7794]', icon: 'bg-[#E8E6F0] text-[#8D7794] group-hover:bg-[#8D7794]' };
                case 2: return { border: 'hover:border-[#A187AC]/50 border-l-4 border-l-[#A187AC]', icon: 'bg-[#E8E6F0] text-[#A187AC] group-hover:bg-[#A187AC]' };
                case 3: return { border: 'hover:border-[#B39CB5]/50 border-l-4 border-l-[#B39CB5]', icon: 'bg-[#E8E6F0] text-[#B39CB5] group-hover:bg-[#B39CB5]' };
                case 4: return { border: 'hover:border-[#DACBE8]/50 border-l-4 border-l-[#DACBE8]', icon: 'bg-[#E8E6F0] text-[#A187AC] group-hover:bg-[#A187AC]' };
                case 5: return { border: 'hover:border-[#F0DAE1]/50 border-l-4 border-l-[#F0DAE1]', icon: 'bg-[#F0DAE1] text-[#B39CB5] group-hover:bg-[#B39CB5]' };
                case 6: return { border: 'hover:border-[#D7CCE6]/50 border-l-4 border-l-[#D7CCE6]', icon: 'bg-[#E8E6F0] text-[#8D7794] group-hover:bg-[#8D7794]' };
                case 7: return { border: 'hover:border-[#E8E6F0]/50 border-l-4 border-l-[#E8E6F0]', icon: 'bg-[#E8E6F0] text-[#A187AC] group-hover:bg-[#A187AC]' };
                default: return { border: 'hover:border-[#8D7794]/50 border-l-4 border-l-[#8D7794]', icon: 'bg-[#E8E6F0] text-[#8D7794] group-hover:bg-[#8D7794]' };
              }
            };
            
            const colors = getColors(item.id);

            return (
              <div key={item.id} className={`bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 group flex items-start gap-4 ${colors.border}`}>
                <div className={`p-3 rounded-xl transition-colors duration-300 group-hover:text-white ${colors.icon}`}>
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 leading-tight">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
