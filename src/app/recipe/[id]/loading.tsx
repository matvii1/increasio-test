import { Skeleton } from '@/components/ui/skeleton'

export default function Loading(): JSX.Element {
    return (
        <main className="mt-12">
            {new Array(10).fill(null).map(() => (
                <Skeleton className="mx-auto mt-4 h-[30px] max-w-[400px]" key={crypto.randomUUID()} />
            ))}
        </main>
    )
}
