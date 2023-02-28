import { db } from "../database/database.connection.js";

export async function userValidate(req, res, next) {
  const { email, password, confirmPassword } = req.body;

  const userExist = await db.query(`SELECT * FROM users WHERE email = $1 ;`, [
    email,
  ]);

  if (userExist.rowCount) return res.status(409).send("usuario já existe");

  if (password !== confirmPassword) {
    return res.status(422).send("as senhas são diferentes");
  }

  next();
}
