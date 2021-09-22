import React from 'react';

import {Dialog, DialogContent, DialogShadow, DialogFooter, ConfirmButton } from '../FoodDialog/FoodDialog';

export function OrderDialog({openOrderDialog, setOpenOrderDialog, setOrders}) {
  return <>
  <DialogShadow/>
  <Dialog>
    <DialogContent>
      <h2>(Truck Emoji) Your order is on the way! </h2>
      <p>You have been emailed a confirmation of your order. Thanks for choose Juggy Juice.</p>
    </DialogContent>
    <DialogFooter>
      <ConfirmButton onClick={() => {
        setOrders([]);
        setOpenOrderDialog();
      }}>
        I'm still hungry
      </ConfirmButton>
    </DialogFooter>
  </Dialog>
  </>
}