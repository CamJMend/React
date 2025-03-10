import React, { useState } from "react";
import './validation.css';

function luhnCheck(cardNumber) {
  const arr = cardNumber.split("").reverse().map(Number);
  const total = arr.reduce((sum, digit, i) => {
    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    return sum + digit;
  }, 0);
  return total % 10 === 0;
}

function CreditCardValidation() {
  const [cardNumber, setCardNumber] = useState("");
  const [isValid, setIsValid] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // solo números
    setCardNumber(value);
    if (value.length == 16) {
      setIsValid(luhnCheck(value));
    } else {
      setIsValid(null);
    }
  };

  return (
    <div>
      <h2>Validación de Tarjeta</h2>
      <div className="tar">
        <input id="campo" type="text" value={cardNumber} onChange={handleChange} placeholder="Ingresa el número" />
        {isValid !== null && (
          <p>{isValid ? "✅ Tarjeta válida" : "❌ Tarjeta inválida"}</p>
        )}
      </div>
    </div>
  );
}

export default CreditCardValidation;
