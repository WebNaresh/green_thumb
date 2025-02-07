import jsPDF from "jspdf"
import "jspdf-autotable"

export function generateCertificate(name: string, amount: string, paymentId: string) {
    const doc = new jsPDF()

    // Add Green Thumb Foundation logo
    // Note: Uncomment the following line and replace with the correct path to your logo
    // doc.addImage("/images/logo.png", "PNG", 10, 10, 50, 50)

    // Set font and color
    doc.setFont("helvetica")
    doc.setTextColor(0, 100, 0)

    // Add title
    doc.setFontSize(22)
    doc.text("Donation Certificate", 105, 30, { align: "center" })

    // Add content
    doc.setFontSize(12)
    doc.setTextColor(0, 0, 0)
    doc.text(`This is to certify that ${name} has made a generous donation`, 20, 50)
    doc.text(`of ₹${amount} to Green Thumb Foundation.of ₹${amount} to Green Thumb Foundation.`, 20, 60)
    doc.text(`Donation ID: ${paymentId}`, 20, 70)
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 80)

    // Add footer
    doc.setFontSize(10)
    doc.text("Thank you for supporting our mission to restore Khadakwasla Dam", 105, 120, { align: "center" })
    doc.text("and secure Pune's water future.", 105, 126, { align: "center" })

    // Save the PDF
    doc.save(`GreenThumb_Donation_Certificate_${paymentId}.pdf`)
}

