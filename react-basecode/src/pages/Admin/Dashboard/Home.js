import axios from 'axios';
import React, { useEffect } from 'react'

const Home = () => {

  useEffect(() => {

    const getUserData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user`, {
          withCredentials: true,
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUserData();

  }, [])
  
  return (
    <div>Home</div>
  )
}

export default Home