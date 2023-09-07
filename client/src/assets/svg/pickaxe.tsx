import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';

const PickAxe = () => {
  return (
    <View>
      <Svg
        width={35}
        height={35}
        viewBox="0 0 32 32"
        fill="none"
      >
        <G clipPath="url(#clip0_11_86)">
          <Path
            d="M3.25115 29.1807C2.8363 28.764 2.83779 28.0899 3.25447 27.6751L20.9268 10.0804L22.4291 11.5893L4.75677 29.184C4.34008 29.5988 3.666 29.5974 3.25115 29.1807Z"
            fill="#656565"
          />
          <Rect
            x="20.8066"
            y="8.65094"
            width="5.16076"
            height="4.15735"
            rx="2.07867"
            transform="rotate(-44.8738 20.8066 8.65094)"
            fill="#656565"
          />
          <Path
            d="M20.918 4.43979L22.699 5.7424L21.2387 7.18349L19.4711 5.77534L17.8016 4.66238L15.9096 3.54941L14.6853 2.99293L13.6837 2.54774L12.0142 1.99126L13.0159 1.87997L14.1289 1.87997L15.0192 1.99126L16.2435 2.21386L17.5791 2.65904L18.8033 3.21553L19.2485 3.43811L20.918 4.43979Z"
            fill="#656565"
          />
          <Path
            d="M28.0435 11.6703L26.7353 9.89336L25.2988 11.3582L26.7124 13.1214L27.8306 14.7873L28.9495 16.6759L29.5098 17.8984L29.9581 18.8987L30.5198 20.5664L30.628 19.5644L30.6245 18.4514L30.5104 17.5614L30.284 16.3378L29.8346 15.0037L29.2743 13.7811L29.0504 13.3367L28.0435 11.6703Z"
            fill="#656565"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_11_86">
            <Rect width="32" height="32" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export default PickAxe;
