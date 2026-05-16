declare namespace globalThis{

	interface IStartMenuContext{
		startMenu: boolean,
		setStartMenu?: function;
	}

	type PortfolioAppType = 'about' | 'projects' | 'resume' | 'contact' | 'links' | 'experiments'

	type FileType = {
		id: number,
		isMaximized?: boolean,
		isMinimized?: boolean,
		name: string,
		image: string,
		text?: string,
		type: PortfolioAppType
	}

}
