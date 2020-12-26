import React, { Component } from "react";
import "./style.css";
import { ThemeContextConsumer } from "../../utils/themeContext";
export default class Test extends Component {
  constructor(props) {
    super(props);
    this.listener = null;
    this.state = {
      status: "top",
    };
  }

  render() {
    // const theme = this.context
    return (
     <div>
       <ThemeContextConsumer>
         {context => (
           <div>
             <p>{context.theme}</p>
             <button onClick={context.toggleTheme}>Toggle</button>
           </div>
         )}
       </ThemeContextConsumer>
     </div>
    );
  }
}
