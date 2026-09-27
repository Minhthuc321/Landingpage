/**
 * GOOGLE APPS SCRIPT HƯỚNG DẪN TÍCH HỢP TỰ ĐỘNG THU LEAD VỀ GOOGLE SHEETS & TELEGRAM
 * ---------------------------------------------------------------------------------
 * Hướng dẫn 3 bước cài đặt:
 * 1. Vào Google Sheet của bạn -> Vào "Mở rộng" (Extensions) -> Chọn "Apps Script".
 * 2. Xóa toàn bộ mã cũ và dán toàn bộ đoạn code này vào -> Nhấn Lưu (Ctrl + S).
 * 3. Nhấn "Triển khai" (Deploy) -> "Tạo bản triển khai mới" (New deployment):
 *    - Chọn loại: "Ứng dụng web" (Web App)
 *    - Thực thi dưới danh nghĩa: "Tôi" (Me)
 *    - Ai có quyền truy cập: "Bất kỳ ai" (Anyone) -> Nhấn "Triển khai".
 * 4. Copy URL ứng dụng Web thu được và dán vào biến `GOOGLE_SHEET_SCRIPT_URL` trong file `index.html`.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Đảm bảo tiêu đề cột nếu sheet còn trống
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Thời gian", "Họ và Tên", "Số điện thoại / Zalo", "Nhu cầu dịch vụ", "Số tiền vay dự kiến", "Trạng thái chăm sóc"]);
      sheet.getRange(1, 1, 1, 6).setFontWeight("bold").setBackground("#0f172a").setFontColor("#ffffff");
    }

    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch(err) {
        data = e.parameter;
      }
    } else {
      data = e.parameter;
    }

    var timestamp = Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy HH:mm:ss");
    var fullName = data.fullName || "Khách hàng";
    var phone = data.phone || "Chưa cung cấp";
    var service = data.service || "Tư vấn chung";
    var amount = data.amount || "Chưa nhập";

    // 1. Ghi dữ liệu vào Google Sheet
    sheet.appendRow([timestamp, fullName, phone, service, amount, "Mới đăng ký"]);

    // 2. Gửi thông báo Telegram (Cấu hình tùy chọn)
    var telegramToken = ""; // Nhập Bot Token Telegram (nếu có)
    var telegramChatId = ""; // Nhập Chat ID Telegram (nếu có)

    if (telegramToken && telegramChatId) {
      var message = "🔥 *CÓ KHÁCH HÀNG MỚI ĐĂNG KÝ TƯ VẤN!*\n\n" +
                    "👤 *Họ tên:* " + fullName + "\n" +
                    "📞 *SĐT/Zalo:* " + phone + "\n" +
                    "💼 *Dịch vụ:* " + service + "\n" +
                    "💰 *Khoản vay:* " + amount + "\n" +
                    "⏰ *Thời gian:* " + timestamp;

      var telegramUrl = "https://api.telegram.org/bot" + telegramToken + "/sendMessage";
      var payload = {
        chat_id: telegramChatId,
        text: message,
        parse_mode: "Markdown"
      };

      UrlFetchApp.fetch(telegramUrl, {
        method: "post",
        contentType: "application/json",
        payload: JSON.stringify(payload),
        muteHttpExceptions: true
      });
    }

    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Google Apps Script Web App đang hoạt động bình thường!");
}
