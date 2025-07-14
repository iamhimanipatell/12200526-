import { generateCode, isValidShortcode, urlMap, statsMap } from "../utils";
import { Log } from "../logger";

export async function createShortUrl(url, customCode, validityMinutes) {
  const code = customCode || generateCode();

  if (!isValidShortcode(code)) {
    await Log("frontend", "warn", "Controller", "Invalid shortcode");
    throw new Error("Invalid shortcode");
  }

  if (urlMap.has(code)) {
    await Log("frontend", "warn", "Controller", "Shortcode already exists");
    throw new Error("Shortcode already exists");
  }

  const expiry = Date.now() + (validityMinutes ? validityMinutes * 60000 : 1800000);
  urlMap.set(code, { url, expiry });
  statsMap.set(code, 0);

  await Log("frontend", "info", "Controller", `Created short URL for code: ${code}`);
  return `${window.location.origin}/${code}`;
}

export async function getStatsFor(code) {
  if (!statsMap.has(code)) {
    await Log("frontend", "error", "Controller", `Stats not found for ${code}`);
    throw new Error("Stats not found");
  }

  await Log("frontend", "info", "Controller", `Fetched stats for ${code}`);
  return statsMap.get(code);
}
