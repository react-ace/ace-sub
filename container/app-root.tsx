import React from 'react';

import '@sub/scss/index.scss';
import AppTheme from '@sub/core/theme/index';
import AppRoute from '@sub/core/route/index';

interface IProps {}
interface IState {}

const AppRoot = (props: IProps, state: IState) => {
  return (
    <AppTheme>
      <AppRoute />
    </AppTheme>
  );
};

export default AppRoot;
