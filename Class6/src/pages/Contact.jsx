import React from 'react'

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-16">

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-amber-600 font-semibold">
          GET IN TOUCH
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Contact Us
        </h1>

        <p className="text-gray-600 mt-4">
          Have a question? We'd love to hear from you.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div className="bg-gray-900 text-white rounded-2xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Let's Talk
          </h2>

          <p className="text-gray-300 leading-7 mb-8">
            Whether you have a question about our furniture,
            pricing or anything else, our team is ready to help.
          </p>

          <div className="space-y-5">

            <div>
              <p className="text-amber-500 font-semibold">
                Email
              </p>
              <p className="text-gray-300">
                hello@furnico.com
              </p>
            </div>

            <div>
              <p className="text-amber-500 font-semibold">
                Phone
              </p>
              <p className="text-gray-300">
                +92 300 1234567
              </p>
            </div>

            <div>
              <p className="text-amber-500 font-semibold">
                Address
              </p>
              <p className="text-gray-300">
                Karachi, Pakistan
              </p>
            </div>

          </div>

        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm p-8">

          <form>

            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-amber-500"
              />
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-amber-500"
              />
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-amber-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-amber-600 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default Contact