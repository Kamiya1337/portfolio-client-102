import { Quote, BookMarked, ShieldCheck } from 'lucide-react';

export default function Summary() {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in pb-10">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold text-slate-850 tracking-tight mb-2">Tổng kết & Suy ngẫm</h2>
        <p className="text-slate-500 text-lg">Nhìn lại hành trình học tập và cam kết phát triển.</p>
      </div>

      <div className="space-y-6">
        {/* Editorial style banner */}
        <div className="bg-gradient-to-br from-[#FAF8FC] to-[#E8E6F0] p-8 rounded-3xl shadow-sm border border-slate-200/80 relative overflow-hidden">
          <Quote className="absolute top-4 right-4 text-slate-200/80 rotate-180" size={80} />
          
          <div className="relative z-10">
            <span className="flex items-center gap-1.5 text-xs text-[#8D7794] font-bold uppercase tracking-wider mb-2">
              <BookMarked size={14} /> Trải nghiệm học tập
            </span>
            <h3 className="text-xl font-extrabold text-slate-800 mb-4">Kiến thức & Kỹ năng đã đạt được</h3>
            <div className="text-slate-700 leading-relaxed text-justify space-y-4 text-sm md:text-base">
              <p>
                Trải qua chuỗi 6 bài tập thực hành của học phần, em đã tích lũy và định hình được một nhãn quan toàn diện hơn về công nghệ số. Không chỉ dừng lại ở việc hiểu sâu về cấu tạo phần cứng hay hệ thống thiết bị ngoại vi, em đã biết cách làm chủ dòng thông tin trên không gian mạng qua các kỹ thuật tìm kiếm và bộ tiêu chí lọc nguồn dữ liệu chuẩn xác. Đặc biệt, việc tiếp cận trí tuệ nhân tạo (AI) đã mở ra góc nhìn thực tế về cả tiềm năng lẫn những giới hạn của công nghệ này, giúp em định vị được cách ứng dụng AI thông minh, đúng mực trong học tập.
              </p>
              <p>
                Về mặt thực hành, em đã tôi luyện được kỹ năng xử lý thông tin nhạy bén từ đa nguồn tài liệu. Sự thay đổi rõ rệt nhất nằm ở khả năng làm việc cùng AI – từ việc thiết kế những câu lệnh (Prompt) có cấu trúc đến việc tối ưu hóa hiệu quả tương tác với máy tính. Bản thân em cũng tự tin hơn khi phối hợp làm việc nhóm trực tuyến trên các nền tảng số và tự tay thiết kế, sáng tạo các sản phẩm đa phương tiện. Hơn hết, tư duy về an toàn dữ liệu và ý thức tôn trọng tác quyền trên không gian số đã trở thành một nguyên tắc bất di dịch của em.
              </p>
              <p className="font-semibold text-slate-850">
                Hành trang tri thức và kỹ năng này chắc chắn không chỉ là kết quả của một môn học, mà sẽ là bệ phóng vững chắc để em tiếp tục nâng cao năng lực học tập và sẵn sàng thích ứng với môi trường làm việc số sau này.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card: Difficulties */}
          <div className="bg-white p-7 rounded-3xl shadow-sm border-t-4 border-t-amber-400 border-x border-b border-slate-200/70 hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></div>
              Khó khăn gặp phải
            </h3>
            <div className="text-slate-600 text-xs md:text-sm leading-relaxed text-justify space-y-3">
              <p>
                Chặng đường xây dựng trang Portfolio và giải quyết 6 bài thực hành đã mang lại cho em không ít thử thách thực tế. Trở ngại đầu tiên chính là việc phải nhanh chóng thích nghi với một loạt công cụ số mới mẻ. Vốn chưa từng có kinh nghiệm thiết lập trang web, tổ chức dữ liệu trực tuyến hay tương tác với các ứng dụng quản trị tiến độ, em đã phải dành rất nhiều giờ tự mày mò, sửa lỗi và làm quen với các thao tác kỹ thuật cơ bản.
              </p>
              <p>
                Thách thức tiếp theo nằm ở việc chắt lọc thông tin giữa một bể kiến thức hỗn loạn trên Internet. Việc đối mặt với những tài liệu trôi nổi, thiếu kiểm chứng đòi hỏi em phải nghiêm túc học hỏi cách triển khai các cú pháp tìm kiếm chuyên sâu, đồng thời rèn luyện sự khắt khe trong việc so sánh đối chiếu và xác thực độ uy tín của nguồn tin trước khi đưa vào bài tập.
              </p>
              <p>
                Bên cạnh đó, việc học cách đối thoại hiệu quả với AI cũng là một bài toán khó. Giai đoạn đầu, do đặt lệnh còn mơ hồ, em chỉ nhận về những câu trả lời chung chung, chưa sát thực tế. Phải qua nhiều lượt tối ưu hóa Prompt và kiên trì thử nghiệm, em mới nắm bắt được cách cụ thể hóa yêu cầu để khai thác tối đa trí tuệ nhân tạo, đồng thời luôn duy trì sự tỉnh táo để đối chứng thông tin, ngăn chặn những lỗi sai do AI tạo sinh.
              </p>
              <p>
                Dẫu vậy, những nút thắt đó lại là cơ hội tuyệt vời để em rèn luyện tinh thần tự học, rèn luyện sự kiên nhẫn khi đối mặt với sự cố công nghệ. Vượt qua được những trở ngại này giúp em trưởng thành hơn, tự tin làm chủ các phương pháp học tập độc lập và linh hoạt giải quyết vấn đề.
              </p>
            </div>
          </div>

          {/* Card: Plans */}
          <div className="bg-white p-7 rounded-3xl shadow-sm border-t-4 border-t-emerald-500 border-x border-b border-slate-200/70 hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></div>
              Kế hoạch hoàn thiện
            </h3>
            <div className="text-slate-600 text-xs md:text-sm leading-relaxed text-justify space-y-3">
              <p>
                Nhìn lại thành quả của Portfolio hiện tại, em ý thức rõ đây mới chỉ là những bước khởi đầu và bản thân cần liên tục nâng cấp các kỹ năng số. Trong thời gian tới, mục tiêu ưu tiên của em là thành thạo hóa các công cụ phục vụ trực tiếp cho học tập và dự án. Em sẽ chủ động nghiên cứu thêm về các ứng dụng quản lý công việc chuyên nghiệp cũng như các phần mềm thiết kế sáng tạo nhằm tối ưu hiệu suất làm việc của mình.
              </p>
              <p>
                Để mài sắc tư duy nghiên cứu, em cam kết duy trì việc tiếp cận các thư viện dữ liệu học thuật chính thống, rèn sắc kỹ năng phân tích phản biện và luôn xác thực thông tin từ gốc. Điều này giúp đảm bảo mọi kết luận hay sản phẩm học tập sau này đều có chiều sâu và đạt độ tin cậy cao.
              </p>
              <p>
                Song song đó, em sẽ tiếp tục khám phá sâu hơn các kỹ thuật Prompt nâng cao để biến AI thành một cộng sự đắc lực trong nghiên cứu. Đi đôi với việc khai thác tài nguyên số, em luôn khắc ghi giới hạn đạo đức và tinh thần liêm chính học thuật, cam kết giữ vững tư duy độc lập và dấu ấn sáng tạo riêng của cá nhân.
              </p>
              <p>
                Với định hướng là một sinh viên ngành Ngôn ngữ Hàn Quốc, em dự định sẽ số hóa quá trình tích lũy chuyên ngành thông qua việc khai thác nguồn tài liệu song ngữ, làm chủ các phần mềm dịch thuật tiên tiến và bước đầu xây dựng các tài liệu giảng dạy số. Đồng thời, rèn luyện kỹ năng điều phối nhóm và quản lý thời gian sẽ là mục tiêu cốt lõi để chuẩn bị sẵn sàng cho các dự án sắp tới.
              </p>
            </div>
          </div>
        </div>

        {/* Commitment Badge Card */}
        <div className="bg-[#251724] text-slate-200 p-8 rounded-3xl shadow-lg mt-8 relative overflow-hidden border border-[#3D283C]">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none">
            <ShieldCheck size={128} />
          </div>
          
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <ShieldCheck className="mx-auto text-[#DACBE8] mb-3" size={36} />
            <h3 className="text-xl font-bold text-white mb-3">Cam kết Liêm chính Học thuật</h3>
            <p className="text-slate-400 text-sm leading-relaxed italic">
              &ldquo;Em xin cam đoan toàn bộ nội dung, báo cáo và sản phẩm được số hóa trong portfolio này hoàn toàn là kết quả từ năng lực thực tế và quá trình nghiêm túc học tập của bản thân. Trí tuệ nhân tạo chỉ đóng vai trò trợ lý hỗ trợ (để gợi ý cấu trúc trình bày, rà soát mã nguồn hoặc đối soát dữ liệu), tuyệt đối không thay thế cho nỗ lực tư duy độc lập. Mọi minh chứng, tiến trình thực hiện tại đây đều đảm bảo tính trung thực, không có sự sao chép, làm giả hay gian lận học thuật.&rdquo;
            </p>
            <div className="mt-5 text-xs text-slate-500 font-medium">
              Trân trọng cảm ơn thầy cô đã dành thời gian đánh giá!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
