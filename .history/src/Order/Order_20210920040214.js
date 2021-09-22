import React from 'react';
import styled from 'styled-components';
import { 
  DialogFooter, 
  DialogContent, 
  ConfirmButton 
} from '../FoodDialog/FoodDialog';
import {formatPrice} from '../Data/FoodData';
import {getPrice} from '../FoodDialog/FoodDialog';

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

const DetailItem = styled.div`
  color: gray;
  font-size: 10px;
`;

export function Order({orders}) {

  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);
  const tax = subtotal * .07;
  const total = subtotal + tax;

  const deleteItem = index => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  }

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
          {orders.map((order, index) => (
            <OrderContainer>
              <OrderItem>
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div>🗑️</div>
                <div>{formatPrice(getPrice(order))}</div>
              </OrderItem>
              <DetailItem>
                {order.toppings
                .filter(t => t.checked)
                .map(topping => topping.name)
                .join(", ")}
              </DetailItem>
              {order.choice && 
              <DetailItem>
                {order.choice}
              </DetailItem>}
            </OrderContainer>
          ))}
          <OrderContainer>
            <OrderItem>
              <div/>
              <div>Sub-total</div>
              <div>{formatPrice(subtotal)}</div>
            </OrderItem>
            <OrderItem>
              <div/>
              <div>Tax</div>
              <div>{formatPrice(tax)}</div>
            </OrderItem>
            <OrderItem>
              <div/>
              <div>Total</div>
              <div>{formatPrice(total)}</div>
            </OrderItem>
          </OrderContainer>
      </OrderContent>
    )}
      
      <DialogFooter>
        <ConfirmButton>Confirm</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  )
}