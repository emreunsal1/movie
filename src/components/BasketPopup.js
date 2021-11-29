import React, { useState } from "react";
import { useAppContext } from "../context";

import "../style/basket-popup.scss";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { MenuItem, Select } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function BasketPopup({ closePopup }) {
  const context = useAppContext();
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <div className="basket-popup">
      <div className="delete-button">x</div>
      <div className="bg-wrapper">
        <div className="user-info">
          <div className="user-info-item">
            <label>Name:</label>
            <TextField
              fullWidth
              color="secondary"
              id="outlined-basic"
              label="Name/Surname"
              variant="outlined"
              type="text"
            />
          </div>
          <div className="user-info-item">
            <label>Adress:</label>
            <TextField
              fullWidth
              color="secondary"
              id="outlined-basic"
              label="Adress"
              variant="outlined"
              type="text"
            />
          </div>
          <div className="user-info-item">
            <label>Phone Number:</label>
            <TextField
              fullWidth
              color="secondary"
              id="outlined-basic"
              label="Number"
              variant="outlined"
              type="tel"
            />
          </div>
        </div>
        <div className="credit-card">
          <h3>
            Credit <span> Card</span>
          </h3>
          <div className="credit-card-item">
            <label>Card Number :</label>
            <TextField
              fullWidth
              color="secondary"
              id="outlined-basic"
              label="Card Number"
              variant="outlined"
              type="text"
            />
          </div>
          <div className="credit-card-item expiration">
            <label>Expiration date:</label>
            <Select
              sx={{
                ml: 1,
              }}
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              color="secondary"
              label="Month"
            >
              {Array.from(Array(12).keys()).map((item) => (
                <MenuItem value={item + 1}>{item + 1}</MenuItem>
              ))}
            </Select>
            <Select
              sx={{
                ml: 1,
              }}
              value={year}
              onChange={(e) => setYear(e.target.value)}
              color="secondary"
              label="Year"
            >
              {Array.from(Array(100).keys()).map((item) => (
                <MenuItem value={item + 2020}>{item + 2020}</MenuItem>
              ))}
            </Select>
          </div>
        </div>
        <div className="credit-finish">
          <div className="total-price">
            <Typography color="secondary" variant="h4">
              {context.basket.getTotalPrice()}
            </Typography>
          </div>
          <Button variant="outlined" onClick={() => closePopup()} size="large">
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  );
}
