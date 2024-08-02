'use client'

export default function HomePageError(): JSX.Element {
    return (
        <main className="container">
            <div className="mx-auto mt-12 max-w-[500px]">
                <h1 className="text-center text-3xl font-bold text-red-500">An error occurred. Please try again later.</h1>
            </div>
        </main>
    )
}
