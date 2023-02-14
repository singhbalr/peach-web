import React, {useState} from 'react';
import {IndexHeader} from '../../../../../components/layouts/Header';
import MainMenu from '../../../../../components/menu/MainMenu';
import ButtonNew from 'components/button/BtnNew';
import ReactplosiveModal from "../../../../../components/clinicalModal";

interface Props {}

const DashboardYourCampaign: React.FC<Props> = () => {
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
                <p className='font-bold text-lg mt-16'> Your campaign </p> 
                <button className='text-xs mt-16 show-modal-button' 
                 onClick={() => setIsModalVisible(!isModalVisible)}
                 type="button"> + create new</button>
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
                ring-1'>
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
        title={<h4>New Campaign</h4>}
        isVisible={isModalVisible}
        onClose={() => {
          setIsModalVisible(false);
        }}>
          <div>
            <label htmlFor="">Type</label>
            <select id="new" className="ml-6 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Select a category</option>
                <option value="old">Oldest</option>
              </select>
          </div>
          <div>
            <label htmlFor="">Campaign title</label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="campaigntitle" type="text"  
              />
          </div>
          <div>
            <label htmlFor="">Campaign Description</label>
            <textarea  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 ark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here...">
                </textarea>
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

export default DashboardYourCampaign;
