import Layout from '../components/Layout'

const Projects = () => (
    <Layout>
    <div>
        <h2>Projects I Worked On</h2>
        <ul>
            <li>Jewellery website</li>
            <p>One of the first major tasks that I had to complete was a building an interactive 
                website for an ecommerce store with 3 main pages. The site includes users being able
                to add and remove items from a list, as well as being able to access their cart once
                they were done shopping.
            </p><br />
            <li>iTunes Search</li>
            <p>I was tasked to create a web application where users could search for items on iTunes such as 
                movies, songs and audiobooks. As soon as users started searching, a list of relevant songs displayed
                in the form of a list.
            </p><br />
            <li>To Do List</li>
            <p>This task involved creating an application using React that would enable users to enter tasks into a 
                field and submitting the data to be added to a list.
            </p><br />
        </ul>
        <style jsx>
            {`
            h2 {
            text-decoration: underline;
            color: grey;
            font-family: arial;
            }
            `}
        </style>
    </div>
</Layout>
)

export default Projects;
