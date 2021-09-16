import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


// markup
const IndexPage = () => {
    return (
        <Layout pageTitle='Home'>
            <p>The home page of the site</p>
            <StaticImage
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="../images/nastolka.jpg"
            />
        </Layout>
    )
}

export default IndexPage
