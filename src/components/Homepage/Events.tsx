export default function Events() {
    return (
      <div className="flex justify-center items-center mb-10 py-10 bg-gray-100">
        <div className="bg-white rounded-3xl border-4 border-orange-300 p-6 md:p-10 flex flex-col md:flex-row items-center shadow-lg max-w-5xl">
          <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
            <div className="w-40 h-36 md:w-52  md:h-40 bg-gray-300 rounded-lg"></div>
            <div className="w-36 h-36 md:w-52 md:h-40 bg-gray-300 rounded-lg"></div>
            <div className="w-36 h-36 md:w-52 md:h-40 bg-gray-300 rounded-lg"></div>
            <div className="w-36 h-36 md:w-52 md:h-40 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-10 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900">Events</h2>
            <p className="text-orange-500 font-semibold mt-2">Trending This Week</p>
            <p className="text-gray-700 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard Lorem Ipsum is simply dummy
              text of the printing and typesetting industry.
            </p>
            <p className="text-gray-700 mt-2">Lorem Ipsum has been the industry&apos;s standard</p>
            <button className="mt-4 bg-orange-400 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-orange-500 transition">
              EXPLORE NOW
            </button>
          </div>
        </div>
      </div>
    );
  }