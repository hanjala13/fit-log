'use client';

import { usePlan } from '@/context/PlanContext';
import type { IWorkout } from '@/types';

interface WorkoutDetailsProps {
    workout: IWorkout;
}

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {
    const { plan, addToPlan, saved, saveWorkout } = usePlan();

    const isAdded = plan.some((item) => item.id === workout.id);
    const isSaved = saved.some((item) => item.id === workout.id);

    const handleAddToPlan = () => {
        addToPlan(workout);
    };

    const handleSave = () => {
        saveWorkout(workout);
    }

    return (
        <>
            <button
                onClick={handleAddToPlan}
                disabled={isAdded}
                className={`flex cursor-pointer items-center gap-1.5 rounded-sm px-3 py-2 text-[9px] font-bold text-black transition ${isAdded
                    ? 'cursor-not-allowed bg-gray-500'
                    : 'bg-[#C6FF00] hover:brightness-110'
                    }`}
            >
                <span>▣</span>
                {isAdded ? "Added to today's plan" : "Add to today's plan"}
            </button>

            <button
                onClick={handleSave}
                disabled={isSaved}
                className={`flex cursor-pointer items-center gap-1.5 rounded-sm border px-3 py-2 text-[9px] font-medium transition ${isSaved
                        ? 'cursor-not-allowed border-gray-600 text-gray-500'
                        : 'border-white/15 bg-transparent text-gray-300 hover:border-white/30 hover:text-white'
                    }`}
            >
                <span>□</span>
                {isSaved ? 'Saved' : 'Save for later'}
            </button>
        </>

    );
};

export default WorkoutDetails;