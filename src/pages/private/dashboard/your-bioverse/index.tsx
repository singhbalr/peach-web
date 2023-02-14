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
        title={<h4>Covid-19</h4>}
        isVisible={isModalVisible}
        onClose={() => {
          setIsModalVisible(false);
        }}>
          <div>
            <p>Summary about the campaign here</p>
          </div>
      
          <div>
            <label htmlFor="">Campaign Description</label>
            <p>Description</p>
          </div>
          <div>
            <label htmlFor="">number of data Description</label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number"  
              />
          </div>
      
        <button  className="bg-white outline outline-1 outline-gray-400 hover:bg-gray-700 font-bold py-2 px-3 rounded-full btn " 
              type="submit" >Create</button>
        <button  className="bg-white outline outline-1 outline-gray-400 hover:bg-gray-700 font-bold py-2 px-3 rounded-full btn " 
              type="submit" >Cancel</button>
      </ReactplosiveModal>
    </div>
  );
};

export default Dashboard;
