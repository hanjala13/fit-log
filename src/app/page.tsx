import Banner from '@/components/Banner';
import { getWorkouts } from '@/utlis/api';
import React from 'react';

const HomePage = async() => {
  const workouts = await getWorkouts();

  console.log(workouts)

  return (
    <div>
      <Banner />
    </div>
  );
};

export default HomePage;