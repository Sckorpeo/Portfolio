import Image from "next/image";

const ProjectCard = ({ altText, image, desc, title, viewLink, codeLink }) => {
  return (
    <div className='text-center shadow-xl p-10 rounded-xl basis-1/3 flex-1'>
      <div>
        <Image src={image} alt={altText} />
        <h4 className='text-lg pt-8'>{title}</h4>
      </div>
      <div className='py-6'>{desc}</div>
      <div className='flex justify-center gap-10'>
        <a
          className='hover:bg-gradient-to-r hover:from-greenish-400 hover:to-teal-500 hover:text-white px-4 py-2 rounded-md ml-8 border-green-100 border-2 hover:border-white'
          href={viewLink}
        >
          View
        </a>
        <a
          className='hover:bg-gradient-to-r hover:from-greenish-400 hover:to-teal-500 hover:text-white px-4 py-2 rounded-md ml-8 border-green-100 border-2 hover:border-white'
          href={codeLink}
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
