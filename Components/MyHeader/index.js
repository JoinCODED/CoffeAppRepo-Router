import React, { Component } from "react";

// NativeBase Components
import {
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";

// Style
import styles from "./styles";

// Router
import { Link } from "react-router-native";

class MyHeader extends Component {
  render() {
    return (
      <Header style={{ backgroundColor: "transparent" }}>
        <Left>
          <Button transparent onPress={() => this.props.history.goBack()}>
            <Icon style={styles.backicon} name="arrow-back" />
          </Button>
        </Left>

        <Body>
          <Title style={styles.header}>
            <Text>Coffe App</Text>
          </Title>
        </Body>
        <Right>
          <Link component={Button} to="/CoffeCart" transparent>
            <Text style={styles.text}>
              3 <Icon name="beer" style={styles.icon} />
            </Text>
          </Link>
        </Right>
      </Header>
    );
  }
}

export default MyHeader;
