import { db } from "../database/database.connection.js";
import bcrypt from "bcrypt";

export async function signUpValidate(req, res, next) {
  const { email, password, confirmPassword } = req.body;

  const userExist = await db.query(`SELECT * FROM users WHERE email = $1;`, [
    email,
  ]);

  if (userExist.rowCount) return res.status(409).send("usuario já existe");

  if (password !== confirmPassword) {
    return res.status(422).send("as senhas são diferentes");
  }

  res.locals.user = { email, password };
  next();
}

export async function loginValidate(req, res, next) {
  const { email, password } = req.body;

  const userExist = await db.query(`SELECT * FROM users WHERE email = $1;`, [
    email,
  ]);

  if (!userExist.rowCount) {
    return res.status(401).send("Usuário não cadastrado");
  }

  if (!bcrypt.compareSync(password, userExist.rows[0].password)) {
    return res.status(401).send("Senha Incorreta");
  }

  res.locals.user = userExist.rows[0];
  next();
}
