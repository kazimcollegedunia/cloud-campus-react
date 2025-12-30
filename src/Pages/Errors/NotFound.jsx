import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">

        <h1 className="text-6xl font-bold text-gray-300 mb-2">
          404
        </h1>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Page not found
        </h2>

        <p className="text-sm text-gray-500 mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
        >
          Go back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default NotFound;
