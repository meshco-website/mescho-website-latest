import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.getInTouch}>
        <h2 className={styles.getInTouchHeading}>Get in touch</h2>
        <p className={styles.getInTouchText}>
          Contact us for expert advice, pricing, and custom solutions.
        </p>
        <Link href="/contactus" className={styles.button}>
          Contact Us
        </Link>
      </section>

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
              <Link href="/">
                <Image src="/logo.png" alt="Mescho Logo" width={326} height={106} />
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
                  <Link href="/whoweare/industries" className={styles.link}>
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
              <div className={styles.contactButton}>
                <Link href="/contactus" className={styles.button}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.bottomSection}>
            <span>© 2025 MESHCO. All Rights Reserved</span>
            <Link href="/terms" className={styles.bottomLink}>
              Terms & Conditions
            </Link>
            <Link href="/privacy" className={styles.bottomLink}>
              Privacy Policy
            </Link>
            <Link href="/paia" className={styles.bottomLink}>
              PAIA Manual
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Image src="/youtube.png" alt="YouTube" width={24} height={24} />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/insta.png" alt="Instagram" width={24} height={24} />
            </Link>
            <span className={styles.credit}>
              Website by{' '}
              <Link
                href="https://moderndaystrategy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.creditLink}
              >
                Modern Day Strategy
              </Link>
            </span>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
