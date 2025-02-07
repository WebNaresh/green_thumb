import { MongoClient } from "mongodb"
import { NextResponse } from "next/server"

const uri = process.env.MONGODB_URI
if (!uri) {
    throw new Error("MONGODB_URI is not defined")
}
const client = new MongoClient(uri)

export async function GET() {
    try {
        await client.connect()
        const database = client.db("green_thumb_donations")
        const donations = database.collection("donations")

        const donorData = await donations.find({}).toArray()

        return NextResponse.json(donorData)
    } catch (error) {
        console.error("Failed to fetch donor data:", error)
        return NextResponse.json({ error: "Failed to fetch donor data" }, { status: 500 })
    } finally {
        await client.close()
    }
}

