import { db } from "../database/database.connection.js";
import { nanoid } from "nanoid";

export async function shortenUrl(req, res) {
  const { url } = req.body;
  const user = res.locals.user;

  const shortUrl = nanoid(10);

  try {
    await db.query(
      'INSERT INTO urls ("longUrl", "shortUrl", "userId") VALUES ($1, $2, $3);',
      [url, shortUrl, user.id]
    );

    const result = await db.query(`SELECT * FROM urls WHERE "shortUrl" = $1;`, [
      shortUrl,
    ]);

    const { id } = result.rows[0];

    res.status(201).send({ id, shortUrl });
  } catch (error) {
    res.status(500).send(error.message);
  }
}
