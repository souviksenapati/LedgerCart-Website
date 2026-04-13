import LegalLayout from './components/LegalLayout'

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="April 7, 2026">
      <p>
        Welcome to LedgerCart IT Solutions. These Terms of Service ("Terms") govern your access to and use of our website, the LedgerCart ERP platform, and our custom software engineering services. By accessing or using our services, you agree to be bound by these Terms.
      </p>

      <h2>1. Service Provision & Subscriptions</h2>
      <p>
        LedgerCart grants you a limited, non-exclusive, non-transferable, and revocable license to access and use our software platforms, including LedgerCart ERP, subject strictly to your subscription tier and signed Service Level Agreements (SLAs).
      </p>
      <ul>
        <li><strong>B2B Operations:</strong> Our enterprise products are intended for lawful business use. You are responsible for all actions executed under your organizational accounts.</li>
        <li><strong>Account Integrity:</strong> You must maintain the technical security of your administrator credentials. LedgerCart is not liable for data breaches resulting from compromised local passwords.</li>
      </ul>

      <h2>2. Custom IT Services</h2>
      <p>
        If engaging LedgerCart for "Custom Software Engineering", "Cloud Engineering", or "Digital Transformation":
      </p>
      <ul>
        <li>Specific project deliverables, timelines, and IP transfer details are strictly governed by the overriding Master Services Agreement (MSA) signed between LedgerCart and the client.</li>
        <li>Unless explicitly stated in an MSA, LedgerCart retains foundational IP rights to uncompiled, generic backend frameworks developed during the term.</li>
      </ul>

      <h2>3. Acceptable Use Policy (AUP)</h2>
      <p>You agree not to misuse the LedgerCart platform. You explicitly may not:</p>
      <ul>
        <li>Attempt to probe, scan, or test the vulnerability of any LedgerCart system, network, or authentication layer without written permission.</li>
        <li>Deploy DDoS attacks, upload malicious executables, or interfere with access for any other user or host.</li>
        <li>Use our infrastructure to mine cryptocurrency or operate decentralized ledgers without explicit commercial licenses.</li>
      </ul>

      <h2>4. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, LedgerCart IT Solutions, its directors, and employees shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues. LedgerCart ERP is provided on an "as is" and "as available" basis.
      </p>

      <h2>5. Termination</h2>
      <p>
        We reserve the right to suspend or terminate your access to LedgerCart ERP or related services immediately, without prior notice, if you breach these Terms of Service. Upon termination, your right to use the software will instantly cease.
      </p>

      <h2>6. Governing Law</h2>
      <p>
        These terms shall be governed by and constructed in accordance with international commercial arbitration standards, and specifically the jurisdiction outlining LedgerCart's global headquarters, without regard to its conflict of law principles.
      </p>
    </LegalLayout>
  )
}
