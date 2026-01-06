const ActionButton = ({ label, className, onClick }) => {
  return (
    <button
      className={`px-3 py-1 text-xs rounded-md ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ActionButton;
