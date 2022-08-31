import React, { useState }  from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import PostLink from "../components/post-link"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import TopImg from "../../static/img/top.png";
import AppleIcon from "../../static/img/dl_icon_apple.png";
import GoogleIcon from "../../static/img/dl_icon_google.png";
import Title1 from "../../static/img/title1.png";
import Title2 from "../../static/img/title2.png";
import Title3 from "../../static/img/title3.png";
import Title4 from "../../static/img/title4.png";
import Title5 from "../../static/img/title5_news.png";
import TopContents from "../../static/img/title1_contents.png";
import Point1 from "../../static/img/canIcon/point1.png";
import Point2 from "../../static/img/canIcon/point2.png";
import Point3 from "../../static/img/canIcon/point3.png";
import Point4 from "../../static/img/canIcon/point4.png";
import Point5 from "../../static/img/canIcon/point5.png";
import Point6 from "../../static/img/canIcon/point6.png";
import Point7 from "../../static/img/canIcon/point7.png";
import Point8 from "../../static/img/canIcon/point8.png";
import Contents3 from "../../static/img/title3_contents.png";
import Contents4 from "../../static/img/title4_contents.png";
import NewsContents from "../../static/img/title5_news_contents.png";
import Title6 from "../../static/img/title6_contact.png";
import ContactButton from "../../static/img/title6_contact_contents2.png";
import Bottom from "../../static/img/bottom.png";

export default function Home({ data }) {
  const [mailBody, setMailBody] = useState('')
  const [mailName, setMailName] = useState('')

  const mailto = `mailto:popdish.contact@gmail.com?subject=お名前：${mailName}&body=${mailBody}`

  return (
    <Layout>
      <SEO title="Dev Blog" description="Gatsbyを使って作ったブログです" />
      <div className="App">
        {/* トップビュー */}
        <img src={TopImg} className="top-img" alt="logo" />

        {/* コンテンツ部分 */}
        <div className="container">
          {/* アイコン */}
          <div className="top-icon">
            <a href="https://apps.apple.com/us/app/popdish/id1618467447?itsct=apps_box_badge&amp;itscg=30200">
              <img src={AppleIcon} className="dl-icon-apple" alt="logo" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.popdish.android">
              <img src={GoogleIcon} className="dl-icon-google" alt="logo" />
            </a>
          </div>

          {/*  Popdish とは */}
          <div className="about">
            <img src={Title1} className="title" alt="logo" />
            <img src={TopContents} className="contents" alt="logo" />
          </div>

          {/*  Popdish で何ができるの */}
          <div className="why-popdish">
            <img src={Title2} className="title" alt="logo" />
            <div className="img-row">
              <div>
                <img src={Point1} alt="logo" />
                <p>
                  グルメ動画の
                  <br />
                  投稿と視聴
                </p>
              </div>
              <div>
                <img src={Point2} alt="logo" />
                <p>
                  地図での
                  <br />
                  お店検索
                </p>
              </div>
              <div>
                <img src={Point3} alt="logo" />
                <p>
                  動画への
                  <br />
                  いいね！
                </p>
              </div>
              <div>
                <img src={Point4} alt="logo" />
                <p>
                  お気に入り
                  <br />
                  を保存
                </p>
              </div>
            </div>
            <div className="img-row">
              <div>
                <img src={Point5} className="" alt="logo" />
                <p>
                  コメントや
                  <br />
                  お店の登録
                </p>
              </div>
              <div>
                <img src={Point6} className="" alt="logo" />
                <p>
                  お店電話予約や
                  <br />
                  営業時間の確認
                </p>
              </div>
              <div>
                <img src={Point7} className="" alt="logo" />
                <p>
                  料理ジャンルで
                  <br />
                  お店の検索
                </p>
              </div>
              <div>
                <img src={Point8} className="" alt="logo" />
                <p>
                  ユーザーの
                  <br />
                  フォロー機能
                </p>
              </div>
            </div>
          </div>

          {/*  Popdish で探せる料理ジャンル一覧 */}
          <div className="genre">
            <img src={Title3} className="title" alt="logo" />
            <img src={Contents3} className="contents" alt="logo" />
          </div>

          {/*  Popdish で何ができるの */}
          <div className="can">
            <img src={Title4} className="title" alt="logo" />
            <img src={Contents4} className="contents" alt="logo" />
          </div>

          {/*  NEWS */}
          <div className="news">
            <img src={Title5} className="title" alt="logo" />
            {data.allMicrocmsNews.edges.map(edge => (
              <PostLink key={edge.node.slug} post={edge.node} />
            ))}
          </div>

          <div className="contact">
            <img src={Title6} className="title" alt="logo" />
            <div className="contact-input">
              <p>
                NAME<span>*</span>
              </p>
              <input type="text" onChange={e => setMailName(e.target.value)} />
              <p>MASSAGE</p>
              <textarea
                rows="4"
                cols="40"
                onChange={e => setMailBody(e.target.value)}
              />
            </div>
            <a href={mailto}>
              <img src={ContactButton} className="button" alt="logo" />
            </a>
          </div>
        </div>

        <div className="bottom">
          <div className="bottom-icon">
            <a href="https://apps.apple.com/us/app/popdish/id1618467447?itsct=apps_box_badge&amp;itscg=30200">
              <img src={AppleIcon} className="dl-icon-apple" alt="logo" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.popdish.android">
              <img src={GoogleIcon} className="dl-icon-google" alt="logo" />
            </a>
          </div>

          <img src={Bottom} className="bottom-bg" alt="logo" />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMicrocmsNews {
      edges {
        node {
          id
          body
          title
          date
        }
      }
    }
  }
`
