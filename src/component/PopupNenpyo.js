
import React from 'react';
import { Link } from "react-router-dom";

export default function PopupNenpyo(props){
  const {nenpyo_id:id } = props.match.params;
  const nenpyo = props.nenpyos.find(n=>n.title==id);

  console.log(id);
  console.log(nenpyo);

  //年でソートして昇順であることを確定させる
  console.log(nenpyo);
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

  const close = (e)=>{
    //propsにhistoryが継承されてるのか。へ〜
    console.log("history");
    console.log(props);
    props.history.push('/')
  }

  return pug`
    .c-popup-nenpyo(id="popup_"+nenpyo.title )
      .e-shadow(onClick=close)
      .e-nenpyo-wrapper
        .e-nenpyo
          header.e-header
            .c-nenpyo-header
              h1.e-title= nenpyo.title
              Link.e-link(to="/") 閉
          ol.e-list
            - let lastYear = null

            each year in Object.keys(collapsedHistory)
              -
                const events = collapsedHistory[year];
              li.e-item(key=year)

                .c-event-item
                  h2.e-year= year
                  .e-content
                    .e-paper
                      //複数ならばバッジを表示
                      each event,index in  events
                        Link.e-event(to="/single-nenpyo/" + nenpyo.title + "/" + year + "/" + event.content key=index)= event.content
              - lastYear = year
        .e-nenpyo
  `;
}