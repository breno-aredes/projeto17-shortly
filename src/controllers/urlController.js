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

export async function getUrlById(req, res) {
  const { id, shortUrl, longUrl } = res.locals.url;

  try {
    res.status(200).send({ id, shortUrl, url: longUrl });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function openShortUrl(req, res) {
  const { count, shortUrl, longUrl } = res.locals.url;

  try {
    await db.query(`UPDATE urls SET count = $1 WHERE "shortUrl" = $2`, [
      count + 1,
      shortUrl,
    ]);

    res.redirect(longUrl);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function deleteUrl(req, res) {
  const { id } = res.locals.url;

  try {
    await db.query(`DELETE FROM urls WHERE id = $1`, [id]);

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
