'use client'

import { parseAsInteger, useQueryState } from 'nuqs'

import revalidateHomepage from '@/app/actions'
import { Badge } from '@/components/ui/badge'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { MAX_TAGS } from '@/constants'

interface RecipeTagsProps {
    tags: string[]
}

export default function RecipeTags({ tags }: RecipeTagsProps): JSX.Element {
    const tagsToShow = tags.slice(0, MAX_TAGS)

    const leftTags = tags.length - tagsToShow.length

    const [chosenTag, setChosenTag] = useQueryState('tag')
    const [_, setPage] = useQueryState('page', parseAsInteger)

    async function handleChosenTag(tag: string): Promise<void> {
        if (tag !== chosenTag) {
            await setChosenTag(tag.toLowerCase())
            await setPage(null)
        }

        await revalidateHomepage()
    }

    return (
        <div className="flex flex-wrap items-center gap-2">
            {tagsToShow.map((tag) => (
                <Badge className="cursor-pointer" key={tag} onClick={() => handleChosenTag(tag)}>
                    {tag}
                </Badge>
            ))}

            {leftTags > 1 && (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger className="cursor-pointer">
                            <Badge>+{leftTags} more</Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                            {tags.map((tag) => (
                                <p key={tag}>{tag}</p>
                            ))}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}
        </div>
    )
}
