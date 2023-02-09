import React from 'react';
import {IndexHeader} from '../../../../components/layouts/Header';
import MainMenu from '../../../../components/menu/MainMenu';

interface Props {}

const Dashboard: React.FC<Props> = () => {
  return (
    <div>
      <IndexHeader />
      <MainMenu />
    </div>
  );
};

export default Dashboard;
