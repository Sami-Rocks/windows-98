// Modules
import { FormEvent, ReactNode, useState } from 'react'

// Assets
import documentIcon from '../../../../assets/images/icon-document.png'

type WindowContentType = {
	file: FileType,
	openWindow: (file: FileType) => void
}

type FolderIconType = 'folder' | 'document' | 'computer'

type ProjectType = {
	icon: FolderIconType,
	name: string,
	type: string,
	size: string,
	modified: string,
	summary: string
}

type ShortcutType = {
	label: string,
	url: string,
	description: string
}

const profileName = 'Samuel Owusu-Aboagye'
const contactEmail = 'sowusuaboagye@gmail.com'
const phoneNumber = '+233 24 240 7403'
const location = 'Madina, Accra, Ghana'
const portfolioUrl = 'https://sami-rocks.web.app/'
const githubUrl = 'https://github.com/Sami-Rocks'
const windows98Url = 'https://window-98.web.app'
const windows98GithubUrl = 'https://github.com/Sami-Rocks/windows-98'
const codepenUrl = 'https://codepen.io/sami-rocks'
const gatheraUrl = 'https://gathera.app/'

const projects: Array<ProjectType> = [
	{
		icon: 'folder',
		name: 'Website Builder',
		type: 'Contract',
		size: 'Angular',
		modified: '2020',
		summary: 'Modular template websites for a web builder platform with Wertech Solutions.'
	},
	{
		icon: 'computer',
		name: 'Windows 98 Rebuild',
		type: 'Website',
		size: 'React',
		modified: '2020',
		summary: 'A nostalgic recreation of the Windows 98 UI in a browser.'
	},
	{
		icon: 'document',
		name: 'CSS Arts',
		type: 'CodePen',
		size: 'CSS',
		modified: 'Ongoing',
		summary: 'CSS art experiments including Batman, The Minions, and Homer Simpson.'
	}
]

const shortcuts: Array<ShortcutType> = [
	{
		label: 'Portfolio Website',
		url: portfolioUrl,
		description: 'Main portfolio site'
	},
	{
		label: 'GitHub',
		url: githubUrl,
		description: 'Source code and experiments'
	},
	{
		label: 'Windows 98 Live',
		url: windows98Url,
		description: 'Live Windows 98 rebuild'
	},
	{
		label: 'CodePen',
		url: codepenUrl,
		description: 'CSS art and UI experiments'
	},
	{
		label: 'Gathera.app',
		url: gatheraUrl,
		description: 'Gathera project link'
	},
	{
		label: 'Email',
		url: `mailto:${contactEmail}`,
		description: 'Start a conversation'
	}
]

const browserHomeUrl = 'about:portfolio'

const resumeText = `${profileName.toUpperCase()}
Frontend Engineer

${location}
${phoneNumber}
${contactEmail}
Portfolio: ${portfolioUrl}

SUMMARY
Frontend Engineer with 6+ years of experience building scalable mobile and web applications. Known for owning architecture, optimising performance, and delivering pixel-perfect UIs both solo and in cross-functional teams.

SKILLS
Frontend: React, Next.js, TypeScript, JavaScript, Redux, Gatsby, Angular, Ionic, Vue, Tailwind CSS, Shadcn UI, MUI, SASS
Tooling & DevOps: Git, CI/CD, Vite, Webpack, Firebase, REST APIs, Server Components
UI/UX Design: Figma, Adobe Suite, UI/UX Design, Responsive Design
Other: AWS, WordPress, WooCommerce

EXPERIENCE
Telecel, Accra, Ghana - Applications Developer
December 2021 - Present
- Led architectural decisions for component structure, state management, and scalable UI patterns.
- Developed reusable component libraries aligned with design system guidelines.
- Used TypeScript extensively across React and Gatsby projects.
- Served as sole frontend engineer on internal and public-facing projects.
- Contributed to rebuilding and rebranding company websites.
- Integrated data from backend services and databases.
- Improved accessibility and load time through frontend standards and best practices.

aiXplain, San Jose, CA (Remote) - Frontend Engineer
July 2023 - September 2025
- Redesigned and improved the administrative dashboard.
- Improved load time by at least 30% through code optimisation, refined architecture, and lazy loading.
- Built reusable UI components based on design system standards.
- Maintained and implemented features as sole frontend developer for the administrative dashboard.
- Supported side projects and collaborated with cross-functional teams.

Syncline IT/Infonalogy, Spintex, Accra/Allen, TX - Software Engineer
January 2021 - September 2021
- Led UI/UX design direction with Adobe Suite from wireframes to high-fidelity mockups.
- Built and tested enhancement features with Katalon and Vue.
- Designed user-friendly software interfaces in Adobe XD.
- Managed and maintained a custom WordPress website.

CYST Company Limited, East Legon, Accra - Software Engineer
June 2019 - August 2020
- Built and deployed an object recognition mobile app using Tensorflow.js and Ionic.
- Developed a fraud detection system for cryptocurrency transaction anomalies.
- Designed animated graphics, logos, branding, and informational graphics.

PROJECTS
Website Builder - Built modular template websites with Angular and Bootstrap for a web builder platform.
Windows 98 Rebuild - ${windows98Url} | GitHub: ${windows98GithubUrl}
CSS Arts - ${codepenUrl}

EDUCATION
BSc. Computer Engineering, University of Energy and Natural Resources, Sunyani, Ghana (2015-2019)
Certificate in Microfrontends with React, Udemy (2023)

ACHIEVEMENTS
First runner-up at the "Achieve by Petra" Hackathon, building innovative finance and AI solutions.`

type ToolbarButtonType = {
	disabled?: boolean,
	icon: string,
	label: string,
	onClick?: () => void
}

type AddressBarType = {
	isEditable?: boolean,
	onChange?: (value: string) => void,
	onSubmit?: () => void,
	value: string
}

type BrowserToolbarType = {
	address: string,
	canGoBack: boolean,
	canGoForward: boolean,
	isReaderMode: boolean,
	onAddressChange: (value: string) => void,
	onBack: () => void,
	onForward: () => void,
	onHome: () => void,
	onOpenExternal: () => void,
	onReader: () => void,
	onRefresh: () => void,
	onStop: () => void,
	onSubmit: () => void
}

type ExplorerToolbarType = {
	address: string,
	canGoBack?: boolean,
	canGoForward?: boolean,
	canGoUp?: boolean,
	onBack?: () => void,
	onForward?: () => void,
	onUp?: () => void
}

type ExplorerShellType = ExplorerToolbarType & {
	children: ReactNode,
	heading: string,
	icon?: FolderIconType,
	meta: string
}

type FolderItemType = {
	description: string,
	icon: FolderIconType,
	id: string,
	items?: Array<FolderItemType>,
	name: string,
	text?: string
}

type AboutAppType = {
	openWindow: (file: FileType) => void
}

function getTextFileId (id: string) {
	return id.split('').reduce((fileId, character) => {
		return ((fileId * 31) + character.charCodeAt(0)) % 900000
	}, 10000)
}

const aboutItems: Array<FolderItemType> = [
	{
		description: 'Summary, contact, and portfolio snapshot.',
		icon: 'document',
		id: 'profile',
		name: 'Profile.txt',
		text: `${profileName}
Frontend Engineer

${location}
${phoneNumber}
${contactEmail}
${portfolioUrl}

Frontend Engineer with 6+ years of experience building scalable mobile and web applications. Known for owning architecture, optimising performance, and delivering pixel-perfect UIs both solo and in cross-functional teams.`
	},
	{
		description: 'Frontend, tooling, design, and platform skills.',
		icon: 'folder',
		id: 'skills',
		name: 'Skills',
		items: [
			{
				description: 'Core frontend stack from the CV.',
				icon: 'document',
				id: 'frontend',
				name: 'Frontend.txt',
				text: 'React, Next.js, TypeScript, JavaScript, Redux, Gatsby, Angular, Ionic, Vue, Tailwind CSS, Shadcn UI, MUI, and SASS.'
			},
			{
				description: 'Build tools, APIs, deployment, and backend-adjacent work.',
				icon: 'document',
				id: 'tooling',
				name: 'Tooling & DevOps.txt',
				text: 'Git, CI/CD, Vite, Webpack, Firebase, REST APIs, Server Components, AWS, WordPress, and WooCommerce.'
			},
			{
				description: 'Design tools and UI craft.',
				icon: 'document',
				id: 'design',
				name: 'UI-UX Design.txt',
				text: 'Figma, Adobe Suite, UI/UX Design, responsive design, high-fidelity mockups, branding, and informational graphics.'
			}
		]
	},
	{
		description: 'Work history from the CV.',
		icon: 'folder',
		id: 'experience',
		name: 'Experience',
		items: [
			{
				description: 'Current applications developer role.',
				icon: 'document',
				id: 'telecel',
				name: 'Telecel.txt',
				text: `Telecel, Accra, Ghana - Applications Developer
December 2021 - Present

- Led architectural decisions for component structure, state management, and scalable UI patterns.
- Developed reusable component libraries aligned with design system guidelines.
- Used TypeScript across React and Gatsby projects.
- Served as sole frontend engineer on internal and public-facing projects.
- Helped rebuild and rebrand company websites.
- Improved accessibility and load time through frontend standards and best practices.`
			},
			{
				description: 'Remote frontend engineering role.',
				icon: 'document',
				id: 'aixplain',
				name: 'aiXplain.txt',
				text: `aiXplain, San Jose, CA (Remote) - Frontend Engineer
July 2023 - September 2025

- Redesigned and improved the administrative dashboard.
- Improved load time by at least 30% through code optimisation, refined architecture, and lazy loading.
- Built reusable UI components based on design system standards.
- Maintained and implemented features as sole frontend developer for the administrative dashboard.
- Supported side projects and collaborated with cross-functional teams.`
			},
			{
				description: 'Software engineering and UI/UX role.',
				icon: 'document',
				id: 'syncline',
				name: 'Syncline IT.txt',
				text: `Syncline IT/Infonalogy, Spintex, Accra/Allen, TX - Software Engineer
January 2021 - September 2021

- Led UI/UX design direction using Adobe Suite.
- Built and tested enhancement features with Katalon and Vue.
- Designed user-friendly software interfaces in Adobe XD.
- Managed and maintained a custom WordPress website.`
			},
			{
				description: 'Software engineering, AI, and graphics role.',
				icon: 'document',
				id: 'cyst',
				name: 'CYST Company.txt',
				text: `CYST Company Limited, East Legon, Accra - Software Engineer
June 2019 - August 2020

- Built and deployed an object recognition mobile app using Tensorflow.js and Ionic.
- Developed a cryptocurrency fraud detection system with Python, Scikit-learn, Pandas, and Numpy.
- Designed animated graphics, logos, branding, and informational graphics.`
			}
		]
	},
	{
		description: 'Selected projects from the CV.',
		icon: 'folder',
		id: 'projects',
		name: 'Projects',
		items: [
			{
				description: 'Angular and Bootstrap contract project.',
				icon: 'document',
				id: 'website-builder',
				name: 'Website Builder.txt',
				text: 'Built modular template websites with Angular and Bootstrap for a web builder platform with Wertech Solutions in New York.'
			},
			{
				description: 'This Windows 98-style web project.',
				icon: 'document',
				id: 'windows-98-rebuild',
				name: 'Windows 98 Rebuild.txt',
				text: `A nostalgic recreation of the Windows 98 UI in a browser.

Live Site: ${windows98Url}
GitHub: ${windows98GithubUrl}
Stack: React, CSS, HTML`
			},
			{
				description: 'CSS art experiments.',
				icon: 'document',
				id: 'css-arts',
				name: 'CSS Arts.txt',
				text: `Creating art with little HTML and a lot of CSS. Examples include Batman, The Minions, and Homer Simpson.

Live arts: ${codepenUrl}
Stack: CSS, HTML`
			}
		]
	},
	{
		description: 'Education and certification.',
		icon: 'document',
		id: 'education',
		name: 'Education.txt',
		text: `BSc. Computer Engineering
University of Energy and Natural Resources, Sunyani, Ghana (2015-2019)

Certificate in Microfrontends with React
Udemy (2023)

Covered computer architecture, programming, algorithms, AI, software engineering principles, microfrontend architecture, CI/CD pipelines, CSS scoping, and AWS deployment.`
	},
	{
		description: 'Hackathon achievement.',
		icon: 'document',
		id: 'achievements',
		name: 'Achievements.txt',
		text: 'First runner-up at the "Achieve by Petra" Hackathon, building innovative finance and AI solutions in a competitive setting.'
	},
	{
		description: 'Short contact note for the portfolio.',
		icon: 'document',
		id: 'contact',
		name: 'Contact.txt',
		text: `Email: ${contactEmail}
Phone: ${phoneNumber}
Location: ${location}
Portfolio: ${portfolioUrl}
GitHub: ${githubUrl}
CodePen: ${codepenUrl}`
	}
]

// Component: Windows > Toolbar button
function ToolbarButton ({ disabled, icon, label, onClick }: ToolbarButtonType) {
	// Render
	return (
		<button
			className="toolbar-button"
			disabled={disabled}
			onClick={onClick}>
			<span className={`toolbar-icon icon-${icon}`} />
			{label}
		</button>
	)
}

// Component: Windows > Address bar
function AddressBar ({ isEditable, onChange, onSubmit, value }: AddressBarType) {
	// Functions
	function handleSubmit (event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		if (onSubmit) onSubmit()
	}

	// Render
	return (
		<form className="address-bar" onSubmit={handleSubmit}>
			<span>Address</span>
			<span className="address-drive-icon" />
			{isEditable ? (
				<input
					value={value}
					onChange={(event) => onChange && onChange(event.target.value)} />
			) : (
				<div>{value}</div>
			)}
			<button type="submit">▼</button>
		</form>
	)
}

// Component: Windows > Explorer toolbar
function ExplorerToolbar ({ address, canGoBack, canGoForward, canGoUp, onBack, onForward, onUp }: ExplorerToolbarType) {
	// Render
	return (
		<>
			<div className="program-toolbar">
				<ToolbarButton
					disabled={!canGoBack}
					icon="back"
					label="Back"
					onClick={onBack} />
				<ToolbarButton
					disabled={!canGoForward}
					icon="forward"
					label="Forward"
					onClick={onForward} />
				<ToolbarButton
					disabled={!canGoUp}
					icon="up"
					label="Up"
					onClick={onUp} />
				<span className="toolbar-separator" />
				<ToolbarButton icon="cut" label="Cut" />
				<ToolbarButton icon="copy" label="Copy" />
				<ToolbarButton icon="paste" label="Paste" />
				<span className="toolbar-separator" />
				<ToolbarButton icon="views" label="Views" />
			</div>
			<AddressBar value={address} />
		</>
	)
}

// Component: Windows > Browser toolbar
function BrowserToolbar ({ address, canGoBack, canGoForward, isReaderMode, onAddressChange, onBack, onForward, onHome, onOpenExternal, onReader, onRefresh, onStop, onSubmit }: BrowserToolbarType) {
	// Render
	return (
		<>
			<div className="program-toolbar browser-toolbar">
				<ToolbarButton
					disabled={!canGoBack}
					icon="back"
					label="Back"
					onClick={onBack} />
				<ToolbarButton
					disabled={!canGoForward}
					icon="forward"
					label="Forward"
					onClick={onForward} />
				<ToolbarButton
					icon="stop"
					label="Stop"
					onClick={onStop} />
				<ToolbarButton
					icon="refresh"
					label="Refresh"
					onClick={onRefresh} />
				<ToolbarButton
					icon="home"
					label="Home"
					onClick={onHome} />
				<ToolbarButton icon="search" label="Search" />
				<ToolbarButton icon="favorites" label="Favorites" />
				<ToolbarButton
					icon="open"
					label="Open"
					onClick={onOpenExternal} />
				<ToolbarButton
					icon="reader"
					label={isReaderMode ? 'Web View' : 'Reader'}
					onClick={onReader} />
			</div>
			<AddressBar
				isEditable
				value={address}
				onChange={onAddressChange}
				onSubmit={onSubmit} />
		</>
	)
}

// Component: Windows > Folder icon
function FolderIcon ({ icon }: { icon: FolderIconType }) {
	// Render
	return (
		<span className={`folder-large-icon ${icon}`} />
	)
}

// Component: Windows > Folder grid
function FolderGrid ({ items, onOpen }: { items: Array<FolderItemType>, onOpen?: (item: FolderItemType) => void }) {
	// Render
	return (
		<div className="folder-grid">
			{items.map(item => (
				<button
					className="folder-item"
					key={item.id}
					title={item.description}
					onDoubleClick={() => onOpen && onOpen(item)}>
					<FolderIcon icon={item.icon} />
					<span>{item.name}</span>
				</button>
			))}
		</div>
	)
}

// Component: Windows > Explorer shell
function ExplorerShell ({ address, canGoBack, canGoForward, canGoUp, children, heading, icon, meta, onBack, onForward, onUp }: ExplorerShellType) {
	// Render
	return (
		<div className="program explorer-program">
			<ExplorerToolbar
				address={address}
				canGoBack={canGoBack}
				canGoForward={canGoForward}
				canGoUp={canGoUp}
				onBack={onBack}
				onForward={onForward}
				onUp={onUp} />
			<div className="explorer-body">
				<aside className="explorer-sidebar">
					<FolderIcon icon={icon || 'folder'} />
					<h2>{heading}</h2>
					<div className="sidebar-line" />
					<p>{meta}</p>
					<p>Select an item to view its description.</p>
				</aside>
				<section className="explorer-main">
					{children}
				</section>
			</div>
			<div className="program-status">
				<span>{meta}</span>
				<span>My Computer</span>
			</div>
		</div>
	)
}

// Component: Windows > About app
function AboutApp ({ openWindow }: AboutAppType) {
	// State
	const [history, setHistory] = useState<Array<FolderItemType | null>>([null])
	const [historyIndex, setHistoryIndex] = useState(0)

	// Data
	const activeItem = history[historyIndex]
	const folderItems = activeItem?.items || aboutItems
	const addressItems = history.slice(1, historyIndex + 1).filter((item): item is FolderItemType => Boolean(item))
	const address = ['C:\\About Me', ...addressItems.map(item => item.name)].join('\\')
	const heading = activeItem ? activeItem.name : 'About Me'
	const icon = activeItem?.icon || 'computer'
	const meta = `${folderItems.length} object(s)`
	const parentItem = activeItem ? getParentItem(aboutItems, activeItem.id) : null

	// Functions
	function getParentItem (items: Array<FolderItemType>, id: string, parent: FolderItemType | null = null): FolderItemType | null {
		for (const item of items) {
			if (item.id === id) return parent
			if (item.items) {
				const childParent = getParentItem(item.items, id, item)
				if (childParent || item.items.some(child => child.id === id)) return childParent
			}
		}

		return null
	}

	function moveToItem (item: FolderItemType | null) {
		const nextHistory = history.slice(0, historyIndex + 1)

		setHistory([...nextHistory, item])
		setHistoryIndex(nextHistory.length)
	}

	function openItem (item: FolderItemType) {
		if (item.text) {
			openWindow({
				id: getTextFileId(item.id),
				image: documentIcon,
				name: item.name,
				text: item.text,
				type: 'resume'
			})
			return
		}

		moveToItem(item)
	}

	function goBack () {
		if (historyIndex === 0) return
		setHistoryIndex(historyIndex - 1)
	}

	function goForward () {
		if (historyIndex >= history.length - 1) return
		setHistoryIndex(historyIndex + 1)
	}

	function goUp () {
		if (!activeItem) return
		moveToItem(parentItem)
	}

	// Render
	return (
		<ExplorerShell
			address={address}
			canGoBack={historyIndex > 0}
			canGoForward={historyIndex < history.length - 1}
			canGoUp={Boolean(activeItem)}
			heading={heading}
			icon={icon}
			meta={meta}
			onBack={goBack}
			onForward={goForward}
			onUp={goUp}>
			<FolderGrid
				items={folderItems}
				onOpen={openItem} />
		</ExplorerShell>
	)
}

// Component: Windows > Projects app
function ProjectsApp () {
	// Render
	return (
		<ExplorerShell
			address="C:\\Projects"
			heading="Projects"
			meta={`${projects.length} object(s)`}>
			<FolderGrid
				items={projects.map(project => ({
					description: project.summary,
					icon: project.icon,
					id: project.name,
					name: project.name
				}))} />
		</ExplorerShell>
	)
}

// Component: Windows > Resume app
function ResumeApp ({ file }: { file: FileType }) {
	// Render
	return (
		<div className="program notepad-program">
			<textarea
				className="notepad-page"
				defaultValue={file.text || resumeText}
				spellCheck={false} />
			<div className="notepad-status">
				<span>Ln 1, Col 1</span>
				<span>Windows (CRLF)</span>
			</div>
		</div>
	)
}

// Component: Windows > Contact app
function ContactApp () {
	// Render
	return (
		<div className="program mail-program">
			<div className="program-toolbar">
				<ToolbarButton icon="mail" label="New Mail" />
				<ToolbarButton icon="reply" label="Reply" />
				<ToolbarButton icon="forward" label="Forward" />
				<ToolbarButton icon="send" label="Send/Recv" />
				<ToolbarButton icon="address-book" label="Addresses" />
			</div>
			<div className="mail-body">
				<aside className="mail-folders">
					<h3>Folders</h3>
					<p>Inbox</p>
					<p>Portfolio Leads</p>
					<p>Sent Items</p>
					<p>Drafts</p>
				</aside>
				<section className="mail-list">
					<div className="mail-row mail-head">
						<span>From</span>
						<span>Subject</span>
					</div>
					<div className="mail-row selected">
						<span>Samuel</span>
						<span>Frontend Engineer - portfolio contact</span>
					</div>
					<div className="mail-row">
						<span>Contact</span>
						<span>Email, portfolio, GitHub, CodePen</span>
					</div>
				</section>
				<section className="mail-preview">
					<div className="compose-line"><strong>To:</strong> {contactEmail}</div>
					<div className="compose-line"><strong>Subject:</strong> Project enquiry</div>
					<p>
						{profileName} is a frontend engineer based in {location}, with 6+ years of
						experience building scalable mobile and web applications.
					</p>
					<p>
						Phone: {phoneNumber}<br />
						Portfolio: {portfolioUrl}<br />
						GitHub: {githubUrl}<br />
						CodePen: {codepenUrl}
					</p>
				</section>
			</div>
			<div className="program-status">2 message(s)</div>
		</div>
	)
}

// Component: Windows > Links app
function LinksApp () {
	// State
	const [history, setHistory] = useState<Array<string>>([browserHomeUrl])
	const [historyIndex, setHistoryIndex] = useState(0)
	const [address, setAddress] = useState(browserHomeUrl)
	const [frameKey, setFrameKey] = useState(0)
	const [isReaderMode, setIsReaderMode] = useState(false)

	// Data
	const currentUrl = history[historyIndex]
	const isHome = currentUrl === browserHomeUrl
	const readerUrl = `https://r.jina.ai/${currentUrl}`

	// Functions
	function normalizeUrl (url: string) {
		const nextUrl = url.trim()
		if (!nextUrl) return browserHomeUrl
		if (nextUrl === browserHomeUrl) return browserHomeUrl
		if (nextUrl.includes('://') || nextUrl.startsWith('mailto:')) return nextUrl

		return `https://${nextUrl}`
	}

	function openUrl (url: string) {
		const nextUrl = normalizeUrl(url)
		const nextHistory = history.slice(0, historyIndex + 1)

		if (nextUrl.startsWith('mailto:')) {
			window.location.href = nextUrl
			return
		}

		setHistory([...nextHistory, nextUrl])
		setHistoryIndex(nextHistory.length)
		setAddress(nextUrl)
		setIsReaderMode(false)
	}

	function goBack () {
		if (historyIndex === 0) return
		const nextIndex = historyIndex - 1

		setHistoryIndex(nextIndex)
		setAddress(history[nextIndex])
	}

	function goForward () {
		if (historyIndex >= history.length - 1) return
		const nextIndex = historyIndex + 1

		setHistoryIndex(nextIndex)
		setAddress(history[nextIndex])
	}

	function refresh () {
		setFrameKey(frameKey + 1)
	}

	function stop () {
		setFrameKey(frameKey + 1)
	}

	function goHome () {
		openUrl(browserHomeUrl)
	}

	function toggleReader () {
		if (isHome) return
		setFrameKey(frameKey + 1)
		setIsReaderMode(!isReaderMode)
	}

	function openExternal () {
		if (currentUrl === browserHomeUrl) return
		window.open(currentUrl, '_blank', 'noopener,noreferrer')
	}

	function renderBrowserPage () {
		if (isHome) {
			return (
				<div className="browser-page">
					<div className="browser-header">
						<h1>{profileName}&apos;s Home Page</h1>
						<p>Internet Explorer-style shortcuts to portfolio, projects, and contact links.</p>
					</div>
					<div className="link-table">
						{shortcuts.map(shortcut => (
							<button
								key={shortcut.label}
								onClick={() => openUrl(shortcut.url)}>
								<strong>{shortcut.label}</strong>
								<span>{shortcut.description}</span>
							</button>
						))}
					</div>
				</div>
			)
		}

		if (isReaderMode) {
			return (
				<div className="browser-reader">
					<iframe
						key={`${readerUrl}-${frameKey}`}
						src={readerUrl}
						title="Internet Explorer reader page" />
				</div>
			)
		}

		return (
			<div className="browser-embed">
				<iframe
					key={`${currentUrl}-${frameKey}`}
					src={currentUrl}
					title="Internet Explorer page" />
				<div className="browser-fallback">
					<h2>This page may not appear here</h2>
					<p>
						Many modern websites block loading inside iframes. The address is still valid,
						but it may need to open in a normal browser tab.
					</p>
					<button onClick={openExternal}>Open {currentUrl}</button>
				</div>
			</div>
		)
	}

	// Render
	return (
		<div className="program browser-program">
			<BrowserToolbar
				address={address}
				canGoBack={historyIndex > 0}
				canGoForward={historyIndex < history.length - 1}
				isReaderMode={isReaderMode}
				onAddressChange={setAddress}
				onBack={goBack}
				onForward={goForward}
				onHome={goHome}
				onOpenExternal={openExternal}
				onReader={toggleReader}
				onRefresh={refresh}
				onStop={stop}
				onSubmit={() => openUrl(address)} />
			<div className="browser-frame">
				{renderBrowserPage()}
			</div>
			<div className="program-status">{currentUrl}</div>
		</div>
	)
}

// Component: Windows > Experiments app
function ExperimentsApp () {
	// Render
	return (
		<ExplorerShell
			address="C:\\Portfolio\\Experiments"
			heading="Experiments"
			meta="3 object(s)">
			<FolderGrid
				items={[
					{
						description: 'Small CSS illustrations and interface experiments.',
						icon: 'folder',
						id: 'css-art',
						name: 'CSS Art'
					},
					{
						description: 'Tiny games and interaction tests.',
						icon: 'folder',
						id: 'mini-games',
						name: 'Mini Games'
					},
					{
						description: 'Older UI clones and learning projects.',
						icon: 'folder',
						id: 'old-clones',
						name: 'Old Clones'
					}
				]} />
		</ExplorerShell>
	)
}

// Component: Windows > Window content
function WindowContent ({ file, openWindow }: WindowContentType) {
	// Functions
	function renderApp () {
		switch (file.type) {
			case 'about':
				return <AboutApp openWindow={openWindow} />
			case 'projects':
				return <ProjectsApp />
			case 'resume':
				return <ResumeApp file={file} />
			case 'contact':
				return <ContactApp />
			case 'links':
				return <LinksApp />
			case 'experiments':
				return <ExperimentsApp />
			default:
				return <AboutApp openWindow={openWindow} />
		}
	}

	// Render
	return (
		<div className="content">
			{renderApp()}
		</div>
	)
}

// Export
export default WindowContent
