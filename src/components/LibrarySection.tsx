import React from 'react';
import type { IWorkout } from '@/types';
import WorkoutCard from './WorkoutCard';

interface LibrarySectionProps {
    workouts: IWorkout[];
}

const LibrarySection = ({ workouts }: LibrarySectionProps) => {
    return (
        <section
            id="library"
            className="w-full px-6 py-16 sm:px-8 lg:px-10"
        >
            <div className="mx-auto w-full max-w-[1440px]">

                {/* Section Header */}
                <div className="mb-7">
                    <h2 className="font-oswald text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
                        THE LIBRARY
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>

                {/* Workout Grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {workouts.map((workout) => (
                        <WorkoutCard
                            key={workout.id}
                            workout={workout}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default LibrarySection;