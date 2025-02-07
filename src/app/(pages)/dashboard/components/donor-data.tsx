import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI is not defined");
}
const client = new MongoClient(uri);

export async function getDonorData() {
  try {
    await client.connect();
    const database = client.db("green_thumb_donations");
    const donations = database.collection("donations");

    const donorData = await donations.find({}).toArray();

    return donorData;
  } catch (error) {
    console.error("Failed to fetch donor data:", error);
    return [];
  } finally {
    await client.close();
  }
}
