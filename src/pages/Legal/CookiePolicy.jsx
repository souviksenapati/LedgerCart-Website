import LegalLayout from './components/LegalLayout'

export default function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="April 7, 2026">
      <p>
        This Cookie Policy explains how LedgerCart IT Solutions ("we", "us", or "our") uses cookies and similar cryptographic tracking technologies to recognize you when you visit our website and use the LedgerCart ERP platform.
      </p>

      <h2>1. What are Cookies?</h2>
      <p>
        Cookies are small data files stored directly on your computer or mobile device. They are widely used by enterprise platforms in order to make websites work, or work more efficiently, as well as to provide authenticated sessions and system telemetry.
      </p>

      <h2>2. Categories of Cookies We Use</h2>
      <p>Our infrastructure deploys cookies categorized by their operational necessity:</p>
      <ul>
        <li><strong>Strictly Necessary Cookies:</strong> These are essential for the LedgerCart platforms to function. They include security tokens, authentication footprints (e.g., Supabase Auth JWTs), and load-balancing variables. The system cannot function without these, and they cannot be disabled in our systems.</li>
        <li><strong>Performance & Analytics Cookies:</strong> We use these to mathematically aggregate how users interact with our website. This helps us optimize UX and discover broken infrastructure. All analytical data is anonymized.</li>
        <li><strong>Functional & Preference Cookies:</strong> These allow our platform to remember choices you make (such as your User Interface Dark/Light mode preference, or your explicit 'Consent' toggle).</li>
      </ul>

      <h2>3. Managing Your Preferences</h2>
      <p>
        Upon your first visit to the LedgerCart website, you are presented with our Consent Manager component. By selecting "Reject Optional", we will enforce a strict policy where only authenticated security cookies and necessary tokens are processed.
      </p>
      <p>
        You have the right to decide whether to accept or reject optional cookies. You can exercise your cookie rights by modifying your browser settings to reject cookies entirely; however, if you choose to do so, your access to authenticated zones (such as the LedgerCart Admin Dashboard) will be structurally impossible.
      </p>

      <h2>4. Updates to this Policy</h2>
      <p>
        We may update this Cookie Policy periodically to align with global web standards (e.g., changes to ePrivacy directives or GDPR rules). Please revisit this page regularly for the latest technical information.
      </p>
    </LegalLayout>
  )
}
