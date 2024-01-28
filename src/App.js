import { useState, useEffect } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import InputBox from './components/InputBox';
import './App.css';

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);
    const options = currencyInfo ? Object.keys(currencyInfo) : [];

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount); // Set amount to the converted amount
        setConvertedAmount(0); // Reset the converted amount to 0
    };

    const convert = () => {
        setConvertedAmount(amount * (currencyInfo ? currencyInfo[to] : 0));
    };

    // Add useEffect to handle changes in 'from' currency
    useEffect(() => {
        setConvertedAmount(amount * (currencyInfo ? currencyInfo[to] : 0));
    }, [amount, currencyInfo, to]);

    return (
        <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="main-swap-working">
                            <button
                                type="button"
                                onClick={swap}
                            >
                                Swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                // amountDisable
                            />
                        </div>
                        <button type="submit" id='btnConvert'>
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
