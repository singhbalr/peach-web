/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {IndexHeader} from '../../../../../components/layouts/Header';
import MainMenu from '../../../../../components/menu/MainMenu';
import ButtonNew from 'components/button/BtnNew';
import ReactplosiveModal from "../../../../../components/clinicalModal";

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
                <p className='font-bold text-lg mt-16'> Search A Clinical Report </p> 
            </div>
            <ButtonNew />
            <div className="flex w-full space-x-4 max-w-screen-lg  items-start mx-auto ">
                <p className='font-bold text-lg mt-8'> History </p> 
            </div>
            <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="border-b  bg-pink-200">
                        <tr>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            No
                          </th>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Status
                          </th>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Report
                          </th>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Data Requested
                          </th>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Hospital
                          </th>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Date
                          </th>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Waiting fr approval
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Eyes
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            2
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            RS Jiwa
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            23-01-01
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <a href="/private/dashboard/clinical-report/detail">details</a> 
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Waiting fr approval
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Eyes
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            2
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            RS Jiwa
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            23-01-01
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <button className=' show-modal-button' 
                            onClick={() => setIsModalVisible(!isModalVisible)}
                            type="button">request access</button> 
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
           
            
          </div>
        </div>
      </main>
        <ReactplosiveModal
          title={<h4 className='ml-10 w-5/6'>Clinical Report Request</h4>}
          isVisible={isModalVisible}
          onClose={() => {
            setIsModalVisible(false);
          }}>
          
          <div className='ml-10 w-5/6'>
            <label htmlFor="">Summary : </label>
            <p className='text-center mt-12 mb-12'>Summary Details</p>
          </div>
            <button  className="bg-pink-500 mt-6 ml-16 text-white font-bold py-2 px-3 w-1/3 rounded-full btn" 
              type="submit" >Request Access</button>
            <button  className="bg-white mt-6 ml-4 outline outline-1 outline-pink-500 font-bold py-2 px-3 w-1/3 rounded-full btn"
           onClick={() => setIsModalVisible(!isModalVisible)} >Cancel</button>
        </ReactplosiveModal>
    </div>
  );
};

export default Dashboard;
