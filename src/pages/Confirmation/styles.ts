import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6.25rem;
`;

export const RequestDetails = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
  }
`;

export const PageTitle = styled.h1`
  font-family: 'Baloo 2';
  color: ${(props)=> props.theme['yellow-dark']};
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
`;

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
  margin-top: 2.5rem;
  
  background: linear-gradient(white, white) padding-box,
              linear-gradient(to right, ${(props)=> props.theme['yellow']}, ${(props)=> props.theme['purple']}) border-box;
  border: 1px solid transparent;
  border-radius: 6px 36px;
`;



export const AddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.3rem;
`;

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.3rem;
`;

export const EstimatedDeliveryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.3rem;
`;

export const AddressIcon = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
  align-items: center;
  background-color: ${(props)=> props.theme['purple']};
  color: ${(props)=> props.theme['white']};
  border-radius: 100%;
  width: 32px;
  height: 32px;
`;

export const EstimatedDeliveryIcon = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
  align-items: center;
  background-color: ${(props)=> props.theme['yellow']};
  color: ${(props)=> props.theme['white']};
  border-radius: 100%;
  width: 32px;
  height: 32px;

`;

export const PaymentMethodIcon = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
  align-items: center;
  background-color: ${(props)=> props.theme['yellow-dark']};
  color: ${(props)=> props.theme['white']};
  border-radius: 100%;
  width: 32px;
  height: 32px;

`;

export const Ilustration = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;