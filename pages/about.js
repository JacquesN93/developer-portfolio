import Layout from '../components/Layout'

const About = () => (
<Layout>
    <div>
        <h2>More About Me</h2>
        <img src = "./static/jacques-profile-pic.jpg" alt = "Jacques Naude profile picture" />
        <p>I'm currently enrolled as a student at Hyperion Development, and I am in the 
            process of completing my full-stack web developer course. I started studying this course 
            to further my career in the digital world, as I currently work as an SEO at an agency in Cape Town
        </p><br />
        <p>To become even more proficient as a web developer, I've enrolled for another full-stack web dev course
            that I will start with as soon as I have completed the course I an currently busy with. This is to finetune 
            any areas that I don't understand, in order to become the best web developmer I possibly can
        </p>
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
                img {
                    height: 200px;
                    width: 160px;
                    margin: 25px;
                    border-radius: 60px;
                }
            `}
            </style>
    </div>
</Layout> 
)

export default About;