import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerStyle:{
    // backgroundColor: "rgba(1,68,148,0.8)",
    color: '#ec602a',
    fontWeight: 'bold',
    fontSize: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 2},
    textShadowRadius: 5,
    fontWeight: "bold",
  },
  text: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  soundIcon: {
    alignSelf: "center",
    alignItems: "center"
  },
  button: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    marginLeft: 5,
    marginRight: 5,
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
});

export default styles;