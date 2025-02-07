import { MongoClient, ServerApiVersion } from "mongodb"
import { NextResponse } from "next/server"

const uri = process.env.MONGODB_URI

if (!uri) {
    throw new Error("Please add your Mongo URI to .env.local")
}

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
})

export async function POST(request: Request) {
    try {
        await client.connect()
        const { paymentId, orderId, amount, name, email, mobile, panNumber } = await request.json()

        const database = client.db("green_thumb_donations")
        const donations = database.collection("donations")

        const result = await donations.insertOne({
            paymentId,
            orderId,
            amount,
            name,
            email,
            mobile,
            panNumber,
            timestamp: new Date(),
        })

        return NextResponse.json({ success: true, id: result.insertedId })
    } catch (error) {
        console.error("Failed to store donation:", error)
        return NextResponse.json({ error: "Failed to store donation" }, { status: 500 })
    } finally {
        await client.close()
    }
}

