import jsPDF from "jspdf"
import "jspdf-autotable"

export function generateCertificate(name: string, amount: string, paymentId: string) {
    // Create new document
    const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
    })

    // Set background color
    doc.setFillColor(250, 250, 250)
    doc.rect(0, 0, 297, 210, "F")

    // Add decorative border
    doc.setDrawColor(0, 100, 0)
    doc.setLineWidth(1)
    doc.rect(10, 10, 277, 190)
    doc.setLineWidth(0.5)
    doc.rect(15, 15, 267, 180)

    // Add organization logo
    doc.addImage("/logo.png", "PNG", 20, 20, 40, 40)

    // Add certificate title
    doc.setFont("helvetica", "bold")
    doc.setFontSize(36)
    doc.setTextColor(0, 100, 0)
    doc.text("DONATION CERTIFICATE", 148.5, 50, { align: "center" })

    // Add decorative line under title
    doc.setLineWidth(0.5)
    doc.line(74, 55, 223, 55)

    // Add certificate body
    doc.setFont("helvetica", "normal")
    doc.setFontSize(16)
    doc.setTextColor(40, 40, 40)
    doc.text("This is to certify that", 148.5, 80, { align: "center" })

    // Add donor name
    doc.setFont("helvetica", "bold")
    doc.setFontSize(24)
    doc.text(name, 148.5, 95, { align: "center" })

    // Add donation details
    doc.setFont("helvetica", "normal")
    doc.setFontSize(16)
    doc.text("has made a generous donation of", 148.5, 110, { align: "center" })

    // Add donation amount
    doc.setFont("helvetica", "bold")
    doc.setFontSize(24)
    doc.setTextColor(0, 100, 0)
    doc.text(`₹${amount}/-`, 148.5, 125, { align: "center" })

    // Add organization name
    doc.setFont("helvetica", "normal")
    doc.setFontSize(16)
    doc.setTextColor(40, 40, 40)
    doc.text("to Green Thumb Foundation", 148.5, 140, { align: "center" })

    // Add certificate details
    doc.setFontSize(12)
    doc.text(`Certificate No: ${paymentId}`, 20, 170)
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 180)

    // Add footer text
    doc.setFontSize(10)
    doc.text("This donation contributes to our mission of restoring Khadakwasla Dam", 148.5, 185, { align: "center" })
    doc.text("and securing Pune's water future.", 148.5, 190, { align: "center" })

    // Add signature placeholder
    doc.setFont("helvetica", "bold")
    doc.setFontSize(12)
    doc.text("Authorized Signatory", 250, 180, { align: "center" })
    doc.line(220, 175, 280, 175)

    // Add verification text
    doc.setFont("helvetica", "normal")
    doc.setFontSize(8)
    doc.text("This is a computer generated certificate and does not require physical signature.", 148.5, 200, {
        align: "center",
    })

    // Save the PDF
    doc.save(`GreenThumb_Donation_Certificate_${paymentId}.pdf`)
}

