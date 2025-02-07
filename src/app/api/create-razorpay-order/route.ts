import { NextResponse } from "next/server"
import Razorpay from "razorpay"

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST(request: Request) {
    const { amount, name, email, mobile, panNumber } = await request.json()

    if (!amount || isNaN(amount)) {
        return NextResponse.json({ message: "Invalid amount" }, { status: 400 })
    }

    try {
        const order = await razorpay.orders.create({
            amount,
            currency: "INR",
            receipt: "order_" + Date.now(),
            notes: {
                name,
                email,
                mobile,
                panNumber,
            },
        })

        return NextResponse.json(order)
    } catch (error) {
        console.error("Razorpay order creation failed:", error)
        return NextResponse.json({ message: "Failed to create order" }, { status: 500 })
    }
}

