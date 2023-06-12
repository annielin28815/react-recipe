
const RecipeList = () => {
  return (
    <div className="max-w-2/4">
      <header>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 content-title">
          <h1 className="text-center">Recipe</h1>
        </div>
      </header>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">#</th>
              <th scope="row" class="px-6 py-3">title</th>
              <th scope="row" class="px-6 py-3">price</th>
              <th scope="row" class="px-6 py-3">tags</th>
              <th scope="row" class="px-6 py-3">ingredients</th>
              <th scope="row" class="px-6 py-3">image</th>
              <th scope="row" class="px-6 py-3">action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</td>
              <td class="px-6 py-4">檸檬塔</td>
              <td class="px-6 py-4">$80</td>
              <td class="px-6 py-4">lemon, cake</td>
              <td class="px-6 py-4">lemon, sugar</td>
              <td class="px-6 py-4"></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecipeList;
