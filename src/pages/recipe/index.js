import RecipeTags from '../recipe/components/recipeTags';
import IngredientTags from '../recipe/components/ingredientTags';
import TableBtn from '../../components/tableBtn';

const RecipeList = () => {

  const data = [
    {
      title: '檸檬塔',
      price: '80',
      tags: ['lemon', 'cake'],
      ingredients: ['sugar', 'lemon'],
      image: 'https://fakeimg.pl/180x130/'
    },
    {
      title: '肉桂捲',
      price: '200',
      tags: ['cinara', 'dessert'],
      ingredients: ['sugar', 'cinara'],
      image: 'https://fakeimg.pl/180x130/'
    },
  ];

  return (
    <div className="max-w-2/4">
      <header>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 content-title">
          <h1 className="text-center">Recipe</h1>
        </div>
      </header>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">#</th>
              <th scope="row" className="px-6 py-3">title</th>
              <th scope="row" className="px-6 py-3">price</th>
              <th scope="row" className="px-6 py-3">tags</th>
              <th scope="row" className="px-6 py-3">ingredients</th>
              <th scope="row" className="px-6 py-3">image</th>
              <th scope="row" className="px-6 py-3">action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr className="text-center border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</td>
                  <td className="px-6 py-4">{item.title}</td>
                  <td className="px-6 py-4">$ {item.price}</td>
                  <td className="px-6 py-4">
                    <div className='flex justify-center items-center'>
                      {item.tags.map((tag) => {
                        return (
                          <RecipeTags name={tag} />
                        )
                      })}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className='flex justify-center items-center'>
                      {item.ingredients.map((element) => {
                        return (
                          <IngredientTags name={element} />
                        )
                      })}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center items-center">
                      <img src={item.image} alt={item.title} />
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <TableBtn title="edit" status="success" />
                      <TableBtn title="delete" status="error" />
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecipeList;
