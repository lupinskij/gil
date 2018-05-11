import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'
import SEO from '../components/SEO/SEO'
import ProjectListing from '../components/ProjectListing/ProjectListing'
import Footer from '../components/Footer/Footer'
import placeholder from '../../static/placeholder.jpg'

export default class Index extends React.Component {
	render() {
		const projectEdges = this.props.data.allMarkdownRemark.edges
		return (
      <div>
  			<div className="container container--wrapper">
  				<Helmet>
  					<title>{config.siteTitle}</title>
          </Helmet>
          <div className="container container--content">
            <h2 className="text-intro">Freelance Photography<br />Director located in <br />Brooklyn, NY.</h2>
          </div>
        </div>
        <div className="container home-intro">
          <div className="container container--wrapper">
            <div className="container container--content">
              <div>
                <img src={placeholder} className="home-intro-video" alt="" />
              </div>
              <div className="container container--content">
                <aside className="blurb-intro">
                  <p>For freelance, collaboration, or questions please do not hesitate to get in touch!<br />hello@brendangilliam.com</p>
                </aside>
              </div>
            </div>
          </div>
        </div>
        <div className="container index-container">
  				<div>
  					<ProjectListing projectEdges={projectEdges} />
  				</div>
  				<Footer />
  			</div>
      </div>
		)
	}
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            service
            client
            cover {
              childImageSharp {
                sizes(
                  maxWidth: 850
                  quality: 90
                  traceSVG: { color: "#f3f3f3" }
                ) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
