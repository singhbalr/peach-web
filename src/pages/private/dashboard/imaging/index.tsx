import React from 'react';
import {IndexHeader} from '../../../../../components/layouts/Header';
import MainMenu from '../../../../../components/menu/MainMenu';
import ButtonNew from 'components/button/BtnNew';

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
            <ButtonNew />
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
