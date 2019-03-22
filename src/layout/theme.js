import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';
import { css } from 'styled-components';

const theme = deepMerge(grommet, {
  global: {
    font: {
      family: `"Inter UI", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
    },
    colors: {
      brand: '#F1C410',
      text: {
        light: '#24292E',
      },
      'brand-2': '#E2AD17',
      'accent-1': '#5378FC',
      'accent-2': '#3D5199',
      'text-gray': '#586069',
    },
  },
  button: {
    extend: css`
      text-align: center;
      ${props => !props.plain && 'font-weight: 500;'};
      ${props =>
        props.responsive &&
        `
        padding-left: 13px;
        padding-right: 13px;
      `}
    `,
  },
});

export default theme;
