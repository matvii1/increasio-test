'use server'

import { revalidatePath } from 'next/cache'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/require-await -- this function should be async
export default async function revalidateHomepage() {
    revalidatePath('/')
}
