import React, { useState } from 'react';
import {IndexHeader} from '../../../../../../components/layouts/Header';
import MainMenu from '../../../../../../components/menu/MainMenu';
import ButtonNew from 'components/button/BtnNew';

interface Props {}

const CampaignDetail: React.FC<Props> = () => {
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
            <div className="flex w-full space-x-4 max-w-screen-lg items-start mx-auto mt-16">
                <p className='font-bold text-lg'>Patient</p>
                <p className='font-bold text-lg'>Summary data patient</p>
            </div>
            
            <ButtonNew />
            <div className="flex w-full space-x-4 max-w-screen-lg  items-start mx-auto ">
                <p className='font-bold text-lg mt-8'>Document</p> 
            </div>
            <div className="flex flex-col mt-4">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="border-b bg-pink-200">
                        <tr>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            No
                          </th>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Status
                          </th>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Disease
                          </th>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Category
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
                            approved
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
                            details
                          </td>
                        </tr>
                      
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

           
            <div className="flex flex-col mt-4">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block w-1/2 sm:px-6 lg:px-8">
                  <div className=" space-x-4 items-start mx-auto">
                    <p className='font-bold text-lg mt-8'>Category</p> 
                  </div>
                  <div className="overflow-x-auto mt-2">
                    <table className="w-1/2">
                      <thead className="border-b bg-pink-200">
                        <tr>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            
                          </th>
                         </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="py-2 inline-block w-1/2 sm:px-6 lg:px-8">
                  <div className="space-x-4 items-start mx-auto">
                    <p className='font-bold text-lg mt-8'>Category</p> 
                  </div>
                  <div className="overflow-x-auto mt-2">
                    <table className="w-1/2">
                      <thead className="border-b bg-pink-200">
                        <tr>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            
                          </th>
                         </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            
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
    </div>
  );
};

export default CampaignDetail;
