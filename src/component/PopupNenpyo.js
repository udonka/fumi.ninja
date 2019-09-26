
import React, {useEffect, useRef} from 'react';
import { Link } from "react-router-dom";

export default function PopupNenpyo(props){
  const { nenpyo_id, year, event_id } = props.match.params;
  const nenpyo = props.nenpyos.find( n=>n.title==nenpyo_id );


  //年でソートして昇順であることを確定させる
  nenpyo.history = nenpyo.history.map(item=>{
    if(typeof item === "string"){
      const splited = item.split(",");
      return {
        year: splited[0],
        content: splited[1],
        desc: splited[2],
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

  const currentEvent = nenpyo.history.find(event => event.year == year && event.content == event_id)

  const close = (e)=>{
    //propsにhistoryが継承されてるのか。へ〜
    console.log("history");
    console.log(props);
    props.history.push('/')
  }

  const eventsRef = useRef(null); //スクロールのために使う
  const currentEventRef = useRef(null);

  //did update
  useEffect(() => {
    eventsRef.current.scrollTop = currentEventRef.current.offsetTop;
    
  });



  return pug`
    .c-popup-nenpyo(id="popup_"+nenpyo.title )
      .e-shadow(onClick=close)
      .e-nenpyo-wrapper
        header.e-header
          .c-nenpyo-header
            h1.e-title= nenpyo.title
            Link.e-link(to="/") 閉

        .e-contents 
          .e-nenpyo
            ol.e-list
              - let lastYear = null
              each year,index in Object.keys(collapsedHistory)
                - const events = collapsedHistory[year];
                li.e-item(key=index)
                  .c-event-item.m-hoverable(className=currentEvent && currentEvent.year==year?"m-active":"")
                    h2.e-year= year
                    .e-content
                      .e-paper
                        //複数ならばバッジを表示
                        each event,index in events
                          Link.e-event.m-hoverable(to="/single-nenpyo/" + nenpyo.title + "/" + year + "/" + event.content className=(currentEvent == event ? "m-active":"") key=index)= event.content

          if event_id
            .e-events(ref=eventsRef)
              each event,index in nenpyo.history
                //refで現在の要素だけ選んでいる
                .e-detail(key=index ref=(a)=>event_id == event.content ? currentEventRef.current = a : "aiu" )
                  .e-header
                    Link.c-event-item.m-hoverable(to="/single-nenpyo/" + nenpyo.title + "/" + event.year + "/" + event.content className=(currentEvent == event ? "m-active":""))
                      h2.e-year= event.year
                      .e-content
                        .e-paper
                          .e-event(className=(event_id == event.content ? "m-active":""))= event.content
                  .e-desc= event.desc || "せつめい"
                



  `;
}