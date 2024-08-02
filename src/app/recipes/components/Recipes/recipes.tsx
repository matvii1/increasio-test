import RecipeCard from '@/app/recipes/components/RecipeCard/recipe-card'
import { getRecipes } from '@/lib/api'

export const revalidate = 0
export const dynamic = 'force-dynamic'

interface RecipesProps {
    tag: string
}

export default async function Recipes({ tag }: RecipesProps): Promise<JSX.Element> {
    const data = await getRecipes({ page: 1, tag: tag === 'all' ? '' : tag })

    return (
        <div className="mt-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {data.recipes.map((recipe) => {
                    return <RecipeCard key={recipe.id} recipe={recipe} />
                })}
            </div>
        </div>
    )
}
