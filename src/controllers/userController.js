import { db } from "../database/database.connection.js";

export async function getProfile(req, res) {
  const user = res.locals.user;

  try {
    const response = await db.query(
      `SELECT 
        users.id, 
        users.name,
        SUM(urls.count) as "visitCount",
        json_agg(
            json_build_object(
                'id', urls.id, 
                'shortUrl', urls."shortUrl", 
                'url', urls."longUrl", 
                'visitCount', urls.count
            )
        ) as "shortenedUrls"
    FROM users
    JOIN urls ON users.id = urls."userId"
    WHERE urls."userId" = $1 AND users.id = $2
    GROUP BY users.id, users.name;`,
      [user.id, user.id]
    );

    res.status(200).send(response.rows[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
