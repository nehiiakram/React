function Contact() {
  return (
    <section className="bg-gray-50 min-h-[80vh] py-16">

      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest text-amber-600 uppercase">
            Get In Touch
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            Contact Us
          </h1>

          <p className="text-gray-500 mt-3">
            Have any questions? We'd love to hear from you.
          </p>
        </div>


        {/* Contact Box */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Info */}
          <div className="bg-gray-900 text-white rounded-2xl p-8">

            <h2 className="text-2xl font-bold">
              Let's Talk
            </h2>

            <p className="text-gray-400 mt-3 leading-6">
              Feel free to contact us for any questions about
              our products or collections.
            </p>

            <div className="mt-8 space-y-5">

              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="mt-1">stylehub@gmail.com</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="mt-1">+92 300 1234567</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="mt-1">Karachi, Pakistan</p>
              </div>

            </div>

          </div>


          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">

            <form className="space-y-5">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-amber-500"
                />
              </div>


              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-amber-500"
                />
              </div>


              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>

                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-amber-500"
                ></textarea>
              </div>


              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-amber-600 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;