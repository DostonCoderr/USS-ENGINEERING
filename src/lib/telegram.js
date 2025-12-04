// src/lib/telegram.js → TELEGRAMDA DAXSHAT DARAJASIDA CHIROYLI XABAR!

const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

export const sendToTelegram = async (data) => {
  const { name, phone, message, file } = data;

  const now = new Date();
  const time = now.toLocaleString("uz-UZ", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // 👇 YANGILANGAN CAPTION: Emojilar va kuchliroq formatlash
  const caption = `
🚨🚨🚨 <b>YANGI ZARUR ZAYAVKA!</b> 🚨🚨🚨
---
✨ <b>USS ENGINEERING</b> Saytidan kelgan
---
<b>Mijoz ma'lumotlari:</b>
━━━━━━━━━━━━━━━━━━━━━
👤 Ismi: <b>${escapeHtml(name)}</b>
📞 Telefon: <b><a href="tel:${phone}">${phone}</a></b>
📝 Xabar: <i>${message ? escapeHtml(message) : "—"}</i>
🕰️ Vaqt: <code>${time}</code>
━━━━━━━━━━━━━━━━━━━━━

🔴 <b>DIQQAT! Tezda bog'lanish lozim!</b> 🚀
`.trim();

  try {
    let response;

    if (file) {
      const formData = new FormData();
      formData.append("chat_id", CHAT_ID);
      formData.append("document", file);
      formData.append("caption", caption);
      formData.append("parse_mode", "HTML");

      response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`, {
        method: "POST",
        body: formData,
      });
    } else {
      response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: caption,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      });
    }

    if (!response.ok) throw new Error("Telegram API xato");

    return { success: true };
  } catch (error) {
    console.error("Telegramga yuborishda xato:", error);
    return { success: false };
  }
};

function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}