import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  componentDidMount() {
    console.log('le composant est opérationnel');
  }

  componentWillUnmount() {
    console.log('le composant va être détruit');
  }

  onTouchablePress = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  render() {
    return (
      <View>
        <Text>Name : {this.props.name}</Text>
        <TouchableOpacity onPress={this.onTouchablePress}>
          <Text>Value : {this.state.value}</Text>
        </TouchableOpacity>
        <Text>Mon composant classe</Text>
      </View>
    );
  }
}

export default ClassComponent;
