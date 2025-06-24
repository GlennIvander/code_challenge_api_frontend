const Navbar = () => {
  return (
    <div className="bg-white shadow"> 
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="font-bold text-2xl">
            Code Challenges
          </p>
          <div>
            <button className="bg-indigo-500 rounded px-3 py-1.5 my-4">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
