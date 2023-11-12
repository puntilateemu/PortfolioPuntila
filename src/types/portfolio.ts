import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export type portfolio = {
    imageFront: string | StaticImport
    imageModal?: string | StaticImport
    objectFit: 'contain' | 'cover' | 'fill'
    title: string
    introText: string
    fullText: string
    websiteLink?: string
    githubLink?: string
}
