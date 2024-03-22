import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const[fetchData, setFetchData] = useState(null);
  const[axiosData, setAxiiosData] = useState(null);

  const fetchDataWithFetch = async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      setFetchData(data);
    }catch(error){
      console.error('Error fetching data with Fetch:',error);
    }
  };

  const fetchDataWithAxios = async() =>{
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/2');
      setAxiiosData(response.data);
    }catch(error){
      console.error('Error fetching data with Axios:',error);
    }
  };
  return (
    <div className='App'>
      <div className='App-header' style={{ backgroundColor:'lightyellow'}}>
        <h1 style={{ marginBottom: '20px', borderBottom:'2px solid red', textAlign:'center',fontFamily:'Helvetica,sans-serif',color:'darkblue'}}>
          Fetch-Axios App
        </h1>
        <section style={{ backgroundColor:'lightblue',padding:'10px',margin:'10px'}}>
          <h2>Data fetched using Fetch:</h2>
          {fetchData?(
            <pre>{JSON.stringify(fetchData,null,2)}</pre>
          ) : (
            <p> No data fetched with Fetch.</p>
          )}
          <button onClick={fetchDataWithFetch}> Fetch Data with Fetch</button>          
        </section>
        <section style={{ backgroundColor:'palegreen',padding:'10px',margin:'10px'}}>
          <h2>Data fetched using Axions:</h2>
          {axiosData?(
            <pre>{JSON.stringify(axiosData,null,2)}</pre>
          ) : (
            <p> No data fetched with Axios.</p>
          )}
          <button onClick={fetchDataWithAxios}> Fetch Data with Axios</button>          
        </section>
      </div>
      <div className='watermark'>
        <p> SK CHARISHMA</p>
      </div>
    </div>
  );
}

export default App;