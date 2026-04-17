import { Link } from 'react-router-dom'

/* ══════════════════════════════════════════════════════════════════
   PIXEL-FAITHFUL MERGE.DEV DESIGN SYSTEM
   Ref: https://www.merge.dev/home — studied 2026-04-17

   BG:           #EEECEA  (warm light gray-cream)
   Icon boxes:   #FFFFFF, 1px solid #E0DDD8, r=10, LEFT gradient mask
   Icon opacity: leftmost icons fade to ~25% opacity (mask)
   Labels:       16px, #2C2C2C, weight 400
   Lines:        1px, dashed "4 6", #C6C3BD
   Dots:         #f97316, r=4.5, flat — 1 per path, animateMotion
   Hub:          oval ellipse rx=64 ry=82, fill #ECEAE8
   Hub mark:     bold black angular ">" mark (LedgerCart adaptation)
   Hub label:    18px, weight 600, #1A1817, placed BELOW the oval
   Product win:  white card, gray traffic dots, light shadow
   Layout:       OPEN FLAT — no outer card wrapper
══════════════════════════════════════════════════════════════════ */

/* ─── DESIGN TOKENS ─────────────────────────────────────────────── */
const BG       = 'var(--homehero-bg)'
const BOX_BG   = 'var(--homehero-box-bg)'
const BOX_BD   = 'var(--homehero-box-border)'
const LINE_CLR = 'var(--homehero-line)'
const HUB_FILL = 'var(--homehero-hub-fill)'
const LBL_CLR  = 'var(--homehero-label)'
const DOT_CLR  = 'var(--homehero-dot)'
const HUB_TXT  = 'var(--homehero-hub-text)'
const HUB_RING = 'var(--homehero-hub-ring)'

/* ─── COMPANY LOGO ICONS — precise monochrome SVGs ──────────────
   Style guide:
   - Viewbox 22×22, rendered at 20×20
   - Each evokes the real brand logo shape
   - Mostly grayscale/neutral — matches merge.dev's muted palette
   - Notion, GitHub etc keep their distinctive dark bg
─────────────────────────────────────────────────────────────────── */

// ── ACCOUNTING ──────────────────────────────────────────────────
// Notion (black square + white serif N)
const IconNotion = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <rect width="22" height="22" rx="4" fill="#191919"/>
    <path d="M7 6.5h4.5c.8 0 1.4.3 1.9.8l1.6 1.7V16a.5.5 0 01-.5.5H7A.5.5 0 016.5 16V7a.5.5 0 01.5-.5z" fill="none"/>
    <text x="11" y="16" textAnchor="middle" fontSize="13" fontWeight="800" fill="white" fontFamily="Georgia,serif">N</text>
  </svg>
)

// Xero (white round, "xero" blade-cross logo)
const IconXero = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="11" fill="#E8E6E1"/>
    <path d="M7.5 8l3.5 3-3.5 3" stroke="#333" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.5 8l-3.5 3 3.5 3" stroke="#333" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Stripe (indigo rounded rect + bold S curve)
const IconStripe = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <rect width="22" height="22" rx="5" fill="#6C7AE0" opacity="0.72"/>
    <path d="M8 10.5c0-1.1.9-2 2-2h1.5c.8 0 1.5.7 1.5 1.5S12.3 11.5 11.5 11.5H10c-1.1 0-2 .9-2 2s.9 2 2 2H12c.8 0 1.5-.7 1.5-1.5" stroke="white" strokeWidth="1.7" strokeLinecap="round"/>
  </svg>
)

// QuickBooks (dark green circle + QB mark)
const IconQB = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="11" fill="#2F9B3E" opacity="0.75"/>
    <text x="11" y="15" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="white">QB</text>
  </svg>
)

// ── ATS ──────────────────────────────────────────────────────────
// Greenhouse (person silhouette — rounded circle head + body)
const IconGreenhouse = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="8.5" r="3.5" stroke="#4a4a4a" strokeWidth="1.5"/>
    <path d="M4 19.5c0-3.9 3.1-7 7-7h0c3.9 0 7 3.1 7 7" stroke="#4a4a4a" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

// Lever (heart / target mark)
const IconLever = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <path d="M11 18.5S3.5 13.5 3.5 8.5a4.5 4.5 0 019 0 4.5 4.5 0 019 0C21.5 13.5 11 18.5 11 18.5z" stroke="#4a4a4a" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
)

// Ashby (clean diagonal slash — their angular mark)
const IconAshby = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <path d="M6 17L16 5" stroke="#4a4a4a" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M6 5h3M13 17h3" stroke="#4a4a4a" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
)

// Gem (shield with G)
const IconGem = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <path d="M11 2.5L4 6v6c0 4 3.1 7.5 7 8.5 3.9-1 7-4.5 7-8.5V6L11 2.5z" stroke="#4a4a4a" strokeWidth="1.4" strokeLinejoin="round"/>
    <text x="11" y="14.5" textAnchor="middle" fontSize="7" fontWeight="700" fill="#4a4a4a">G</text>
  </svg>
)

// ── CRM ──────────────────────────────────────────────────────────
// Attio (pie/wedge ring mark)
const IconAttio = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="7.5" stroke="#4a4a4a" strokeWidth="1.5"/>
    <path d="M11 11L11 3.5" stroke="#4a4a4a" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M11 11L18 8.5" stroke="#4a4a4a" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="11" cy="11" r="1.5" fill="#4a4a4a"/>
  </svg>
)

// Pipedrive (bold stylized P)
const IconPipedrive = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="10" fill="#E8E6E1"/>
    <path d="M8.5 7h3.5a3 3 0 010 6H8.5V7z" stroke="#333" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M8.5 13v4" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

// HubSpot (3 radiating circles — their distinctive mark)
const IconHubspot = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="2.5" fill="#4a4a4a"/>
    <circle cx="11" cy="5" r="2" stroke="#4a4a4a" strokeWidth="1.3"/>
    <circle cx="17" cy="14" r="2" stroke="#4a4a4a" strokeWidth="1.3"/>
    <circle cx="5" cy="14" r="2" stroke="#4a4a4a" strokeWidth="1.3"/>
    <path d="M11 7.5V8.5M15.3 12.3l-.7-.7M6.7 12.3l.7-.7" stroke="#4a4a4a" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

// Salesforce (cloud silhouette)
const IconSalesforce = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <path d="M4 14a4 4 0 014-4 4 4 0 017-3 3.5 3.5 0 11.5 7H4z" stroke="#4a4a4a" strokeWidth="1.4" strokeLinejoin="round"/>
  </svg>
)

// ── FILE STORAGE ─────────────────────────────────────────────────
// Dropbox (box diamond shape)
const IconDropbox = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <path d="M11 3L3 8l8 5 8-5-8-5z" stroke="#4a4a4a" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M3 14l8 5 8-5" stroke="#4a4a4a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 8l8 5 8-5" stroke="#4a4a4a" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
)

// Google Drive (tri-shape)
const IconGDrive = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <path d="M11 3L4 17h14L11 3z" stroke="#4a4a4a" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M7 13h8" stroke="#4a4a4a" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
)

// Box (cloud upload)
const IconBox = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <path d="M3 15V8a2 2 0 012-2h3l2-2h4l2 2h1a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#4a4a4a" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M11 10v5M9 12l2-2 2 2" stroke="#4a4a4a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// OneDrive (layered cloud)
const IconOneDrive = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <path d="M3.5 16a3.5 3.5 0 010-7c.1 0 .2 0 .3.01A5 5 0 0113.5 8c.1-.01.2-.01.3-.01a4 4 0 014 4 4 4 0 01-4 4H3.5z" stroke="#4a4a4a" strokeWidth="1.4" strokeLinejoin="round"/>
  </svg>
)

// ── HRIS ─────────────────────────────────────────────────────────
// Rippling (dot grid — flat 3×3 grid with left-column faded)
const IconRippling = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <circle cx="5"  cy="5"  r="2" fill="#4a4a4a" opacity="0.3"/>
    <circle cx="11" cy="5"  r="2" fill="#4a4a4a" opacity="0.6"/>
    <circle cx="17" cy="5"  r="2" fill="#4a4a4a"/>
    <circle cx="5"  cy="11" r="2" fill="#4a4a4a" opacity="0.3"/>
    <circle cx="11" cy="11" r="2" fill="#4a4a4a" opacity="0.6"/>
    <circle cx="17" cy="11" r="2" fill="#4a4a4a"/>
    <circle cx="5"  cy="17" r="2" fill="#4a4a4a" opacity="0.3"/>
    <circle cx="11" cy="17" r="2" fill="#4a4a4a" opacity="0.6"/>
    <circle cx="17" cy="17" r="2" fill="#4a4a4a"/>
  </svg>
)

// BambooHR (lowercase b with leaf style)
const IconBamboo = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <path d="M8 3v16" stroke="#4a4a4a" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 9c0-3.3 2.7-6 6-6" stroke="#4a4a4a" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 14c0-3.3 2.7-6 6-6" stroke="#4a4a4a" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

// Deel (bold lowercase "d")
const IconDeel = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="9.5" fill="#E8E6E1"/>
    <text x="11" y="15.5" textAnchor="middle" fontSize="14" fontWeight="800" fill="#333" fontFamily="Arial,sans-serif">d.</text>
  </svg>
)

// Workday (headphones / W)
const IconWorkday = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <path d="M4 9c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="#4a4a4a" strokeWidth="1.4"/>
    <rect x="2.5" y="9" width="3.5" height="5.5" rx="1.5" stroke="#4a4a4a" strokeWidth="1.4"/>
    <rect x="16" y="9" width="3.5" height="5.5" rx="1.5" stroke="#4a4a4a" strokeWidth="1.4"/>
  </svg>
)

// ── TICKETING ────────────────────────────────────────────────────
// Linear (orbit / circular arrow)
const IconLinear = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="8" stroke="#4a4a4a" strokeWidth="1.3"/>
    <path d="M11 3a8 8 0 018 8" stroke="#191919" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="19" cy="11" r="2" fill="#191919"/>
  </svg>
)

// Asana (3-dots pattern)
const IconAsana = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="8" r="3.5" fill="#4a4a4a"/>
    <circle cx="5.5" cy="15" r="3.5" fill="#4a4a4a" opacity="0.6"/>
    <circle cx="16.5" cy="15" r="3.5" fill="#4a4a4a" opacity="0.6"/>
  </svg>
)

// Jira (diamond with T/mark)
const IconJira = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <rect x="3.5" y="3.5" width="15" height="15" rx="3" fill="#E8E6E1"/>
    <path d="M7.5 8h7M11 8v7" stroke="#333" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// GitHub (octocat simplified)
const IconGithub = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="10" r="7" stroke="#191919" strokeWidth="1.4"/>
    <path d="M7.5 17.5c0-2.5 1-4 3.5-4s3.5 1.5 3.5 4" stroke="#191919" strokeWidth="1.4"/>
    <path d="M8 10.5C8 9 8.5 8 11 8s3 1 3 2.5a3 3 0 01-3 3 3 3 0 01-3-3z" fill="#191919"/>
    <path d="M14 8l1.5-1.5" stroke="#191919" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

// ── KNOWLEDGE BASE ───────────────────────────────────────────────
// GitBook (open book)
const IconGitbook = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <path d="M11 18V7" stroke="#4a4a4a" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M11 7C9 4 4 4 4 4v11c0 0 5 0 7 3" stroke="#4a4a4a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 7c2-3 7-3 7-3v11c0 0-5 0-7 3" stroke="#4a4a4a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// HelpScout (lighthouse / beacon circle)
const IconHelpscout = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="9" stroke="#4a4a4a" strokeWidth="1.4"/>
    <path d="M11 7v.5M11 10c0-1.1.9-2 2-2M11 13v-.5" stroke="#4a4a4a" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="11" cy="15" r="1" fill="#4a4a4a"/>
  </svg>
)

// Zendesk (Z mark)
const IconZendesk = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="9.5" fill="#E8E6E1"/>
    <path d="M7 8h8l-8 6h8" stroke="#333" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Confluence (X / angular mark)
const IconConfluence = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <path d="M4 4l7 8 7-8" stroke="#4a4a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 18l7-8 7 8" stroke="#4a4a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// ── CHAT ─────────────────────────────────────────────────────────
// Slack (speech bubble grid)
const IconSlack = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <rect x="4" y="4" width="4.5" height="4.5" rx="2" stroke="#4a4a4a" strokeWidth="1.4"/>
    <rect x="4" y="10" width="4.5" height="4.5" rx="2" stroke="#4a4a4a" strokeWidth="1.4"/>
    <rect x="10" y="4" width="4.5" height="4.5" rx="2" stroke="#4a4a4a" strokeWidth="1.4"/>
    <rect x="10" y="10" width="4.5" height="4.5" rx="2" stroke="#4a4a4a" strokeWidth="1.4"/>
  </svg>
)

// Discord (game controller / shield)
const IconDiscord = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <path d="M4 5c0 0 3.5-2 7-2s7 2 7 2v9c0 0-2.8 4-7 4-4.2 0-7-4-7-4V5z" stroke="#4a4a4a" strokeWidth="1.3" strokeLinejoin="round"/>
    <circle cx="8.5" cy="11" r="1.5" fill="#4a4a4a"/>
    <circle cx="13.5" cy="11" r="1.5" fill="#4a4a4a"/>
  </svg>
)

// Teams (Microsoft Teams T)
const IconTeams = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <rect x="2" y="6" width="14" height="12" rx="2.5" fill="#E8E6E1"/>
    <rect x="8" y="3" width="12" height="10" rx="2.5" fill="#4a4a4a" opacity="0.7"/>
    <text x="14" y="11" textAnchor="middle" fontSize="7" fontWeight="700" fill="white">T</text>
  </svg>
)

// Intercom (speech bubble)
const IconIntercom = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <path d="M3.5 4A1.5 1.5 0 015 2.5h12A1.5 1.5 0 0118.5 4v10A1.5 1.5 0 0117 15.5H6L3.5 18V4z" stroke="#4a4a4a" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M7.5 7h7M7.5 10h5" stroke="#4a4a4a" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
)

/* ─── ROW DATA ──────────────────────────────────────────────────── */
const ROWS = [
  {
    label: 'Accounting',
    icons: [<IconNotion/>, <IconXero/>, <IconStripe/>, <IconQB/>],
  },
  {
    label: 'ATS',
    icons: [<IconGreenhouse/>, <IconLever/>, <IconAshby/>, <IconGem/>],
  },
  {
    label: 'CRM',
    icons: [<IconAttio/>, <IconPipedrive/>, <IconHubspot/>, <IconSalesforce/>],
  },
  {
    label: 'File storage',
    icons: [<IconDropbox/>, <IconGDrive/>, <IconBox/>, <IconOneDrive/>],
  },
  {
    label: 'HRIS',
    icons: [<IconRippling/>, <IconBamboo/>, <IconDeel/>, <IconWorkday/>],
  },
  {
    label: 'Ticketing',
    icons: [<IconLinear/>, <IconAsana/>, <IconJira/>, <IconGithub/>],
  },
  {
    label: 'Knowledge base',
    icons: [<IconGitbook/>, <IconHelpscout/>, <IconZendesk/>, <IconConfluence/>],
  },
  {
    label: 'Chat',
    icons: [<IconSlack/>, <IconDiscord/>, <IconTeams/>, <IconIntercom/>],
  },
]

/* ─── GEOMETRY ───────────────────────────────────────────────────
   Measured precisely against merge.dev reference screenshot.
─────────────────────────────────────────────────────────────────── */
const N         = ROWS.length        // 8
const ROW_H     = 68                 // px per row (spacious, like merge.dev)
const TOTAL_H   = N * ROW_H         // 544

// SVG canvas covers the full section width
// The left panel (icon box + label) sits in 0…240 px
// Paths start at x=240, bezier into hub left edge
// Hub oval centered at HUB_CX
// Right horizontal line + product window to the right

const SVG_W     = 1080
const LABEL_END = 240                // x where path begins (right of label)
const HUB_CX    = 505                // hub oval center x
const HUB_CY    = TOTAL_H / 2       // hub oval center y = 272
const HUB_RX    = 64                 // oval x-radius
const HUB_RY    = 82                 // oval y-radius (TALLER, portrait)
const DASH_LEFT = 758                // left x of product window
const DASH_W    = 272                // product window width

// Path: from left panel → hub left tangent
// Cubic bezier fanning all rows into center of hub
function pathD(i) {
  const y0 = i * ROW_H + ROW_H / 2
  const xe = HUB_CX - HUB_RX           // 441 — hub left tangent
  const ye = HUB_CY                    // 272
  // Two control points: fan evenly between source and hub
  const cx1 = LABEL_END + (xe - LABEL_END) * 0.42
  const cx2 = xe - 48
  return `M${LABEL_END},${y0} C${cx1},${y0} ${cx2},${ye} ${xe},${ye}`
}

// Right horizontal line: hub right tangent → product window left
const RIGHT_D = `M${HUB_CX + HUB_RX},${HUB_CY} L${DASH_LEFT},${HUB_CY}`

// Dot timing — varied to feel organic (not patterned)
const DOT_TIMING = [
  { dur: 3.8, begin: 0.0 },
  { dur: 3.3, begin: 2.1 },
  { dur: 4.2, begin: 0.8 },
  { dur: 3.6, begin: 3.4 },
  { dur: 4.0, begin: 1.5 },
  { dur: 3.5, begin: 2.7 },
  { dur: 4.4, begin: 0.3 },
  { dur: 3.9, begin: 1.9 },
]

/* ─── LedgerCart Hub Mark ───────────────────────────────────────
   Inspired by Merge's bold angular ">" arrow:
   Bold black angular shape — LedgerCart adapted ledger mark.
   Resembles an angular forward-arrow / bracket, very bold.
─────────────────────────────────────────────────────────────────── */
const LedgerCartMark = () => (
  <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
    {/* Shape inspired by Merge's angular arrow — bold black */}
    {/* Top arm going down-right */}
    <path
      d="M16 12 L38 29 L16 46"
      stroke={HUB_TXT}
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Second stroke — slightly offset for LedgerCart double-mark */}
    <path
      d="M26 18 L40 29 L26 40"
      stroke={HUB_TXT}
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.28"
    />
  </svg>
)

/* ─── SVG LAYER (paths + hub oval + dots) ───────────────────────── */
const FlowSVG = () => (
  <svg
    width={SVG_W}
    height={TOTAL_H}
    viewBox={`0 0 ${SVG_W} ${TOTAL_H}`}
    fill="none"
    style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'visible' }}
  >
    <defs>
      {ROWS.map((_, i) => (
        <path key={i} id={`lp${i}`} d={pathD(i)} />
      ))}
      <path id="rp" d={RIGHT_D} />
    </defs>

    {/* ── Dashed bezier paths (left → hub) ── */}
    {ROWS.map((_, i) => (
      <path
        key={i}
        d={pathD(i)}
        stroke={LINE_CLR}
        strokeWidth="1"
        strokeDasharray="4 6"
        fill="none"
      />
    ))}

    {/* ── Hub oval ── */}
    <ellipse
      cx={HUB_CX}
      cy={HUB_CY}
      rx={HUB_RX}
      ry={HUB_RY}
      fill={HUB_FILL}
    />
    {/* Very subtle inner shadow ring */}
    <ellipse
      cx={HUB_CX}
      cy={HUB_CY}
      rx={HUB_RX - 1}
      ry={HUB_RY - 1}
      fill="none"
      stroke={HUB_RING}
      strokeWidth="4"
    />

    {/* ── Right horizontal line (hub → product window) ── solid thin ── */}
    <line
      x1={HUB_CX + HUB_RX}
      y1={HUB_CY}
      x2={DASH_LEFT}
      y2={HUB_CY}
      stroke={LINE_CLR}
      strokeWidth="1"
    />

    {/* ── Animated orange dots — 1 per left path ── */}
    {DOT_TIMING.map((t, i) => (
      <circle key={i} r="4.5" fill={DOT_CLR}>
        <animateMotion dur={`${t.dur}s`} begin={`${t.begin}s`} repeatCount="indefinite" calcMode="linear">
          <mpath href={`#lp${i}`} />
        </animateMotion>
      </circle>
    ))}

    {/* ── Right line dot ── */}
    <circle r="4.5" fill={DOT_CLR}>
      <animateMotion dur="2.6s" begin="0.5s" repeatCount="indefinite" calcMode="linear">
        <mpath href="#rp" />
      </animateMotion>
    </circle>
    {/* Second right line dot — offset timing like merge.dev has 2 on the right line */}
    <circle r="4.5" fill={DOT_CLR}>
      <animateMotion dur="2.6s" begin="1.8s" repeatCount="indefinite" calcMode="linear">
        <mpath href="#rp" />
      </animateMotion>
    </circle>
  </svg>
)

/* ─── LEFT PANEL (integration rows) ────────────────────────────── */
const IntegrationRows = () => (
  <div style={{
    position: 'absolute',
    left: 0,
    top: 0,
    width: LABEL_END,
    height: TOTAL_H,
  }}>
    {ROWS.map((row) => (
      <div
        key={row.label}
        style={{
          height: ROW_H,
          display: 'flex',
          alignItems: 'center',
          gap: 14,
        }}
      >
        {/* ── Icon Pill Box ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '9px 10px',
          background: BOX_BG,
          border: `1px solid ${BOX_BD}`,
          borderRadius: 10,
          flexShrink: 0,
          // ★ LEFT FADE: gradient mask — leftmost icons fade toward transparent
          // This creates the "off-screen continuation" effect from merge.dev
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.20) 18%, rgba(0,0,0,0.65) 38%, black 62%)',
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.20) 18%, rgba(0,0,0,0.65) 38%, black 62%)',
        }}>
          {row.icons.map((icon, j) => (
            <div key={j} style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
              {icon}
            </div>
          ))}
        </div>

        {/* ── Category Label ── */}
        <span style={{
          fontSize: 16,
          fontWeight: 400,
          color: LBL_CLR,
          letterSpacing: '-0.012em',
          whiteSpace: 'nowrap',
          lineHeight: 1,
        }}>
          {row.label}
        </span>
      </div>
    ))}
  </div>
)

/* ─── HUB CENTER (logo overlaid on oval) ───────────────────────── */
const HubCenter = () => (
  <div style={{
    position: 'absolute',
    left: HUB_CX - HUB_RX,
    top: HUB_CY - HUB_RY,
    width: HUB_RX * 2,
    height: HUB_RY * 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 0,
    pointerEvents: 'none',
  }}>
    <LedgerCartMark />
    {/* "LedgerCart" label below the oval — positioned after the oval ends */}
    <div style={{
      position: 'absolute',
      bottom: -32,
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: 18,
      fontWeight: 600,
      color: HUB_TXT,
      letterSpacing: '-0.022em',
      whiteSpace: 'nowrap',
    }}>
      LedgerCart
    </div>
  </div>
)

/* ─── PRODUCT WINDOW (right panel — "Your product") ─────────────── */
const ProductWindow = () => (
  <div style={{
    position: 'absolute',
    left: DASH_LEFT,
    top: HUB_CY - 175,
    width: DASH_W,
  }}>
    <div style={{
      background: '#FFFFFF',
      borderRadius: 10,
      border: '1px solid #E8E5E0',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0,0,0,0.02), 0 12px 36px rgba(0,0,0,0.07)',
    }}>
      {/* Window chrome — gray dots + centered title */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 14px',
        borderBottom: '1px solid #F0EDE8',
        background: '#FAFAF8',
        gap: 5,
      }}>
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#D8D5CF', display: 'inline-block' }}/>
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#D8D5CF', display: 'inline-block' }}/>
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#D8D5CF', display: 'inline-block' }}/>
        <span style={{ flex: 1, textAlign: 'center', fontSize: 11, color: '#9a9790', fontWeight: 500, letterSpacing: '-0.01em' }}>
          Your product
        </span>
      </div>

      {/* Performance section */}
      <div style={{ padding: '14px 16px 8px' }}>
        <div style={{ fontSize: 10, color: '#9a9790', fontWeight: 500, marginBottom: 10, letterSpacing: '0.01em' }}>
          Performance
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 48 }}>
          {/* Bar chart — muted grays, last two bars slightly taller */}
          {[16, 26, 18, 38, 22, 44, 28, 50, 35, 55].map((h, i) => (
            <div key={i} style={{
              flex: 1,
              height: h * 0.82,
              borderRadius: 2,
              background: i >= 8 ? '#C8C5BF' : '#E0DDD8',
            }}/>
          ))}
          {/* Donut chart */}
          <div style={{ flexShrink: 0, marginLeft: 10 }}>
            <svg width="44" height="44" viewBox="0 0 44 44">
              <circle cx="22" cy="22" r="16" fill="none" stroke="#E0DDD8" strokeWidth="6"/>
              <circle cx="22" cy="22" r="16" fill="none" stroke="#f97316" strokeWidth="6"
                strokeDasharray="22 78" strokeLinecap="round" transform="rotate(-90 22 22)"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Metrics row (Employee pay / New leads / Accounts payable) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        borderTop: '1px solid #F0EDE8',
        borderBottom: '1px solid #F0EDE8',
      }}>
        {['Employee pay', 'New leads', 'Accounts payable'].map((label, i) => (
          <div key={label} style={{
            padding: '10px 10px 12px',
            borderRight: i < 2 ? '1px solid #F0EDE8' : 'none',
          }}>
            <div style={{ fontSize: 8.5, color: '#9a9790', marginBottom: 5, lineHeight: 1.3 }}>{label}</div>
            <div style={{ height: 5, background: '#E8E5DF', borderRadius: 3, width: '85%', marginBottom: 3 }}/>
            <div style={{ height: 5, background: '#F0EDE8', borderRadius: 3, width: '65%' }}/>
          </div>
        ))}
      </div>

      {/* Customers section */}
      <div style={{ padding: '10px 16px 14px' }}>
        <div style={{ fontSize: 10, color: '#9a9790', fontWeight: 500, marginBottom: 8, letterSpacing: '0.01em' }}>
          Customers
        </div>
        {[
          ['72%', '55%'],
          ['58%', '42%'],
          ['48%', '35%'],
        ].map(([w1, w2], i) => (
          <div key={i} style={{ marginBottom: 7 }}>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 3 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#E0DDD8', flexShrink: 0 }}/>
              <div style={{ height: 4, background: '#E0DDD8', borderRadius: 3, width: w1 }}/>
              <div style={{ height: 4, background: '#F0EDE8', borderRadius: 3, flex: 1 }}/>
            </div>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ECEAE5', flexShrink: 0 }}/>
              <div style={{ height: 4, background: '#ECEAE5', borderRadius: 3, width: w2 }}/>
              <div style={{ height: 4, background: '#F4F2ED', borderRadius: 3, flex: 1 }}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

/* ─── FLOW DIAGRAM ASSEMBLY ─────────────────────────────────────── */
const FlowDiagram = () => (
  <div style={{
    position: 'relative',
    width: SVG_W,
    height: TOTAL_H + 48,    // +48px buffer below for hub label + product window bottom
    margin: '0 auto',
    flexShrink: 0,
  }}>
    <FlowSVG />
    <IntegrationRows />
    <HubCenter />
    <ProductWindow />
  </div>
)

/* ══════════════════════════════════════════════════════════════════
   HERO SECTION
══════════════════════════════════════════════════════════════════ */
export default function Hero() {
  return (
    <section style={{
      background: BG,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle Merge-like texture (rings) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'var(--homehero-texture)',
        opacity: 0.72,
        pointerEvents: 'none',
      }}/>

      {/* Center fade wash (fades rings behind badge/headline) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'var(--homehero-glow)',
        pointerEvents: 'none',
      }}/>

      {/* Bottom fade into next section (removes hard cut) */}
      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 220,
        background: 'var(--homehero-bottom-fade)',
        pointerEvents: 'none',
      }}/>

      <div style={{
        maxWidth: 1160,
        margin: '0 auto',
        padding: '60px 32px 0',
        position: 'relative',
      }}>

        {/* ═══ HERO TEXT ═══════════════════════════════════════════ */}
        <div style={{ textAlign: 'center', marginBottom: 62 }}>

          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            padding: '5px 14px',
            borderRadius: 100,
            background: 'var(--homehero-badge-bg)',
            border: '1px solid var(--homehero-badge-border)',
            fontSize: 11,
            fontWeight: 700,
            color: '#ea580c',
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
            marginBottom: 26,
            backdropFilter: 'blur(4px)',
          }}>
            <span style={{
              width: 5, height: 5, borderRadius: '50%',
              background: '#ea580c', display: 'inline-block',
            }}/>
            Welcome to LedgerCart
          </div>

          {/* H1 headline */}
          <h1 style={{
            fontSize: 'clamp(38px, 4.6vw, 60px)',
            fontWeight: 280,
            letterSpacing: '-0.04em',
            lineHeight: 1.06,
            color: 'var(--homehero-text)',
            margin: '0 0 22px',
            fontFamily: 'inherit',
          }}>
            Transform your business
            <br/>
            with{' '}
            <span style={{
              background: 'linear-gradient(120deg, #f97316 10%, #ea580c 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 360,
            }}>
              intelligent IT solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 17,
            color: 'var(--homehero-muted)',
            lineHeight: 1.7,
            maxWidth: 480,
            margin: '0 auto 38px',
            fontWeight: 400,
          }}>
            <span style={{
              display: 'inline-flex',
              padding: '2px 9px',
              background: 'var(--homehero-chip-bg)',
              border: '1px solid var(--homehero-chip-border)',
              borderRadius: 5,
              color: '#ea580c',
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: '-0.01em',
              marginRight: 5,
              verticalAlign: 'middle',
            }}>
              LedgerCart
            </span>{' '}
            is your trusted IT Service Provider.
            <br/>
            Custom Software, Cybersecurity, and the LedgerCart ERP.
          </p>

          {/* ── CTA Buttons — pill style matching merge.dev ── */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>

            {/* Primary — dark pill */}
            <Link
              to="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 28px',
                background: 'var(--homehero-primary-bg)',
                color: 'var(--homehero-primary-text)',
                fontSize: 15,
                fontWeight: 500,
                borderRadius: 100,
                textDecoration: 'none',
                letterSpacing: '-0.012em',
                transition: 'opacity 0.15s ease, transform 0.15s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Contact Us
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="var(--homehero-primary-icon)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {/* Secondary — outline pill */}
            <Link
              to="/pricing"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 28px',
                background: 'var(--homehero-secondary-bg)',
                color: 'var(--homehero-secondary-text)',
                fontSize: 15,
                fontWeight: 500,
                borderRadius: 100,
                textDecoration: 'none',
                letterSpacing: '-0.012em',
                border: '1px solid var(--homehero-secondary-border)',
                transition: 'background 0.15s ease, transform 0.15s ease',
                backdropFilter: 'blur(6px)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--homehero-secondary-hover-bg)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--homehero-secondary-bg)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Get Pricing Quote
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 10.5L10.5 2.5M10.5 2.5H5M10.5 2.5v5.5" stroke="var(--homehero-secondary-icon)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* ═══ FLOW DIAGRAM (open / no card wrapper) ═══════════════ */}
        <div style={{ overflowX: 'auto', paddingBottom: 52 }}>
          <FlowDiagram />
        </div>

      </div>
    </section>
  )
}
