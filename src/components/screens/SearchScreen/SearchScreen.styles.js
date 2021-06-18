import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    flex: 1,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 5,
    margin: 10,
    paddingHorizontal: 10,
  },
  searchBtn: {
    backgroundColor: 'green',
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatList: {
    flex: 1,
  },
  addressText: {
    paddingHorizontal: 10,
    marginBottom: 5,
  },
});

export default styles;
