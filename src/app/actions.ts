'use server'

// import { revalidateTag } from 'next/cache'
import { revalidatePath } from 'next/cache'

export default async function action() {
    revalidatePath('/')
}
