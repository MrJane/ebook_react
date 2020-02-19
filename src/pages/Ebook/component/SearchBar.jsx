import React from 'react';
import HotSearch from "./HotSearch";
import Scroll from "../../../components/Scroll";

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar-wrapper">
        <div className="search-bar">
          <div className="search-bar-title-wrapper">
            <div className="title-icon-text-wrapper">
              <span className="icon-text">书城</span>
            </div>
            <div className="title-icon-shake-wrapper">
              <span className="icon-shake">

              </span>
            </div>
          </div>
          <div className="title-icon-back-wrapper">
            <span className="icon-back">

            </span>
          </div>
          <div className="search-bar-input-wrapper">
            <div className="search-back-wrapper">
              <span className="icon-back icon">
              </span>
            </div>
            <div className="search-bar-input">
              <span className="icon-search">

              </span>
              <input className="input" type="text" placeholder="请输入..."/>
            </div>
          </div>
        </div>
        <HotSearch></HotSearch>
        SearchBar
      </div>
    )
  }
};
