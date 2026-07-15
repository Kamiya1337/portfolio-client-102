import { FolderTree, Search, MessageSquare, Users, PenTool, ShieldCheck, Languages } from 'lucide-react';

export const portfolioData = {
  student: {
    name: "Trần Đỗ Khánh Cẩm ",
    id: "K59",
    major: "Ngôn ngữ Hàn Quốc",
    university: "Trường Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội (ULIS - VNU)",
    bio: "Không gian số lưu trữ và hệ thống hóa toàn bộ thành quả học tập trong suốt học phần. Đây đồng thời là cuốn nhật ký ghi dấu hành trình phát triển năng lực công nghệ, tư duy AI và là nền tảng vững chắc để tự đánh giá sự tiến bộ của bản thân trên con đường học tập tương lai.",
    skills: ["Korean  Language", "Korean  Culture", "Digital Literacy", "AI-assisted Learning", "Academic Research", "Intercultural Communication"]
  },
  overview: [
    { id: 1, title: "Quản lý dữ liệu", desc: "Máy tính, tệp và thư mục", icon: FolderTree },
    { id: 2, title: "Khai thác thông tin", desc: "Tìm kiếm & đánh giá dữ liệu", icon: Search },
    { id: 3, title: "Tư duy AI", desc: "Prompt engineering hiệu quả", icon: MessageSquare },
    { id: 4, title: "Hợp tác trực tuyến", desc: "Làm việc nhóm trong môi trường số", icon: Users },
    { id: 5, title: "Sáng tạo nội dung", desc: "Tạo sản phẩm số với AI", icon: PenTool },
    { id: 6, title: "Liêm chính học thuật", desc: "An toàn số & AI có trách nhiệm", icon: ShieldCheck },
    { id: 7, title: "AI trong học tập ngôn ngữ", desc: "Ứng dụng AI có chọn lọc và trách nhiệm", icon: Languages },
  ],
  projects: [
    {
      id: 1,
      title: "Bài 1: Máy tính và quản lý tệp/thư mục",
      chapter: "Chương 1 & 2",
      shortDesc: "Tổ chức không gian làm việc số và thiết lập quy tắc quản lý dữ liệu cá nhân.",
      skills: ["Quản lý hệ điều hành", "Tổ chức dữ liệu", "Lưu trữ đám mây"],
      target: "Trình bày cấu trúc thư mục tối ưu và quy tắc đặt tên tệp đã thiết lập.",
      process: "Phân tích nhu cầu lưu trữ học tập, thiết lập cây thư mục theo môn học/kỳ học. Áp dụng quy tắc đặt tên file không dấu, dùng gạch dưới để dễ dàng tìm kiếm. Đồng bộ hóa với Google Drive.",
      report: "/docs/bai1.pdf",
      status: "Đang hoàn thiện"
    },
    {
      id: 2,
      title: "Bài 2: Khai thác dữ liệu và đánh giá thông tin",
      chapter: "Chương 2",
      shortDesc: "Áp dụng toán tử tìm kiếm nâng cao và đánh giá nguồn tin học thuật.",
      skills: ["Toán tử tìm kiếm", "Đánh giá CRAAP", "Phân tích tin giả"],
      target: "Trình bày kết quả tìm kiếm học thuật bằng các toán tử nâng cao và bảng đánh giá nguồn tin.",
      process: "Sử dụng Google Scholar kết hợp các toán tử (AND, OR, filetype:pdf) để tìm tài liệu về thiết kế vi mạch. Lọc và đánh giá 3 nguồn tài liệu dựa trên 5 tiêu chí CRAAP (Độ mới, Mức độ phù hợp, Thẩm quyền, Độ chính xác, Mục đích).",
      report: "/docs/bai2.pdf",
      status: "Đang hoàn thiện"
    },
    {
      id: 3,
      title: "Bài 3: Viết prompt hiệu quả và sử dụng AI",
      chapter: "Chương 3",
      shortDesc: "Kỹ thuật giao tiếp với mô hình ngôn ngữ lớn (LLMs).",
      skills: ["Prompt Engineering", "Tư duy phân tích", "Sử dụng GenAI"],
      target: "So sánh giữa Prompt ban đầu và Prompt cải tiến cùng kết quả đầu ra từ AI.",
      process: "Thiết lập cấu trúc prompt bao gồm: Vai trò (Role), Ngữ cảnh (Context), Nhiệm vụ (Task) và Định dạng đầu ra (Format). Thử nghiệm nhờ AI giải thích một khái niệm vật lý bán dẫn và so sánh kết quả trước/sau khi tối ưu prompt.",
      report: "/docs/bai3.pdf",
      status: "Đang hoàn thiện"
    },
    {
      id: 4,
      title: "Bài 4: Hợp tác trực tuyến trong môi trường số",
      chapter: "Chương 4",
      shortDesc: "Sử dụng các nền tảng số để quản lý dự án và làm việc nhóm.",
      skills: ["Quản lý dự án", "Giao tiếp số", "Công cụ hợp tác (Google Workspace/Notion)"],
      target: "Trình bày minh chứng về việc sử dụng công cụ quản lý dự án nhóm và cách phối hợp.",
      process: "Thiết lập không gian làm việc chung. Phân chia task rõ ràng, đặt deadline và theo dõi tiến độ qua bảng Kanban. Tổ chức họp nhóm qua Google Meet và ghi biên bản họp trực tuyến.",
      report: "/docs/bai4.pdf",
      status: "Đang hoàn thiện"
    },
    {
      id: 5,
      title: "Bài 5: Sáng tạo nội dung số với AI",
      chapter: "Chương 5",
      shortDesc: "Tạo ra các sản phẩm truyền thông số có sự hỗ trợ của Trí tuệ nhân tạo.",
      skills: ["Thiết kế số", "Tạo sinh hình ảnh/văn bản", "Công cụ thiết kế AI"],
      target: "Trưng bày sản phẩm nội dung số hoàn thiện được hỗ trợ bởi AI.",
      process: "Lên ý tưởng kịch bản bằng Gemini Pro. Sử dụng các công cụ tạo sinh (Midjourney/D-ALL E hoặc Canva AI) để thiết kế hình ảnh minh họa cho một bài thuyết trình về công nghệ. Tinh chỉnh thiết kế thủ công để đạt độ hoàn thiện cao.",
      report: "/docs/bai5.pdf",
      status: "Đang hoàn thiện"
    },
    {
      id: 6,
      title: "Bài 6: An toàn số, liêm chính học thuật và AI có trách nhiệm",
      chapter: "Chương 6",
      shortDesc: "Hiểu và áp dụng các quy tắc đạo đức khi sử dụng công nghệ và AI.",
      skills: ["Bảo mật thông tin", "Trích dẫn tài liệu", "Đạo đức AI"],
      target: "Trình bày bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm dựa trên các nghiên cứu.",
      process: "Nghiên cứu các quy định về đạo văn và liêm chính. Đúc kết bộ 5 nguyên tắc cá nhân: Luôn kiểm chứng thông tin do AI tạo ra, minh bạch công cụ sử dụng, không dùng AI để thi hộ/làm hộ 100%, bảo vệ dữ liệu cá nhân khi chat với AI, và tôn trọng bản quyền.",
      report: "/docs/bai6.pdf",
      status: "Đang hoàn thiện"
    }
  ],
  rubric: [
    { criteria: "Thiết kế và cấu trúc Portfolio", excellent: "Chuyên nghiệp, sáng tạo, điều hướng tốt, UI/UX hiện đại.", status: "Hoàn thiện 95%", action: "Hoàn thành" },
    { criteria: "Bài 1: Quản lý tệp/thư mục", excellent: "Cấu trúc tối ưu, quy tắc đặt tên rõ ràng, minh họa báo cáo PDF tốt.", status: "Đang kiểm tra", action: "Nộp báo cáo PDF" },
    { criteria: "Bài 2: Tìm kiếm & Đánh giá", excellent: "Bảng đánh giá CRAAP chi tiết, dùng toán tử nâng cao hiệu quả.", status: "Đang viết báo cáo", action: "Nộp báo cáo PDF" },
    { criteria: "Bài 3: Viết Prompt hiệu quả", excellent: "So sánh rõ ràng trước/sau, phân tích lỗi và cải tiến sâu sắc.", status: "Đang biên soạn", action: "Nộp báo cáo PDF" },
    { criteria: "Bài 4: Hợp tác trực tuyến", excellent: "Báo cáo đầy đủ vai trò nhóm, kế hoạch và các biên bản họp.", status: "Đang biên soạn", action: "Nộp báo cáo PDF" },
    { criteria: "Bài 5: Sáng tạo nội dung với AI", excellent: "Báo cáo quá trình lên ý tưởng và sản phẩm thiết kế chất lượng cao.", status: "Đang làm báo cáo", action: "Nộp báo cáo PDF" },
    { criteria: "Bài 6: AI có trách nhiệm", excellent: "Bộ nguyên tắc cá nhân chặt chẽ, tư duy phản biện cao.", status: "Đang làm báo cáo", action: "Nộp báo cáo PDF" },
  ]
};
