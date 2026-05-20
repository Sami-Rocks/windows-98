const classicWindowTypes: Array<PortfolioAppType> = ['about', 'projects', 'experiments', 'contact', 'links']
const explorerWindowTypes: Array<PortfolioAppType> = ['about', 'projects', 'experiments']

// Utility: Window class name
function getWindowClassName (file: FileType, isActive: boolean) {
	return [
		'window',
		isActive ? 'active' : 'not-active',
		classicWindowTypes.includes(file.type) ? 'classic-window' : '',
		explorerWindowTypes.includes(file.type) ? 'explorer-window' : '',
		file.type === 'resume' ? 'notepad-window' : '',
		file.isMaximized ? 'maximized' : ''
	].filter(Boolean).join(' ')
}

export default getWindowClassName
