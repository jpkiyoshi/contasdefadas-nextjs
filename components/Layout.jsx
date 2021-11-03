import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import ScrollToTopButton from './ScrollToTopButton'

export default function Layout({ title, children }) {

    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Contas de fadas</title>
                <meta property="og:title" content='Contas de fadas' />
                <meta name="description" content='Contas de fadas description' />
                <meta property="og:type" content="website" />

                {/* <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/favicon-32x32.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png" /> */}
            </Head>

            <Header />
            
            <main>
                {children}
            </main>

            <ScrollToTopButton />
            <Footer />

        </div>
    )
}