const TableBtn = ({ title, status }) => {

  let textColor = '';
  let bgColor = '';
  let fixClass = 'hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';

  if(status === 'success'){
    textColor = '#2f6695';
    bgColor = 'bg-blue-100 ';
  }else if(status === 'error'){
    textColor = '#d9274f';
    bgColor = 'bg-red-100 ';
  }

  return (
    <button type="button" className={bgColor + fixClass}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={textColor} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
      <span className="sr-only">{title}</span>
    </button>
  );
};

export default TableBtn;