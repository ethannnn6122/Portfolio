import React, { useRef, useState, useEffect } from "react";
import styles from "./PortfolioChat.module.css";

// Config
const BACKEND_URL = import.meta.env.VITE_CHATBOT_API_URL;

const PortfolioChat: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "assistant", content: "Hello! Ask me anything about Ethan's portfolio."}
    ]);
    const [input, setInput] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        if (isOpen && messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isOpen]);

    const handleSend = async (): Promise<void> => {
        if (!input.trim() || isLoading) return;

        const userQuestion = input;
        setInput("");
        setIsLoading(true);

        setMessages(prev => [...prev, { role: "user", content: userQuestion }]);
        setMessages(prev => [...prev, { role: "assistant", content: "" }]);

        try {
            const response = await fetch(BACKEND_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query: userQuestion }),
            });
            if (!response.body) throw new Error("No response body");

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let fullReply = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                const chunk = decoder.decode(value, { stream: true });
                fullReply += chunk;

                setMessages(prev => {
                    const updated = [...prev];
                    updated[updated.length - 1].content = fullReply;
                    return updated;
                });
            }
        } catch (err) {
            console.error(err);
            setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1].content = "Sorry, I couldn't connect to the server.";
                return updated;
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.widgetContainer}>
            {/* The Chat Window (Only visible when open) */}
            <div className={`${styles.chatWindow} ${isOpen ? styles.open : ''}`}>
                <div className={styles.header}>
                    <h3>Portfolio Assistant</h3>
                    <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>&times;</button>
                </div>
                
                <div className={styles.messagesArea}>
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`${styles.message} ${msg.role === 'user' ? styles.userMessage : styles.botMessage}`}>
                            {msg.content}
                        </div>
                    ))}
                    {isLoading && !messages[messages.length-1].content && (
                        <div className={styles.message}>Thinking...</div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className={styles.inputArea}>
                    <input
                        className={styles.input}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask a question..."
                        disabled={isLoading}
                    />
                    <button 
                        className={styles.sendButton} 
                        onClick={handleSend}
                        disabled={isLoading}
                    >
                        <i className="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>

            {/* The Floating Toggle Button */}
            <button 
                className={`${styles.floatingBtn} ${isOpen ? styles.hidden : ''}`}
                onClick={() => setIsOpen(true)}
                aria-label="Open Chat"
            >
                <i className="fas fa-comment-dots"></i>
            </button>
        </div>
    );
};

export default PortfolioChat;