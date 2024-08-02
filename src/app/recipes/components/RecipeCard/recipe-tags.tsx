'use client'

import { useQueryState } from 'nuqs'

import action from '@/app/actions'
import { Badge } from '@/components/ui/badge'

interface RecipeTagsProps {
    tags: string[]
}

const TAGS_LIMIT = 4

export default function RecipeTags({ tags }: RecipeTagsProps): JSX.Element {
    const tagsToShow = tags.slice(0, TAGS_LIMIT)

    const leftTags = tags.length - tagsToShow.length

    const [chosenTag, setChosenTag] = useQueryState('tag')

    async function handleChosenTag(tag: string): Promise<void> {
        if (tag !== chosenTag) {
            await setChosenTag(tag.toLowerCase())
        }

        await action()
    }

    return (
        <div className="flex flex-wrap items-center gap-2">
            {tagsToShow.map((tag) => (
                <Badge className="cursor-pointer" key={tag} onClick={() => handleChosenTag(tag)}>
                    {tag}
                </Badge>
            ))}

            {leftTags > 1 && <Badge>+{leftTags} more</Badge>}
        </div>
    )
}
