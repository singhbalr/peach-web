import React from 'react';
import {IndexHeader} from '../../../../components/layouts/Header';

interface Props {}

const Dashboard: React.FC<Props> = () => {
  return (
    <div>
      <h1>dashboard</h1>
      <IndexHeader />
    </div>
  );
};

export default Dashboard;
