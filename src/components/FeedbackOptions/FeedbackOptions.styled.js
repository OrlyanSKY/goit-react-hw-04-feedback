import styled from '@emotion/styled';

export const Button = styled.button`
  display: inline-block;
  background-color: grey;
  color: white;
  font-size: 18px;
  padding: 8px 10px;
  width: 80px;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;

  box-shadow: 10px 10px 33px 0px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 10px 10px 33px 0px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: 10px 10px 33px 0px rgba(0, 0, 0, 0.68);

  text-shadow: 1px 4px 8px rgba(0, 0, 0, 0.71);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: black;
    transform: scale(0.9);
  }
`;

export const ButtonsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
