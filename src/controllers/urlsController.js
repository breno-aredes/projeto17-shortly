import db from "../database/database.connection.js";
import { nanoid } from "nanoid";

export async function shortenUrl(req, res) {
  const { url } = req.body;
  const { user } = res.locals.user;

  const shortUrl = nanoid();

  try {
    const result = await db.query(
      'INSERT INTO urls (url, "shortUrl", "UserId") VALUES ($1, $2, $3);',
      [url, shortUrl, user.id]
    );
    res.status(201).send(result.rows[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
