import Image from 'next/image';
import Link from 'next/link';
import type { IWorkout } from '@/types';

interface WorkoutCardProps {
    workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    return (
        <Link
            href={`/workout/${workout.id}`}
            className="block"
        >
            <div
                className=" 
                    overflow-hidden 
                    rounded-xl 
                    border border-[#24242a] 
                    bg-[#151519] 
                    transition-all 
                    duration-300 
                    hover:-translate-y-1 
                    hover:shadow-[0_8px_30px_rgba(204,255,0,0.08)]
                ">

                {/* Image */}
                <div className="relative h-[190px] w-full">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Card Content */}
                <div className="p-4">

                    {/* Muscle Groups */}
                    <div className="mb-3 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-bold uppercase text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Workout Name */}
                    <h3 className="font-oswald text-base font-bold uppercase text-white">
                        {workout.name}
                    </h3>

                    {/* Equipment */}
                    <p className="mt-1 text-xs text-gray-500">
                        {workout.equipment}
                    </p>

                    {/* Divider */}
                    <div className="my-4 border-t border-[#29292e]" />

                    {/* Stats */}
                    <div className="flex items-center justify-start gap-5 text-xs text-gray-400">

                        <span className="flex items-center gap-1.5 whitespace-nowrap">
                            <span>◷</span>
                            {workout.duration} min
                        </span>

                        <span className="flex items-center gap-1.5 whitespace-nowrap">
                            <span className="text-red-500">♨</span>
                            {workout.caloriesBurned} kcal
                        </span>

                        <span className="flex items-center gap-1.5 whitespace-nowrap">
                            <span>☆</span>
                            {workout.rating}
                        </span>

                    </div>

                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;