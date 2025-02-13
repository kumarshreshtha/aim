import React from 'react';
import classNames from 'classnames';

import { IBaseComponentProps } from 'modules/BaseExplorer/types';

import { Button, Icon, Text } from 'components/kit';
import ControlPopover from 'components/ControlPopover/ControlPopover';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

import CaptionPropertiesPopover from './CaptionPropertiesPopover';

import { ICaptionProperties, ICaptionPropertiesProps } from './';

function CaptionProperties(props: ICaptionPropertiesProps) {
  const {
    engine,
    visualizationName,
    engine: { useStore, visualizations },
  } = props;
  const vizEngine = visualizations[visualizationName];

  const captionProperties: ICaptionProperties = useStore(
    vizEngine.controls.captionProperties.stateSelector,
  );

  return (
    <ErrorBoundary>
      <ControlPopover
        title='Configure box caption'
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        anchor={({ onAnchorClick, opened }) => (
          <Button
            size='xSmall'
            onClick={onAnchorClick}
            className={classNames('Control__anchor', {
              active: opened || !captionProperties.isInitial,
              outlined: !opened && !captionProperties.isInitial,
            })}
          >
            <Icon
              name='info-circle-outline'
              className={classNames('Control__anchor__icon', {
                active: opened || !captionProperties.isInitial,
              })}
            />
            <Text className='Control__anchor__label'>Box caption</Text>
            <Icon
              name='arrow-down-contained'
              className={classNames('Control__anchor__arrow', { opened })}
              fontSize={6}
            />
          </Button>
        )}
        component={
          <CaptionPropertiesPopover
            engine={engine}
            captionProperties={captionProperties}
            visualizationName={props.visualizationName}
          />
        }
      />
    </ErrorBoundary>
  );
}

CaptionProperties.displayName = 'CaptionProperties';

export default React.memo<IBaseComponentProps>(CaptionProperties);
