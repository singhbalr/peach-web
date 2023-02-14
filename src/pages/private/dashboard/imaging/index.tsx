import React from 'react';
import {IndexHeader} from '../../../../../components/layouts/Header';
import MainMenu from '../../../../../components/menu/MainMenu';

interface Props {}

const Dashboard: React.FC<Props> = () => {
  return (
    <div className='flex h-screen'>
      <div className='flex-1 flex flex-col overflow-hidden'>
        <IndexHeader />
      </div>
      
      <div className='flex h-full'>
        <MainMenu />
      </div>
     
      <main className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
        <div className="flex w-full mx-auto px-6 py-8">
          <div className="flex flex-col w-full h-full text-gray-900 text-xl border-gray-900 border-dashed">
            <div className="flex w-full space-x-4 max-w-screen-lg  items-start mx-auto ">
                <p className='font-bold text-lg mt-16'> Imaging </p> 
            </div>
            <div className="flex w-full mt-2 mx-auto ">
            <input
                className="
                rounded-full 
                ring-gray-500
                ring-1 
                py-1
                px-2
                w-1/4 
                placeholder-gray-900
                focus:ring-gray-200
                focus:border-gray-500 
                text-sm
                "  
                placeholder="Search a campaign" 
                type="text"
                id="search"
              />
              <select id="new" className="ml-6 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Select a category</option>
                <option value="old">Oldest</option>
              </select>
              <select id="category" className="ml-2 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Covid 19</option>
                <option value="cv">Head & Neck</option>
                <option value="cv">Upper Abdomen</option>
                <option value="cv">Lower Abdomen</option>
                <option value="cv">Limb</option>
              </select>
              <select id="total" className="ml-2 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>total record</option>
                <option value="US">10</option>
                <option value="CA">25</option>
                <option value="FR">50</option>
                <option value="DE">100</option>
              </select>
            </div>
            <div className="flex w-full space-x-4 max-w-screen-lg  items-start mx-auto ">
                <p className='font-bold text-lg mt-8'> History </p> 
            </div>
          
        
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
