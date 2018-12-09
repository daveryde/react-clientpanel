import React from 'react';
import Clients from '../clients/Clients';
import Sidebar from '../layout/Sidebar';

export default () => {
  return (
    <div className="row">
      <div className="col-lg-10 col-md-10">
        <Clients />
      </div>
      <div className="col-lg-2 col-md-2">
        <Sidebar />
      </div>
    </div>
  );
};
