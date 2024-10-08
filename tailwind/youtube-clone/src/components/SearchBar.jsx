export function SearchBar() {
    return (
      <div className="flex items-center justify-center w-full pt-1 pb-3">
        <input
          type="text"
          placeholder="Search"
          className="w-96 h-10 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="h-10 px-4 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M16 11a5 5 0 11-10 0 5 5 0 0110 0z"
            />
          </svg>
        </button>
      </div>
    );
  }
  