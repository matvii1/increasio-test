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
            <div className="flex flex-col space-y-4">
                <pre>
                    <code>{JSON.stringify(data.recipes, null, 2)}</code>
                </pre>
            </div>
        </div>
    )
}
