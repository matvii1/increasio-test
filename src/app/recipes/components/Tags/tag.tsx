'use client'

import { Button } from '@/components/ui/button'

interface TagProps {
    tag: string
    handleChosenTag: (tag: string) => void
    isChosen: boolean
}

export default function Tag({ tag, handleChosenTag, isChosen }: TagProps): JSX.Element {
    return (
        <Button
            className="h-6"
            size="sm"
            variant={isChosen ? 'default' : 'outline'}
            onClick={() => {
                handleChosenTag(tag)
            }}
        >
            {tag}
        </Button>
    )
}
