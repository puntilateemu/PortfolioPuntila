import { getPortfolioData } from '@/utils/getPortfolioData/getPortfolioData'
import styles from './page.module.css'
import { GetStaticPaths, Metadata } from 'next'
import { getAllPortfolioPaths } from '@/utils/getPortfolioData/getAllPortfolioPaths'
import CodeTitle from '@/components/codeTitle/codeTitle'
import PortfolioItems from '@/components/portfolioItem/portfolioItem'

type Props = {
    params: { title: string }
}

export const getStaticPaths: GetStaticPaths<{ title: string }> = async () => {
    const paths = await getAllPortfolioPaths()
    return {
        paths,
        fallback: false,
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return {
        title: `Teemu Puntila - Portfolio - ${params.title}`,
        description: `Teemu Puntila Portfolio ${params.title}`,
        openGraph: {
            title: `Teemu Puntila - Portfolio - ${params.title}`,
            description: `Teemu Puntila Portfolio ${params.title}`,
            images: [`/favicon.ico`],
        },
    }
}
const Page = async ({ params }: Props) => {
    const data = await getPortfolioData(params.title)
    return (
        <div className={styles.container}>
            <CodeTitle text={data.codeTitle} />
            <PortfolioItems data={data} />
            <div />
            <div />
        </div>
    )
}

export default Page
