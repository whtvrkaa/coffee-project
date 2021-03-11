import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import {FaGulp} from 'react-icons/fa'
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from './../components/Home/Info'

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
 
<BackgroundSection
 img={data.img.childImageSharp.fluid} title="about us" styleClass="about-background"/>
<Info/>
  </Layout>
);
export const query = graphql`
{
  img: file(relativePath:{eq:"about-background.jpeg"}){
  childImageSharp{
  
  fluid
  {...GatsbyImageSharpFluid

  }
}
  }
  }
`
export default AboutPage;
