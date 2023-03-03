import { db } from "../database/database.connection.js";

export async function validateUser(req, res, next) {
  const token = res.locals.token;

  try {
    const verifyUser = await db.query(`SELECT * FROM users WHERE email = $1;`, [
      token.email,
    ]);

    if (!verifyUser.rowCount) return res.status(401).send("não autorizado");

    res.locals.user = verifyUser.rows[0];

    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
}
