import jwt from "jsonwebtoken";

export function authToken(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization.replace("Bearer", "");

  if (!token) return res.status(401).send("não autorizado.");

  try {
    const verifyToken = jwt.verify(token, "secret");
    res.locals.token = verifyToken;

    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
}
