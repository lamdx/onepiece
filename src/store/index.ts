import { defineStore } from 'pinia'
import { getMusic } from '@/api'
export const useStore = defineStore('player', {
  // arrow function recommended for full type inference
  state: () => ({
    // all these properties will have their type inferred automatically
    palyStatus: 0,
    songName: '',
    author: '',
    imgUrl: '',
    musicUrl: '',
    playing: false
  }),
  actions: {
    updatePlaying(status: boolean) {
      this.playing = status
    },
    updateMusicInfo(obj: any) {
      const { songName, author, imgUrl, musicUrl } = obj
      this.songName = songName
      this.author = author
      this.imgUrl = imgUrl
      this.musicUrl = musicUrl
    },
    async getMusicInfo() {
      try {
        const { data } = await getMusic()
        const { name, artistsname, picurl, url } = data
        const obj = {
          songName: name,
          author: artistsname,
          imgUrl: picurl,
          musicUrl: url
        }
        const { songName, author, imgUrl, musicUrl } = obj
        this.songName = songName
        this.author = author
        this.imgUrl = imgUrl
        this.musicUrl = musicUrl
      } catch (error) {
        console.log('error ===', error)
      }
    }
  }
})
