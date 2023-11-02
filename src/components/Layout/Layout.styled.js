import styled from '@emotion/styled';

export const Container = styled.div`
padding: 0 20px;

@media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 30px;
  }

@media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 30px;
  }
`

export const ContentWrapper = styled.div`
  min-height: 100vh;
  overflow: hidden;
`;