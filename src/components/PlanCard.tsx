'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { IWorkout } from '@/types';

interface PlanCardProps {
    workout: IWorkout;
    onRemove: (workoutId: number) => void;
}

const PlanCard = ({ workout, onRemove }: PlanCardProps) => {
    return (
        <div className="flex w-full min-w-0 items-center gap-2 rounded-lg border border-white/10 bg-[#151519] p-2.5 sm:gap-3 sm:p-3">

            {/* Workout Image */}
            <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-md sm:h-16 sm:w-28">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Workout Information */}
            <div className="min-w-0 flex-1">
                <h3 className="truncate font-oswald text-[10px] font-bold uppercase text-white sm:text-xs">
                    {workout.name}
                </h3>

                <p className="mt-0.5 truncate text-[8px] text-gray-500 sm:text-[9px]">
                    {workout.equipment}
                </p>

                {/* Stats */}
                <div className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[7px] text-gray-400 sm:gap-x-4 sm:text-[8px]">
                    <span className="flex items-center gap-1 whitespace-nowrap">
                        <span className="text-[#C6FF00]">◷</span>
                        {workout.duration} min
                    </span>

                    <span className="flex items-center gap-1 whitespace-nowrap">
                        <span className="text-[#C6FF00]">♨</span>
                        {workout.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1 whitespace-nowrap">
                        <span className="text-[#C6FF00]">☆</span>
                        {workout.rating}
                    </span>
                </div>
            </div>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-1 sm:gap-2">

                {/* View Details */}
                <Link
                    href={`/workout/${workout.id}`}
                    className="whitespace-nowrap rounded-full border border-white/10 px-2 py-1.5 text-[7px] font-medium text-gray-300 transition hover:border-white/25 hover:text-white sm:px-3 sm:text-[8px]"
                >
                    View Details
                </Link>

                {/* Mark as Done */}
                <button
                    type="button"
                    className="flex shrink-0 cursor-pointer items-center gap-1 whitespace-nowrap rounded-full bg-[#C6FF00] px-2 py-1.5 text-[7px] font-bold text-black transition hover:brightness-110 sm:px-3 sm:text-[8px]"
                >
                    <span>✓</span>
                    Mark as Done
                </button>

                {/* Remove */}
                <button
                    type="button"
                    onClick={() => onRemove(workout.id)}
                    className="grid h-6 w-6 shrink-0 cursor-pointer place-items-center text-sm leading-none text-gray-500 transition hover:text-red-500 sm:h-7 sm:w-7"
                    aria-label={`Remove ${workout.name}`}
                >
                    ×
                </button>
            </div>
        </div>
    );
};

export default PlanCard;