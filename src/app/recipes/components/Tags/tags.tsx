import TagsList from '@/app/recipes/components/Tags/tags-list'
import { getTags } from '@/lib/api'

export default async function Tags(): Promise<JSX.Element> {
    const tags = await getTags()

    return (
        <div className="mt-4">
            <TagsList tags={tags} />
        </div>
    )
}
