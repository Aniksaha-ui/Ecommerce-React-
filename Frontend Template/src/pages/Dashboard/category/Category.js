import { useEffect, useState } from "react";
import useApi from "../../../assets/hooks/useApi";

const Category = () => {
  /** dependancy injection */
  const api = useApi();
  /** dependancy injection */

  /**declear state */
  const [page, setPage] = useState(1);
  const [keyWord, setKeyWord] = useState("");
  /**declear state */

  useEffect(() => {
    api.getAllCategory();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        {/* table information */}
        <table className="container mx-auto table">
          {/* head */}
          <caption class="caption-bottom mb-3">
            Fig 1.1 : Category Table
          </caption>
          <caption class="caption-top mb-3">
            <div>
              <label
                for="price"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Search Category
              </label>
              <div class="relative mt-2 rounded-md shadow-sm">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span class="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  class="block w-full mt-3 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Search"
                />
              </div>
            </div>
          </caption>
          <thead>
            <tr className="bg-info">
              <th className="border border-slate-300">SL</th>
              <th className="border border-slate-300">Category Name</th>
              <th className="border border-slate-300">Created by</th>
              <th className="border border-slate-300">Updated By</th>
              <th className="border border-slate-300">Created At</th>
              <th className="border border-slate-300">Updated At</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover">
              <th className="border border-slate-300">1</th>
              <td className="border border-slate-300">Cy Ganderton</td>
              <td className="border border-slate-300">Admin</td>
              <td className="border border-slate-300">Admin</td>
              <td className="border border-slate-300">10-10-2010</td>
              <td className="border border-slate-300">10-12-2010</td>
            </tr>
          </tbody>
        </table>
        {/* table information */}

        {/* pagination  */}
        <nav aria-label="Page navigation example p-3">
          <ul class="inline-flex -space-x-px text-sm">
            <li>
              <p class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Previous
              </p>
            </li>
            <li>
              <p class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                1
              </p>
            </li>
            <li>
              <p class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                2
              </p>
            </li>
            <li>
              <p class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                3
              </p>
            </li>
            <li>
              <p
                href="#"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </p>
            </li>
          </ul>
        </nav>
        {/* pagination  */}
      </div>
    </div>
  );
};

export default Category;
