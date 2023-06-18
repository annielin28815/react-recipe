const RecipeTags = ({ name, status }) => {

  return (
    <div className="flex bg-brown-100 text-brown-500 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-brown-100 dark:text-brown-400 border border-brown-400">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#846358" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
      <span className="ml-1 leading-5">{name}</span>
    </div>
  );
};

export default RecipeTags;