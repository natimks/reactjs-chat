import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 90%;
  height: 5em;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

export const DetailsItem = styled.section`
  padding: 1rem;
  justify-content: space-between;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const DetailName = styled.span`
  font-weight: 800;
  font-size: 1rem;
`;

export const DetailMessage = styled.div`
  font-size: 0.9rem;
`;
