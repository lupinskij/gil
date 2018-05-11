import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Fade } from 'react-reveal'
import config from '../../../config/SiteConfig'
import styles from './Navigation.module.scss'

export default class Navigation extends Component {

	render() {
		return (
			<header className="container container--wrapper">
				<Fade down duration={2000} className="container container--content container--navigation">

					<div className={styles.name}>
						<Link to="/">
							<h1>
								Brendan Gilliam
								<span>Photography Director</span>
							</h1>
						</Link>
					</div>
					<div className={styles.socialMedia}>
						<span>
							<a
								href="https://www.vimeo.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								Vimeo
								<span></span>
							</a>
							<a
								href="https://www.linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
								<span></span>
							</a>
							<a
								href="mailto:hello@brandongilliam.com"
								rel="noopener noreferrer"
							>
								Email
								<span></span>
							</a>
						</span>
					</div>
				</Fade>
			</header>
		)
	}
}
