import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

 class ThemeContextProvider extends Component {
  state = {
    theme: "Day",
    isOpen: false
  };

  toggleTheme = () => {
    console.log('toggle theme')
    this.setState(prevState => {
      return {
        theme: prevState.theme === "Day" ? "Night" : "Day"
      };
    });
  };

  toggleCartOpen = () => {
    console.log("toggling")
    this.setState(prevState => {
      return {
        isOpen: prevState.isOpen  == false ?  true : false
      };
    });
  };

  render() {
    return (
      <Provider
        value={{ theme: this.state.theme,
           toggleTheme: this.toggleTheme, 
           isOpen: this.state.isOpen,
            toggleCartOpen: this.toggleCartOpen }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
