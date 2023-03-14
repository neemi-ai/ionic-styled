import styled from '@emotion/styled';
import { IonItem } from '@ionic/react';

import { type AllProps,allProps } from '../styled/all-props';

type ItemProps = AllProps & HTMLIonItemElement;

const StyledItem = styled<ItemProps>(IonItem)(
  ...allProps
);

const Item = ({ children, ...styledProps }: ItemProps) => (
  <StyledItem {...styledProps}>
    {children}
  </StyledItem>
);

export default Item;
