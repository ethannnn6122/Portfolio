import React, { useEffect, useRef, useState } from "react";
import styles from "../PortfolioChat.module.css";

// Config
const BACKEND_URL = "https://api.milehighcoding.com/chat";

const PortfolioChat: React.FC = () => {
	const [messages, setMessages] = useState([
		{ role: "assistant", content: "Hello! Ask me anything about Ethan's portfolio."}
	]);
	const [input, setInput] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const messagesEndRef = useRef<HTMLDivElement>(null);

	const handleSend = async (): Promise<void> => {
		if (!input.trim() || isLoading) return;

		const userQuestion = input;
		setInput("");
		setIsLoading(true);

		setMessages(prev => [...prev, { role: "user", content: userQuestion }]);
		setMessages(prev => [...prev, { role: "assistant", content: "" }]);

		try {
			// Fetch context from backend
			const response = await fetch(BACKEND_URL, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ query: userQuestion }),
			});
			if (!response.body) throw new Error("No response body");

      // 3. Handle the Stream
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullReply = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        fullReply += chunk;

        // Update the last message (the bot placeholder)
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
    <div className={styles.chatContainer}>
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
      {/* Input Area */}
      <div className={styles.inputArea}>
        <input
          className={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about Ethan's skills..."
          disabled={isLoading}
        />
        <button 
          className={styles.button} 
          onClick={handleSend}
          disabled={isLoading}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default PortfolioChat;