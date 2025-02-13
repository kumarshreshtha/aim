import renderer from 'modules/BaseExplorer';
import AudioBox from 'modules/BaseExplorer/components/AudioBox';

import { AimObjectDepths, SequenceTypesEnum } from 'types/core/enums';

import { getAudiosDefaultConfig } from './config';

const defaultConfig = getAudiosDefaultConfig();

const AudioExplorer = renderer(
  {
    name: 'Audio Explorer',
    sequenceName: SequenceTypesEnum.Audios,
    basePath: 'audios',
    persist: true,
    adapter: {
      objectDepth: AimObjectDepths.Index,
    },
    groupings: defaultConfig.groupings,
    visualizations: {
      vis1: {
        component: defaultConfig.Visualizer,
        controls: defaultConfig.controls,
        box: {
          component: AudioBox,
          hasDepthSlider: defaultConfig.box.hasDepthSlider,
          initialState: defaultConfig.box.initialState,
        },
      },
    },
  },
  __DEV__,
);

export default AudioExplorer;
