import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import "./App.css";
function App() {
  const [prompt, setPrompt] = useState("");
  const [imageResult, setImageResult] = useState("");
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    setImageResult(res.data.data[0].url);

  };

  return (
    <div className="app-main">
      <h1>Generate Image Using OpenAI API</h1>
      <input
        placeholder="Type something here"
        className="input"
        type="text"
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button className="button" onClick={() => generateImage()}>
        Generate Image
      </button>
      {imageResult.length ? <img src={imageResult} alt="image result" /> : "It may take a few seconds to generate image"}
    </div>
  );
}

export default App;
