import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, RotateCcw } from "lucide-react";
import logo from "../assets/images/Logo_main_light.png";

// ─── Clinic Knowledge Base ──────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are Kara, a friendly and knowledgeable virtual assistant for Karas Veterinary Clinics in Dubai...`;

const Chatbot = () => {
  // ─── State ────────────────────────────────────────────────────────────────────
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true); // حالة إظهار الفقاعة
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "I am Karas Vet assistant. How can I help you today?",
      time: formatTime(),
    },
  ]);
  const [history, setHistory] = useState([]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const API_KEY = import.meta.env.VITE_AI_API_KEY;
  const API_URL = import.meta.env.VITE_AI_API_URL;
  const API_MODEL = import.meta.env.VITE_AI_MODEL;

  const quickReplies = [
    "Book an appointment",
    "JLT clinic hours",
    "Business Bay contact",
    "What services do you offer?",
    "Emergency contact",
  ];

  // ─── Helpers ─────────────────────────────────────────────────────────────────
  function formatTime() {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
      setShowTooltip(false); // إخفاء الفقاعة بمجرد فتح الشات
    }
  }, [isOpen]);

  const newChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "I am Karas Vet assistant. How can I help you today?",
        time: formatTime(),
      },
    ]);
    setHistory([]);
    setInputText("");
  };

  const sendMessage = async (text) => {
    const userText = (text || inputText).trim();
    if (!userText || isTyping) return;

    const newHistoryItem = { role: "user", content: userText };
    setInputText("");
    setMessages((prev) => [
      ...prev,
      { role: "user", content: userText, time: formatTime() },
    ]);
    setIsTyping(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: API_MODEL,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...history,
            newHistoryItem,
          ],
          max_tokens: 512,
          temperature: 0.6,
        }),
      });

      const data = await response.json();
      const reply =
        data?.choices?.[0]?.message?.content?.trim() ||
        "Error generating response.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply, time: formatTime() },
      ]);

      setHistory((prev) => [
        ...prev,
        newHistoryItem,
        { role: "assistant", content: reply },
      ]);
    } catch (err) {
      console.error("API Error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Sorry, I'm having trouble connecting. Call us at **04 575 6 444**.`,
          time: formatTime(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const isArabic = (text) => /[\u0600-\u06FF]/.test(text);

  const formatMessage = (raw) => {
    return raw.split("\n").map((line, i) => {
      if (!line.trim()) return <div key={i} className="h-2" />;
      let content = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      return (
        <p
          key={i}
          className="mb-1"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      );
    });
  };

  return (
    <div className="fixed bottom-7 right-3 sm:right-7 z-[9999] font-sans flex flex-col items-end">
      {/* ─── Tooltip Bubble (The "Ask Chat" Message) ─── */}
      {!isOpen && showTooltip && (
        <div className="relative mb-4 animate-bounce">
          <div className="bg-[var(--karas_aubergine)] text-white text-sm font-medium py-2 px-4 rounded-xl shadow-xl flex items-center gap-2 pr-8">
            <span>Ask Kara anything!</span>
            {/* Close Tooltip Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="absolute right-2 text-white/70 hover:text-white transition-colors"
            >
              <X size={14} />
            </button>
          </div>
          {/* Triangle Pointer */}
          <div className="absolute -bottom-1 right-6 w-3 h-3 bg-[var(--karas_aubergine)] rotate-45"></div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 max-w-[90vw] w-[480px] max-h-[580px] h-[70vh] bg-[#FAFAF8] rounded-[20px] shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-[var(--karas_aubergine)] p-4 flex justify-between items-center shadow-lg">
            <img
              src={logo}
              alt="Logo"
              className="h-8 sm:h-9 w-auto brightness-110"
            />
            <div className="flex items-center gap-2">
              <button
                onClick={newChat}
                className="cursor-pointer bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-1.5 px-3 rounded-full transition-all flex items-center gap-1"
              >
                <RotateCcw size={12} /> New Chat
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-white hover:bg-white/20 p-1 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-purple-100">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "flex-row-reverse" : "flex-row"} items-end gap-2`}
              >
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-[var(--karas_aubergine)] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                    K
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-[18px] text-sm leading-relaxed shadow-sm ${
                    msg.role === "user"
                      ? "bg-[var(--karas_aubergine)] text-white rounded-br-none"
                      : "bg-white text-purple-900 rounded-bl-none"
                  } break-words overflow-wrap-anywhere whitespace-pre-wrap`}
                  dir={isArabic(msg.content) ? "rtl" : "ltr"}
                >
                  <div className="msg-content">
                    {formatMessage(msg.content)}
                  </div>
                  <span className="block text-[10px] opacity-50 mt-1 text-right">
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center animate-pulse">
                  <div className="flex gap-1">
                    <span className="w-1 h-1 bg-[var(--karas_aubergine)] rounded-full animate-bounce"></span>
                    <span className="w-1 h-1 bg-[var(--karas_aubergine)] rounded-full animate-bounce delay-75"></span>
                    <span className="w-1 h-1 bg-[var(--karas_aubergine)] rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 1 && (
            <div className="p-3 flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => sendMessage(reply)}
                  className="bg-white border border-purple-200 text-[var(--karas_aubergine)] text-xs font-semibold py-1.5 px-3 rounded-full hover:bg-[var(--karas_aubergine)] hover:text-white transition-all shadow-sm"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-purple-50 flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 bg-gray-50 border border-purple-100 rounded-full py-2 px-4 text-sm focus:outline-none focus:border-[var(--karas_aubergine)]"
            />
            <button
              onClick={() => sendMessage()}
              disabled={!inputText.trim() || isTyping}
              className="bg-[var(--karas_aubergine)] p-2.5 rounded-full text-white shadow-md hover:scale-110 disabled:opacity-30 disabled:hover:scale-100 transition-all"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer w-[60px] h-[60px] rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform hover:scale-110 relative ${
          isOpen
            ? "bg-[var(--karas_aubergine)] rotate-90"
            : "bg-[var(--karas_aubergine)]"
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        {!isOpen && (
          <>
            {/* الموجة الأولى */}
            <span className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-25"></span>

            {/* الموجة الثانية - مع تأخير 300 مللي ثانية */}
            <span className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-25 [animation-delay:300ms]"></span>
            <span className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-25 [animation-delay:600ms]"></span>
          </>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
