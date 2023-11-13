import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { devIcons } from './devIcons'
import { portfolioLinks } from './portfolioLinks'

export type portfolio = {
    imageFront: string | StaticImport
    imageModal?: string | StaticImport
    objectFit: 'contain' | 'cover' | 'fill'
    title: string
    introText: string
    fullText: string
    devIcons: devIcons
    portfolioLinks?: portfolioLinks
    miniApp?: boolean
}
