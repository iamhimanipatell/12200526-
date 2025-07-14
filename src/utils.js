export function generateCode(length = 6) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

export function isValidShortcode(code) {
  return /^[a-zA-Z0-9]{3,10}$/.test(code);
}

export function logEvent(message) {
  // Replace this with your custom logging middleware call
  console.debug("[CustomLogger]", message);
}

// Export shared maps (simulate DB or cache)
export const urlMap = new Map();
export const statsMap = new Map();
