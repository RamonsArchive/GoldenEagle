export function parseServerActionResponse<T>(response: T) {
    return JSON.parse(JSON.stringify(response));
  }

export const getClientId = (req) => {
  // Try session cookie first
  if (req.cookies.sessionId) {
    return `session:${req.cookies.sessionId}`;
  }
  
  // Fallback to IP + fingerprint
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const userAgent = req.headers['user-agent'] || '';
  const acceptLanguage = req.headers['accept-language'] || '';
  
  return `ip:${crypto.createHash('sha256')
    .update(`${ip}-${userAgent}-${acceptLanguage}`)
    .digest('hex')}`;
};