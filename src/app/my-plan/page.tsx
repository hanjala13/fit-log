'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePlan } from '@/context/PlanContext';
import PlanCard from '@/components/PlanCard';

const MyPlanPage = () => {
    const { plan, saved, removeFromPlan, removeFromSaved } = usePlan();

    const [activeTab, setActiveTab] = useState<'plan' | 'saved'>('plan');

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    })

    const currentItems = activeTab === 'plan' ? plan : saved;

    const totalMinutes = plan.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = plan.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    return (
        <main className="min-h-screen bg-[#0B0B0F] px-4 py-8 text-white sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-300">

                {/* Header */}
                <div>
                    <h1 className="font-oswald text-3xl font-bold uppercase sm:text-4xl">
                        My Plan
                    </h1>

                    <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* Metrics */}
                <div className="mt-7 grid grid-cols-3 gap-3">

                    <div className="rounded-lg border border-white/10 bg-[#151519] p-4">
                        <p className="text-[9px] tracking-wide text-gray-500">
                            Exercises
                        </p>

                        <p className="mt-1 font-oswald text-2xl font-bold text-[#C6FF00]">
                            {plan.length}
                        </p>
                    </div>

                    <div className="rounded-lg border border-white/10 bg-[#151519] p-4">
                        <p className="text-[9px] tracking-wide text-gray-500">
                            Minutes
                        </p>

                        <p className="mt-1 font-oswald text-2xl font-bold text-white">
                            {totalMinutes}
                        </p>
                    </div>

                    <div className="rounded-lg border border-white/10 bg-[#151519] p-4">
                        <p className="text-[9px] tracking-wide text-gray-500">
                            Calories
                        </p>

                        <p className="mt-1 font-oswald text-2xl font-bold text-white">
                            {totalCalories}
                        </p>
                    </div>

                </div>

                {/* Tabs */}
                <div className="mt-8 border-b border-white/10">
                    <div className="flex gap-6">

                        <button
                            onClick={() => setActiveTab('plan')}
                            className={`cursor-pointer pb-3 text-xs font-semibold transition ${activeTab === 'plan'
                                ? 'border-b-2 border-[#C6FF00] text-[#C6FF00]'
                                : 'text-gray-500 hover:text-white'
                                }`}
                        >
                            Today&apos;s Plan
                        </button>

                        <button
                            onClick={() => setActiveTab('saved')}
                            className={`cursor-pointer pb-3 text-xs font-semibold transition ${activeTab === 'saved'
                                ? 'border-b-2 border-[#C6FF00] text-[#C6FF00]'
                                : 'text-gray-500 hover:text-white'
                                }`}
                        >
                            Saved
                        </button>

                    </div>
                </div>

                {/* Content */}
                <div className="mt-6">
                    {loading ? (
                        <div className="flex min-h-45 items-center justify-center rounded-lg border border-white/10 bg-[#151519]">
                            <div className="flex flex-col items-center">
                                <span className="loading loading-spinner loading-md text-[#C6FF00]"></span>

                                <p className="mt-3 text-xs text-gray-500">
                                    Loading workouts…
                                </p>
                            </div>
                        </div>
                    ) : currentItems.length === 0 ? (
                        <div className="rounded-lg border border-white/10 bg-[#151519] px-5 py-12 text-center">

                            <h2 className="font-oswald text-xl font-bold uppercase">
                                {activeTab === 'plan'
                                    ? 'Nothing here yet'
                                    : 'Nothing here yet'}
                            </h2>

                            <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-gray-500">
                                {activeTab === 'plan'
                                    ? 'Browse the library and add a lift to get today moving'
                                    : 'Browse the library and add a lift to get today moving'}
                            </p>

                            <Link
                                href="/"
                                className="mt-5 inline-flex rounded-sm bg-[#C6FF00] px-4 py-2 text-[10px] font-bold text-black transition hover:brightness-110"
                            >
                                Go to workouts
                            </Link>

                        </div>
                    ) : (
                        <div className="space-y-3">
                            {currentItems.map((workout) => (
                                <PlanCard
                                    key={workout.id}
                                    workout={workout}
                                    onRemove={
                                        activeTab === 'plan'
                                            ? removeFromPlan
                                            : removeFromSaved
                                    }
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