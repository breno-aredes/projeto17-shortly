import { db } from "../database/database.connection.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function signUp(req, res) {
  const { name } = req.body;
  const { email, password } = res.locals.user;

  const hashPassword = bcrypt.hashSync(password, 10);

  try {
    await db.query(
      `INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`,
      [name, email, hashPassword]
    );

    res.status(201).send("conta criada com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function signIn(req, res) {
  const { email, name, id } = res.locals.user;

  try {
    const token = jwt.sign({ name, email }, process.env.SECRET, {
      expiresIn: "20h",
    });

    return res.status(200).send({ token, name, id });
  } catch (error) {
    res.status(500).send(error.message);
  }
}
