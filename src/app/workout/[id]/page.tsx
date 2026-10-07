import Image from 'next/image';
import { getWorkoutById } from '@/utils/api';
import WorkoutDetails from '@/components/WorkoutDetails';

interface WorkoutDetailsPageProps {
    params: Promise<{ id: string }>;
}

const WorkoutDetailsPage = async ({ params }: WorkoutDetailsPageProps) => {
    const { id } = await params;
    const workout = await getWorkoutById(id);

    return (
        <main className="min-h-screen bg-[#0B0B0F] px-4 py-8 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-350">

                <div className="grid grid-cols-1 gap-7 md:grid-cols-[1fr_1fr] md:items-start">

                    {/* LEFT - IMAGE */}
                    <div className="relative h-120 w-full overflow-hidden rounded-lg">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                    {/* RIGHT - DETAILS */}
                    <div className="pt-1">

                        {/* Title */}
                        <h1 className="font-oswald text-2xl font-bold uppercase leading-tight text-white">
                            {workout.name}
                        </h1>

                        {/* Description */}
                        <p className="mt-2 text-[10px] leading-[1.5] text-gray-400 sm:text-xs">
                            {workout.description}
                        </p>

                        {/* Muscle Tags */}
                        <div className="mt-3 flex flex-wrap gap-1.5">
                            {workout.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#C6FF00] px-2.5 py-1 text-[8px] font-bold uppercase text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* Specs */}
                        <div className="mt-4 overflow-hidden rounded-lg border border-white/5 bg-[#15171E]">

                            <div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
                                <span className="text-[8px] font-semibold uppercase tracking-wide text-gray-500">
                                    Equipment
                                </span>
                                <span className="text-[9px] text-gray-300">
                                    {workout.equipment}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
                                <span className="text-[8px] font-semibold uppercase tracking-wide text-gray-500">
                                    Difficulty
                                </span>
                                <span className="text-[9px] text-gray-300">
                                    {workout.difficulty}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
                                <span className="text-[8px] font-semibold uppercase tracking-wide text-gray-500">
                                    Sets
                                </span>
                                <span className="text-[9px] text-gray-300">
                                    {workout.sets}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
                                <span className="text-[8px] font-semibold uppercase tracking-wide text-gray-500">
                                    Reps
                                </span>
                                <span className="text-[9px] text-gray-300">
                                    {workout.reps}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
                                <span className="text-[8px] font-semibold uppercase tracking-wide text-gray-500">
                                    Duration
                                </span>
                                <span className="text-[9px] text-gray-300">
                                    {workout.duration} min
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
                                <span className="text-[8px] font-semibold uppercase tracking-wide text-gray-500">
                                    Calories
                                </span>
                                <span className="text-[9px] text-gray-300">
                                    {workout.caloriesBurned} kcal
                                </span>
                            </div>

                            <div className="flex items-center justify-between px-3 py-2">
                                <span className="text-[8px] font-semibold uppercase tracking-wide text-gray-500">
                                    Rating
                                </span>
                                <span className="text-[9px] text-gray-300">
                                    {workout.rating}
                                </span>
                            </div>

                        </div>

                        {/* Instructions */}
                        <div className="mt-4">

                            <h2 className="font-oswald text-xs font-bold uppercase tracking-wide text-white">
                                Instructions
                            </h2>

                            <div className="mt-2 space-y-1.5">
                                {workout.instructions.map((instruction, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-2 text-[9px] leading-[1.5] text-gray-400"
                                    >
                                        <span className="shrink-0 text-gray-500">
                                            {index + 1}.
                                        </span>

                                        <p>
                                            {instruction}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            <WorkoutDetails workout={workout}/>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default WorkoutDetailsPage;