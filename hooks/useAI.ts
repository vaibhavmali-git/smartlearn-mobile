import { MOCK_RECOMMENDATIONS } from "@/data/aiRecommendations";
import { useState } from "react";

export function useAI() {
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!inputText.trim()) return;

    setIsTyping(true);
    const query = inputText;
    setInputText("");

    setTimeout(() => {
      setIsTyping(false);
      console.log(`Mock AI processed: ${query}`);
    }, 1500);
  };

  return {
    recommendations: MOCK_RECOMMENDATIONS,
    inputText,
    setInputText,
    handleSend,
    isTyping,
  };
}
