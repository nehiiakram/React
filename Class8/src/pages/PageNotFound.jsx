import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section className="min-h-[70vh] bg-gray-50 flex items-center justify-center">

      <div className="text-center px-6">

        <h1 className="text-7xl font-bold text-gray-900">
          404
        </h1>

        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-3">
          Sorry, the page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-7 bg-gray-900 text-white px-7 py-3 rounded-lg hover:bg-amber-600 transition"
        >
          Go Home
        </Link>

      </div>

    </section>
  );
}

export default PageNotFound;