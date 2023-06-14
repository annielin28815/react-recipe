const IngredientTags = ({ name, status }) => {

  return (
    <div className="flex bg-brown-100 text-brown-500 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-brown-100 dark:text-brown-400 border border-brown-400">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
      </svg>
      <span class="ml-1 leading-5">{name}</span>
    </div>
  );
};

export default IngredientTags;