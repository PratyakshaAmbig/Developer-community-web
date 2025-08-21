import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ApiData = () => {
  const [searchName, setSearchName] = useState('');
  const [apiDataResult, setApiDataResult] = useState([]);

  const apiData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/quotes');
      console.log(response.data.quotes)
      setApiDataResult(response?.data?.quotes);
      console.log(apiDataResult)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiData();
  }, []);

  // Filtered data based on searchName
  const filteredQuotes = apiDataResult.filter((quote) =>
    quote.author.toLowerCase()===searchName.toLowerCase()
  );

  return (
    <div className='flex flex-col items-center gap-4 mt-5'>
      <h1 className='text-2xl font-bold'>API Data</h1>

      <input
        className='border p-2 rounded w-80'
        type='text'
        placeholder='Search quotes...'
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />

      <div className='w-[80%] mt-5 space-y-3'>
        {filteredQuotes.length > 0 ? (
          filteredQuotes.map((item) => (
            <div
              key={item.id}
              className='p-4 border rounded shadow-md bg-gray-50'
            >
              {/* <p className='text-lg italic'>" {item.quote} "</p> */}
              <p className='text-right font-semibold text-black'>— {item.author}</p>
            </div>
          ))
        ) : (
          <p className='text-gray-500'>No matching quotes found.</p>
        )}
      </div>
    </div>
  );
};

export default ApiData;
