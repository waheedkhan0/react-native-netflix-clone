/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              TabOneScreen: 'Home',
              MovieDetailScreen: 'MovieDetailScreen'
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'Games',
            },
          },
          TabThree: {
            screens: {
              TabThreeScreen : 'New & Hot',
            },
          },
          TabFour: {
            screens: {
              TabThreeScreen : 'Downloads',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
