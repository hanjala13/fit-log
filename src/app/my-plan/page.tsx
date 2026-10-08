'use client';

import { useEffect, useState } from 'react';
import { usePlan } from '@/context/PlanContext';
import PlanCard from '@/components/PlanCard';

type SortOption = 'duration' | 'calories' | 'rating';
type ActiveTab = 'plan' | 'saved';

const MyPlanPage = () => {
    const {
        plan,
        saved,
        removeFromPlan,
        removeFromSaved,
    } = usePlan();

    const [activeTab, setActiveTab] = useState<ActiveTab>('plan');
    const [loading, setLoading] = useState(true);

    // Default sorting: Duration
    const [sortBy, setSortBy] = useState<SortOption>('duration');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const currentItems = activeTab === 'plan' ? plan : saved;

    // Sort current tab's list
    const sortedItems = [...currentItems].sort((a, b) => {
        if (sortBy === 'duration') {
            return a.duration - b.duration;
        }

        if (sortBy === 'calories') {
            return a.caloriesBurned - b.caloriesBurned;
        }

        if (sortBy === 'rating') {
            return b.rating - a.rating;
        }

        return 0;
    });

    const totalMinutes = currentItems.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = currentItems.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    return (
        <main className="min-h-screen bg-[#0B0B0F] px-4 py-8 text-white sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-[1200px]">

                {/* Page Header */}
                <div>
                    <h1 className="font-oswald text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
                        MY PLAN
                    </h1>

                    <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                        Track your workouts and keep your training on target.
                    </p>
                </div>

                {/* Metrics */}
                <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-4">
                    <div className="rounded-lg border border-white/10 bg-[#151519] p-3 sm:p-4">
                        <p className="text-[8px] uppercase tracking-wider text-gray-500 sm:text-[10px]">
                            Exercises
                        </p>
                        <p className="mt-1 font-oswald text-xl font-bold text-white sm:text-2xl">
                            {currentItems.length}
                        </p>
                    </div>

                    <div className="rounded-lg border border-white/10 bg-[#151519] p-3 sm:p-4">
                        <p className="text-[8px] uppercase tracking-wider text-gray-500 sm:text-[10px]">
                            Minutes
                        </p>
                        <p className="mt-1 font-oswald text-xl font-bold text-white sm:text-2xl">
                            {totalMinutes}
                        </p>
                    </div>

                    <div className="rounded-lg border border-white/10 bg-[#151519] p-3 sm:p-4">
                        <p className="text-[8px] uppercase tracking-wider text-gray-500 sm:text-[10px]">
                            Calories
                        </p>
                        <p className="mt-1 font-oswald text-xl font-bold text-white sm:text-2xl">
                            {totalCalories}
                        </p>
                    </div>
                </div>

                {/* Tabs + Sort */}
                <div className="mt-8 flex items-center justify-between gap-3 border-b border-white/10">

                    {/* Tabs */}
                    <div className="flex items-center gap-5">
                        <button
                            type="button"
                            onClick={() => setActiveTab('plan')}
                            className={`relative pb-3 text-[10px] font-bold uppercase tracking-wide transition sm:text-xs ${activeTab === 'plan'
                                    ? 'text-[#C6FF00]'
                                    : 'text-gray-500 hover:text-white'
                                }`}
                        >
                            Today's Plan

                            {activeTab === 'plan' && (
                                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#C6FF00]" />
                            )}
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveTab('saved')}
                            className={`relative pb-3 text-[10px] font-bold uppercase tracking-wide transition sm:text-xs ${activeTab === 'saved'
                                    ? 'text-[#C6FF00]'
                                    : 'text-gray-500 hover:text-white'
                                }`}
                        >
                            Saved

                            {activeTab === 'saved' && (
                                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#C6FF00]" />
                            )}
                        </button>
                    </div>

                    {/* Sort Dropdown */}
                    <div className="relative mb-2 shrink-0">
                        <label htmlFor="sort-workouts" className="sr-only">
                            Sort By
                        </label>

                        <div className="flex items-center gap-1.5 text-[8px] text-gray-500 sm:text-[9px]">
                            <span className="whitespace-nowrap">
                                Sort By
                            </span>

                            <div className="relative">
                                <select
                                    id="sort-workouts"
                                    value={sortBy}
                                    onChange={(event) =>
                                        setSortBy(
                                            event.target.value as SortOption
                                        )
                                    }
                                    className="cursor-pointer appearance-none rounded-sm border border-white/10 bg-[#151519] py-1.5 pl-2 pr-6 text-[8px] font-medium text-gray-300 outline-none transition hover:border-white/25 focus:border-[#C6FF00] sm:text-[9px]"
                                >
                                    <option value="duration">
                                        Duration
                                    </option>
                                    <option value="calories">
                                        Calories
                                    </option>
                                    <option value="rating">
                                        Rating
                                    </option>
                                </select>

                                {/* Chevron */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-500"
                                    aria-hidden="true"
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="mt-6">
                    {loading ? (
                        <div className="flex min-h-[180px] items-center justify-center rounded-lg border border-white/10 bg-[#151519]">
                            <div className="flex flex-col items-center">
                                <span className="loading loading-spinner loading-md text-[#C6FF00]"></span>

                                <p className="mt-3 text-xs text-gray-500">
                                    Loading your plan...
                                </p>
                            </div>
                        </div>
                    ) : currentItems.length === 0 ? (
                        <div className="flex min-h-[180px] flex-col items-center justify-center rounded-lg border border-white/10 bg-[#151519] px-4 text-center">
                            <p className="font-oswald text-sm font-bold uppercase text-white">
                                {activeTab === 'plan'
                                    ? 'Your plan is empty'
                                    : 'No saved workouts'}
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                                {activeTab === 'plan'
                                    ? 'Add workouts from the library to build your plan.'
                                    : 'Save workouts from the library to find them here.'}
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {sortedItems.map((workout) => (
                                <PlanCard
                                    key={workout.id}
                                    workout={workout}
                                    onRemove={
                                        activeTab === 'plan'
                                            ? removeFromPlan
                                            : removeFromSaved
                                    }
                                    isSavedTab={activeTab === 'saved'}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default MyPlanPage;