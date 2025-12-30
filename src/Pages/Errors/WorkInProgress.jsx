import { useNavigate } from "react-router-dom";

const WorkInProgress = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">

        <div className="text-4xl mb-4">🚧</div>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Work in Progress
        </h2>

        <p className="text-sm text-gray-500 mb-6">
          This feature is currently under development.  
          We’ll notify you once it’s ready.
        </p>

        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-100"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default WorkInProgress;
