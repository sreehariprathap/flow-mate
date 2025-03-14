import { getFlowsForUser } from '@/api/getFlowsForUser';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle, InboxIcon } from 'lucide-react';
import { Suspense } from 'react';
import CreateFlowDialogueComponent from './_components/CreateFlowDialogueComponent';
import FlowCard from './_components/FlowCard';

const SkeletonLoader = () => (
  <div className="skeleton-loader space-y-2 p-3">
    {[1, 2, 3, 4, 5].map((i) => (
      <Skeleton key={i} className="h-28 w-full bg-slate-50" />
    ))}
  </div>
);

const UserFlows = async (): Promise<JSX.Element> => {
  try {
    const flows = await getFlowsForUser();

    // Error condition based on the fetched data
    if (flows.length === 0) {
      return (
        <div className="flex flex-col gap-4 h-full items-center justify-center">
          <div className="rounded-full bg-accent w-20 h-20 flex items-center justify-center">
            <InboxIcon size={40} className="stroke-primary" />
          </div>
          <div className="flex flex-col gap-1 text-center">
            <p className="font-bold">No workflow created yet</p>
            <p className="text-sm text-muted-foreground">
              Click the button below to create your first workflow
            </p>
          </div>
          <CreateFlowDialogueComponent triggerText='Create your first work flow'/>
        </div>
      );
    }

    // Handle the successful case as needed
    return <div className='grid grid-cols-1 gap-4'>
      {flows.map((flow) => (
        <FlowCard flow={flow} key={flow.id} />
      ))}
    </div>;

  } catch (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="w-6 h-6 mr-2" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{(error as Error).message}</AlertDescription>
      </Alert>
    );
  }
};

const Page = () => (
  <Suspense fallback={<SkeletonLoader />}>
    <UserFlows />
  </Suspense>
);

export default Page;