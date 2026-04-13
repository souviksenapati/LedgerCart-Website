import LegalLayout from './components/LegalLayout'

export default function Security() {
  return (
    <LegalLayout title="Security & Compliance" lastUpdated="April 7, 2026">
      <p>
        At LedgerCart IT Solutions, security is not an afterthought; it is the foundational layer of our architecture. As the operator of the LedgerCart ERP platform and custom enterprise deployments, we adhere to the most aggressive cryptographic standards globally.
      </p>

      <h2>1. Infrastructure & Encryption</h2>
      <p>Our network topology is designed to withstand catastrophic failure and malicious intrusion:</p>
      <ul>
        <li><strong>Data in Transit:</strong> All communication between end-users, our APIs, and the database is shielded by forced TLS 1.3 encryption. Unencrypted HTTP traffic is instantly dropped and rejected.</li>
        <li><strong>Data at Rest:</strong> Core persistence layers are encrypted natively using AES-256 protocols. LedgerCart ERP databases utilize strictly gated Row-Level Security (RLS).</li>
        <li><strong>Key Rotation:</strong> Cryptographic markers and environment variables are rotated on rigorous, automated schedules.</li>
      </ul>

      <h2>2. Operational Security & Architecture</h2>
      <p>All LedgerCart source code and infrastructure operations occur within hardened zero-trust environments:</p>
      <ul>
        <li><strong>Zero Trust VPM:</strong> Our internal engineers possess restricted, mathematically bounded access to production environments. Access requires multi-factor authentication (MFA) and cryptographic hardware keys.</li>
        <li><strong>Continuous CI/CD Auditing:</strong> Every change to the LedgerCart repository triggers automated static analysis, vulnerability scanning, and dependency regression testing before compiling into the production baseline.</li>
        <li><strong>Disaster Recovery:</strong> Multi-region redundant failovers ensure that LedgerCart ERP maintains industry-standard 99.99% uptime.</li>
      </ul>

      <h2>3. Vulnerability Disclosure & Bug Bounty</h2>
      <p>
        We believe that working with skilled cybersecurity researchers across the globe is crucial to maintaining a hardened defensive posture. 
      </p>
      <p>
        If you believe you have discovered a vulnerability within LedgerCart's web platform, our ERP software, or our APIs, we highly encourage you to report it.
      </p>
      <ul>
        <li>Please send comprehensive reproduction steps, PoC (Proof of Concept) code, and screenshots to our security team via the Contact Support portal.</li>
        <li><strong>Do not</strong> extract or modify any live user data, or perform destructive DDoS testing.</li>
        <li>Valid vulnerability reports (e.g., Authentication bypass, SQLi, Remote Code Execution) regarding production attack vectors may be eligible for a monetary reward entirely at the discretion of the LedgerCart CTO.</li>
      </ul>

      <h2>4. Compliance Standards</h2>
      <p>
        We continuously architect our products to comply with broad regulatory requirements, ensuring that enterprise clients adopting LedgerCart ERP do not violate their own geographic mandates. We actively monitor frameworks related to GDPR, CCPA, and SOC-2 guidelines.
      </p>
    </LegalLayout>
  )
}
