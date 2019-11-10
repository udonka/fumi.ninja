import React,{Component} from 'react';

import { Link } from "react-router-dom";
import { tsConstructorType } from '@babel/types';

export default class SubNenpyo extends Component{
  constructor(props){
    super(props);
    const {nenpyo, startYear} = props;
    //年でソートして昇順であることを確定させる
    nenpyo.history = nenpyo.history.map(item=>{
      if(typeof item === "string"){
        const splited = item.split(",");
        return {
          year: splited[0],
          content: splited[1],
          desc: splited[2],
          source: splited[3],
          source_anchor: splited[4],
        }
      }
      else{
        return item;
      }
    })
    nenpyo.history.sort((a,b)=> a.year - b.year );
    //同じ年をまとめる
    this.collapsedHistory = {}; 
    nenpyo.history.forEach(item=>{
      const events = this.collapsedHistory[item.year];
      if(!events){
        this.collapsedHistory[item.year] = [];
      }
      this.collapsedHistory[item.year].push(item);
    });
  }

  componentDidMount(){
    console.log("componentDidMount");
    console.log();

    //c-sub-nenpyo の位置を測る
    this.offsetTop = this.$subNenpyo.offsetTop;
    this.offsetHeight = this.$subNenpyo.offsetHeight;

  }

  render(){

    //これが最も若い
    const firstYear = this.props.nenpyo.history[0].year; 
    
    const offsetYear = firstYear - this.props.startYear;

    const offsetRem = offsetYear * this.props.itemHeight;

    return pug`
    .c-sub-nenpyo(id=this.props.nenpyo.title style={top:offsetRem + "rem"} ref=(node)=>{this.$subNenpyo=node})
      header.e-header
        .c-nenpyo-header-new
          .e-title= this.props.nenpyo.title
          Link.e-link(to="/single-nenpyo/"+this.props.nenpyo.title) 開
      ol.c-event-line
        - let lastYear = null

        each year,index in Object.keys(this.collapsedHistory)
          - const events = this.collapsedHistory[year];
          - const diff = year - lastYear - 1;

          //差があったら間に入れる

          if lastYear 
            each times,index in new Array(diff).fill(0)
              li(key=index).e-item

          li(key=index).e-item
            .e-event-item.m-hover-slide
              .e-year 
                //まる
                .c-year-icon 
                  //テキスト
                  span.e-text= year
              .e-content

                .e-hider

                  .e-paper
                    each event,index in  events
                      Link.e-event.m-hoverable(to="/single-nenpyo/" + this.props.nenpyo.title + "/" + year + "/" + event.content key=index)= event.content

                  //2個までのときは影はいらない
                  if events.length > 2 
                    .e-fade-shadow

                if events.length > 2 
                  //複数ならばバッジを表示
                  .e-num= events.length

          - lastYear = year
    `;

  }
}