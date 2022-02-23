import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("kids-game");
  const data = await db.collection("questions").find({}).toArray();
  const questions = JSON.parse(JSON.stringify(data));
  res.status(200).json(questions);
}
