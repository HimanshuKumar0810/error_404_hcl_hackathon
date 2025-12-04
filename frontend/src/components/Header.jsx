export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <div className="bg-gray-800 text-white flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Healthcare Portal</h1>

        <div className="flex gap-6 items-center">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Health Topics</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Contact</a>

          <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
            Login
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className="p-10">

        <h2 className="text-2xl font-semibold mb-6">Latest Health Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white shadow-md p-6 rounded">
            <h3 className="font-semibold text-lg mb-2">Mental Health Awareness</h3>
            <p className="text-gray-600 text-sm">
              Explore resources and support options for maintaining good mental health.
            </p>
            <button className="mt-4 bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700">
              Read More
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md p-6 rounded">
            <h3 className="font-semibold text-lg mb-2">Seasonal Flu Prevention</h3>
            <p className="text-gray-600 text-sm">
              Learn steps you can take to prevent flu and when to get vaccinated.
            </p>
            <button className="mt-4 bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700">
              Read More
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md p-6 rounded">
            <h3 className="font-semibold text-lg mb-2">COVID-19 Updates</h3>
            <p className="text-gray-600 text-sm">
              Stay informed about latest COVID-19 guidelines and vaccination info.
            </p>
            <button className="mt-4 bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700">
              Read More
            </button>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white text-center py-3">
        HCLTech
      </div>

    </div>
  );
}