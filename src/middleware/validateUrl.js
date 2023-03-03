import { db } from "../database/database.connection.js";

export async function validateUrl(req, res, next) {
  const token = res.locals.token;

  try {
    const verifyUser = await db.query(
      `SELECT * FROM users WHERE email = $1 ;`,
      [token.email]
    );

    if (!verifyUser.rowCount) return res.status(401).send("não autorizado");

    res.locals.user = verifyUser.rows[0];

    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function validateUrlById(req, res, next) {
  const { id } = req.params;

  try {
    const verifyUrlId = await db.query(`SELECT * FROM urls WHERE id = $1`, [
      id,
    ]);

    if (!verifyUrlId.rowCount) {
      return res.status(404).send("url não encontrada");
    }

    res.locals.url = verifyUrlId.rows[0];

    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function validateOpenUrl(req, res, next) {
  const { shortUrl } = req.params;

  try {
    const verifyUrl = await db.query(
      `SELECT * FROM urls WHERE "shortUrl" = $1`,
      [shortUrl]
    );

    if (!verifyUrl.rowCount) return res.status(404).send("Url não existe");

    res.locals.url = verifyUrl.rows[0];

    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function validateToDelete(req, res, next) {
  const urlId = req.params.id;
  const userId = res.locals.user.id;

  try {
    const verifyUrlAndUser = await db.query(
      `SELECT * FROM urls WHERE id = $1 and "userId" = $2`,
      [urlId, userId]
    );

    if (!verifyUrlAndUser.rowCount) {
      return res.status(404).send("url não encontrada");
    }

    res.locals.url = verifyUrlAndUser.rows[0];

    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
}
