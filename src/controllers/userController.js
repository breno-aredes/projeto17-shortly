import { db } from "../database/database.connection.js";

export async function getProfile(req, res) {
  const user = res.locals.user;

  try {
    const data = await db.query(
      `
        SELECT users.id, users.name,
          SUM(urls.count) as visitCount,
          json_build_object('id', urls.id, 'shortUrl', urls."shortUrl", 'url', urls.url, 'visitCount', urls.count) as shortenedUrls,
        FROM users
        JOIN urls
          ON users.id = urls."userId"
        WHERE urls."userId" = $1 AND users.id = $2 
        GROUP BY users.id;
      `,
      [user.id, user.id]
    );

    res.status(200).send(data.rows[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
