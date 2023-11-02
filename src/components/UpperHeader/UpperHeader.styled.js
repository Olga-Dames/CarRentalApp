import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 10px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 50px
`;

export const PhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Number = styled.a`
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSize[1]};
   color: ${({ theme }) => theme.colors.white};
   &:hover,
   &:focus {
     color: ${({ theme }) => theme.colors.orange};
   }
   transition: color 350ms linear;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize[1]};
   color: ${({ theme }) => theme.colors.white};
   &:hover,
   &:focus {
     color: ${({ theme }) => theme.colors.orange};
   }
   transition: color 350ms linear;
`;

export const Social = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
`;

