const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  let token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: 'Token requerido' });

  // Si viene con "Bearer", lo cortamos
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Token inválido' });
    req.user = decoded;
    next();
  });
}

module.exports = authMiddleware;
