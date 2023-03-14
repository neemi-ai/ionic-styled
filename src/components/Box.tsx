import styled from '@emotion/styled';

import { type AllProps, allProps } from "../styled/all-props";

const Box = styled.div<AllProps>(...allProps, ({ cursor }) => ({ cursor }));

export default Box;
