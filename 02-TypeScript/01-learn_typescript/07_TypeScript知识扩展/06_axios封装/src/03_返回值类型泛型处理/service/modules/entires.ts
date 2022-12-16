import { myRequest2 } from "../../index";

interface IHighScoreData {
  list: any[],
  subtitle: string,
  title: string
  type: string,
  _id: string
}
myRequest2.request<IHighScoreData>({
  url: "/home/highscore",
}).then(res => {
  console.log("/home/highscore: ", res.list)
})