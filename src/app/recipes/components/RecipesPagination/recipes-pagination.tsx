'use client'

import { parseAsInteger, useQueryState } from 'nuqs'
import { type ReactNode } from 'react'

import revalidateHomepage from '@/app/actions'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { PAGE_SIZE, VISIBLE_PAGES_COUNT } from '@/constants'
import { cn } from '@/lib/utils'

interface RecipesPaginationProps {
    total: number
}

export default function RecipesPagination({ total }: RecipesPaginationProps): ReactNode {
    const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1))

    const totalPages = Math.ceil(total / PAGE_SIZE)

    let startPage = Math.max(1, page - Math.floor(VISIBLE_PAGES_COUNT / 2))
    let endPage = startPage + VISIBLE_PAGES_COUNT - 1

    if (endPage > totalPages) {
        endPage = totalPages
        startPage = Math.max(1, endPage - VISIBLE_PAGES_COUNT + 1)
    }

    const arrayOfVisiblePages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)

    const isPrevDisabled = page === 1
    const isNextDisabled = page === totalPages

    async function changePage(newPage: number): Promise<void> {
        await setPage(newPage)
        await revalidateHomepage()
    }

    async function handlePreviousPage(): Promise<void> {
        if (page > 1) {
            void changePage(page - 1)
        }

        await revalidateHomepage()
    }

    async function handleNextPage(): Promise<void> {
        if (page < totalPages) {
            void changePage(page + 1)
        }

        await revalidateHomepage()
    }

    return (
        <Pagination className="mt-4">
            <PaginationContent>
                <PaginationItem
                    className={cn('cursor-pointer', {
                        'opacity-50': isPrevDisabled,
                        'cursor-not-allowed': isPrevDisabled,
                    })}
                    onClick={handlePreviousPage}
                >
                    <PaginationPrevious />
                </PaginationItem>

                {arrayOfVisiblePages.map((visiblePage) => (
                    <PaginationItem
                        className="cursor-pointer"
                        key={crypto.randomUUID()}
                        onClick={() => {
                            void changePage(visiblePage)
                        }}
                    >
                        <PaginationLink isActive={page === visiblePage}>{visiblePage}</PaginationLink>
                    </PaginationItem>
                ))}

                <PaginationItem
                    className={cn('cursor-pointer', {
                        'opacity-50': isNextDisabled,
                        'cursor-not-allowed': isNextDisabled,
                    })}
                    onClick={handleNextPage}
                >
                    <PaginationNext />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
