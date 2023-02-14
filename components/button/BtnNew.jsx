import Link from 'next/link'

export default function ButtonNew() {
  return (
    <div className="flex w-full mt-2">
      <input
        className="
          rounded-full 
          ring-gray-500
          ring-1 
          p-1 
          mb-3
          px-3
          w-1/3 
          placeholder-gray-600
          focus:ring-gray-200
          focus:border-gray-500 
          text-sm
          "
        placeholder="Search a campaign"
        type="text"
        id="search"
      />
      <select id="new" className="ml-6 p-1 mb-3 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Newest</option>
        <option value="old">Oldest</option>
      </select>
      <select id="category" className="ml-2 p-1 mb-3 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Covid 19</option>
        <option value="cv">Head & Neck</option>
        <option value="cv">Upper Abdomen</option>
        <option value="cv">Lower Abdomen</option>
        <option value="cv">Limb</option>
      </select>
      <select id="total" className="ml-2 p-1 mb-3 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>total record</option>
        <option value="US">10</option>
        <option value="CA">25</option>
        <option value="FR">50</option>
        <option value="DE">100</option>
      </select>
    </div>
  );
}
