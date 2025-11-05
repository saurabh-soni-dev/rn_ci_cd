import {render} from '@testing-library/react-native';
import React from 'react';
import {Text} from 'react-native';
import CustomSafeAreaScrollView from '../../../src/components/global/CustomSafeAreaViewScroll';

describe('CustomSafeAreaScrollView', () => {
  it('should render children correctly', () => {
    const {getByText} = render(
      <CustomSafeAreaScrollView>
        <Text>Test Child</Text>
      </CustomSafeAreaScrollView>,
    );

    expect(getByText('Test Child')).toBeTruthy();
  });
});
