import { VuexModule,Module, Mutation, getModule } from 'vuex-module-decorators'
import store from '@/store'


export interface MusicState {
    count:number,
    musics:Array<object>,
    specials:Array<object>,
    combins:Array<object>
}

@Module({ dynamic: true, store, name: 'music'})
class Music extends VuexModule implements MusicState {

    //State
    public count = 0;
    public musics = [
        {
            imgUrl:
                "https://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
            name: "海浪",
            sum: 235,
            from: "hello"
        },
        {
            imgUrl:
                "https://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
            name: "海浪",
            sum: 235,
            from: "hello"
        }
    ]
    public specials =  [
        {
            imgUrl:
                "https://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
            name: "海浪",
            sum: 235,
            from: "hello"
        },
        {
            imgUrl:
                "https://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
            name: "海浪",
            sum: 235,
            from: "hello"
        }
    ]
    public combins= [
        {
            imgUrl:
                "https://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
            name: "海浪",
            sum: 235,
            from: "hello"
        },
        {
            imgUrl:
                "https://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
            name: "海浪",
            sum: 235,
            from: "hello"
        }
    ]
    public musicList: Array<object> = [
        {
            id: 0,
            icon: require("../../assets/music.png"),
            musicList: this.musics,
            title: "我喜欢的音律",
            ismusic: true
        },
        {
            id: 1,
            icon: require("../../assets/musiclist.png"),
            title: "我喜欢的专辑",
            musicList: this.specials,
            isSpecial: true
        },
        {
            id: 2,
            icon: require("../../assets/favoriteS.png"),
            title: "我定制的组合音律",
            musicList: this.combins,
            isCombin: true
        }
    ];

    //Mutation
    @Mutation
    public increment():void{
        this.count++
    }
    @Mutation
    public addLike(){
        this.musics.push(
        {
            imgUrl:
                "https://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
                    name: "海浪aaa",
            sum: 235,
            from:"world"
        }
        )
    }
}

export const AppModule = getModule(Music)