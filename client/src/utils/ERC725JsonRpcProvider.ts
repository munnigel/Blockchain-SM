import { ethers } from "ethers";

export class ERC725JsonRpcProvider extends ethers.JsonRpcProvider {
  request({method, params}: {method: string, params: Array<unknown>}): Promise<unknown> {
    return super.send(method, params);
  }
}
