import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.github.com/repos/octocat/Hello-World');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Halaman Beranda</h1>
      <p>Selamat datang di halaman beranda!</p>

      <h2>Data dari API:</h2>
      {data && (
        <div>
          <p>{data.name}</p>
          <p>{data.description}</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
