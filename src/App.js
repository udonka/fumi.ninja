import React,{Component} from 'react';
import logo from './logo.svg';
import './App.sass';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import SubNenpyo from "./component/SubNenpyo.js";
import PopupNenpyo from "./component/PopupNenpyo.js";
import PopupEvent from "./component/PopupEvent.js";

import nenpyos from "./nenpyos.json";

const itemHeight = 3; //sass側と合わせる
//こういうことやらないためにcss module 使うといいのかな？


function Nenpyos(props){
  const startYear = props.from || 1600;
  const endYear = props.to || 2000;


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
        each nenpyo in nenpyos
          .e-col(key=nenpyo.title)
            SubNenpyo(
              nenpyo=nenpyo 
              startYear=startYear 
              itemHeight=itemHeight )
  `;
}


class App extends Component{
  constructor(props){
    super(props);

  }


  render(){
    return pug`
    .c-page-wrapper
      .e-header
        .c-header
          h1(style={textAlign:"center"}) 忍者年表

      .e-content
        //todo 引数渡したい

        .e-scroller(onScroll=this.scrolled)
          Nenpyos

        .e-fixed
          Switch
            Route(path="/single-nenpyo/:nenpyo_id/:year/:event_id" 
              render=${(props)=>pug`PopupNenpyo(nenpyos=nenpyos ...props)`})

            Route(path="/single-nenpyo/:nenpyo_id" 
              render=${(props)=>pug`PopupNenpyo(nenpyos=nenpyos ...props)`})


      //
        .e-footer
          .c-controls
            p ninja 
    `;
  }
}

export default App;
