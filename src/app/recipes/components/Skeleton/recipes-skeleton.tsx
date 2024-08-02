import { Skeleton } from '@/components/ui/skeleton'

export default function RecipesSkeleton(): JSX.Element {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {new Array(24).fill(0).map((_) => (
                <Skeleton className="h-[250px] rounded-xl" key={crypto.randomUUID()} />
            ))}
        </div>
    )
}
