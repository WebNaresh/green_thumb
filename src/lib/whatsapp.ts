export function formatWhatsAppMessage(data: {
    fullName: string
    email: string
    phone: string
    address: string
    availability: string
    skills: string
    motivation: string
}) {
    return `
  *New Volunteer Registration*
  
  *Name:* ${data.fullName}
  *Email:* ${data.email}
  *Phone:* ${data.phone}
  *Address:* ${data.address}
  *Availability:* ${data.availability}
  *Skills:* ${data.skills}
  *Motivation:* ${data.motivation}
    `.trim()
}

export function getWhatsAppUrl(phoneNumber: string, message: string) {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}

