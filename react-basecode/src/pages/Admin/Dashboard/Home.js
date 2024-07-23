import React, { useEffect } from 'react'
import axiosInstance from '../../../utils/axiosInstance';

const Home = () => {

  useEffect(() => {

    const getUserData = async () => {
      try {
        const response = await axiosInstance.get('/user')
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