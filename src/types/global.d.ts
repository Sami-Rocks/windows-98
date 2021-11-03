declare namespace globalThis{

    interface IStartMenuContext{
        startMenu:boolean,
        setStartMenu?:function;
    }

    const defaults = {
        startMenu: false
    }
}