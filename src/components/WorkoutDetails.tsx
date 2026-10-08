'use client';

import { toast } from 'react-toastify';
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
        if (isAdded) {
            toast.warning("Already added to today's plan");
            return;
        }

        addToPlan(workout);
        toast.success("Added to today's plan");
    };

    const handleSave = () => {
        if (isSaved) {
            toast.warning('Already saved');
            return;
        }

        saveWorkout(workout);
        toast.success('Saved for later');
    };

    return (
        <>
            {/* Add to Today's Plan */}
            <button
                type="button"
                onClick={handleAddToPlan}
                className={`flex cursor-pointer items-center gap-1.5 rounded-sm px-3 py-2 text-[9px] font-bold text-black transition ${isAdded
                        ? 'bg-gray-500'
                        : 'bg-[#C6FF00] hover:brightness-110'
                    }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                </svg>

                {isAdded
                    ? "Added to today's plan"
                    : "Add to today's plan"}
            </button>

            {/* Save for Later */}
            <button
                type="button"
                onClick={handleSave}
                className={`flex cursor-pointer items-center gap-1.5 rounded-sm border px-3 py-2 text-[9px] font-medium transition ${isSaved
                        ? 'border-gray-600 text-gray-500'
                        : 'border-white/15 bg-transparent text-gray-300 hover:border-white/30 hover:text-white'
                    }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M19 21l-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>

                {isSaved ? 'Saved' : 'Save for later'}
            </button>
        </>
    );
};

export default WorkoutDetails;