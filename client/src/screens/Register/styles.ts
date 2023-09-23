import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #FAFAF7;
`;

export const SpaceAround = styled.View`
  display: flex;
  justify-content: space-around;
`;

export const TextFieldWrapper = styled.View`
  margin-top: ${RFValue(28)}px;
`;

export const WarningText = styled.Text`
  font-size: 13px;
  width: ${wp("88%")}px;
  margin-top: ${RFValue(15)}px;
`;

export const Subtitle = styled.Text`
  margin-top: ${RFValue(30)}px;
  font-size: ${RFValue(14)}px;
`;

export const ButtonWrapper = styled.View`
  margin-top: ${RFValue(40)}px;
`;

export const ContinueButtonWrapper = styled.View`
`;