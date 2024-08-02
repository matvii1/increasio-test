import RecipeCard from '@/app/recipes/components/RecipeCard/recipe-card'
import RecipesPagination from '@/app/recipes/components/RecipesPagination/recipes-pagination'
import { getRecipes } from '@/lib/api'

interface RecipesProps {
    tag: string
    page: number
}

export default async function Recipes({ tag, page }: RecipesProps): Promise<JSX.Element> {
    const data = await getRecipes({ page, tag: tag === 'all' ? '' : tag })

    const isEmpty = data.total === 0 || data.recipes.length === 0

    if (isEmpty) {
        return (
            <section className="pb-8">
                <div className="mt-12 flex items-center justify-center gap-2">
                    <p className="text-center text-slate-500">No recipes found</p>
                </div>
            </section>
        )
    }

    return (
        <section className="pb-8">
            <div className="mt-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {data.recipes.map((recipe) => {
                        return <RecipeCard key={recipe.id} recipe={recipe} />
                    })}
                </div>
            </div>

            <RecipesPagination total={data.total} />
        </section>
    )
}
