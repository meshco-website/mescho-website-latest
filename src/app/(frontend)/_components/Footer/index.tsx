'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Footer.module.css'

const Footer = () => {
  const pathname = usePathname()
  const isContactUsPage = pathname === '/contactus'

  return (
    <footer className={styles.footer}>
      {!isContactUsPage && (
        <section className={styles.getInTouch}>
          <h2 className={styles.getInTouchHeading}>Get in touch</h2>
          <p className={styles.getInTouchText}>
            Contact us for expert advice, pricing, and custom solutions.
          </p>
          <Link href="/contactus" className={styles.button}>
            Contact Us
          </Link>
        </section>
      )}

      <section className={styles.preFooter}>
        <div className={styles.preFooterContainer}>
          <div className={styles.preFooterColumn}>
            <h3 className={styles.preFooterHeading}>Get in touch</h3>
            <p className={styles.preFooterText}>
              <a href="tel:+27219051205" className={styles.preFooterLink}>
                +27 21 905 1205
              </a>
              <br />
              <a href="mailto:sales@meshco.co.za" className={styles.preFooterLink}>
                sales@meshco.co.za
              </a>
            </p>
          </div>
          <div className={styles.preFooterColumn}>
            <h3 className={styles.preFooterHeading}>Trading hours</h3>
            <p className={styles.preFooterText}>
              Monday to Thursday: 08h00 - 17h00
              <br />
              Friday: 08h00 - 15h00
              <br />
              Cut-off for collections is 40 minutes before closing time
            </p>
          </div>
          <div className={styles.preFooterColumn}>
            <h3 className={styles.preFooterHeading}>Address</h3>
            <p className={styles.preFooterText}>
              Meshco, Corner of Range Road and Wimbledon Road
              <br />
              Blackheath, 7580, Cape Town,
              <br />
              South Africa
            </p>
          </div>
        </div>
      </section>

      {/* Existing Black Footer Section */}
      <section className={styles.blackFooter}>
        <div className={styles.container}>
          <div className={styles.topSection}>
            <div className={styles.logo}>
              <Link href="/" className={styles.logoLink}>
                <svg
                  width="226"
                  height="36"
                  viewBox="0 0 226 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.logoSvg}
                >
                  <path
                    d="M7.38098 1.10767L75.0739 34.9505"
                    stroke="#DEAF38"
                    strokeWidth="0.730788"
                  />
                  <path
                    d="M218.104 0.96167L150.411 34.8045"
                    stroke="#DEAF38"
                    strokeWidth="0.730788"
                  />
                  <path
                    d="M40.6172 1.20288L82.2356 34.9507"
                    stroke="#DEAF38"
                    strokeWidth="0.730788"
                  />
                  <path
                    d="M184.868 1.0564L143.249 34.8042"
                    stroke="#DEAF38"
                    strokeWidth="0.730788"
                  />
                  <path
                    d="M71.1422 0.333008L91.692 34.8554"
                    stroke="#DEAF38"
                    strokeWidth="0.730788"
                  />
                  <path
                    d="M154.342 0.187012L133.793 34.7094"
                    stroke="#DEAF38"
                    strokeWidth="0.730788"
                  />
                  <path
                    d="M99.0511 0.552246L105.679 34.4389"
                    stroke="#DEAF38"
                    strokeWidth="0.730788"
                  />
                  <path
                    d="M126.434 0.40625L119.806 34.2929"
                    stroke="#DEAF38"
                    strokeWidth="0.730788"
                  />
                  <path d="M225.879 6.25244H0" stroke="#DEAF38" strokeWidth="0.730788" />
                  <path
                    d="M209.195 14.7444L16.6766 14.7444"
                    stroke="#DEAF38"
                    strokeWidth="0.730788"
                  />
                  <path
                    d="M193.264 21.3652L32.6078 21.3652"
                    stroke="#DEAF38"
                    strokeWidth="0.730788"
                  />
                  <path
                    d="M177.947 27.3723L47.9251 27.3723"
                    stroke="#DEAF38"
                    strokeWidth="0.730788"
                  />
                  <path
                    d="M164.252 30.8948L61.62 30.8948"
                    stroke="#DEAF38"
                    strokeWidth="0.730788"
                  />
                </svg>
                <span className={styles.logoText}>MESHCO</span>
              </Link>
            </div>
            <div className={styles.topSectionRight}>
              <div className={styles.linksColumns}>
                <div className={styles.column}>
                  <Link href="/products" className={styles.heading}>
                    Products
                  </Link>
                  <Link href="/products/wire" className={styles.link}>
                    Wire
                  </Link>
                  <Link href="/products/reinforcing" className={styles.link}>
                    Reinforcing
                  </Link>
                  <Link href="/products/fencing" className={styles.link}>
                    Fencing
                  </Link>
                  <Link href="/products/wirewall" className={styles.link}>
                    WireWall fencing
                  </Link>
                  <Link href="/products/fasteners" className={styles.link}>
                    Fasteners
                  </Link>
                  <Link href="/products/mining-support" className={styles.link}>
                    Mining Support
                  </Link>
                  <Link href="/products/utility" className={styles.link}>
                    Utility
                  </Link>
                </div>
                <div className={styles.column}>
                  <Link href="/whoweare/about-us" className={styles.heading}>
                    Who We Are
                  </Link>
                  <Link href="/whoweare/about-us" className={styles.link}>
                    About Us
                  </Link>
                  <Link href="/industries" className={styles.link}>
                    Industries We Serve
                  </Link>
                  <Link href="/whoweare/support" className={styles.link}>
                    Support
                  </Link>
                  <Link href="/whoweare/commitment" className={styles.link}>
                    Commitment to Service
                  </Link>
                  <Link href="/whoweare/careers" className={styles.link}>
                    Careers
                  </Link>
                </div>
              </div>
              <div className={styles.contactButtonContainer}>
                <Link href="/contactus" className={styles.button}>
                  Contact Us
                </Link>
                <Image
                  src="/ISO9001-certified.webp"
                  alt="ISO 9001 certified"
                  width={100}
                  height={100}
                  className={styles.isoLogo}
                />
              </div>
            </div>
          </div>
          <div className={styles.bottomSection}>
            <span>© 2026 MESHCO. All Rights Reserved.</span>
            <div className={styles.bottomLinks}>
              <Link href="/terms" className={styles.bottomLink}>
                Terms & Conditions
              </Link>
              <Link href="/privacy" className={styles.bottomLink}>
                Privacy Policy
              </Link>
              <a
                href="/MESHCO PAIA MANUAL.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bottomLink}
              >
                PAIA Manual
              </a>
              <div className={styles.socialIcons}>
                <Link
                  href="https://za.linkedin.com/company/meshco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/linkedin.png" alt="LinkedIn" width={32} height={32} />
                </Link>
                <Link
                  href="https://www.instagram.com/meshcowireproducts?igsh=d2lyb2g0dDZwY3p0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/insta.png" alt="Instagram" width={32} height={32} />
                </Link>
                <Link
                  href="https://www.youtube.com/watch?v=qkUgOVArjRk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/youtube.png" alt="YouTube" width={32} height={32} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
