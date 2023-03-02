import { db } from "../database/database.connection.js";

export async function validateUrl(req, res, next) {
  const token = res.locals.token;

  const verifyUser = await db.query(`SELECT * FROM users WHERE email = $1 ;`, [
    token.email,
  ]);

  if (!verifyUser.rowCount) return res.status(401).send("não autorizado");

  res.locals.user = verifyUser.rows[0];

  next();
}
