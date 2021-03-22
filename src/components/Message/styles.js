import styled from 'styled-components';

export const ContainerMessage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Timestamp = styled.div`
  display: flex;
  justify-content: center;
  color: #999;
  font-weight: 600;
  font-size: 12px;
  margin: 10px 0px;
  text-transform: uppercase;
`;

export const ContentMessage = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: ${({ isMine }) => (isMine ? 'flex-end' : 'flex-start')};
  margin-top: ${({ isStartsSequence }) =>
    isStartsSequence ? '0.5rem' : '0rem'};
`;

export const ReceiverMessage = styled.div`
  margin: 1px 0px;
  background: ${({ theme }) => theme.secundaryColor};
  padding: 10px 15px;
  border-radius: 20px;
  max-width: 75%;
  margin-left: 0.5rem;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const MineMessage = styled.div`
  background: #007af7;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-right-radius: 20px;
  margin-bottom: 10px;
  padding: 1rem;
`;
