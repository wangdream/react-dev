import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./index.scss"


class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  handleClick(){
    window.history.pushState(null,'',"/details")
  }
  render() {
    
    return (
      <section className="contenList">
        {this.props.list.map((item,index) => {
          return(
            <Link  to="/details/">
            <div key={index} className="contenList-box"  >
              
            <div className="contenList-first">
              <div className="contenList-first-left">
                <div>{item.bussine}</div>
                <div></div>
                <div>{item.writeTime}天前</div>
              </div>
              {/* <div className="contenList-first-right">
                <div>{item.source}</div>
                <div>{item.bussine}</div>
              </div> */}
            </div>
            <div className="contenList-two"><h5>{item.title}</h5></div>
            <div className="contenList-three">{item.description}</div>
            <div className="contenList-four"></div>
          </div>
          </Link>
          );
        })}
      </section>
    );
  }
}

export default Content;