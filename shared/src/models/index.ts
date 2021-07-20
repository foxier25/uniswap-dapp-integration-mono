import { UniswapPairSettings } from 'simple-uniswap-sdk';
import { UniswapTheming } from '../theming/models/uniswap-theming';
import { SupportedNetworkTokens } from '../token/models/supported-network-token';
export { SupportedTokenResult } from '../token/models/supported-token-result';
export interface UniswapDappSharedLogicContext {
  supportedNetworkTokens: SupportedNetworkTokens[];
  ethereumAddress: string;
  ethereumProvider: any;
  settings?: UniswapPairSettings | undefined;
  theming?: UniswapTheming;
  defaultInputValue?: string | undefined;
}

export enum SelectTokenActionFrom {
  input = 'input',
  output = 'output',
}

export enum MiningAction {
  approval = 'approval',
  swap = 'swap',
}

export enum TransactionStatus {
  waitingForConfirmation = 'waitingForConfirmation',
  rejected = 'rejected',
  mining = 'mining',
  completed = 'completed',
}
export interface MiningTransaction {
  txHash?: string | undefined;
  status: TransactionStatus;
  miningAction: MiningAction;
  blockExplorerLink?: string | undefined;
}

export interface SwapSwitchResponse {
  outputValue: string;
  inputValue: string;
}
