const Nav = () => {
  return (
    <nav className='py-10 mb-8 flex justify-center'>
      <ul className='flex items-center w-[80%] justify-between'>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#stack'>Stack</a>
        </li>
        <li>
          {" "}
          <a href='#portfolio'>Portfolio</a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
