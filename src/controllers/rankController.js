import { db } from "../database/database.connection.js";

export async function ranking(req, res) {
  try {
    const rank = await db.query(`
    SELECT users.id, users.name, count(*) as "linksCount",
    SUM(urls.count) as "visitCount"
    FROM urls
    JOIN users ON urls."userId" = users.id
    GROUP BY users.id
    ORDER BY "visitCount" DESC
    LIMIT 10;
  `);
    res.status(200).send(rank.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
