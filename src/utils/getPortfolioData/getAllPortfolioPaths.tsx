import pageData from '../../../public/portfolioData.json'

export const getAllPortfolioPaths = async () => {
    const data = pageData.data.map((item) => item.title)
    return data.map((item) => {
        return {
            params: {
                title: item.replace(/\.md$/, ''),
            },
        }
    })
}
