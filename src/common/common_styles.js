import { StyleSheet } from "react-native";
import { getScreenWidth } from "./common_functions";

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  button: {
    marginTop: 5,
    marginBottom: 5,
    width: getScreenWidth() - 20
  },
  inputForm: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});
