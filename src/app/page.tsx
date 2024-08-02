import { Suspense } from 'react'

import Recipes from '@/app/recipes/components/Recipes/recipes'
import RecipesSkeleton from '@/app/recipes/components/Skeleton/recipes-skeleton'
import Tags from '@/app/recipes/components/Tags/tags'

interface RecipesPageProps {
    searchParams?: Record<string, string | string[] | undefined>
}

export default function RecipesPage({ searchParams }: RecipesPageProps): JSX.Element {
    const searchParamTag = searchParams?.tag ?? 'all'
    const page = searchParams?.page ? Number(searchParams.page) : 1

    const tag = Array.isArray(searchParamTag) ? searchParamTag[0] : searchParamTag

    return (
        <main className="container">
            <div className="mx-auto mt-4 flex max-w-[500px] flex-col">
                <h1 className="text-center text-2xl font-bold">Increasio Recipes</h1>

                <p className="text-sm text-slate-500">A collection of recipes from all around the world. Discover new flavors and techniques.</p>
            </div>

            <Tags />

            <Suspense fallback={<RecipesSkeleton />}>
                <Recipes page={page} tag={tag ? tag : 'all'} />
            </Suspense>
        </main>
    )
}
