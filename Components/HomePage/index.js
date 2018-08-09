import React, { Component } from "react";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from "native-base";

// Components
import CoffeList from "../CoffeList";
import CoffeDetail from "../CoffeDetail";
import CoffeCart from "../CoffeCart";
import MyHeader from "../MyHeader";

// Background Image
import background from "../../images/b1.png";

// Style
import styles from "./styles";

// Router
import { Route, Switch, Link } from "react-router-native";

class HomePage extends Component {
  render() {
    return (
      <ImageBackground
        source={background}
        style={{ height: null, width: null, flex: 1 }}
      >
        <View style={styles.overlay} />
        <Container>
          <Route path="/" component={MyHeader} />
          <Content>
            <Switch>
              <Route exact path="/" render={() => <CoffeList />} />
              <Route path="/CoffeCart" render={() => <CoffeCart />} />
              <Route path="/CoffeDetail" render={() => <CoffeDetail />} />
            </Switch>
          </Content>
          <Footer style={{ backgroundColor: "transparent" }}>
            <FooterTab>
              <Link component={Button} full to="/CoffeCart">
                <Text style={styles.footerbutton}>
                  <Icon name="cart" style={styles.footericon} />
                  Cart
                </Text>
              </Link>
            </FooterTab>
          </Footer>
        </Container>
      </ImageBackground>
    );
  }
}

export default HomePage;
