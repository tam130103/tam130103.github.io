# Design System Inspired by MonoCV

## 1. Visual Theme & Atmosphere

MonoCV embodies a **minimalist, professional aesthetic** that prioritizes clarity and elegance. The design champions simplicity through a restrained color palette dominated by black, white, and subtle grays, allowing content and typography to take center stage. With generous whitespace, refined typography, and thoughtful micro-interactions, MonoCV creates an intimate, distraction-free environment perfect for showcasing professional portfolios and resumes. The visual language is contemporary yet timeless, reflecting a sophisticated understanding of modern design principles. Every element serves a purpose—nothing is decorative—making it ideal for creative professionals who value substance over ornamentation.

**Key Characteristics**
- Monochromatic primary palette with selective accent usage
- Generous negative space and breathing room
- Typography-driven hierarchy with minimal visual noise
- Refined, subtle shadows for gentle depth
- Clean, functional micro-interactions
- Professional yet approachable tone
- High contrast for accessibility and legibility
- Geometric precision in spacing and alignment

## 2. Color Palette & Roles

### Primary
- **Primary Interactive** (`#0000EE`): Hyperlinks, interactive states, and primary call-to-action accents throughout the interface
- **Primary Background** (`#FFFFFF`): Main surface for all content, providing clean backdrop for typography and components

### Accent Colors
- **Accent Highlight** (`#0000EE`): Same as primary interactive, used sparingly for emphasis and linking

### Interactive
- **Button Default** (`#000000` at 92% opacity): Full-opacity dark buttons for primary actions; background: `rgba(0, 0, 0, 0.92)`
- **Button Ghost** (`#000000` at 24% opacity): Subtle, secondary button states; background: `rgba(0, 0, 0, 0.24)`
- **Link Text** (`#000000` at 74% opacity): Default text color for body copy and secondary content; color: `rgba(0, 0, 0, 0.74)`

### Neutral Scale
- **Text Primary** (`#000000`): Main heading and body text
- **Text Secondary** (`#636363`): Muted descriptive text and metadata
- **Text Tertiary** (`#999999`): Disabled, placeholder, or de-emphasized text
- **Text Overlay** (`#000000` at 12.5% opacity): Subtle text overlays; color: `rgba(0, 0, 0, 0.125)`
- **Divider Light** (`#000C`): Extremely subtle separators and borders

### Surface & Borders
- **Background Light** (`#F6F6F6`): Subtle background tint for cards and contained sections
- **Background Lighter** (`#FEFEFE`): Near-white for minimal contrast backgrounds
- **Border Neutral** (`#000000` at 12.5% opacity): Subtle dividing lines; color: `rgba(0, 0, 0, 0.125)`
- **Surface Elevated** (`#111111`): Deep charcoal for premium or elevated surface states

## 3. Typography Rules

### Font Family
**Primary:** General Sans (Headings & Labels)
- Fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

**Secondary:** Inter Display (Body & Links)
- Fallback: `system-ui, -apple-system, sans-serif`

**Tertiary:** sans-serif (Buttons & UI Labels)
- Fallback: `Arial, Helvetica, sans-serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / Hero | General Sans | 32px | 500 | 38.4px | -0.5px | Page titles, major headings |
| Heading 1 | General Sans | 24px | 500 | 28.8px | -0.3px | Section headings, card titles |
| Heading 2 | General Sans | 16px | 500 | 19.2px | 0px | Subsection headings, labels |
| Heading 3 | General Sans | 14px | 500 | 16.8px | 0px | Small headings, metadata labels |
| Body | Inter Display | 16px | 400 | 22.4px | 0px | Main paragraph text, descriptions |
| Body Small | Inter Display | 14px | 400 | 19.6px | 0px | Secondary copy, experience details |
| Link | Inter Display | 14px | 400 | 19.6px | 0px | Inline and standalone links |
| Button | sans-serif | 12px | 400 | normal | 0px | Button labels, UI actions |
| Caption | Inter Display | 12px | 400 | 16.8px | 0px | Timestamps, muted metadata |
| Code | monospace | 12px | 400 | 16.8px | 0px | Inline and block code |

### Principles
- **Purposeful Hierarchy:** Weight and size changes signal content importance; minimal font variety reinforces simplicity
- **Generous Line Height:** 1.4–1.5 multiplier ensures readability and comfort in dense professional content
- **Subtle Contrast:** Letter spacing reductions in headings create visual cohesion with body text
- **Accessibility First:** Dark text on white backgrounds ensures WCAG AA compliance; sufficient size prevents eye strain
- **Professional Tone:** General Sans conveys authority; Inter Display provides warm approachability in body text

## 4. Component Stylings

### Buttons

#### Primary Button
- **Background:** `rgba(0, 0, 0, 0.92)` (near-black)
- **Text Color:** `#000000`
- **Text Size:** `12px`
- **Font Weight:** `400`
- **Font Family:** `sans-serif`
- **Padding:** `0px` (use `height` and `width` to control size)
- **Height:** `50px`
- **Width:** `500px` (full-width context; responsive on mobile)
- **Border Radius:** `8px`
- **Border:** `none`
- **Box Shadow:** `none`
- **Line Height:** `normal`
- **Hover State:** `background: rgba(0, 0, 0, 1)` (increase opacity to 100%)
- **Active State:** `background: rgba(0, 0, 0, 0.85)`, slight scale down `transform: scale(0.98)`
- **Focus State:** `outline: 2px solid #0000EE`, `outline-offset: 2px`

#### Secondary Button (Ghost)
- **Background:** `rgba(0, 0, 0, 0.24)`
- **Text Color:** `#000000`
- **Text Size:** `12px`
- **Font Weight:** `400`
- **Font Family:** `sans-serif`
- **Padding:** `0px`
- **Height:** `34px`
- **Width:** `34px` (icon/compact button)
- **Border Radius:** `44px` (full pill shape)
- **Border:** `none`
- **Box Shadow:** `none`
- **Line Height:** `normal`
- **Hover State:** `background: rgba(0, 0, 0, 0.32)`
- **Active State:** `background: rgba(0, 0, 0, 0.40)`
- **Focus State:** `outline: 2px solid #0000EE`, `outline-offset: 1px`

#### Tertiary Button (Link-style)
- **Background:** `transparent`
- **Text Color:** `#0000EE`
- **Text Size:** `14px`
- **Font Weight:** `400`
- **Font Family:** `Inter Display`
- **Padding:** `0px`
- **Border:** `none`
- **Border Bottom:** `1px solid #0000EE` (optional underline)
- **Box Shadow:** `none`
- **Hover State:** `color: #000000`, `border-bottom-color: #000000`
- **Active State:** `opacity: 0.7`

### Cards & Containers

#### Experience Card
- **Background:** `#FFFFFF`
- **Border:** `1px solid rgba(0, 0, 0, 0.08)`
- **Border Radius:** `0px` (sharp edges for minimalist aesthetic)
- **Padding:** `24px`
- **Box Shadow:** `none` (or very subtle `rgba(0, 0, 0, 0.04) 0px 2px 8px 1px` on hover)
- **Display:** `flex`, `flex-direction: column`, `gap: 12px`
- **Hover State:** `box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 8px 1px`, `background: #FEFEFE`

#### Profile Card (Sidebar)
- **Background:** `#FFFFFF`
- **Border:** `1px solid rgba(0, 0, 0, 0.08)`
- **Border Radius:** `8px`
- **Padding:** `24px`
- **Box Shadow:** `rgba(0, 0, 0, 0.05) 0px 2px 8px 1px`
- **Width:** `320px` (fixed desktop; responsive mobile)
- **Display:** `flex`, `flex-direction: column`, `gap: 16px`

#### Project Showcase Card
- **Background:** `linear-gradient(135deg, #F6F6F6 0%, #FEFEFE 100%)`
- **Border Radius:** `0px 8px 8px 0px` (partial radius on image side)
- **Padding:** `0px` (image fills container)
- **Overflow:** `hidden`
- **Height:** `280px` (or `aspect-ratio: 4/3`)
- **Transition:** `all 0.3s ease-out`
- **Hover State:** `transform: translateY(-4px)`, `box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 16px`

### Inputs & Forms

#### Text Input (Single Line)
- **Background:** `rgba(0, 0, 0, 0)`
- **Text Color:** `rgba(0, 0, 0, 0.74)`
- **Text Size:** `16px`
- **Font Weight:** `400`
- **Font Family:** `Inter Display`
- **Padding:** `0px 0px 0px 0px`
- **Height:** `26px`
- **Width:** `476px` (or responsive `100%`)
- **Border:** `0px none`
- **Border Bottom:** `1px solid rgba(0, 0, 0, 0.12)` (underline style)
- **Border Radius:** `0px`
- **Box Shadow:** `none`
- **Line Height:** `19.2px`
- **Focus State:** `border-bottom-color: #0000EE`, `outline: none`
- **Placeholder Color:** `rgba(0, 0, 0, 0.40)`

#### Text Input (Medium - Contact Form)
- **Background:** `rgba(0, 0, 0, 0)`
- **Text Color:** `rgba(0, 0, 0, 0.74)`
- **Text Size:** `16px`
- **Font Weight:** `400`
- **Font Family:** `Inter Display`
- **Padding:** `12px`
- **Height:** `50px`
- **Width:** `500px` (or responsive `100%`)
- **Border:** `1px solid rgba(0, 0, 0, 0.12)`
- **Border Radius:** `0px`
- **Box Shadow:** `none`
- **Line Height:** `19.2px`
- **Focus State:** `border-color: #0000EE`, `box-shadow: inset 0px 0px 0px 1px #0000EE`
- **Placeholder Color:** `rgba(0, 0, 0, 0.40)`

#### Text Area (Multi-line)
- **Background:** `rgba(0, 0, 0, 0)`
- **Text Color:** `rgba(0, 0, 0, 0.74)`
- **Text Size:** `16px`
- **Font Weight:** `400`
- **Font Family:** `Inter Display`
- **Padding:** `12px`
- **Height:** `100px` (min-height; expandable)
- **Width:** `500px` (or responsive `100%`)
- **Border:** `1px solid rgba(0, 0, 0, 0.12)`
- **Border Radius:** `0px`
- **Box Shadow:** `none`
- **Line Height:** `19.2px`
- **Resize:** `vertical`
- **Focus State:** `border-color: #0000EE`, `box-shadow: inset 0px 0px 0px 1px #0000EE`
- **Placeholder Color:** `rgba(0, 0, 0, 0.40)`

### Navigation

#### Header Navigation
- **Background:** `#FFFFFF`
- **Border Bottom:** `1px solid rgba(0, 0, 0, 0.08)`
- **Padding:** `16px 24px`
- **Height:** `60px`
- **Display:** `flex`, `justify-content: space-between`, `align-items: center`
- **Box Shadow:** `rgba(0, 0, 0, 0.05) 0px 2px 8px 1px` (subtle elevation)
- **Position:** `sticky` or `fixed` (context-dependent)
- **Z-index:** `100`

#### Navigation Link
- **Color:** `rgba(0, 0, 0, 0.74)`
- **Font Size:** `14px`
- **Font Weight:** `400`
- **Font Family:** `Inter Display`
- **Padding:** `8px 12px`
- **Text Decoration:** `none`
- **Transition:** `all 0.2s ease`
- **Hover State:** `color: #000000`, `background: rgba(0, 0, 0, 0.04)`
- **Active State:** `color: #0000EE`, `border-bottom: 2px solid #0000EE`

#### Section Label (Uppercase)
- **Color:** `#636363`
- **Font Size:** `12px`
- **Font Weight:** `500`
- **Font Family:** `General Sans`
- **Letter Spacing:** `1px`
- **Text Transform:** `uppercase`
- **Margin Bottom:** `16px`
- **Opacity:** `0.8`

### Badges & Tags

#### Skill Badge
- **Background:** `rgba(0, 0, 0, 0.08)`
- **Text Color:** `rgba(0, 0, 0, 0.74)`
- **Font Size:** `12px`
- **Font Weight:** `400`
- **Font Family:** `Inter Display`
- **Padding:** `6px 12px`
- **Border Radius:** `16px` (full pill)
- **Border:** `none`
- **Display:** `inline-block`
- **Transition:** `all 0.2s ease`
- **Hover State:** `background: rgba(0, 0, 0, 0.16)`, `transform: scale(1.05)`

#### Status Indicator (Available for work)
- **Dot Color:** `#00B341` (green)
- **Size:** `8px` diameter
- **Border Radius:** `50%`
- **Display:** `inline-block`
- **Margin Right:** `6px`
- **Animation:** Optional subtle pulse `keyframes pulse { 0%, 100% { opacity: 1 } 50% { opacity: 0.6 } }`

## 5. Layout Principles

### Spacing System

**Base Unit:** `4px`

**Spacing Scale:**
- **XS:** `4px` — micro-spacing between tightly grouped elements
- **S:** `8px` — small gaps between related components
- **M:** `12px` — medium spacing for moderate separation
- **L:** `16px` — standard padding and gaps
- **XL:** `20px` — larger gaps between sections
- **2XL:** `24px` — significant spacing, card padding
- **3XL:** `32px` — section spacing on desktop
- **4XL:** `40px` — large padding for contained sections
- **5XL:** `48px` — major section separation
- **6XL:** `56px` — full-screen section spacing
- **Custom:** `92px` — extra-large padding for hero sections

**Usage Context:**
- **Padding:** `24px` for cards; `40px` for main sections; `52px` for hero containers
- **Gap (Flex):** `8px` for button groups; `12px` for form fields; `16px` for list items; `32px` for section groups
- **Margin:** `48px` between major sections; `24px` between related blocks

### Grid & Container

**Max Width:** `1200px` (desktop main container)

**Column Strategy:**
- **Desktop (1200px):** 12-column grid with `16px` gutter
- **Tablet (768px):** 8-column grid with `12px` gutter
- **Mobile (375px):** Single column or 4-column grid with `8px` gutter

**Section Patterns:**
- **Two-Column Layout:** Sidebar (320px fixed) + Main (flex fill) on desktop
- **Three-Column Grid:** Projects section uses `repeat(auto-fit, minmax(280px, 1fr))` for responsive project cards
- **Full-Width Hero:** Single column spanning max-width, centered
- **Card Grid:** `grid-auto-flow: dense` for variable-height experience cards

### Whitespace Philosophy

MonoCV embraces generous whitespace as a design principle, not a constraint. Breathing room elevates content hierarchy and reduces cognitive load. Sections are separated by `48px–56px` margins, cards by `24px` padding, and inline elements by `8px–16px` gaps. This creates a meditative, uncluttered reading experience where each piece of information feels intentional and discoverable.

### Border Radius Scale

- **0px:** Sharp corners for minimalist aesthetic on cards, inputs, and primary containers
- **8px:** Subtle rounding on project showcase cards (partial: `0px 8px 8px 0px`), secondary buttons
- **16px:** Moderate rounding on badges, skill tags, optional modals
- **44px:** Full pill shape for icon buttons, toggle controls, and circular elements

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (No Elevation) | `none` | Main card surfaces, input fields, background content |
| Subtle (Hover) | `rgba(0, 0, 0, 0.04) 0px 2px 8px 1px` | Navigation bars, cards on interactive hover |
| Medium (Elevation 1) | `rgba(0, 0, 0, 0.05) 0px 2px 8px 1px` | Profile card, elevated components |
| Prominent (Elevation 2) | `rgba(0, 0, 0, 0.08) 0px 8px 16px 2px` | Modals, dropdowns, overlays (on hover/interaction) |
| Deep (Elevation 3) | `rgba(0, 0, 0, 0.12) 0px 12px 24px 4px` | Reserved for critical overlays, maximum emphasis |

**Shadow Philosophy:**

MonoCV uses shadows sparingly and subtly. Rather than prominent depth, shadows function as delicate cues—indicating interactivity, state change, or containment. All shadows use black at low opacity (`0.04`–`0.12`) to maintain the minimalist aesthetic. Shadows are applied primarily on hover or active states, creating a responsive feedback mechanism without visual clutter at rest. This approach keeps the design clean and professional while preserving usability cues.

## 7. Do's and Don'ts

### Do

- **Do use generous whitespace** between sections (`48px` minimum) to create breathing room and guide the reader's eye
- **Do keep the color palette restricted** to black, white, gray, and the accent blue (`#0000EE`) for emphasis only
- **Do apply shadows on interaction states** (hover, focus) rather than at rest; use subtle shadows (`0.04`–`0.05` opacity)
- **Do prioritize typography hierarchy** with size, weight, and spacing rather than color variation
- **Do use the neutral scales** (`rgba(0, 0, 0, 0.74)`, `rgba(0, 0, 0, 0.40)`) for body text and secondary content to maintain contrast and professionalism
- **Do apply `#0000EE` accent color sparingly** for links, CTAs, and focus states only
- **Do ensure 16px minimum font size** for body text to support readability on all devices
- **Do use border radius `0px` or `8px`** for consistency; avoid rounded corners beyond these values except for pills (`44px`)
- **Do test all interactive elements** for keyboard navigation and focus visibility (`2px solid #0000EE` outline)
- **Do maintain consistent padding** across components: `12px` for form inputs, `24px` for cards, `40px` for sections

### Don't

- **Don't use multiple accent colors or gradients** that distract from content; stick to black, white, gray, and blue
- **Don't over-apply shadows**; use them only on hover/active states or for critical elevation (modals, dropdowns)
- **Don't reduce font size below 12px** for UI text or 14px for body copy; maintain legibility
- **Don't use decorative visual elements** that don't serve a functional purpose
- **Don't apply border radius greater than `8px`** except for intentional pill shapes (`44px`)
- **Don't mix font families within a component**; use General Sans for headings, Inter Display for body
- **Don't reduce line height below `1.4x`** font size; professional content requires breathing room
- **Don't set text color to pure black on white** in all contexts; use neutral scales (`rgba(0, 0, 0, 0.74)`) for secondary content
- **Don't create visual hierarchy through color alone**; use size, weight, and spacing as primary signals
- **Don't apply animations or transitions beyond `0.2s–0.3s` duration**; keep interactions snappy and responsive
- **Don't leave form inputs without clear focus states** (minimum `2px solid #0000EE` outline)
- **Don't use opacity-only interactions**; pair opacity changes with other states for clarity

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | 375px–480px | Single column, full-width containers, `16px` padding, sidebar moves below hero, `12px` base font size |
| Tablet | 481px–768px | 2-column layout on some sections, `20px` padding, profile sidebar repositioned or collapsible, `14px` base font size |
| Desktop | 769px–1200px | Full 2-column layout (sidebar + main), max-width `1200px`, `24px` padding, 3-column project grid, `16px` base font size |
| Large Desktop | 1201px+ | Optional 4-column project grid, increased max-width or centered container, expanded whitespace |

### Touch Targets

- **Minimum Interactive Size:** `44px × 44px` (buttons, icon controls, link targets)
- **Button Padding:** `12px` horizontal, `8px` vertical minimum for finger-sized targets
- **Link Padding:** `4px` extra padding around inline links for easier tapping
- **Form Inputs:** `50px` height minimum (accommodates comfortable mobile tapping)
- **Spacing Between Targets:** Minimum `8px` to prevent mis-taps

### Collapsing Strategy

- **Hero Section:** On mobile (`< 480px`), stack profile image above text; reduce padding from `92px` to `40px`
- **Sidebar Layout:** On tablet/mobile, move sidebar content below main content or hide behind an expandable toggle
- **Project Grid:** Collapse from 3 columns → 2 columns (tablet) → 1 column (mobile)
- **Experience Cards:** Remove left border or icon on mobile; simplify to text-only on very small screens
- **Navigation:** Convert horizontal nav to hamburger menu on screens `< 640px`
- **Typography:** Reduce H1 from `24px` to `20px` on mobile; reduce body from `16px` to `14px`
- **Spacing:** Reduce section gaps from `48px` to `32px` (tablet) and `24px` (mobile)
- **Button Width:** Change primary buttons from `500px` to `100%` on mobile; adjust height from `50px` to `44px` if needed
- **Forms:** Stack form fields vertically instead of side-by-side; ensure inputs expand to `100%` width on mobile

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA & Links:** Blue (`#0000EE`) — use for hyperlinks, primary focus states, accent emphasis only
- **Primary Text:** Black (`#000000`) — headings, strong emphasis
- **Secondary Text:** Neutral (`rgba(0, 0, 0, 0.74)`) — body copy, descriptions, secondary content
- **Tertiary Text:** Muted (`rgba(0, 0, 0, 0.40)`) — placeholder, disabled, very subtle text
- **Button Default:** Near-black (`rgba(0, 0, 0, 0.92)`) — primary action buttons
- **Button Ghost:** Light gray (`rgba(0, 0, 0, 0.24)`) — secondary, icon buttons
- **Background:** White (`#FFFFFF`) — main content surface
- **Background Tint:** Off-white (`#FEFEFE` or `#F6F6F6`) — subtle container backgrounds
- **Border:** Very light (`rgba(0, 0, 0, 0.08)–0.12`) — separators, card edges
- **Shadow:** Transparent black (`rgba(0, 0, 0, 0.04)–0.05`) — hover/interactive elevation only

### Iteration Guide

1. **Start with black and white:** All text is black (`#000000`) or neutral gray (`rgba(0, 0, 0, 0.74)`); all backgrounds are white (`#FFFFFF`) or very light off-white (`#FEFEFE`, `#F6F6F6`)

2. **Use typography as hierarchy:** Vary size (24px, 16px, 14px), weight (500 for headings, 400 for body), and line-height (1.4x–1.5x multiplier) to signal importance; avoid color-only differentiation

3. **Apply blue accent sparingly:** `#0000EE` is reserved exclusively for hyperlinks, primary focus states, and high-emphasis CTAs; do not use on backgrounds or secondary elements

4. **Spacing follows the `4px` base unit:** Padding is always a multiple of 4 (12px, 16px, 24px, 40px); gaps between flex items are 8px, 12px, 16px, 20px, 32px, 48px; never use arbitrary spacing

5. **Border radius is 0px or 8px (rarely 44px):** Cards and containers have sharp corners (`0px`); secondary buttons and badges have `8px`; only icon buttons and pills use `44px` full-pill rounding

6. **Shadows only on interaction:** No shadows at rest; apply subtle shadows (`rgba(0, 0, 0, 0.04) 0px 2px 8px 1px`) only on hover, focus, or elevated states (modals, overlays)

7. **Font families are consistent:** Headings use **General Sans** (weight 500); body/links use **Inter Display** (weight 400); buttons use **sans-serif** (weight 400); never mix families within a single component

8. **Form inputs have underline or subtle border only:** Text inputs use transparent background with `1px solid rgba(0, 0, 0, 0.12)` bottom border or full border; focus state adds blue outline (`2px solid #0000EE`)

9. **Buttons follow strict dimensions:** Primary buttons are `50px` height, `500px` width (responsive to 100%), `8px` border-radius; secondary icon buttons are `34px × 34px`, `44px` border-radius

10. **Maintain 44px minimum touch targets:** All interactive elements (buttons, links, inputs) must be at least `44px × 44px` or have sufficient padding to meet this guideline for mobile accessibility