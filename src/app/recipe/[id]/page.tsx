import { ArrowLeft } from 'lucide-react'
import { type Metadata } from 'next'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { getRecipe } from '@/lib/api'
import { cn } from '@/lib/utils'

interface RecipePageProps {
    params: {
        id: string
    }
}

export async function generateMetadata({ params }: RecipePageProps): Promise<Metadata> {
    const id = params.id

    const data = await getRecipe({
        id,
    })

    return {
        title: data?.name ?? 'Recipe not found',
    }
}

export default async function RecipePage({ params }: RecipePageProps): Promise<JSX.Element> {
    const data = await getRecipe({
        id: params.id,
    })

    return (
        <main className="container">
            <div className="mx-auto mt-12 max-w-[500px]">
                <h1 className="text-center text-3xl font-bold">{data?.name}</h1>

                <ul className="ml-6 mt-6 list-decimal [&>li]:mt-2">{data?.instructions.map((step) => <li key={step}>{step}</li>)}</ul>

                <Link
                    className={cn(
                        'mt-8 w-full gap-2',
                        buttonVariants({
                            variant: 'outline',
                        }),
                    )}
                    href="/"
                >
                    <ArrowLeft className="size-4" />

                    <p>Go back</p>
                </Link>
            </div>
        </main>
    )
}
