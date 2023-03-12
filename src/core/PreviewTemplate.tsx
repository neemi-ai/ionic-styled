import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import { css, Global, ThemeProvider } from '@emotion/react';
import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { FC, ReactNode } from 'react';

import Content from "../components/Content";
import theme from '../theme';
import ionicVariables from '../theme/variables';

const ionicStyles = css(ionicVariables);

setupIonicReact();

const PreviewTemplate: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={css(ionicStyles)} />
    <IonReactRouter>
      <IonApp>
        <Content padding="12px">
          {children}
        </Content>
      </IonApp>
    </IonReactRouter>
  </ThemeProvider>
);

export default PreviewTemplate;
