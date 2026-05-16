type FileBarType = {
	title: string,
	subTitles: Array<string>
}

const explorerFileBar: Array<FileBarType> = [
	{
		title: 'File',
		subTitles: ['New', 'Create Shortcut', 'Delete', 'Rename', 'Properties', 'Close']
	},
	{
		title: 'Edit',
		subTitles: ['Undo', 'Cut', 'Copy', 'Paste', 'Select All']
	},
	{
		title: 'View',
		subTitles: ['Toolbars', 'Status Bar', 'Large Icons', 'Details']
	},
	{
		title: 'Go',
		subTitles: ['Back', 'Forward', 'Up One Level', 'Home Page']
	},
	{
		title: 'Favorites',
		subTitles: ['Add to Favorites', 'Organize Favorites']
	},
	{
		title: 'Help',
		subTitles: ['Help Topics', 'About Windows 98']
	}
]

const notepadFileBar: Array<FileBarType> = [
	{
		title: 'File',
		subTitles: ['New', 'Open', 'Save', 'Save As', 'Page Setup', 'Print', 'Exit']
	},
	{
		title: 'Edit',
		subTitles: ['Undo', 'Cut', 'Copy', 'Paste', 'Delete', 'Select All', 'Time/Date']
	},
	{
		title: 'Format',
		subTitles: ['Word Wrap', 'Font']
	},
	{
		title: 'View',
		subTitles: ['Status Bar']
	},
	{
		title: 'Help',
		subTitles: ['Help Topics', 'About Notepad']
	}
]

const browserFileBar: Array<FileBarType> = [
	{
		title: 'File',
		subTitles: ['New', 'Open', 'Save As', 'Page Setup', 'Print', 'Close']
	},
	{
		title: 'Edit',
		subTitles: ['Cut', 'Copy', 'Paste', 'Find']
	},
	{
		title: 'View',
		subTitles: ['Toolbars', 'Status Bar', 'Text Size', 'Source']
	},
	{
		title: 'Go',
		subTitles: ['Back', 'Forward', 'Home Page', 'Search the Web']
	},
	{
		title: 'Favorites',
		subTitles: ['Add to Favorites', 'Organize Favorites']
	},
	{
		title: 'Help',
		subTitles: ['Contents and Index', 'About Internet Explorer']
	}
]

const mailFileBar: Array<FileBarType> = [
	{
		title: 'File',
		subTitles: ['New', 'Open', 'Save As', 'Print', 'Folder', 'Exit']
	},
	{
		title: 'Edit',
		subTitles: ['Copy', 'Select All', 'Find']
	},
	{
		title: 'View',
		subTitles: ['Current View', 'Layout', 'Sort By']
	},
	{
		title: 'Tools',
		subTitles: ['Send and Receive', 'Address Book', 'Accounts', 'Options']
	},
	{
		title: 'Message',
		subTitles: ['New Message', 'Reply', 'Forward', 'Delete']
	},
	{
		title: 'Help',
		subTitles: ['Help Topics', 'About Outlook Express']
	}
]

function getFileBar (type: PortfolioAppType) {
	if (type === 'resume') return notepadFileBar
	if (type === 'contact') return mailFileBar
	if (type === 'links') return browserFileBar

	return explorerFileBar
}

export {
	getFileBar
}
