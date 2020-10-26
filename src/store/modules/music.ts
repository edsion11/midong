import { VuexModule,Module, Mutation, getModule } from 'vuex-module-decorators'
import store from '@/store'
import {State} from "vuex-class";
import {IMusicList, IMusicLists,IMusics} from "../../interface/index"

export interface MusicState {
    musicLists:IMusicLists
    musics:Array<object>,
    specials:Array<object>,
    combins:Array<object>
    musicList:Array<IMusicList>
}

@Module({ dynamic: true, store, name: 'MusicState'})
class Music extends VuexModule implements MusicState {

    //State
    public musicLists = {
        isLike:false,
        data:[
            {
                name: "Yellow Post-Its",
                time: "10:00"
            },
            {
                name: "I did my best today",
                time: "12:30"
            },
            {
                name: "I am grateful",
                time: "10:00"
            },
            {
                name: "治愈英语",
                time: "10:00"
            },
            {
                name: "Yellow Post-Its",
                time: "10:00"
            },
            {
                name: "Yellow Post-Its",
                time: "10:00"
            }
        ]
    };
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
    public musicList = [
        {
            id: 0,
            icon: require("../../assets/music.png"),
            musicList: this.musics,
            title: "我喜欢的音律",
            isMusic: true
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
    public addLike(){
        this.musicLists.isLike = true
        this.musics.push(
        {
            imgUrl:
                "https://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
                    name: "海浪",
            sum: 235,
            from:"world"
        }
        )
    }

    @Mutation
    public popLike(){
        this.musicLists.isLike = false
        this.musics.pop()
    }
}

export const AppModule = getModule(Music)