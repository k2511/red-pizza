export default function ContactPage() {
  return (
    <div className="py-12 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
        <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-lg"></textarea>
        <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
          Send Message
        </button>
      </form>
    </div>
  );
}
