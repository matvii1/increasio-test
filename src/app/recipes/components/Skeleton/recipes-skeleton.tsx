import { Skeleton } from '@/components/ui/skeleton'

export default function RecipesSkeleton(): JSX.Element {
    return (
        <div className="grid grid-cols-fluid gap-4">
            {new Array(24).fill(0).map((_) => (
                <Skeleton className="h-[250px] rounded-xl" key={crypto.randomUUID()} />
            ))}
        </div>
    )
}
