import jwt from 'jsonwebtoken';

// Token generation — used by POST /login
export function generateToken(userId) {
  return jwt.sign({ sub: userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
}

// Token verification middleware
export function requireAuth(req, res, next) {
  const header = req.headers['authorization'];
  if (!header) return res.status(401).json({ error: 'missing authorization header' });

  const token = header.replace('Bearer ', '');
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload.sub;
    next();
  } catch {
    res.status(401).json({ error: 'invalid token' });
  }
}

// BUG: email is accepted without format validation
// Any string passes — "notanemail", "", "a@", etc.
export function validateEmail(email) {
  return email && email.length > 0;
}
