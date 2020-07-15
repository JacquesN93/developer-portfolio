import Head from 'next/head';
import Header from './Header';

const Layout = (props) => (
    <div>
        <Head>
            <title>Jacques Portfolio</title>
            <link rel = "stylesheet" href = "https://bootswatch.com/4/spacelab/bootstrap.css"></link>
        </Head>
        <Header />
        {props.children}
    </div>
)

export default Layout