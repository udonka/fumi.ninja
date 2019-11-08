import React, {useEffect, useRef} from 'react';
import {animateScroll as scroll} from 'react-scroll';
import { Link } from "react-router-dom";

export default function PopupNenpyo(props){
  const { nenpyo_id, year, event_id } = props.match.params;
  const nenpyo = props.nenpyos.find( n=>n.title==nenpyo_id );


  //年でソートして昇順であることを確定させる
  nenpyo.history = nenpyo.history.map(item=>{
    if(typeof item === "string"){
      const splited = item.split(",");
      console.log("splited");
      console.log(splited);
      return {
        year: splited[0],
        content: splited[1],
        desc: splited[2],
        source: splited[3],
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
  const currentLineRef = useRef(null);
  const currentEventRef = useRef(null);


  //did update 描画しなおしが起こったとき
  useEffect(() => {


    //event_idが選択されていたら： = /single-nenpyo/忍者の文学/1661/甲陽軍鑑末書結要本 とかいうURLのとき
    if(event_id){
      console.log({offsetTop:currentLineRef.current.offsetTop});
      scroll.scrollTo(currentLineRef.current.offsetTop - 100, {containerId:"nenpyo_scroll_container", duration:300, smooth:"easeInOutQuart"})
      scroll.scrollTo(currentEventRef.current.offsetTop, {containerId:"events_scroll_container", duration:300, smooth:"easeInOutQuart"})
    }
    
  });



  return pug`
    .c-popup-nenpyo(id="popup_"+nenpyo.title )
      .e-shadow(onClick=close)
      .e-nenpyo-wrapper
        header.e-header
          .c-nenpyo-header-new
            h1.e-title= nenpyo.title
            Link.e-link(to="/") 閉

        .e-contents 
          .e-nenpyo#nenpyo_scroll_container 
            ol.e-list
              - let lastYear = null
              each year,index in Object.keys(collapsedHistory)
                - const events = collapsedHistory[year];
                - let isCurrentYear = currentEvent && currentEvent.year==year;

                li.e-item(key=index ref= (li)=>isCurrentYear ? currentLineRef.current = li : "aiu" )
                  .c-event-item.m-hoverable(className= isCurrentYear?"m-active":"")
                    h2.e-year= year
                    .e-content
                      .e-paper
                        //複数ならばバッジを表示
                        each event,index in events
                          - let isCurrent = currentEvent == event;
                          Link.e-event.m-hoverable(
                            to="/single-nenpyo/" + nenpyo.title + "/" + year + "/" + event.content 
                            className=(isCurrent ? "m-active":"") 
                            key=index
                          )= event.content

          if event_id
            //idはsmooth scroll に使う
            .e-events#events_scroll_container(ref=eventsRef)
              each event,index in nenpyo.history
                //refで現在の要素だけ選んでいる
                - let isCurrent = year + "_" + event_id == event.year + "_" +event.content;

                .e-detail(key=index ref=(a)=>isCurrent ? currentEventRef.current = a : "aiu" )
                  .e-header
                    Link.c-event-item.m-hoverable(
                      to="/single-nenpyo/" + nenpyo.title + "/" + event.year + "/" + event.content
                      className=(isCurrent ? "m-active":"")
                    )
                      h2.e-year= event.year
                      .e-content
                        .e-paper
                          .e-event(className=(isCurrent ? "m-active":""))= event.content
                  .e-desc= event.desc 
                    if(event.source )
                      .e-source= event.source 
                



  `;
}