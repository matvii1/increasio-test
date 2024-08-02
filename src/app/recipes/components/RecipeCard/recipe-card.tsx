import Image from 'next/image'

import RecipeTags from '@/app/recipes/components/RecipeCard/recipe-tags'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Difficulty, type Recipe } from '@/types'

interface RecipeCardProps {
    recipe: Recipe
}

export default function RecipeCard({ recipe }: RecipeCardProps): JSX.Element {
    const { image, tags, name, ingredients, difficulty, cuisine } = recipe
    return (
        <Card className="">
            <CardHeader className="p-4">
                <div className="relative h-[230px]">
                    <Image alt={name} className="w-full rounded-xl" layout="fill" objectFit="cover" src={image} />
                </div>

                <div className="mt-2">
                    <RecipeTags tags={tags} />
                </div>
            </CardHeader>
            <CardContent className="px-4">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="line-clamp-2 text-sm">{ingredients.join(' ')}</p>

                <div className="mt-3 flex flex-col text-sm">
                    <div className="flex items-center gap-2">
                        <p className="text-slate-600">Difficulty: </p>
                        <span
                            className={cn({
                                'text-green-500': difficulty === Difficulty.Easy,
                                'text-yellow-500': difficulty === Difficulty.Medium,
                                'text-red-500': difficulty === Difficulty.Hard,
                            })}
                        >
                            {difficulty}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <p className="text-slate-600">Cuisine: </p>
                        <span className="text-slate-600">{cuisine}</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="px-4 pb-4">
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    )
}
