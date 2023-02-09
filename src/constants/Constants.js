import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('window');
export const COLORS = {
  orange: "#F2A365",
  orange50:'#d68516b0',
  background: '#f4f4f4',
  white: '#dce4e6',
  black: '#111111',
  red:"#f00",
  warning: '#fdac71',
  success: '#6adaa4',
  gray: '#aaaaaaba',
  black50:'#040205',
  ButtonWhite: "#fff",
  grayFont:"#535357",
  grayICon: "#bfbfc0",
  pramary:'#212832',
  pramary50:'#2b495c',

};

export const PADDING = {
  xsPadding: 5,
  smPadding: 10,
  mdPadding: 15,
  lgPadding: 20,
  xlPadding: 25,
};
export const MARGIN = {
  xxsMargin:5,
  xsMargin: 10,
  smMargin: 20,
  mdMargin: 25,
  lgMargin: 30,
  xlMargin: 45,
};

export const RADIUS = {
  xxsRadius:8,
  xsRadius: 10,
  smRadius: 15,
  mdRadius: 20,
  lgRadius: 25,
  xlRadius: 30,
  xxlRadius: 45,
  x3lRadius: 50,
  x4lRadius: 55,
  x5lRadius: 60,
  x6lRadius: 65,

};

export const FONTS = {
  h0:40,
  h1: 30,
  h2: 25,
  h3: 20,
  h4: 18,
  h5: 16,
  h6: 14,
  h7: 18,
};

export const ICONSSIZE = {
  smIcon: 15,
  mIcon: 20,
  lIcon: 25,
  xlIcon: 30,
  xxlIcon:35,
  xxxlIcon:40

};

export const ProfilePhoto = {
  PhotoWidth: width * 0.17,
  PhotoHeight: height * 0.078,
};

export const IconsView = {
  IconWidth: width * 0.1,
  IconHeight: height * 0.05,
};
