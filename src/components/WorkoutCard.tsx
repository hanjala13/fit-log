import type { IWorkout } from '@/types';
import Image from 'next/image';
import React from 'react';

interface WorkoutCardProps {
    workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    return (
        <div className="group overflow-hidden rounded-xl border border-white/5 bg-[#15161a] transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/40">

            {/* Workout Image */}
            <div className="relative aspect-video overflow-hidden">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    width={400}
                    height={250}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Card Content */}
            <div className="p-4">

                {/* Badges */}
                <div className="mb-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-lime-400 px-2 py-1 text-[10px] font-bold uppercase text-black">
                        {workout.difficulty}
                    </span>

                    {workout.muscleGroups.map((muscle, index) => (
                        <span
                            key={`${muscle}-${index}`}
                            className="rounded-full bg-lime-400 px-2 py-1 text-[10px] font-bold uppercase text-black"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Workout Name */}
                <h2 className="mb-2 line-clamp-2 text-sm font-extrabold uppercase tracking-wide text-white sm:text-base">
                    {workout.name}
                </h2>

                {/* Description */}
                <p className="mb-4 line-clamp-2 text-xs leading-5 text-gray-400">
                    {workout.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-white/10 pt-3 text-xs text-gray-400">
                    <span className="flex items-center gap-2">
                        <span className="text-lime-400">◷</span>
                        {workout.duration} min
                    </span>

                    <span className="truncate">
                        {workout.muscleGroups.join(', ')}
                    </span>
                </div>

            </div>
        </div>
    );
};

export default WorkoutCard;