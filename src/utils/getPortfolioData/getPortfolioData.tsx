import { portfolioStatic } from '@/types/portfolio'
import pageData from '../../../public/portfolioData.json'

export const getPortfolioData = async (slug: string) => {
    const data = pageData.data.find((item) => item.title === slug)
    return data as portfolioStatic
}
