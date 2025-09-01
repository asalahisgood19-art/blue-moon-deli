export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-900 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">🌙 Blue Moon Deli</h1>
        <p className="text-sm">Fresh • Local • Delicious</p>
      </header>

      <main className="flex-grow p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Welcome to Blue Moon Deli</h2>
          <p className="text-lg text-gray-700">
            We’re proud to serve Montgomery with handcrafted sandwiches, fresh salads, and hot meals.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Hours</h2>
          <p>Every Day, 7:00 AM – 8:00 PM</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Location</h2>
          <p>📍 2901 Eastern Blvd, Montgomery, Alabama</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>📞 (334) 593-0333</p>
          <p>✉️ slamah22@yahoo.com</p>
        </section>
      </main>

      <footer className="bg-gray-200 text-center py-4">
        <p className="text-gray-700">&copy; {new Date().getFullYear()} Blue Moon Deli. All rights reserved.</p>
      </footer>
    </div>
  )
}
