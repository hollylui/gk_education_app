//! the link: http://localhost:3000/api/volcanos/61efff2addb6e3da9cebff92

import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const { _id } = req.query;
  const client = await clientPromise;
  const db = client.db("volcano");
  const data = await db.collection("main").find({}).toArray();
  const games = JSON.parse(JSON.stringify(data));

  const filtered = games.filter((game) => game._id === _id);

  // const db = client.db("volcano");
  // const data = await db.collection("main").findOne({}, { _id });

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(400).json({ message: "Game is not found." });
  }
}
