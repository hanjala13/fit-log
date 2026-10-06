import type { IWorkout } from '@/types';
import React from 'react';
import WorkoutCard from './WorkoutCard';

interface LibrarySectionProps {
    workouts: IWorkout[];
}

const LibrarySection = ({ workouts }: LibrarySectionProps) => {
    return (
        <div>
            {
                workouts.map((workout) => (<WorkoutCard key={workout.id} workout={workout}></WorkoutCard>))
            }
        </div>
    );
};

export default LibrarySection;