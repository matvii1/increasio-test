'use client'

export default function RecipeError(): JSX.Element {
    return (
        <main className="container">
            <div className="mx-auto mt-12 max-w-[500px]">
                <h1 className="text-center text-3xl font-bold text-red-500">Recipe not found</h1>
            </div>
        </main>
    )
}
