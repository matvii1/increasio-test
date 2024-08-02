import { Suspense } from 'react'

import Recipes from '@/app/recipes/components/Recipes/recipes'
import RecipesSkeleton from '@/app/recipes/components/Skeleton/recipes-skeleton'
import Tags from '@/app/recipes/components/Tags/tags'

interface RecipesPageProps {
    searchParams?: Record<string, string | string[] | undefined>
}

export default function RecipesPage({ searchParams }: RecipesPageProps): JSX.Element {
    const searchParamTag = searchParams?.tag ?? 'all'

    const tag = Array.isArray(searchParamTag) ? searchParamTag[0] : searchParamTag

    return (
        <main className="container">
            <div className="mx-auto mt-4 flex max-w-[500px] flex-col">
                <h1 className="text-center text-2xl font-bold">Increasio Recipies</h1>

                <p className="text-sm text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.</p>
            </div>

            <Tags />

            <Suspense fallback={<RecipesSkeleton />}>
                <Recipes tag={tag ? tag : 'all'} />/
            </Suspense>
        </main>
    )
}
