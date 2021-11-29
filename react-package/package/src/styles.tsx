export const UNISWAP_CSS = `

    .uni-ic {
  position: relative;
  width: 100%;
  background: RGB(255, 255, 255);
  box-shadow: RGB(0 0 0/1%) 0px 0px 1px, RGB(0 0 0/4%) 0px 4px 8px,
    RGB(0 0 0/4%) 0px 16px 24px, RGB(0 0 0/1%) 0px 24px 32px;
  border-radius: 24px;
  color: RGB(86, 90, 105);
}
.uni-ic input[type='number'] {
  -moz-appearance: textfield;
}
.uni-ic input::-webkit-outer-spin-button,
.uni-ic input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.uni-ic-hidden {
  display: none !important;
}
.uni-ic__loading {
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  position: relative;
  align-content: space-around;
  justify-content: center;
}
.uni-ic__loading__svg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  fill: none;
  stroke-width: 5px;
  stroke-linecap: round;
  stroke: RGB(64, 0, 148);
}
.uni-ic__loading__svg.bg {
  stroke-width: 8px;
  stroke: RGB(207, 205, 245);
}
.uni-ic__loading__svg.animate {
  stroke-dasharray: 242.6;
  animation: fill-animation 1s cubic-bezier(1, 1, 1, 1) 0s infinite;
}
@keyframes fill-animation {
  0% {
    stroke-dasharray: 40 242.6;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 141.3;
    stroke-dashoffset: 141.3;
  }
  100% {
    stroke-dasharray: 40 242.6;
    stroke-dashoffset: 282.6;
  }
}
.uni-ic__header-container {
  padding: 1rem 1.25rem 0.5rem;
  margin-bottom: -4px;
}
.uni-ic__header-content {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.uni-ic__header-content-title {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 500;
}
.uni-ic__header-content-settings {
  margin-left: 0.5rem;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
}
.uni-ic__header-content-settings-button {
  position: relative;
  width: 100%;
  border: none;
  background-color: transparent;
  margin: 0px;
  height: 35px;
  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;
  user-select: none;
  cursor: pointer;
}
.uni-ic__error,
.uni-ic__transaction {
  position: relative;
  padding: 8px;
  text-align: center;
}
.uni-ic__swap-container {
  position: relative;
  padding: 8px;
}
.uni-ic__swap-content {
  display: grid;
  grid-auto-rows: auto;
}
.uni-ic__swap-input-container {
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: 20px;
  background-color: RGB(247, 248, 250);
  z-index: 1;
}
.uni-ic__swap-input-content {
  border-radius: 20px;
  border: 1px solid RGB(247, 248, 250);
  background-color: RGB(247, 248, 250);
}
.uni-ic__swap-input-content-main {
  display: flex;
  flex-flow: row nowrap;
  -webkit-box-align: center;
  align-items: center;
  padding: 0.75rem 0.75rem 0.75rem 1rem;
}
.uni-ic__swap-input-content-main-from {
  color: RGB(0, 0, 0);
  width: 0px;
  position: relative;
  font-weight: 500;
  outline: none;
  border: none;
  flex: 1 1 auto;
  background-color: RGB(247, 248, 250);
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0px;
  appearance: textfield;
  text-align: right;
}
@media only screen and (max-width: 450px) {
  .uni-ic__swap-input-content-main-from {
    font-size: 18px;
  }
}
.uni-ic__swap-input-content-main-from-max {
  height: 28px;
  background-color: RGB(253, 234, 241);
  border: 1px solid RGB(253, 234, 241);
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  margin-right: 0.5rem;
  color: RGB(255, 0, 122);
}
.uni-ic__swap-input-content-main-from-currency-container {
  -webkit-box-align: center;
  align-items: center;
  height: 2.2rem;
  font-size: 20px;
  font-weight: 500;
  background-color: RGB(255, 255, 255);
  color: RGB(0, 0, 0);
  border-radius: 12px;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  border: none;
  padding: 0px 0.5rem;
}
@media only screen and (max-width: 450px) {
  .uni-ic__swap-input-content-main-from-currency-container {
    font-size: 16px;
  }
}
.uni-ic__swap-input-content-main-from-currency {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.uni-ic__swap-input-content-main-from-currency-icon {
  width: 24px;
  height: 24px;
  box-shadow: RGB(0 0 0/8%) 0px 6px 10px;
  border-radius: 24px;
  display: flex;
  align-items: center;
}
.uni-ic__swap-input-content-main-from-currency-symbol {
  margin: 0px 0.25rem 0px 0.75rem;
  font-size: 20px;
}
@media only screen and (max-width: 450px) {
  .uni-ic__swap-input-content-main-from-currency-symbol {
    font-size: 16px;
  }
}
.uni-ic__swap-input-content-main-from-currency-choose {
  margin: 0px 0.25rem 0px 0.5rem;
  height: 35%;
}
.uni-ic__swap-content-balance-and-price {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.uni-ic__swap-content-balance-and-price-container {
  display: flex;
  flex-flow: row nowrap;
  -webkit-box-align: center;
  align-items: center;
  color: RGB(0, 0, 0);
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0px 1rem 1rem;
  -webkit-box-pack: end;
  justify-content: flex-end;
}
.uni-ic__swap-content-balance-and-price__balance {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: fit-content;
  height: 17px;
}
.uni-ic__swap-content-balance-and-price__balance-text {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 400;
  font-size: 14px;
  display: inline;
  cursor: pointer;
}
.uni-ic__swap-content-balance-and-price__price {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 400;
  font-size: 14px;
}
.uni-ic__swap-content-balance-and-price__price-text {
  color: RGB(0, 0, 0);
  font-size: inherit;
}
.uni-ic__swap-divider {
  padding: 4px;
  border-radius: 12px;
  height: 18px;
  width: 18px;
  position: relative;
  margin-top: -14px;
  margin-bottom: -14px;
  left: calc(50% - 16px);
  background-color: RGB(247, 248, 250);
  border: 4px solid RGB(255, 255, 255);
  z-index: 2;
  cursor: pointer;
}
.uni-ic__swap-output-container {
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: 20px;
  background-color: RGB(247, 248, 250);
  z-index: 1;
}
.uni-ic__swap-output-content {
  border-radius: 20px;
  border: 1px solid RGB(247, 248, 250);
  background-color: RGB(247, 248, 250);
}
@media only screen and (max-width: 450px) {
  .uni-ic__swap-output-content {
    margin-top: 5px;
  }
}
.uni-ic__swap-output-content-main {
  display: flex;
  flex-flow: row nowrap;
  -webkit-box-align: center;
  align-items: center;
  padding: 0.75rem 0.75rem 0.75rem 1rem;
}
.uni-ic__swap-output-content-main-from {
  color: RGB(0, 0, 0);
  width: 0px;
  position: relative;
  font-weight: 500;
  outline: none;
  border: none;
  flex: 1 1 auto;
  background-color: RGB(247, 248, 250);
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0px;
  appearance: textfield;
  text-align: right;
}
@media only screen and (max-width: 450px) {
  .uni-ic__swap-output-content-main-from {
    font-size: 16px;
  }
}
.uni-ic__swap-output-content-main-select {
  -webkit-box-align: center;
  align-items: center;
  height: 2.2rem;
  font-size: 20px;
  font-weight: 500;
  background-color: RGB(255, 255, 255);
  color: RGB(0, 0, 0);
  border-radius: 12px;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  border: none;
  padding: 0px 0.5rem;
}
.uni-ic__swap-output-content-main-select-content {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.uni-ic__swap-output-content-main-select-content-title {
  margin: 0px 0.25rem;
  font-size: 16px;
}
.uni-ic__swap-output-content-main-select-content-icon {
  margin: 0px 0.25rem 0px 0.5rem;
  height: 35%;
}
.uni-ic__swap-button {
  padding: 18px;
  width: 100%;
  font-weight: 500;
  text-align: center;
  border-radius: 20px;
  outline: none;
  border: 1px solid transparent;
  text-decoration: none;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  background-color: RGB(255, 0, 122);
  color: white;
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  appearance: none;
  margin-top: 10px;
}
.uni-ic__swap-button:disabled {
  background-color: RGB(237, 238, 242);
  color: RGB(136, 141, 155);
  cursor: auto;
  box-shadow: none;
  border: 1px solid transparent;
  outline: none;
  opacity: 0.6;
}
.uni-ic__swap-button-text {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-size: 20px;
  font-weight: 500;
}
.uni-ic__swap-quote {
  width: 100%;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 20px;
}
.uni-ic__swap-quote-container {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 4px;
}
.uni-ic__swap-quote-price {
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
}
.uni-ic__swap-quote-price-text {
  font-weight: 400;
  line-height: 1.5;
  font-size: 14px;
  padding: 0.1rem 0.5rem 0.1rem 0.35rem;
  justify-content: center;
  align-items: center;
  display: 'flex';
}
.uni-ic__swap-quote-price-text-info__container {
  padding: 0.25rem;
  line-height: 0;
  display: inline-block;
}
.uni-ic__swap-quote-slippage {
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
}
.uni-ic__swap-quote-slippage-text {
  font-weight: 400;
  line-height: 1.5;
  font-size: 14px;
}
.uni-ic__swap-allow {
  padding: 16px;
  width: 100%;
  font-weight: 500;
  text-align: center;
  border-radius: 20px;
  outline: none;
  border: 1px solid transparent;
  text-decoration: none;
  display: flex;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  will-change: transform;
  transition: transform 450ms ease 0s;
  transform: perspective(1px) translateZ(0px);
  background-color: RGB(255, 0, 122);
  color: white;
  margin-bottom: 12px;
}
.uni-ic__swap-allow-container {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
}
.uni-ic__swap-allow-icon {
  width: 24px;
  height: 24px;
  box-shadow: RGB(0 0 0/8%) 0px 6px 10px;
  border-radius: 24px;
  margin-right: 10px;
  display: flex;
  align-items: center;
}
.uni-ic__swap-allow-info {
  display: inline-block;
}
.uni-ic__settings {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 12px;
  padding: 1rem;
}
.uni-ic__settings-container {
  min-width: 20.125rem;
  background-color: RGB(237, 238, 242);
  box-shadow: RGB(0 0 0/1%) 0px 0px 1px, RGB(0 0 0/4%) 0px 4px 8px,
    RGB(0 0 0/4%) 0px 16px 24px, RGB(0 0 0/1%) 0px 24px 32px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: absolute;
  top: 3rem;
  right: 0rem;
  z-index: 100;
}
@media only screen and (max-width: 353px) {
  .uni-ic__settings-container {
    min-width: 280px;
  }
}
.uni-ic__settings-transaction {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 12px;
}
.uni-ic__settings-transaction-title {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 600;
  font-size: 14px;
}
.uni-ic__settings-transaction-slippage {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: fit-content;
}
.uni-ic__settings-transaction-slippage-container {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 8px;
}
.uni-ic__settings-transaction-slippage-title {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 400;
  font-size: 14px;
}
.uni-ic__settings-transaction-slippage-info {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0.2rem;
  border: none;
  outline: none;
  cursor: default;
  border-radius: 36px;
}
.uni-ic__settings-transaction-slippage-options {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  cursor: pointer;
}
.uni-ic__settings-transaction-slippage-option {
  -webkit-box-align: center;
  align-items: center;
  height: 2rem;
  border-radius: 36px;
  font-size: 1rem;
  width: auto;
  min-width: 3.5rem;
  border: 1px solid RGB(237, 238, 242);
  outline: none;
  background: RGB(255, 255, 255);
  margin-right: 8px;
  color: RGB(0, 0, 0);
}
.uni-ic__settings-transaction-slippage-option:not(.selected) {
  cursor: pointer;
}
.uni-ic__settings-transaction-slippage-option.selected {
  background: RGB(255, 0, 122);
  color: RGB(255, 255, 255);
}
.uni-ic__settings-transaction-slippage-manual {
  color: RGB(0, 0, 0);
  -webkit-box-align: center;
  align-items: center;
  border-radius: 36px;
  font-size: 1rem;
  width: auto;
  min-width: 3.5rem;
  border: 1px solid RGB(237, 238, 242);
  outline: none;
  background: RGB(255, 255, 255);
  height: 2rem;
  position: relative;
  padding: 0px 0.75rem;
  flex: 1 1 0%;
}
.uni-ic__settings-transaction-slippage-manual.selected {
  background: #ff007a;
}
.uni-ic__settings-transaction-slippage-manual.selected
  .uni-ic__settings-transaction-slippage-manual-content {
  background: #ff007a;
  color: white;
}
.uni-ic__settings-transaction-slippage-manual.selected input {
  background: #ff007a;
  color: white;
}
.uni-ic__settings-transaction-slippage-manual-content {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.uni-ic__settings-transaction-slippage-manual-input {
  background: RGB(255, 255, 255);
  font-size: 16px;
  width: auto;
  outline: none;
  color: RGB(0, 0, 0);
  text-align: right;
  width: 100%;
  height: 100%;
  border: 0px;
  border-radius: 2rem;
}
.uni-ic__settings-transaction-slippage-warning {
  font-size: 14px;
  padding-top: 7px;
  color: RGB(243, 132, 30);
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.uni-ic__settings-transaction-deadline {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: fit-content;
}
.uni-ic__settings-transaction-deadline-container {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 8px;
}
.uni-ic__settings-transaction-deadline-title {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 400;
  font-size: 14px;
}
.uni-ic__settings-transaction-deadline-info {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0.2rem;
  border: none;
  outline: none;
  cursor: default;
  border-radius: 36px;
}
.uni-ic__settings-transaction-deadline-minute {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: fit-content;
}
.uni-ic__settings-transaction-deadline-minute-button {
  color: RGB(0, 0, 0);
  -webkit-box-align: center;
  align-items: center;
  border-radius: 36px;
  font-size: 1rem;
  width: auto;
  min-width: 3.5rem;
  border: 1px solid RGB(237, 238, 242);
  outline: none;
  background: RGB(255, 255, 255);
  height: 2rem;
  position: relative;
  padding: 0px 0.75rem;
  flex: 1 1 0%;
  width: 80px;
}
.uni-ic__settings-transaction-deadline-minute-input {
  width: 100% !important;
  height: 100%;
  border: 0px;
  border-radius: 2rem;
  background: RGB(255, 255, 255);
  font-size: 16px;
  width: auto;
  outline: none;
  color: RGB(0, 0, 0);
  text-align: right;
}
.uni-ic__settings-transaction-deadline-minute-label {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 400;
  font-size: 14px;
  padding-left: 8px;
}
.uni-ic__settings-interface-header {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 600;
  font-size: 14px;
}
.uni-ic__settings-interface-multihops-container {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.uni-ic__settings-interface-multihops-text {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 400;
  font-size: 14px;
}
.uni-ic__settings-interface-multihops-text-container {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: fit-content;
}
.uni-ic__settings-interface-multihops-text-info {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0.2rem;
  border: none;
  outline: none;
  cursor: default;
  border-radius: 36px;
}
.uni-ic__settings-interface-multihops-actions {
  border-radius: 12px;
  border: none;
  background: RGB(237, 238, 242);
  display: flex;
  width: fit-content;
  cursor: pointer;
  outline: none;
  padding: 0px;
}
.uni-ic__settings-interface-multihops-actions-on,
.uni-ic__settings-interface-multihops-actions-off {
  padding: 0.35rem 0.6rem;
  border-radius: 12px;
  background: white;
  color: black;
  font-size: 1rem;
  font-weight: 500;
}
.uni-ic__settings-interface-multihops-actions-on.selected,
.uni-ic__settings-interface-multihops-actions-off.selected {
  background: RGB(255, 0, 122);
  color: white;
  cursor: default;
}
.uni-ic__modal-tokens-title {
  margin-top: 2px;
}
.uni-ic__modal-tokens-search {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
}
.uni-ic__modal-tokens-search__input {
  position: relative;
  display: flex;
  padding: 16px;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  background: none;
  outline: none;
  border-radius: 20px;
  color: RGB(0, 0, 0);
  border: 1px solid RGB(206, 208, 217);
  appearance: none;
  font-size: 18px;
  transition: border 100ms ease 0s;
  margin-bottom: 12px;
}
.uni-ic__modal-tokens-item {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 4px 20px;
  height: 56px;
  display: grid;
  grid-template-columns: auto minmax(auto, 1fr) auto minmax(0px, 72px);
  gap: 16px;
  pointer-events: none;
}
.uni-ic__modal-tokens-item-container:hover {
  background: RGB(255, 0, 122);
  color: white;
  cursor: pointer;
}
.uni-ic__modal-tokens-item-container.selected {
  background: RGB(255, 0, 122);
  color: white;
  opacity: 0.6;
}
.uni-ic__modal-tokens-item-icon {
  width: 24px;
  height: 24px;
  box-shadow: RGB(0 0 0/8%) 0px 6px 10px;
  border-radius: 24px;
  display: flex;
  align-items: center;
}
.uni-ic__modal-tokens-item-content {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  align-items: flex-start;
}
.uni-ic__modal-tokens-item-content-symbol {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 500;
}
.uni-ic__modal-tokens-item-content-name {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 300;
  font-size: 12px;
}
.uni-ic__modal-tokens-item-balance-content {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: fit-content;
  justify-self: flex-end;
}
.uni-ic__modal-tokens-item-balance-content-value {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  white-space: nowrap;
  overflow: hidden;
  max-width: 5rem;
  text-overflow: ellipsis;
}
.uni-ic__modal-confirm-swap {
  width: 100%;
  padding: 1rem;
}
.uni-ic__modal-confirm-swap__content {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 4px;
  margin-top: 1rem;
}
.uni-ic__modal-confirm-swap__input,
.uni-ic__modal-confirm-swap__output {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 8px;
}
.uni-ic__modal-confirm-swap__input-container,
.uni-ic__modal-confirm-swap__output-container {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  border-radius: 16px;
  padding: 0.75rem 1rem;
  background-color: RGB(237, 238, 242);
  margin-bottom: 0.25rem;
}
.uni-ic__modal-confirm-swap__input-header,
.uni-ic__modal-confirm-swap__output-header {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.uni-ic__modal-confirm-swap__input-header__text,
.uni-ic__modal-confirm-swap__output-header__text {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 500;
  font-size: 14px;
  color: RGB(136, 141, 155);
}
.uni-ic__modal-confirm-swap__input-header__price,
.uni-ic__modal-confirm-swap__output-header__price {
  color: RGB(0, 0, 0);
  font-size: inherit;
}
.uni-ic__modal-confirm-swap__input-header__price-container,
.uni-ic__modal-confirm-swap__output-header__price-container {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 400;
  font-size: 14px;
}
.uni-ic__modal-confirm-swap__input-main,
.uni-ic__modal-confirm-swap__output-main {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.uni-ic__modal-confirm-swap__input-main__symbol,
.uni-ic__modal-confirm-swap__output-main__symbol {
  box-sizing: border-box;
  min-width: 0px;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: fit-content;
  margin: 0px;
}
.uni-ic__modal-confirm-swap__input-main__symbol__image,
.uni-ic__modal-confirm-swap__output-main__symbol__image {
  width: 20px;
  height: 20px;
  box-shadow: RGB(0 0 0/8%) 0px 6px 10px;
  border-radius: 24px;
  margin-right: 12px;
}
.uni-ic__modal-confirm-swap__input-main__symbol__label,
.uni-ic__modal-confirm-swap__output-main__symbol__label {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-size: 20px;
  font-weight: 500;
}
@media only screen and (max-width: 450px) {
  .uni-ic__modal-confirm-swap__input-main__symbol__label,
  .uni-ic__modal-confirm-swap__output-main__symbol__label {
    font-size: 16px;
  }
}
.uni-ic__modal-confirm-swap__input-main__price,
.uni-ic__modal-confirm-swap__output-main__price {
  box-sizing: border-box;
  min-width: 0px;
  display: flex;
  padding: 0px 1rem;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: fit-content;
  margin: 0px;
  margin-top: 0.25rem;
}
.uni-ic__modal-confirm-swap__input-main__price-text,
.uni-ic__modal-confirm-swap__output-main__price-text {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-size: 24px;
  font-weight: 500;
  text-overflow: ellipsis;
  max-width: 220px;
  overflow: hidden;
  text-align: right;
}
@media only screen and (max-width: 450px) {
  .uni-ic__modal-confirm-swap__input-main__price-text,
  .uni-ic__modal-confirm-swap__output-main__price-text {
    font-size: 16px;
  }
}
.uni-ic__modal-confirm-swap__divider {
  padding: 4px;
  border-radius: 12px;
  height: 32px;
  width: 32px;
  position: relative;
  margin-top: -18px;
  margin-bottom: -18px;
  left: calc(50% - 16px);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: RGB(247, 248, 250);
  z-index: 2;
}
.uni-ic__modal-confirm-swap__price {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.uni-ic__modal-confirm-swap__price__title {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 500;
  font-size: 14px;
}
.uni-ic__modal-confirm-swap__price__rate {
  align-items: center;
  display: flex;
  width: fit-content;
}
.uni-ic__modal-confirm-swap__price__rate-button {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px;
  font-size: 0.875rem;
  font-weight: 400;
  background-color: transparent;
  border: none;
  height: 24px;
  cursor: pointer;
}
.uni-ic__modal-confirm-swap__info {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 8px;
}
.uni-ic__modal-confirm-swap__info-container {
  box-sizing: border-box;
  margin: 0px;
  margin-top: 0.5rem;
  min-width: 0px;
  width: 100%;
  border-radius: 16px;
  padding: 0.75rem;
  border: 1px solid RGB(237, 238, 242);
  background-color: RGB(247, 248, 250);
}
.uni-ic__modal-confirm-swap__info__item {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.uni-ic__modal-confirm-swap__info__item__title {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: fit-content;
}
.uni-ic__modal-confirm-swap__info__item__title-content {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 400;
  font-size: 12px;
}
.uni-ic__modal-confirm-swap__info__item__value {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 500;
  color: RGB(0, 0, 0);
  text-align: right;
  font-size: 12px;
}
.uni-ic__modal-confirm-swap__output-info {
  box-sizing: border-box;
  margin: 0px;
  min-width: 24px;
  font-weight: 400;
  font-size: 12px;
  font-style: italic;
  text-align: left;
  width: 100%;
}
.uni-ic__modal-confirm-swap__output-info-container {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 8px;
  justify-items: flex-start;
  padding: 0.75rem 1rem;
  min-width: 24px;
}
.uni-ic__modal-confirm-swap__action {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.uni-ic__modal-confirm-swap__action-container {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 12px;
  padding: 0px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.uni-ic__modal-confirm-swap__action__button {
  padding: 16px;
  width: 100%;
  font-weight: 500;
  text-align: center;
  border-radius: 20px;
  outline: none;
  border: 1px solid transparent;
  text-decoration: none;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  will-change: transform;
  transition: transform 450ms ease 0s;
  transform: perspective(1px) translateZ(0px);
  background-color: RGB(255, 0, 122);
  color: white;
  margin: 10px 0px 0px;
}
.uni-ic__modal-confirm-swap__action__button:disabled {
  background-color: RGB(255, 0, 122);
  color: white;
  cursor: auto;
  box-shadow: none;
  border: 1px solid transparent;
  outline: none;
  opacity: 0.4;
  pointer-events: none;
}
.uni-ic__modal-confirm-swap__action__button-text {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-size: 20px;
  font-weight: 500;
}
.uni-ic__modal-confirm-swap__price-updated {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.uni-ic__modal-confirm-swap__price-updated-container {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 0px;
  justify-items: flex-start;
  background-color: RGB(255, 0, 122, 0.1);
  color: RGB(255, 0, 122);
  padding: 0.5rem;
  border-radius: 12px;
  margin-top: 8px;
}
.uni-ic__modal-confirm-swap__price-updated__text {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: fit-content;
}
.uni-ic__modal-confirm-swap__price-updated__text svg {
  margin-right: 8px;
  min-width: 24px;
}
.uni-ic__modal-confirm-swap__price-updated__text-content {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 500;
  color: RGB(255, 0, 122);
}
.uni-ic__modal-confirm-swap__price-updated__action {
  padding: 0.5rem;
  width: fit-content;
  font-weight: 500;
  text-align: center;
  border-radius: 20px;
  outline: none;
  border: 1px solid transparent;
  text-decoration: none;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  will-change: transform;
  transition: transform 450ms ease 0s;
  transform: perspective(1px) translateZ(0px);
  background-color: RGB(255, 0, 122);
  color: white;
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  appearance: none;
  display: inline-block;
  line-height: inherit;
  border-radius: 12px;
  font-size: 12px;
}
.uni-ic__modal-transaction__state {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 12px;
}
.uni-ic__modal-transaction__state__loading {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: 100%;
  -webkit-box-align: center;
  align-items: center;
  padding: 60px 0px;
}
.uni-ic__modal-transaction__state__loading-spinner {
  animation: 2s linear 0s infinite normal none running iVXCSc;
  height: 90px;
  width: 90px;
}
@keyframes iVXCSc {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.uni-ic__modal-transaction__state__info {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 12px;
  justify-items: center;
}
.uni-ic__modal-transaction__state__info-confirmation {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
}
.uni-ic__modal-transaction__state__info-quote {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 12px;
  justify-items: center;
}
.uni-ic__modal-transaction__state__info-quote-info {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
}
.uni-ic__modal-transaction__state__action {
  box-sizing: border-box;
  margin: 0px 0px 12px;
  min-width: 0px;
  font-size: 12px;
  text-align: center;
}
.uni-ic__modal-transaction__state__action button {
  padding: 16px;
  width: 100%;
  font-weight: 500;
  text-align: center;
  border-radius: 20px;
  outline: none;
  border: 1px solid transparent;
  text-decoration: none;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  will-change: transform;
  transition: transform 450ms ease 0s;
  transform: perspective(1px) translateZ(0px);
  background-color: RGB(232, 0, 111);
  color: white;
}
.uni-ic__modal-transaction__rejected {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 12px;
}
.uni-ic__modal-transaction__rejected__content {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 24px;
  justify-items: center;
  margin-top: 20px;
  padding: 2rem 0px;
}
.uni-ic__modal-transaction__rejected__content-text {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 500;
  font-size: 16px;
  color: RGB(218, 45, 43);
  text-align: center;
  width: 85%;
  word-break: break-word;
}
.uni-ic__modal-transaction__rejected__dismiss {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 12px;
  padding: 0px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.uni-ic__modal-transaction__rejected__dismiss-button {
  padding: 16px;
  width: 100%;
  font-weight: 500;
  text-align: center;
  border-radius: 20px;
  outline: none;
  border: 1px solid transparent;
  text-decoration: none;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  will-change: transform;
  transition: transform 450ms ease 0s;
  transform: perspective(1px) translateZ(0px);
  background-color: RGB(232, 0, 111);
  color: white;
}
.uni-ic .uni-ic__swap-quote-price-text-info:hover .uni-ic__tooltip-wrapper,
.uni-ic
  .uni-ic__settings-transaction-slippage-info:hover
  .uni-ic__tooltip-wrapper,
.uni-ic
  .uni-ic__settings-transaction-deadline-info:hover
  .uni-ic__tooltip-wrapper,
.uni-ic
  .uni-ic__settings-interface-multihops-text-info:hover
  .uni-ic__tooltip-wrapper {
  visibility: visible;
}
.uni-ic__tooltip {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 8px;
}
.uni-ic__tooltip-wrapper {
  z-index: 9999;
  visibility: hidden;
  background: RGB(237, 238, 242);
  border: 1px solid RGB(206, 208, 217);
  box-shadow: RGB(47 128 237/10%) 0px 4px 8px 0px;
  border-radius: 8px;
  position: absolute;
  margin-left: 30px;
  right: 10px;
}
.uni-ic__tooltip-container {
  max-width: 256px;
  min-width: 256px;
  padding: 0.6rem 1rem;
  font-weight: 400;
  word-break: break-word;
}
.uni-ic__tooltip__item {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.uni-ic__tooltip__item__title {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: fit-content;
}
.uni-ic__tooltip__item__title__content {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 400;
  font-size: 12px;
}
.uni-ic__tooltip__item__value {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 500;
  text-align: right;
  font-size: 12px;
}
.uni-ic__modal {
  display: none;
  position: fixed;
  z-index: 3;
  padding-bottom: 100vh;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: RGB(0, 0, 0, 0.4);
  max-height: 80vh;
  min-height: 80vh;
}
.uni-ic__modal__content {
  border-radius: 20px;
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  width: 20%;
}
@media only screen and (max-width: 1400px) {
  .uni-ic__modal__content {
    width: 40%;
  }
}
@media only screen and (max-width: 768px) {
  .uni-ic__modal__content {
    width: 80%;
  }
}
.uni-ic__modal__close {
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.uni-ic__modal__close:hover,
.uni-ic__modal__close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}


`;