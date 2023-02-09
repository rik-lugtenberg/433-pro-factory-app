import { StyleSheet } from "react-native";

import { Color, Fonts, Metrics } from "../../theme";

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: Color.black },
  cameraStyle: {
    width: "100%",
    height: "100%",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryText: {
    color: Color.white,
    marginTop: 20,
    fontSize: Metrics.screenWidth * 0.06,
    ...Fonts.PoppinsBold,
  },
  marker: {
    width: Metrics.screenWidth * 0.6,
    height: Metrics.screenWidth * 0.6,
    borderColor: Color.yellow,
    borderWidth: 3,
  },
  passContainer: {
    width: "100%",
    height: "30%",
    position: "absolute",
    top: 0,
    alignItems: "center",
  },
  passTitle: {
    ...Fonts.PoppinsBold,
    color: Color.white,
    width: "90%",
    fontSize: Metrics.screenWidth * 0.055,
    textAlign: "center",
    marginTop: 30,
  },
  footText: {
    color: Color.yellow,
  },
  passwordView: {
    flexDirection: "row",
    backgroundColor: Color.slate,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 20,
  },
  password: {
    color: Color.white,
    marginLeft: 8,
    fontSize: Metrics.screenWidth * 0.05,
    ...Fonts.DMSansRegular,
  },
  headerWrapper: {
    width: "100%",
    position: "absolute",
    top: "8%",
    zIndex: 100,
    alignItems: "center",
  },
  header: {
    width: "100%",
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerButtons: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: Color.yellow,
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    color: Color.black,
    fontSize: 20,
  },
  qrText: {
    color: Color.white,
    ...Fonts.PoppinsSemiBold,
    textAlign: "center",
    width: "70%",
    marginTop: 30,
  },
  manualText: {
    color: Color.yellow,
    textDecorationLine: "underline",
    ...Fonts.PoppinsBold,
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
    zIndex: 100,
  },
});

export default styles;
