const Button = ({children}) => {
  return (
    <div className="bg-indigo-300 rounded hover:-translate-x-0.5 hover:-translate-y-0.5">
      <button
        type="submit"
        className="w-full bg-indigo-300 text-black hover:-translate-x-1.5 hover:-translate-y-1.5 hover:bg-indigo-600 hover:text-white px-3 py-2 rounded"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
