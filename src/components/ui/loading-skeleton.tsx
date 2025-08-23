import { Skeleton } from "@/components/ui/skeleton";

export const ProjectSkeleton = () => (
  <div className="animate-pulse">
    <Skeleton className="h-48 w-full rounded-xl mb-4" />
    <Skeleton className="h-6 w-3/4 mb-2" />
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-5/6" />
  </div>
);

export const TextSkeleton = () => (
  <div className="animate-pulse space-y-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-5/6" />
    <Skeleton className="h-4 w-4/6" />
  </div>
);

export const CardSkeleton = () => (
  <div className="animate-pulse p-6 rounded-xl border border-border">
    <div className="flex items-center space-x-4 mb-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-3 w-1/3" />
      </div>
    </div>
    <Skeleton className="h-20 w-full" />
  </div>
);