import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { urlMap, statsMap, logEvent } from "./utils";

export default function RedirectPage() {
  const { shortcode } = useParams();

  useEffect(() => {
    const entry = urlMap.get(shortcode);
    if (!entry || Date.now() > entry.expiry) {
      alert("Invalid or expired link");
      return;
    }
    statsMap.set(shortcode, statsMap.get(shortcode) + 1);
    logEvent(`Redirected via: ${shortcode}`);
    window.location.href = entry.url;
  }, [shortcode]);

  return <p>Redirecting...</p>;
}
