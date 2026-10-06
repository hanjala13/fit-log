import { IWorkout } from "@/types";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export const getWorkouts = async (): Promise<IWorkout[]> => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch workouts");
    }

    const data: IWorkout[] = await response.json();

    return data;
};

export const getWorkoutById = async (id: string): Promise<IWorkout> => {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch workout");
    }

    const data: IWorkout = await response.json();

    return data;
};