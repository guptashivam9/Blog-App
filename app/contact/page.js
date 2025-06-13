import ContactForm from "../components/ContactForm"


export const dynamic = "force-dynamic"

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h1>
        <p className="text-lg text-gray-600">Have a question or want to collaborate? I'd love to hear from you!</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
        <ContactForm />
      </div>
    </div>
  )
}
