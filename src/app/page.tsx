import Banner from '@/components/Banner';
import LibrarySection from '@/components/LibrarySection';
import { getWorkouts } from '@/utils/api';
import React from 'react';

const HomePage = async() => {
  const workouts = await getWorkouts();

  console.log(workouts)

  return (
    <div>
      <Banner />
      <LibrarySection workouts={workouts}/>
    </div>
  );
};

export default HomePage;