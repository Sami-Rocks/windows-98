declare namespace globalThis{

    interface IStartMenuContext{
        startMenu:boolean,
        setStartMenu?:function;
    }

    type FileType = {
        id:number,
        name:string,
        image:string
    }

   
}