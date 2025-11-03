import React from 'react'

import styles from './terms.module.css'

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.contentSection}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>{`Terms & Conditions`}</h1>

          <p className={styles.meta}>Last updated: 07.06.2025</p>

          <p className={styles.paragraph}>
            Welcome to Meshco. By engaging with our business, website, or placing an order with us,
            you agree to the following terms and conditions. Please read them carefully.
          </p>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>1. General</h2>
            <p className={styles.paragraph}>
              Meshco (Pty) Ltd is a registered South African company. These terms apply to all
              transactions between Meshco and its customers unless otherwise agreed in writing.
            </p>
            <p className={styles.paragraph}>
              Any terms or conditions proposed by the Purchaser that conflict with or attempt to
              amend these Terms and Conditions shall be deemed invalid unless expressly agreed to in
              writing by both parties.
            </p>
            <p className={styles.paragraph}>
              No addition, alteration, or cancellation of these Terms and Conditions shall be
              binding unless recorded in writing and signed by both the Purchaser and the Seller.
            </p>
            <p className={styles.paragraph}>
              Any extension of time or other leniency granted by the Seller shall not be interpreted
              as a waiver of any of the Seller’s rights, nor shall it prevent the Seller from
              enforcing its rights at any time, whether in relation to past or future breaches.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>2. Orders &amp; Pricing</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                All quotations are valid for 30 days, unless stated otherwise.
              </li>
              <li className={styles.listItem}>
                Prices do not include VAT or delivery charges unless otherwise specified.
              </li>
              <li className={styles.listItem}>
                Meshco reserves the right to modify pricing in response to fluctuations in raw
                material costs or to correct any errors in published rates.
              </li>
              <li className={styles.listItem}>
                Orders are subject to availability and acceptance by Meshco. No order submitted by
                the Purchaser shall constitute a binding contract with the Seller unless expressly
                accepted in writing by the Seller.
              </li>
              <li className={styles.listItem}>
                Once an order has been formally accepted by the Seller, the Purchaser shall have no
                unilateral right, for any reason whatsoever, to cancel or modify the order.
              </li>
            </ul>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>3. Payment Terms</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>C.O.D. purchases are strictly nett.</li>
              <li className={styles.listItem}>
                Standard payment terms are strictly 30 days from statement date for approved account
                customers only.
              </li>
              <li className={styles.listItem}>
                Should the Purchaser fail to pay any invoice in full within 30 days from the
                statement date, such failure shall constitute an event of default under this
                agreement. In the event of default, all outstanding amounts, including unpaid
                invoices and accrued interest, shall immediately become due and payable without
                further notice or reference to any other clause in this agreement.
              </li>
              <li className={styles.listItem}>
                Any sum not paid when due shall bear interest at the maximum rate permitted by the
                National Credit Act No. 43 of 2005, which Meshco reserves the right to update in
                writing from time to time based on the prevailing prescribed rate by the Minister of
                Finance. Furthermore, the Purchaser shall be liable to reimburse Meshco for all
                costs incurred in the collection of overdue amounts, including, but not limited to,
                legal fees, collection agency charges, and administrative costs.
              </li>
              <li className={styles.listItem}>
                All returns are subject to a 10% handling charge. In addition to the handling
                charge, where external transport costs have been incurred to deliver the goods, this
                amount will not be refunded.
              </li>
              <li className={styles.listItem}>
                No goods will be accepted for return or credit unless prior written authorisation
                has been obtained, and the request is made within seven (7) days of delivery.
              </li>
              <li className={styles.listItem}>
                In the event of a payment default as defined above, Meshco shall be entitled, at its
                sole discretion, to immediately suspend all further deliveries and/or services until
                such time as all outstanding amounts (including accrued interest and recovery costs)
                have been received. Meshco reserves the right to cancel any pending orders or
                ongoing contracts without incurring any further liability. This suspension or
                cancellation shall be in addition to and not in substitution for any other legal
                remedies available to Meshco.
              </li>
              <li className={styles.listItem}>
                The Purchaser understands that trade facilities may be revised or withdrawn by the
                Seller without notice and in the Seller’s absolute discretion.
              </li>
              <li className={styles.listItem}>
                Upon the failure of the Purchaser to comply with the conditions of payment, the
                Seller reserves the right to suspend further services or to require cash payment
                prior to or to cancel the sale.
              </li>
            </ul>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>4. Delivery</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Delivery lead times provided by the Seller are estimates and do not constitute a
                binding commitment unless expressly stipulated in writing.
              </li>
              <li className={styles.listItem}>
                Claims related to shortages, damages, or incorrect goods shall only be considered if
                formally reported to the Seller within forty-eight (48) hours of delivery.
              </li>
              <li className={styles.listItem}>
                Meshco shall not be held liable to the Purchaser or any third party for any failure
                to deliver, or for any delay in the delivery of goods, where such failure or delay
                results from circumstances beyond Meshco’s reasonable control. These circumstances
                may include, but are not limited to, industrial action, breakdowns of machinery,
                equipment or facilities, fire, explosion, theft, war, civil unrest, natural
                disasters, acts or regulations of authority, imposition of martial law, or
                disruptions caused by third-party providers or specification changes.
              </li>
              <li className={styles.listItem}>
                A delivery note signed by the Purchaser or any of its duly authorised
                representatives—including employees or agents—shall serve as{' '}
                <strong>prima facie evidence</strong> that the goods described therein were
                delivered in the specified quantity and received in acceptable condition.
              </li>
              <li className={styles.listItem}>
                The Seller reserves the right to withhold release of any goods until full payment
                has been received, unless the Purchaser has an active credit facility approved by
                the Seller and remains in compliance with the agreed terms.
              </li>
              <li className={styles.listItem}>
                The Seller shall issue an invoice to the Purchaser upon delivery of the goods, which
                shall reflect the applicable pricing, quantities, and payment terms.
              </li>
            </ul>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>5. Risk and Ownership</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Risk in the goods shall transfer to the Purchaser upon delivery or collection,
                whichever occurs first.
              </li>
              <li className={styles.listItem}>
                Ownership of the goods shall remain vested in Meshco until full payment—including
                any accrued interest—has been received. Notwithstanding the installation,
                modification, or use of the goods, the Purchaser shall hold such goods in a
                fiduciary capacity for Meshco. Until ownership transfers, the Purchaser shall store
                the goods separately, ensure they are clearly marked to reflect Meshco’s title, and
                maintain them in a condition satisfactory to Meshco.
              </li>
              <li className={styles.listItem}>
                Without limiting Meshco’s right to demand payment, Meshco reserves the right to
                recover possession of any goods for which payment has not been made by the due date,
                even if such goods have already been delivered or installed. The Purchaser
                irrevocably consents to Meshco accessing any site or premises where the goods are
                located to inspect or repossess them. If the goods include fence panels or other
                fencing products affixed to posts embedded in the ground, those products shall be
                treated as movable property. The Purchaser expressly agrees that Meshco may detach
                and reclaim these items without liability, and no claim—whether contractual,
                delictual, or otherwise—shall arise against Meshco as a consequence of such action.
              </li>
              <li className={styles.listItem}>
                If the Purchaser is subject to a civil judgment, becomes insolvent, fails to meet
                any payment obligation, or otherwise breaches any term of agreement with Meshco,
                Meshco shall have the right, without waiving any other remedies available, to cancel
                any outstanding orders or suspend deliveries until such default is rectified to
                Meshco’s satisfaction.
              </li>
            </ul>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>6. Returns &amp; Cancellations</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                All returns must be expressly authorised in writing by Meshco prior to the return of
                any goods.
              </li>
              <li className={styles.listItem}>
                Custom-made, cut-to-size, or specially manufactured products are non-returnable,
                except where such goods are proven to be defective.
              </li>
              <li className={styles.listItem}>
                The cancellation of an order may be subject to cancellation fees, which shall be
                determined based on the costs incurred by Meshco, including but not limited to,
                materials sourced, production initiated, labour expended, or third-party supplier
                commitments.
              </li>
            </ul>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>7. Warranty</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Meshco warrants that all products conform to the stated specifications and are free
                from manufacturing defects at delivery.
              </li>
              <li className={styles.listItem}>
                This warranty does not extend to improper use, installation, modification, or
                handling of the goods by the Purchaser or any third party.
              </li>
            </ul>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>8. Liability</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Meshco shall bear no liability <strong>for any</strong> indirect, incidental,
                special, punitive, or consequential damages, including but not limited to, loss of
                profits, loss of revenue, loss of business, or reputational harm, arising from or
                related to the sale, delivery, or use of its goods.
              </li>
              <li className={styles.listItem}>
                The maximum liability of Meshco, whether in contract, delict (tort), or otherwise,
                shall be strictly limited to the invoiced value of the goods supplied.
              </li>
              <li className={styles.listItem}>
                If Meshco’s performance of any obligation is prevented, delayed, or rendered
                impracticable due to any cause beyond its reasonable control, Meshco reserves the
                right to cancel or suspend performance without incurring liability for losses or
                damages resulting from such cancellation or suspension.
              </li>
            </ul>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>9. Intellectual Property</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                All content, trademarks, branding, logos, product designs, trade dress, and
                proprietary materials displayed on this website or within any Meshco materials
                remain the exclusive property of Meshco.
              </li>
              <li className={styles.listItem}>
                No portion of such intellectual property may be used without the prior written
                consent of Meshco.
              </li>
              <li className={styles.listItem}>
                Unauthorized use may result in legal action, including claims for injunctive relief
                and damages.
              </li>
            </ul>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>10. Information</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                The Purchaser consents to the collection and processing of personal information as
                specified in Meshco’s Privacy Policy.
              </li>
              <li className={styles.listItem}>
                Meshco may verify credit status with other creditors, financial institutions, or
                relevant third parties.
              </li>
              <li className={styles.listItem}>
                Information obtained from credit bureaus may be used to assess trade applications
                and establish terms.
              </li>
              <li className={styles.listItem}>
                Details relating to creditworthiness may be disclosed to other creditors or
                registered credit bureaus as permitted by law.
              </li>
            </ul>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>11. Jurisdiction</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                These terms are governed by the laws of the Republic of South Africa. Disputes will
                be subject to adjudication by South African courts.
              </li>
              <li className={styles.listItem}>
                The Purchaser consents to the jurisdiction of the Magistrate’s Court, though Meshco
                may proceed in any competent court.
              </li>
              <li className={styles.listItem}>
                Meshco may refer disputes to arbitration for expedited resolution, with awards
                binding and enforceable.
              </li>
            </ul>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>12. Domicilium</h2>
            <p className={styles.paragraph}>
              The Purchaser chooses as its domicilia citandi et executandi the address provided in
              the “Application for trade account” form for all purposes arising from these terms.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>13. Updates</h2>
            <p className={styles.paragraph}>
              Meshco may amend these Terms and Conditions without prior notice. Updates will be
              published on our website and take effect upon publication.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Have questions?</h2>
            <p className={styles.paragraph}>
              Please contact our team at{' '}
              <a className={styles.link} href="mailto:sales@meshco.co.za">
                sales@meshco.co.za
              </a>{' '}
              or 021&nbsp;905&nbsp;1205.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
