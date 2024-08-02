import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import RecipeTags from '@/app/recipes/components/RecipeCard/recipe-tags'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { MIN_RATING } from '@/constants'
import { cn } from '@/lib/utils'
import { Difficulty, type Recipe } from '@/types'

interface RecipeCardProps {
    recipe: Recipe
}

export default function RecipeCard({ recipe }: RecipeCardProps): JSX.Element {
    const { image, tags, name, ingredients, difficulty, cuisine, id, rating } = recipe

    const isPopular = rating > MIN_RATING

    return (
        <Card className="relative flex flex-col justify-between">
            {isPopular ? (
                <Badge className="absolute -top-2 left-2 z-10 py-px text-xs" variant="destructive">
                    Most Popular
                </Badge>
            ) : null}

            <div>
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
            </div>
            <CardFooter className="px-4 pb-4">
                <Link className={cn('group relative w-full', buttonVariants({ variant: 'outline' }))} href={`/recipe/${id.toString()}`}>
                    View Recipe
                    <ArrowRight className="absolute right-3 top-1/2 size-4 -translate-y-1/2 transition-transform group-hover:translate-x-1" />
                </Link>
            </CardFooter>
        </Card>
    )
}
