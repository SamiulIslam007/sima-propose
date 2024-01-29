function Nav() {
  return (
    <>
      <div className="bg-gray-100 py-4 flex flex-col md:flex-row justify-between items-center px-10">
        <div className="text-red-500 text-3xl">
          <a href="">Sima</a>
        </div>
        <ul className="text-violet-400 font-semibold text-xl flex flex-col md:flex-row md:space-x-6 ">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Husband</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
