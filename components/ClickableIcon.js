const ClickableIcon = ({ Icon, text, link }) => {
  return (
    <a href={link} className='group relative inline-block '>
      <Icon />
      <span className="absolute hidden group-hover:flex -left-2 -top-2 -translate-y-full w-15 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
        {text}
      </span>
    </a>
  );
};

export default ClickableIcon;
