import { useState } from 'react'
import './App.css'

const experience = [
  {
    company: 'Planet Home Lending, LLC',
    role: 'Cybersecurity Engineer',
    location: 'Remote',
    dates: 'May 2025 — Present',
    current: true,
    highlights: [
      'Detect, assess, tune, and respond to alerts and incidents across SentinelOne, Microsoft Defender XDR, Cisco XDR, and additional sources.',
      'Configure detection rules, exclusions, and policies in Microsoft Defender and SentinelOne Management Console to improve response time and security visibility.',
      'Perform threat hunting and block emergent and existing IOCs and APTs.',
      'Identify and remediate workstation, server, network device, and IoT vulnerabilities with Tenable Vulnerability Management.',
      'Lead email security modernization across 200 domains, including deliverability and SPF, DKIM, and DMARC policy configuration.',
      'Lead SIEM integration and logging modernization with critical application and infrastructure data lake integration aligned to CISA best practices.',
      'Build and audit Conditional Access policies, analyze regulatory guidance, manage Exchange Online and Cisco email security, and create operational playbooks and job aids.',
      'Identify and remediate security gaps across applications, business processes, cloud and on-prem infrastructure, EDR, IAM, and logging.',
    ],
  },
  {
    company: 'Planet Home Lending, LLC',
    role: 'IT Support Technician',
    location: 'Remote',
    dates: 'August 2024 — May 2025',
    highlights: [
      'Triage and resolve ServiceNow tickets for internal users and external vendors.',
      'Administer IAM for users and groups in Active Directory, Entra ID, Microsoft 365, and loan servicing applications.',
      'Configure and troubleshoot Windows endpoints, BitLocker, drivers, DFS, SaaS, and Citrix/Azure VDI environments.',
      'Respond to account compromises, phishing, endpoint vulnerabilities, mobile devices, and printers.',
      'Troubleshoot enterprise and SOHO networks spanning DHCP, DNS, firewalls, routing, VoIP, VPN, and wired/wireless connectivity.',
      'Develop shared procedures and user documentation for common requests and diagnostics.',
    ],
  },
  {
    company: 'Axia Home Loans',
    role: 'IT Support Specialist',
    location: 'Bellevue, WA',
    dates: 'May 2024 — August 2024',
    highlights: [
      'Performed threat hunting and implemented detection rules for Microsoft 365, DLP, email, and endpoint security events.',
      'Designed KQL queries for Azure Monitor and facilitated Microsoft Sentinel alert, incident, and ingestion configuration.',
      'Built Azure Logic Apps for cross-platform security alerting through Jira and Teams.',
      'Monitored CISA and Microsoft advisories, managed Intune patching and configuration profiles, and administered RBAC and Conditional Access policies.',
      'Automated hardware and software deployment with FOG Server and PowerShell.',
      'Engineered an organization-wide migration from Mitel telephony to Microsoft Teams and VoIP.',
    ],
  },
  {
    company: 'Axia Home Loans',
    role: 'IT Technician',
    location: 'Bellevue, WA',
    dates: 'May 2023 — April 2024',
    highlights: [
      'Triaged Jira support tickets for internal clients and external vendors.',
      'Configured Windows, mobile devices, printers, network devices, firewalls, IoT devices, virtual machines, and VoIP phones.',
      'Troubleshot corporate and home networks across DHCP, DNS, firewalls, routing, VoIP, VPN, and connectivity services.',
      'Created diagnostic documentation in Confluence, Jira, and OneNote.',
      'Performed identity administration in Active Directory and Entra ID, including SSO, assignments, lifecycle management, and SMTP aliases.',
      'Managed hardware, account, MFA, and application onboarding.',
    ],
  },
]

const education = [
  { degree: 'B.S., Cybersecurity', school: 'City University of Seattle', url: 'https://cityu.edu/programs-overview/bachelor-of-science-cybersecurity/', date: 'Est. Q1 2027', status: 'In progress' },
  { degree: 'A.S., Computer Science', school: 'North Seattle College', url: 'https://northseattle.edu/programs/computer-science', date: 'December 2019', status: 'Completed' },
]

const certifications = [
  { name: 'CompTIA Security+', url: 'https://www.comptia.org/en-us/certifications/security/', date: 'July 2024' },
  { name: 'Cisco Certified Network Associate (CCNA)', url: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html', date: 'April 2024' },
  { name: 'Microsoft Certified: Azure Fundamentals', url: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/', date: 'November 2023' },
  { name: 'CompTIA A+', url: 'https://www.comptia.org/en-us/certifications/a/', date: 'February 2023' },
]

function Header() {
  return (
    <header className="masthead">
      <h1>Griffin Gallagher</h1>
      <div className="contact-row" aria-label="Contact information">
        <a href="mailto:gkgpnw@pm.me">gkgpnw@pm.me</a>
        <a href="tel:+12065668926">206.566.8926</a>
        <a href="https://linkedin.com/in/gkgallagher" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <span>Seattle, WA</span>
      </div>
    </header>
  )
}

function Biography() {
  return (
    <section id="biography" className="resume-section biography-section">
      <div className="section-heading"><h2>Biography</h2></div>
      <div className="biography-copy">
        <p>Information security engineer from the PNW. Experience is primarily based in enterprise hybrid-cloud environments with a focus on the Microsoft ecosystem.</p>
        <p>In my career I have worn many hats, performing auditing, cloud engineering, endpoint configuration and troubleshooting, identity and access administration, incident response, and vulnerability assessments.</p>
        <p>With over a decade of experience in customer-facing roles, I have honed the ability to explain technological problems in simple terms and the disposition to communicate effectively in stressful situations.</p>
        <p>I have been recognized by my peers and leadership for my acuity, communication, competence, and work ethic.</p>
      </div>
    </section>
  )
}

function ExperienceCard({ item, expanded, onToggle }) {
  return (
    <article className={`role-card ${expanded ? 'is-expanded' : ''}`}>
      <button className="role-summary" onClick={onToggle} aria-expanded={expanded}>
        <span className="role-main">
          <span className="role-title">{item.role}</span>
          <span className="company">{item.company}</span>
        </span>
        <span className="role-meta">
          <span>{item.location}</span>
          <span>{item.dates}</span>
        </span>
        <span className="toggle-icon" aria-hidden="true">{expanded ? '−' : '+'}</span>
      </button>
      {expanded && (
        <div className="role-details">
          <ul>
            {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        </div>
      )}
    </article>
  )
}

function Experience() {
  const [expanded, setExpanded] = useState([0])
  const toggle = (index) => setExpanded((current) =>
    current.includes(index) ? current.filter((item) => item !== index) : [...current, index]
  )

  return (
    <section id="experience" className="resume-section">
      <div className="section-heading"><h2>Professional Experience</h2></div>
      <div className="experience-list">
        {experience.map((item, index) => (
          <ExperienceCard
            key={`${item.company}-${item.role}`}
            item={item}
            expanded={expanded.includes(index)}
            onToggle={() => toggle(index)}
          />
        ))}
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="resume-section">
      <div className="section-heading"><h2>Education</h2></div>
      <div className="education-grid">
        {education.map((item) => (
          <article className="education-card" key={item.degree}>
            <div className="card-top"><span>{item.status}</span><span>{item.date}</span></div>
            <h3>{item.degree}</h3>
            <p><a href={item.url} target="_blank" rel="noreferrer">{item.school}</a></p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Certifications() {
  return (
    <section id="certifications" className="resume-section">
      <div className="section-heading"><h2>Certifications</h2></div>
      <div className="cert-list">
        {certifications.map((cert) => (
          <article className="cert-row" key={cert.name}>
            <h3><a href={cert.url} target="_blank" rel="noreferrer">{cert.name}</a></h3>
            <time>{cert.date}</time>
          </article>
        ))}
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <nav className="resume-nav" aria-label="Resume sections">
        <a className="nav-mark" href="#top" aria-label="Return to top">Griffin Gallagher</a>
        <div>
          <a href="#biography">Biography</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#certifications">Credentials</a>
        </div>
        <button type="button" onClick={() => window.print()}>Print résumé</button>
      </nav>
      <main id="top">
        <Header />
        <Biography />
        <Experience />
        <Education />
        <Certifications />
      </main>
      <footer>
        <span>Griffin Gallagher</span>
        <div className="footer-contact" aria-label="Contact information">
          <a href="mailto:gkgpnw@pm.me">gkgpnw@pm.me</a>
          <a href="tel:+12065668926">206.566.8926</a>
          <a href="https://linkedin.com/in/gkgallagher" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <span>Seattle, WA</span>
        </div>
      </footer>
    </>
  )
}

export default App
