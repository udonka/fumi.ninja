import React from 'react';
import logo from './logo.svg';
import './App.sass';

const itemHeight = 3; //sass側と合わせる

const china_heisho_nenpyo = {
  title: "中国兵書",
  history:[
    "1615, 素書",
    "1624, 三略秘抄",
    "1624, 七書",
    "1636, 軍林宝鑑",
    "1637, ...",
    "1664, 武備志",
  ]
}

const japan_heisho_nenpyo = {
  title: "日本兵書",
  history:[
    "1645, 大平記評判秘伝理尽抄",
    "1645, 恩地左近太郎聞書",
    "1649, 当流軍法巧者書",
    "1649, 軍法極秘伝書",
    "1650, ...",
    "1656, 武者物語",
  ]
}

const nenpyo1 = {
  title: "忍者の文学",
  history:[
    "1626,太閤記",
    "1640,聚楽物語",
    "1641,北条五代記",
    "1654,武者物語",
    "1656,甲陽軍鑑",
    "1661,古老戦物語",
    "1661,甲陽軍鑑末書結要本",
    "1661,武者物語之抄",
    "1661,伽婢子",
    "1661,伽婢子",
    "1661,難波戦記",
    "1684,石川五右衛門",
    "1676,本朝二十不孝",
    "1688,新可笑記",
    "1689,浅井三代記",
    "1698,北越軍談",
    "1702,沖津白波",
    "1688,塩尻",
    "1707,明良洪範",
    "1709,武道張合大鑑",
    "1709,武道張合大鑑",
    "1709,新武者物語",
    "1710,傾城吉岡染",
    "1713,当世信玄記",
    "1715,和漢三才図会",
    "1727,女将門七人化粧",
    "1729,御伽平家",
    "1733,高砂大嶋台",
    "1734,近江輿地志略",
    "1716,賊金秘誠談",
    "1736,風流軍配団",
    "1737,釜淵双級巴",
    "1738,其磧置土産",
    "1739,武遊双級巴",
    "1739,常山紀談",
    "1740,龍都俵系図",
    "1742,老媼茶話",
    "1742,雷神不動北山桜",
    "1743,薄雪音羽滝",
    "1749,義貞艶軍配",
    "1754,風流川中嶋",
    "1767,当世行次第",
    "1764,厭蝕太平楽記",
    "1777,加羅先代萩",
    "1778,金門五三桐",
    "1781,元禎筆記",
    "1786,けいせい忍術池",
    "1789,木下蔭狭間合戦",
    "1796,艶競石川染",
    "1797,絵本太閤記",
    "1806,自来也説話",
    "1807,自来也説話後編",
    "1807,柵自来也談",
    "1809,自来也物語",
    "1820,南総里見八犬伝",
    "1820,聞説女自来也",
    "1820,海録",
    "1821,甲子夜話",
    "1821,甲子夜話続編",
    "1829,本朝盛衰記",
    "1839,自雷也豪傑譚",
    "1839,貞操婦女八賢誌三編",
    "1850,扶桑皇統記図会後編",
    "1854,緑林自来也実録",
    "1855,自来也後編譚話",
    "1857,自来也物語",
    //"1935,しぐれ草紙", //これはどういう位置付け？
  ]
}

const ninja_nenpyo_meiji = {
  title: "忍者の文学（明治）",
  history:[
    "1885, 石川五右衛門伝記",
    "1885, 石川五右衛門実記",
    "1886, 石川五右衛門実記",
    "1899, 難波戦記",
    "1900, 難波戦記冬物語",
    "1900, 難波戦記後日談",
    "1901, 真田大助：難波戦記後日談",
    "1903, 真田幸村諸国漫遊記",
    "1906, 佐渡島大仇討",
    "1906, 太閤栄華物語夏之巻",
    "1907, 真田幸村北国漫遊記",
    "1909, 真田幸村九州漫遊記",
    "1910, 猿飛佐助",
    "1911, 真田幸村",
    "1912, 真田三傑忍術佐助",
    "1913, 猿飛佐助",
    "1914, 霧隠才蔵",
    "1914, 三好清海入道",
    "1915, 猿飛佐助漫遊記など(雪花山人)",
    "1915, 和田平助正勝など（凝香園）",
    "1915, 忍術勘助",
    "1916, 鈴木菊若丸など(雪花山人)",
    "1916, 豪傑自雷也",
    "1916, 猿飛佐助",
    "1916, 忍術の怪賊",
    "1916, 忍術名人猿飛佐助",
    "1917, 百々地八郎など(雪花山人)",
    "1917, 忍術旅行",
    "1917, 自来也・石川五右衛門",
    "1917, 忍術名人猿飛佐助",
    "1917, 霧隠才蔵忍術漫遊",
    "1917, 戸田新十郎",
    "1917, 忍術の怪傑伊集院八郎",
    "1917, 猿飛霧隠忍術競",
    "1918, 浅井万千代など(雪花山人)",
    "1918, 霧隠才蔵猿飛佐助忍術漫遊",
    "1918, 浮田秀若丸、大谷大学",
    "1918, 忍術雲切八郎",
    "1918, 後藤又兵衛忍術破",
    "1919, 霧隠才蔵",
    "1919, 猿飛佐助忍術修行",
    "1920, 忍術四天王",
    "1922, 忍術己来也",
    "1922, 神変呉越草子",
    "1922, 鳶葛木曾桟",
    "1922, 猿飛小源吾忍術大活動",
    "1924, 真野小源太",
    "1925, 敵討日月双紙",
    "1925, 神洲天馬侠",
  ]
}

const jiraiya_nenpyo = {
  title: "「自来也」の系譜",
  history:[
    "1806,自来也説話",
    "1807,自来也説話後編",
    "1807,柵自来也談",
    "1809,自来也物語",
    "1820,聞説女自来也",
    "1839,自雷也豪傑譚",

    "1854,緑林自来也実録",
    "1855,自来也後編譚話",
    "1857,自来也物語",
    "1916, 豪傑自雷也",
    "1917, 自来也・石川五右衛門",
  ]
}

const ishikawa_nenpyo = {
  title: "「石川五右衛門」の系譜",
  history:[
    "1684,石川五右衛門",
    "1796,艶競石川染",
    "1885, 石川五右衛門伝記",
    "1885, 石川五右衛門実記",
    "1886, 石川五右衛門実記",
    "1917, 自来也・石川五右衛門",

  ]
}

const sarutobi_nenpyo = {
  title: "「猿飛」の系譜",
  history:[
    "1910, 猿飛佐助",
    "1913, 猿飛佐助",
    "1915, 猿飛佐助漫遊記など(雪花山人)",
    "1916, 猿飛佐助",
    "1916, 忍術名人猿飛佐助",
    "1917, 忍術名人猿飛佐助",
    "1917, 猿飛霧隠忍術競",
    "1918, 霧隠才蔵猿飛佐助忍術漫遊",
    "1919, 猿飛佐助忍術修行",
    "1922, 猿飛小源吾忍術大活動",
  ]
}

const saizou_nenpyo = {
  title: "「霧隠才蔵」の系譜",
  history:[
    "1914, 霧隠才蔵",
    "1917, 霧隠才蔵忍術漫遊",
    "1918, 霧隠才蔵猿飛佐助忍術漫遊",
    "1919, 霧隠才蔵",
  ]
}



function Nenpyo(props){
  const {nenpyo, startYear} = props;
  const globalStartYear = startYear;

  //年でソートして昇順であることを確定させる
  nenpyo.history = nenpyo.history.map(item=>{
    if(typeof item === "string"){
      const splited = item.split(",");
      return {
        year: splited[0],
        content: splited[1]
      }
    }
    else{
      return item;
    }
  })

  nenpyo.history.sort((a,b)=> a.year - b.year );

  //同じ年をまとめる
  const collapsedHistory = {}; 

  nenpyo.history.forEach(item=>{
    const events = collapsedHistory[item.year];
    if(!events){
      collapsedHistory[item.year] = [];
    }
    collapsedHistory[item.year].push(item);
  });


  //これが最も若い
  const firstYear = nenpyo.history[0].year; 
  const offsetYear = firstYear - globalStartYear;
  const offsetRem = offsetYear * itemHeight;

  // - の書き方はだめっぽ
  return pug`
    .c-sub-nenpyo(id=nenpyo.title style={top:offsetRem+"rem"})
      header.e-header
        h1.e-title= nenpyo.title
      ol.e-list
        - let lastYear = null

        each year,index in Object.keys(collapsedHistory)
          - const events = collapsedHistory[year];
          - const diff = year - lastYear - 1;

          //差があったら間に入れる

          if lastYear 
            each times,index in new Array(diff).fill(0)
              li(key=index).e-item
                .e-year
          li(key=index).e-item
            h2.e-year= year
            .e-content
              .e-paper
                each event,index in  events
                  p(key=index)= event.content

          - lastYear = year


  `
}

function Nenpyos(props){
  const startYear = props.from;
  const endYear = props.to;

  const interval = endYear - startYear + 1;
  const years = [...Array(interval).keys()].map(year => year + startYear)
  return pug`
    .c-nenpyos
      .e-years
        .c-year-lines
          ol.e-list
            each year,index in years
              li(key=index).e-line
                h2.e-year= year
      
      .e-containers
        .e-col
          Nenpyo(nenpyo=china_heisho_nenpyo, startYear=startYear)
        .e-col
          Nenpyo(nenpyo=japan_heisho_nenpyo, startYear=startYear)
        .e-col
          Nenpyo(nenpyo=nenpyo1, startYear=startYear)

        .e-col
          Nenpyo(nenpyo=ninja_nenpyo_meiji, startYear=startYear)

        .e-col
          Nenpyo(nenpyo=jiraiya_nenpyo, startYear=startYear)

        .e-col
          Nenpyo(nenpyo=ishikawa_nenpyo, startYear=startYear)

        .e-col
          Nenpyo(nenpyo=sarutobi_nenpyo, startYear=startYear)

        .e-col
          Nenpyo(nenpyo=saizou_nenpyo, startYear=startYear)
  `;
}



function App() {
  return pug`
    .c-page-wrapper
      .e-header
        .c-header
          h1 fumi.ninja 
      .e-content
        Nenpyos(from=1610 to=2000)

      .e-footer
        .c-controls
          p ninja 
  `;
}

export default App;
