import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
}) {
    const amountInputId = uuidv4();

    return (
        <>
            <div className="center-main-top-InputBox1">
                <div className="centerInputBox-Main-Panel">
                    <label htmlFor={amountInputId} className="centerInputBox-Main-Panel-text">
                        {label}
                    </label>
                    <input
                        id={amountInputId}
                        type="number"
                        placeholder="Amount"
                        disabled={amountDisable}
                        value={amount}
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    />
                </div>
                <div className="centerInputBox-Main-Panel-currency">
                    <p className="centerInputBox-Main-Panel-currency-para">Currency Type</p>
                    <select
                        className="centerInputBox-Main-Panel-currency-select"
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        disabled={currencyDisable}
                    >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
}

export default InputBox;
