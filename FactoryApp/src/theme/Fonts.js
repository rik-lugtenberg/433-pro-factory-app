import { Platform, StyleSheet } from 'react-native';

const Fonts = StyleSheet.create({
  BSBold: {
    fontFamily: 'BioSans-Bold',
  },
  BSExtraBold: {
    fontFamily: 'BioSans-ExtraBold',
  },
  BSExtraLight: {
    fontFamily: 'BioSans-ExtraLight',
  },
  BSExtraItalic: {
    fontFamily: 'BioSans-Italic',
  },
  BSLight: {
    fontFamily: 'BioSans-Light',
  },
  BSRegular: {
    fontFamily: 'BioSans-Regular',
  },
  BSSemiBold: {
    fontFamily: 'BioSans-SemiBold',
  },
  BSBoldItalic: {
    fontFamily: Platform.select({
      ios: 'BioSansW04-BoldItalic',
      android: 'BioSans-BoldItalic',
    }),
  },

  DMSansRegular: {
    fontFamily: 'DMSans-Regular',
  },
  MonoSpecMedium: {
    fontFamily: 'MonoSpec-Medium',
  },
  SoccerJersey: {
    fontFamily: Platform.select({
      android: 'SoccerJersey',
      ios: 'Soccer Jersey Regular',
    }),
  },
  jerseyFont: {
    fontFamily: Platform.select({
      ios: 'Soccer-Jersey',
      android: 'SoccerJersey',
    }),
  },
  PoppinsBlack: {
    fontFamily: 'Poppins-Black',
  },
  PoppinsBlackItalic: {
    fontFamily: 'Poppins-BlackItalic',
  },
  PoppinsBold: {
    fontFamily: 'Poppins-Bold',
  },

  PoppinsBoldItalic: {
    fontFamily: 'Poppins-BoldItalic',
  },
  PoppinsExtraBold: {
    fontFamily: 'Poppins-ExtraBold',
  },
  PoppinsExtraBoldItalic: {
    fontFamily: 'Poppins-ExtraBoldItalic',
  },
  PoppinsExtraLight: {
    fontFamily: 'Poppins-ExtraLight',
  },
  PoppinsExtraLightItalic: {
    fontFamily: 'Poppins-ExtraLightItalic',
  },
  PoppinsItalic: {
    fontFamily: 'Poppins-Italic',
  },
  PoppinsLight: {
    fontFamily: 'Poppins-Light',
  },
  PoppinsLightItalic: {
    fontFamily: 'Poppins-LightItalic',
  },
  PoppinsMedium: {
    fontFamily: 'Poppins-Medium',
  },
  PoppinsMediumItalic: {
    fontFamily: 'Poppins-MediumItalic',
  },
  PoppinsRegular: {
    fontFamily: 'Poppins-Regular',
  },
  PoppinsSemiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
  PoppinsSemiBoldItalic: {
    fontFamily: 'Poppins-SemiBoldItalic',
  },
  PoppinsThin: {
    fontFamily: 'Poppins-Thin',
  },
  PoppinsThinItalic: {
    fontFamily: 'Poppins-ThinItalic',
  },
});

export default Fonts;
