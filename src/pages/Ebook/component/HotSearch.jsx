import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotSearch: [
        {
          type: 1,
          text: 'Self-Reported Population Health',
          num: '1.8万'
        },
        {
          type: 1,
          text: 'Library and Information Sciences',
          num: '1.1万'
        },
        {
          type: 1,
          text: 'Global Business Strategy',
          num: '1.3万'
        },
        {
          type: 1,
          text: 'Corporate Data Quality',
          num: '1.0万'
        },
        {
          type: 1,
          text: 'Verrechnungspreise',
          num: '3.9万'
        }
      ],
    }
  }

  render() {
    const {hotSearch} = this.state;
    return (
      <div className="hot-search">
        <div className="hot-search-title">
          <span className="label">{'label'}</span>
          <span className="btn">{'btn'}</span>
        </div>
        <div className="hot-search-list">
          {
            hotSearch.map((item, index) => {
              return (
                <div className="hot-search-item">
                  <div className="icon-wrapper">
                    {
                      item.type===1? <span className="icon-book icon"></span>: <span className="icon-search icon"> </span>
                    }
                  </div>
                  <div className="hot-search-text-wrapper">
                    <div className="text">{item.text}</div>
                    <div className="num">{item.num}人搜索</div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
};
