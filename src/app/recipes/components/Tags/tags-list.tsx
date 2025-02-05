'use client'

import { parseAsInteger, useQueryState } from 'nuqs'

import revalidateHomepage from '@/app/actions'
import Tag from '@/app/recipes/components/Tags/tag'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

export default function TagsList({ tags }: { tags: string[] }): JSX.Element {
    const [chosenTag, setChosenTag] = useQueryState('tag', { defaultValue: 'all' })
    const [_, setPage] = useQueryState('page', parseAsInteger)

    async function handleChosenTag(tag: string): Promise<void> {
        if (tag !== chosenTag) {
            await setChosenTag(tag.toLowerCase())
            await setPage(null)
        }

        await revalidateHomepage()
    }

    return (
        <ScrollArea>
            <ul className="flex items-center gap-2 px-1 pb-3 pt-1">
                <Tag handleChosenTag={handleChosenTag} isChosen={chosenTag.toLowerCase() === 'all'} tag="All" />

                {tags.map((tag) => (
                    <li key={tag}>
                        <Tag handleChosenTag={handleChosenTag} isChosen={chosenTag.toLowerCase() === tag.toLowerCase()} tag={tag} />
                    </li>
                ))}
            </ul>

            <ScrollBar className="h-2" orientation="horizontal" />
        </ScrollArea>
    )
}
