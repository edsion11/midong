interface IMusic{
    name:string,
    time:string
}
export  interface IMusicLists{
    isLike: boolean,
    data?: Array<IMusic>,
}
export interface IMusics{
    imgUrl:string,
    name:string,
    sum:number,
    from:string
}
export interface IMusicList{
    id:number,
    icon:any,
    musicList:Array<IMusics>,
    title:string,
    isMusic?:boolean,
    isSpecial?:boolean,
    isCombin?:boolean
}