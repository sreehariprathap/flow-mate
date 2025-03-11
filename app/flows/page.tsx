"use client"
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect } from 'react';

const SkeletonLoader = () => (
  <div className="skeleton-loader space-y-2 p-3">
    {[1,2,3,4,5].map((i)=>{
      return <Skeleton key={i} className="h-28 w-full bg-slate-50" />;
    })}
  </div>
);

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an async fetch or operation delay (e.g., 2 seconds)
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      {isLoading ? <SkeletonLoader /> : <div>page</div>}
    </div>
  );
};

export default Page;