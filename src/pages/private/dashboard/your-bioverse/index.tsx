import React, { useState } from 'react';
import {IndexHeader} from '../../../../../components/layouts/Header';
import MainMenu from '../../../../../components/menu/MainMenu';
import ReactplosiveModal from "../../../../../components/clinicalModal";
import ButtonNew from 'components/button/BtnNew';

interface Props {}

const Dashboard: React.FC<Props> = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
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
                <p className='font-bold text-lg mt-16'> Select a campaign </p> 
            </div>
            <ButtonNew />

            <div className="flex w-full h-32 mt-4 mx-auto">
              <div className='flex w-1/2'> 
                <div className='flex 
                items-left 
                px-10
                py-2
                rounded-lg
                ring-gray-300
                ring-1
                show-modal-button'
                  onClick={() => setIsModalVisible(!isModalVisible)}>
                  <img src="/assets/images/logo.png" alt="Bioverse Logo" className="h-24 mt-2 ml-2" />
                  <div className=' ml-6'>
                    <strong>COVID-19</strong><br/>
                    <span className='text-base'>Campaign Type</span><br/>
                    <span className='text-sm'>explanation about <br/>the campaign here</span>
                  </div>
                </div>
              </div>
              <div className='flex w-1/2'>
                <div className='flex items-left 
                px-10
                py-2
                rounded-lg
                ring-gray-300
                ring-1'>
                  <img src="/assets/images/logo.png" alt="Bioverse Logo" className="h-24 mt-2 ml-2" />
                  <div className=' ml-6'>
                    <strong>COVID-19</strong><br/>
                    <span>Campaign Type</span><br/>
                    <span>explanation about <br/>the campaign here</span>
                  </div>
                </div>
              </div>
            </div>
       
          </div>
        </div>
      </main>

      <ReactplosiveModal
        title={<h4  className='ml-10 w-5/6'>Covid-19</h4>}
        isVisible={isModalVisible}
        onClose={() => {
          setIsModalVisible(false);
        }}>
          <div className='ml-10 w-5/6'>
            <p>Summary about the campaign here</p>
          </div>
      
          <div className='ml-10 w-5/6'>
            <label htmlFor="">Description : </label>
            <p className='text-center mt-12 mb-12'>Campaign Description</p>
          </div>
          <div className='ml-10 w-full'>
            <label>number of data needed :</label>
            <input
                className="shadow ml-2 appearance-none mt-2 border border-gray-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rounded-full type="number"  
              />
          </div>
      
          <button  className="bg-pink-500 mt-6 ml-16 text-white font-bold py-2 px-3 w-1/3 rounded-full btn" 
              type="submit" >Create</button>
        <button  className="bg-white mt-6 ml-4 outline outline-1 outline-pink-500 font-bold py-2 px-3 w-1/3 rounded-full btn" 
              onClick={() => setIsModalVisible(!isModalVisible)} >Cancel</button>
      </ReactplosiveModal>
    </div>
  );
};

export default Dashboard;
