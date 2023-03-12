import styled from "@emotion/styled";

export default (component: any) => styled(component, {
  shouldForwardProp: props => !props.startsWith('--')
})