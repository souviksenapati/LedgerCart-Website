import LegalLayout from './components/LegalLayout'

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="April 7, 2026">
      <p>
        At LedgerCart IT Solutions ("LedgerCart", "we", "us", or "our"), we respect your privacy and are committed to protecting the personal data of our users, clients, and partners. This Privacy Policy details how we collect, use, process, and protect your information when you use our website, LedgerCart ERP software, and our custom IT services.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect information to provide better services to all our users. The types of personal information we may collect include:</p>
      <ul>
        <li><strong>Contact Information:</strong> Name, email address, phone number, and physical address provided during inquiries or account registration.</li>
        <li><strong>Professional Details:</strong> Information submitted via our Careers portal (e.g., CVs, employment history).</li>
        <li><strong>Usage Data:</strong> Information about your network, device, and interaction with our web platforms, including IP addresses, browser types, and session duration.</li>
        <li><strong>Service Data:</strong> System telemetry, aggregated database metrics, and configuration data relative to your use of LedgerCart ERP or requested IT services.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>Your data enables us to deliver secure and efficient enterprise software solutions. We use the collected data to:</p>
      <ul>
        <li>Provide, maintain, and improve our services (including LedgerCart ERP and custom software deployments).</li>
        <li>Process transactions and send related administrative documentation.</li>
        <li>Monitor and mitigate security risks, fraud, and abuse of our systems.</li>
        <li>Communicate with you regarding updates, technical notices, and customer support.</li>
      </ul>

      <h2>3. Data Sharing & Third-Party Processors</h2>
      <p>LedgerCart does not sell your personal information. We may share necessary data with trusted third parties exclusively for operational purposes, such as:</p>
      <ul>
        <li>Cloud infrastructure providers (e.g., Supabase, AWS) who host our databases and execute secure storage.</li>
        <li>Payment processors operating under strict PCI-DSS compliance.</li>
        <li>Legal authorities, only if required by a strict legal mandate to comply with enforceable governmental requests.</li>
      </ul>

      <h2>4. Your GDPR & CCPA Data Rights</h2>
      <p>Depending on your geographic location, you possess inherent rights regarding your personal data. Users operating within the European Economic Area (EEA) under the GDPR, and California residents under the CCPA, have the right to:</p>
      <ul>
        <li><strong>Request Access:</strong> Obtain a copy of the personal data we hold about you.</li>
        <li><strong>Request Erasure:</strong> Ask us to delete your personal data (the "right to be forgotten"), subject to technical and legal constraints.</li>
        <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications and analytics tracking.</li>
      </ul>

      <h2>5. Security of Your Information</h2>
      <p>
        We utilize enterprise-grade cryptographic protocols to secure your data at rest and in transit. However, no data transmission over the Internet can be guaranteed to be 100% secure. You govern access to your own endpoints and internal networks. For detailed technical specifications, please read our <a href="/legal/security">Security & Compliance outline</a>.
      </p>

      <h2>6. Changes to this Policy</h2>
      <p>
        LedgerCart IT Solutions reserves the right to update this Privacy Policy dynamically as our software capabilities expand. We will notify administrative users of significant changes via email or system alerts.
      </p>
    </LegalLayout>
  )
}
