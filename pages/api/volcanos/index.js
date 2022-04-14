//! the link: http://localhost:3000/api/volcanos

import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("volcano");
  const data = await db.collection("main").find({}).toArray();
  const games = JSON.parse(JSON.stringify(data));
  res.status(200).json(games);
}
