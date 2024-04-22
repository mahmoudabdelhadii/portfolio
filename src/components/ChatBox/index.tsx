import React, { useState } from "react";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  // const chatWithGPT3 = async (userInput) => {
  //     const apiEndpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  //     const headers = {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer YOUR_OPENAI_API_KEY`
  //     };

  //     const data = {
  //       prompt: userInput,
  //       max_tokens: 150
  //     };
  // try {
  //       const response = await axios.post(apiEndpoint, data, { headers });
  //       return response.data.choices[0].text.trim();
  //     } catch (error) {
  //       console.error('Error communicating with the API:', error.message);
  //       return '';
  //     }
  //   };
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     if (!input.trim()) return;
  //     const userMessage = { text: input, user: true };
  //     setMessages((prevMessages) => [...prevMessages, userMessage]);
  //     const aiMessage = { text: '...', user: false };
  //     setMessages((prevMessages) => [...prevMessages, aiMessage]);
  //     const response = await chatWithGPT3(input);
  //     const newAiMessage = { text: response, user: false };
  //     setMessages((prevMessages) => [...prevMessages.slice(0, -1), newAiMessage]);
  //     setInput('');
  //   };
  return (
    <div className="max-w-md mx-auto border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-sm">
      <div className="h-96 overflow-y-scroll p-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded text-base leading-6 ${
              true
                ? "bg-blue-500 text-white text-right"
                : "bg-gray-200 text-left"
            }`}
          >
            "hello"
          </div>
        ))}
      </div>
      <form className="mt-4 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border border-gray-300 rounded-l-md text-base"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-700 cursor-pointer"
        >
          Send
        </button>
      </form>
    </div>
  );
};
export default Chatbot;
