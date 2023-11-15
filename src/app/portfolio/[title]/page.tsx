import { getPortfolioData } from '@/utils/getPortfolioData/getPortfolioData'
import styles from './page.module.css'
import CodeTitle from '@/components/codeTitle/codeTitle'
import PortfolioItems from '@/components/portfolioItem/portfolioItem'
import pageData from '../../../../public/portfolioData.json'
import { notFound } from 'next/navigation'

type Props = {
    params: { title: string }
}
export async function generateStaticParams() {
    return pageData.data.map((item) => ({ title: item.title, data: item }))
}
const Page = async ({ params }: Props) => {
    const data = await getPortfolioData(params.title)
    if (!data) {
        return notFound()
    } else
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
