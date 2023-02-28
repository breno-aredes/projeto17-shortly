import { db } from "../database/database.connection.js";
import bcrypt from "bcrypt";

export async function createUser(req, res) {
  const { name, email, password } = req.body;

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
