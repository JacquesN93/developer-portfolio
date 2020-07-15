import Layout from '../components/Layout'
import Link from 'next/link'

const Contact = () => (
<Layout>
    <div>
        <h2>Get in Touch</h2>
        <p>for more information, feel free to contact me by using the contact information supplied below.</p>
        <br />
        <h3>Phone</h3>
        <p>082 378 6730</p>
        <h3>Email</h3>
        <Link href = "naudejacques81@gmail.com">
            <a>Send an email...</a>
        </Link>

        <style jsx>
        {`
            p {
                color:grey;
                font-family: arial;
            }
            h2 {
                text-decoration: underline;
                color: grey;
                font-family: arial;
            }
            h3 {
                text-decoration: underline;
                color: grey;
                font-family: arial;
            }
        `}
        </style>
    </div>
</Layout>
)

export default Contact;