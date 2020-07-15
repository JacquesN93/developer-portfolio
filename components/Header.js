import Link from 'next/link'

const Header = () => (
    <div className = "header-div">
        <Link href = "/index">
            <a>Home</a>
        </Link>
        <Link href = "/about">
            <a>About</a>
        </Link>
        <Link href = "projects">
            <a>Projects</a>
        </Link>
        <Link href = "/contact">
            <a>Contact Me</a>
        </Link>
        <style jsx>
            {`
                Link {
                    font-family: arial;
                    text-decoration: none;
                    font-size: 14px;
                    display: inline-flex;
                }
                .header-div {
                    height: 50px;
                }
                a {
                    padding: 30px;
                    color: black;
                }
                a:hover {
                    text-decoration: none
                    color: aquamarine;
                }
            `}
        </style>
        <style global jsx>
            {`
                body {
                    margin: 35px
                }
            `}
        </style>
    </div>
)

export default Header;
