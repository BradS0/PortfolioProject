import Head from 'next/head'

const PageLayout = ({ children, title }) => (
    <>
        {title && (
            <Head>
                <title>{title}</title>
            </Head>
        )}
        {children}
    </>
)

export default PageLayout
