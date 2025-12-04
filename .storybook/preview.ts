import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import "../src/styles/fonts.css";
import "../src/styles/reset.scss";
import "../src/styles/base.scss";
import "../src/styles/common.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};
