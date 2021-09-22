import React from 'react';
import styled from 'styled-components';
import { 
  DialogFooter, 
  DialogContent, 
  ConfirmButton 
} from '../FoodDialog/FoodDialog';
import {formatPrice} from '../Data/FoodData';

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  background-color: white;
  height: calc(100% - 48px);
  box-shadow: 4px 0px 5px 4px grey;
  z-index: 10;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
`;

const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

export function Order({orders}) {
  return (
    <OrderStyled>
    {orders.length === 0 ? (
      <OrderContent>
        Your order like your stomach is pretty empty
      </OrderContent>
    ) : (
      <OrderContent>
      {" "}
        <OrderContainer> Your Order: </OrderContainer>{" "}
          {orders.map(order => (
            <OrderContainer>
              <OrderItem>
                <div>1</div>
                <div>{order.name}</div>
              </OrderItem>
            </OrderContainer>
          ))}
      </OrderContent>
    )}
      
      <DialogFooter>
        <ConfirmButton>Confirm</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  )
}