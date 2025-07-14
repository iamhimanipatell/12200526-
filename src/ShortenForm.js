import React, { useState } from "react";
import { createShortUrl } from "./controller/urlController";
import { Log } from "./logger";

export default function ShortenForm() {
  const [url, setUrl] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [validity, setValidity] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newUrl = await createShortUrl(url, customCode, validity);
      setShortUrl(newUrl);
    } catch (err) {
      alert(err.message);
      await Log("frontend", "error", "ShortenForm", `Error in handleSubmit: ${err.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter long URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="input"
        required
      />
      <input
        type="text"
        placeholder="Custom shortcode (optional)"
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)}
        className="input"
      />
      <input
        type="number"
        placeholder="Validity in minutes (optional)"
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
        className="input"
      />
      <button type="submit" className="button">
        Shorten
      </button>
      {shortUrl && (
        <p className="short-url">
          Shortened URL: <a href={shortUrl}>{shortUrl}</a>
        </p>
      )}
    </form>
  );
}
