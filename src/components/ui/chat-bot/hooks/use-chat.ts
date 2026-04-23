import { useState, useCallback } from "react";

/**
 * Message type representing a single chat message
 * @typedef {Object} Message
 * @property {string} id - Unique identifier for the message (timestamp-based)
 * @property {\"user\" | \"bot\"} role - Indicates whether the message is from user or bot
 * @property {string} text - The message content
 */
export type Message = {
  id: string;
  role: "user" | "bot";
  text: string;
};

/**
 * Custom hook for managing chat state and message handling
 *
 * @param {string} initialMessage - The initial bot message shown when chat opens
 * @param {string} errorMessage - The error message to show when bot response fails
 * @returns {Object} Chat state and handler functions
 * @returns {Message[]} messages - Array of all messages in the conversation
 * @returns {boolean} isLoading - Loading state while waiting for bot response
 * @returns {Function} sendMessage - Async function to send a message and receive bot response
 * @returns {Function} addMessage - Function to manually add a message to the chat
 * @returns {Function} addBotMessage - Convenience function to add a bot message
 *
 * @example
 * const { messages, isLoading, sendMessage } = useChat("Hello!", "Error occurred");\n * await sendMessage("User input", "Bot response");
 */
export function useChat(initialMessage: string, errorMessage: string = "Sorry, something went wrong. Please try again.") {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "bot", text: initialMessage },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = useCallback((role: "user" | "bot", text: string) => {
    const newMsg: Message = {
      id: Date.now().toString(),
      role,
      text,
    };
    setMessages((prev) => [...prev, newMsg]);
    return newMsg;
  }, []);

  const addBotMessage = useCallback((text: string) => {
    return addMessage("bot", text);
  }, [addMessage]);

  const sendMessage = useCallback(
    async (userMessage: string, botResponse: string) => {
      // Validate user input
      if (!userMessage.trim()) return;

      // Add user message to chat history
      addMessage("user", userMessage);
      setIsLoading(true);

      try {
        // TODO: Integrate with Gemini API - Replace this with actual API call
        // Expected integration:
        // const response = await geminiAPI.chat(userMessage);
        // const botResponse = response.text;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        // Add bot response to chat
        addBotMessage(botResponse);
      } catch (error) {
        // Handle errors gracefully
        console.error("Failed to get bot response:", error);
        addBotMessage(errorMessage);
      } finally {
        // Always stop loading state
        setIsLoading(false);
      }
    },
    [addMessage, addBotMessage, errorMessage]
  );

  return { messages, isLoading, sendMessage, addMessage, addBotMessage };
}
