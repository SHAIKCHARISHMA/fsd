import React from 'react';
import TableView from './TableView';
import './index.css';

const App = () => {
  const data = [
     { ID: 1, Name: 'Ruby', Age: 19 },
     { ID: 2, Name: 'Riya', Age: 20 },
     { ID: 3, Name: 'Roshan', Age: 22 },
     { ID: 4, Name: 'Rosy', Age: 16 },
     { ID: 5, Name: 'Ronak', Age: 19 },
  ];
  return (
     <div>
        <h1 style={{ textAlign: 'center', borderBottom: '2px solid blue', paddingTop: '20px', marginBottom: '100px' }}>
           Array of Objects - Table View
        </h1> 
        <TableView data={data} />
     </div>
  );
};
export default App;