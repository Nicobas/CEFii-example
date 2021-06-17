import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  noDataContainer: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  noDataText: {
    fontSize: 20,
  },
  flatList: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  addBtn: {
    backgroundColor: 'green',
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  search: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 5,
    margin: 10,
    paddingHorizontal: 10,
  },
});

export default styles;
