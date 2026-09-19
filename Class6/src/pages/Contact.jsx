import React, { useState } from 'react'
import Swal from 'sweetalert2'

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })


  // ================= INPUT CHANGE =================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }


  // ================= FORM SUBMIT =================

  const handleSubmit = (e) => {
    e.preventDefault()

    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Thank you for contacting Furnico. We will get back to you soon.',
      confirmButtonText: 'Okay',
      confirmButtonColor: '#d97706',
    })

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }


  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= HERO ================= */}

      <section className="bg-gray-900 text-white px-5 sm:px-8 py-20 sm:py-24">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-amber-500 font-semibold tracking-widest text-sm">
            GET IN TOUCH
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4">
            We'd Love To
            <span className="text-amber-500"> Hear From You.</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
            Have a question about our furniture or need help
            choosing the perfect piece? Our team is here to help.
          </p>

        </div>

      </section>


      {/* ================= CONTACT SECTION ================= */}

      <section className="px-5 sm:px-8 py-16 sm:py-20">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">


          {/* ================= LEFT SIDE ================= */}

          <div>

            <p className="text-amber-600 font-semibold tracking-widest text-sm">
              CONTACT INFORMATION
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Let's Start a Conversation
            </h2>

            <p className="text-gray-600 leading-7 mt-5 max-w-lg">
              Whether you have a question about our products,
              an order, or anything else, feel free to contact us.
            </p>


            {/* EMAIL */}

            <div className="bg-white rounded-2xl p-5 shadow-sm flex items-start gap-4 mt-8">

              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-xl">
                ✉️
              </div>

              <div>

                <h3 className="font-bold text-gray-900">
                  Email Us
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  hello@furnico.com
                </p>

              </div>

            </div>


            {/* PHONE */}

            <div className="bg-white rounded-2xl p-5 shadow-sm flex items-start gap-4 mt-5">

              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-xl">
                📞
              </div>

              <div>

                <h3 className="font-bold text-gray-900">
                  Call Us
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  +92 300 1234567
                </p>

              </div>

            </div>


            {/* LOCATION */}

            <div className="bg-white rounded-2xl p-5 shadow-sm flex items-start gap-4 mt-5">

              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-xl">
                📍
              </div>

              <div>

                <h3 className="font-bold text-gray-900">
                  Visit Us
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Karachi, Pakistan
                </p>

              </div>

            </div>


            {/* HOURS */}

            <div className="bg-white rounded-2xl p-5 shadow-sm flex items-start gap-4 mt-5">

              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-xl">
                🕒
              </div>

              <div>

                <h3 className="font-bold text-gray-900">
                  Opening Hours
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Monday - Saturday · 10:00 AM - 8:00 PM
                </p>

              </div>

            </div>

          </div>


          {/* ================= RIGHT SIDE FORM ================= */}

          <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8 lg:p-10">

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Send Us a Message
            </h2>

            <p className="text-gray-500 mt-2">
              Fill out the form and we'll get back to you.
            </p>


            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* NAME */}

              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-amber-500 transition"
                />

              </div>


              {/* EMAIL */}

              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-amber-500 transition"
                />

              </div>


              {/* SUBJECT */}

              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is your message about?"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-amber-500 transition"
                />

              </div>


              {/* MESSAGE */}

              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-amber-500 transition resize-none"
                ></textarea>

              </div>


              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-semibold hover:bg-amber-600 transition"
              >
                Send Message →
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* ================= BOTTOM CTA ================= */}

      <section className="px-5 sm:px-8 pb-16">

        <div className="max-w-7xl mx-auto bg-amber-500 rounded-3xl px-6 sm:px-10 py-12 text-center">

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Looking For Something Special?
          </h2>

          <p className="text-gray-800 mt-3 max-w-xl mx-auto">
            Explore our collection and find furniture that
            perfectly matches your space.
          </p>

          <button
            onClick={() => {
              window.location.href = '/products'
            }}
            className="inline-block mt-7 bg-gray-900 text-white px-7 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Browse Products
          </button>

        </div>

      </section>

    </div>
  )
}

export default Contact