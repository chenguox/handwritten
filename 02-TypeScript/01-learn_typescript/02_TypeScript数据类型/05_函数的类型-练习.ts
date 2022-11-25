// 定义对象类型
type LyricType = {
  time: number
  text: string
}

// 歌词解析工具
function parseLyric(lyric: string): LyricType[] {
  const lyrics: LyricType[] = []
  lyrics.push({ 
    time: 1111,
    text: '天空好像下雨'
  })
  return lyrics
}

const lyricInfos = parseLyric("aaaaaaa")
for (const item of lyricInfos) {
  console.log(item.time, item.text)
}

export {}