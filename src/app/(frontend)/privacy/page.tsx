import React from 'react'

import styles from './privacy.module.css'

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <section className={styles.contentSection}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>Privacy Policy</h1>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Key Definitions</h2>
            <p className={styles.paragraph}>
              The following definitions contained in section 1 of POPI are of importance:
            </p>
            <p className={styles.paragraph}>
              ‘<strong>Data subject</strong>’ means the person to whom personal information relates.
            </p>
            <p className={styles.paragraph}>
              ‘<strong>Information officer</strong>’ means the person(s) as identified in this
              policy.
            </p>
            <p className={styles.paragraph}>
              ‘<strong>Personal information</strong>’ means information relating to an identifiable,
              living, natural person, and where applicable, an identifiable, existing juristic
              person, including but not limited to the person’s race, gender, sex, pregnancy,
              marital status, national, ethnic or social origin, colour, sexual orientation, age,
              physical or mental health, well-being, disability, religion, conscience, belief,
              culture, language, and birth.
            </p>
            <p className={styles.paragraph}>
              ‘<strong>Processing</strong>’ means any operation or activity concerning personal
              information, including collection, receipt, recording, organisation, storage,
              updating, retrieval, use, dissemination, merging, linking, restriction, degradation,
              erasure, or destruction of information.
            </p>
            <p className={styles.paragraph}>
              ‘<strong>Record</strong>’ means any recorded information regardless of form or medium,
              in the possession or under the control of a responsible party, regardless of whether
              it was created by that party and regardless of when it came into existence.
            </p>
            <p className={styles.paragraph}>
              ‘<strong>Responsible party</strong>’ means a public or private body or any other
              person which, alone or in conjunction with others, determines the purpose of and means
              for processing personal information.
            </p>
            <p className={styles.paragraph}>
              ‘<strong>Special personal information</strong>’ means information relating to the
              religious or philosophical beliefs, race or ethnic origin, trade union membership,
              political persuasion, health or sex life, biometric information or the criminal
              behaviour of a data subject.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Information Officer (internal)</h2>
            <p className={styles.paragraph}>
              Should you have any questions, complaints, or suggestions regarding the processing of
              personal information, contact our Information Officers:
            </p>
            <p className={styles.paragraph}>Robert Allen • 021 905 1205 • rob@meshco.co.za</p>
            <p className={styles.paragraph}>
              Alicia Koegelenberg • 021 905 1205 • akoegelenberg@meshco.co.za
            </p>
            <p className={styles.paragraph}>
              You may contact our Information Officers regarding objections to processing, requests
              for deletion, destruction, or correction of your personal information, or complaints
              relating to the processing of your personal information.
            </p>
            <p className={styles.paragraph}>
              Our Information Officer is responsible for encouraging and ensuring compliance with
              POPI, dealing with requests, and working closely with the Information Regulator when
              necessary.
            </p>
            <p className={styles.paragraph}>
              In addition, the Information Officer ensures that compliance frameworks are
              implemented and monitored, risk analyses are conducted quarterly, manuals in terms of
              sections 14 and 51 of PAIA are maintained, and training sessions on POPI are held
              regularly.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Information Regulator (external)</h2>
            <p className={styles.paragraph}>
              You may direct complaints or requests regarding personal information directly to the
              Information Regulator at{' '}
              <a className={styles.link} href="mailto:inforeg@justice.gov.za">
                inforeg@justice.gov.za
              </a>
              .
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Action Plan and Information Policies</h2>
            <p className={styles.paragraph}>
              With legal assistance, we have implemented a POPI action plan that includes risk
              analyses, appointing Information Officers, developing policies, and creating a
              strategy for continued compliance. We maintain Privacy, POPI, and Operator policies to
              regulate internal and third-party processing of personal information.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Description of Business Activities</h2>
            <p className={styles.paragraph}>
              Meshco is a South African manufacturer of wire and wire products, servicing the
              Construction, Security, Agricultural, Industrial, and Mining sectors locally and
              internationally.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Processing of Personal Information</h2>
            <p className={styles.paragraph}>
              Section 18 of POPI requires us to inform you that your personal information may be
              processed for the purpose it was provided, and only for that purpose. The provision of
              personal information is voluntary, but failure to supply it may affect our ability to
              provide services.
            </p>
            <p className={styles.paragraph}>
              By engaging our services, you consent to the processing of your personal information
              in line with the purpose for which it was supplied.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              Retention and Deletion of Personal Information
            </h2>
            <p className={styles.paragraph}>
              Records are retained for five years from the date of last entry, in line with SARS
              guidelines. Thereafter they will be destroyed, deleted, or de-identified in a manner
              that prevents reconstruction. Hard copies are shredded after the retention period.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Grounds for Processing Personal Information</h2>
            <p className={styles.paragraph}>
              We rely on the grounds listed in Section 11 of POPI: consent, contractual necessity,
              legal obligation, protection of a legitimate interest, or legitimate interest of
              Meshco or a third party.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              Grounds for Processing Special Personal Information
            </h2>
            <p className={styles.paragraph}>
              Special personal information is processed only with consent or where required for
              legitimate purposes, such as identifying individuals or complying with laws designed
              to protect or advance persons disadvantaged by unfair discrimination.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Your Rights</h2>
            <p className={styles.paragraph}>
              As a data subject, you have rights to be informed, access, correct, delete, or object
              to the processing of your personal information; to object to direct marketing; to not
              be subject to automated decisions; to lodge complaints with the Information Regulator;
              and to institute civil proceedings.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Your Duty</h2>
            <p className={styles.paragraph}>
              We request accurate and complete personal information to provide our services. Please
              notify us of any updates to your information so we can maintain accurate records.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Forms</h2>
            <p className={styles.paragraph}>
              Contact our Information Officer to obtain forms for objections, corrections or
              deletions, consent for direct marketing, or complaints regarding personal information.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              Conditions for the Lawful Processing of Personal Information
            </h2>
            <p className={styles.paragraph}>
              We comply with POPI’s conditions: accountability, processing limitation, purpose
              specification, further processing limitation, information quality, openness, security
              safeguards, and data subject participation.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Security Safeguards</h2>
            <p className={styles.paragraph}>
              We implement technical and organisational measures to protect personal information,
              including secure Wi-Fi, controlled access, data backups, software updates, and
              employee awareness programs. We work with IT providers to ensure safeguards remain
              current.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Data Subject Participation</h2>
            <p className={styles.paragraph}>
              Data subjects may request confirmation of personal information held, request deletion
              or correction, and will be informed if personal information is accessed by an
              unauthorized individual.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Steps in Event of a Compromise</h2>
            <p className={styles.paragraph}>
              In the event of a data breach, we will notify service providers, assess the breach,
              inform affected parties, notify the Information Regulator and insurers, and review
              safeguards to prevent recurrence.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              Cross-Border Transmission of Personal Information
            </h2>
            <p className={styles.paragraph}>
              Personal information may be transmitted to other countries only when compliant with
              POPI and, where applicable, foreign data protection laws. We do not send special
              personal information abroad unless authorised by POPI.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Personal Information of Children</h2>
            <p className={styles.paragraph}>
              We do not process personal information of children in the ordinary course of business.
              If required, consent from a competent person (parent or guardian) or other POPI
              authorisation will be obtained.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Account Numbers</h2>
            <p className={styles.paragraph}>
              We will never sell, obtain, or disclose account numbers (including bank or credit card
              details) without consent.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Correspondence</h2>
            <p className={styles.paragraph}>
              We communicate with clients as required in the ordinary course of business and only
              send marketing communications with consent or where permitted by law. You can opt out
              at any time.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Conclusion</h2>
            <p className={styles.paragraph}>
              The Meshco team is committed to complying with POPI and protecting personal
              information. Contact our Information Officer with any queries regarding personal
              information processing.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
