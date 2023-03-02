import db from "../database/database.connection.js";

export async function validateUrl(res, req, next) {
  const token = res.locals.token;

  const verifyUser = await db.query(`SELECT * FROM users WHERE email = $1 ;`, [
    token.email,
  ]);

  if (!verifyUser.rowCount) return res.status(401).send("não autorizado");

  res.locals.user = verifyUser.row[0];

  next();
}
