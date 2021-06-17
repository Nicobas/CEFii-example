import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d2d2d2',
    marginHorizontal: 5,
    marginTop: 5,
    paddingLeft: 10,
  },
  checkboxBtn: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'black',
    marginRight: 20,
  },
  deleteBtn: {
    backgroundColor: 'red',
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  text: {
    flex: 1,
  },
});

export default styles;
