'use client';

import { createContext, useContext, useState } from 'react';
import type { IWorkout } from '@/types';

interface PlanContextType {
    plan: IWorkout[];
    saved: IWorkout[];
    addToPlan: (workout: IWorkout) => void;
    removeFromPlan: (workoutId: number) => void;
    saveWorkout: (workout: IWorkout) => void;
    removeFromSaved: (workoutId: number) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const PlanProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [plan, setPlan] = useState<IWorkout[]>([]);
    const [saved, setSaved] = useState<IWorkout[]>([]);

    const addToPlan = (workout: IWorkout) => {
        setPlan((currentPlan) => {
            if (currentPlan.some((item) => item.id === workout.id)) {
                return currentPlan;
            }

            return [...currentPlan, workout];
        });
    };

    const removeFromPlan = (workoutId: number) => {
        setPlan((currentPlan) =>
            currentPlan.filter((item) => item.id !== workoutId)
        );
    };

    const saveWorkout = (workout: IWorkout) => {
        setSaved((currentSaved) => {
            if (currentSaved.some((item) => item.id === workout.id)) {
                return currentSaved;
            }

            return [...currentSaved, workout];
        });
    };

    const removeFromSaved = (workoutId: number) => {
        setSaved((currentSaved) =>
            currentSaved.filter((item) => item.id !== workoutId)
        );
    };

    return (
        <PlanContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                removeFromPlan,
                saveWorkout,
                removeFromSaved,
            }}
        >
            {children}
        </PlanContext.Provider>
    );
};

export const usePlan = () => {
    const context = useContext(PlanContext);

    if (!context) {
        throw new Error('usePlan must be used inside PlanProvider');
    }

    return context;
};