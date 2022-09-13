import { WalletConnection, connect, keyStores, Contract } from "near-api-js";
import { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { MAINNET_CONFIG, TESTNET_CONFIG } from "./constants";

interface IWalletProvider {
  network?: "testnet" | "mainnet" | string;
  chain?: string;
  contractAddress?: string;
  children?: ReactNode;
}

export const WalletContext = createContext<{
  wallet: WalletConnection | undefined;
  details: {
    accountId: string;
    balance: string;
    contractName: string;
  };
  isConnected: boolean;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  addMember: (name: string, phone: string, email: string, transactionHash: any, details: any)=> Promise<any>;
}>({
  wallet: undefined,
  details: {
    accountId: "",
    balance: "",
    contractName: "",
  },
  isConnected: false,
  loading: true,
  signIn: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
  addMember: (name: string, phone: string, email: string, transactionHash: any, details: any) => Promise.resolve(),
});

interface IWalletConsumer {
  wallet: WalletConnection | undefined;
  isConnected: boolean;
  details: {
    accountId: string;
    balance: string;
    contractName: string;
  };
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  addMember: (name: string, phone: string, email: string, transactionHash: any, details: any)=> Promise<any>;
}

export const NearWalletProvider = (props: IWalletProvider) => {
  const { network = "testnet", contractAddress, children } = props;

  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [wallet, setWallet] = useState<WalletConnection | undefined>();
  const [connected, setConnected] = useState(false);

  const [details, setDetails] = useState<{
    accountId: string;
    balance: string;
    contractName: string;
  }>({
    accountId: "",
    balance: "",
    contractName: contractAddress || "",
  });

  const init = async () => {
    const near = await connect(
      network === "mainnet"
        ? {
            ...MAINNET_CONFIG,
            keyStore: new keyStores.BrowserLocalStorageKeyStore(),
          }
        : {
            ...TESTNET_CONFIG,
            keyStore: new keyStores.BrowserLocalStorageKeyStore(),
          }
    );

    const wallet = new WalletConnection(near, `${process.env.APP_NAME}-${network}`);

    setWallet(wallet);

    const isConnected = wallet.isSignedIn();

    setConnected(isConnected);

    if (isConnected) {
      const account = wallet.account();

      const accountBalance = await account.getAccountBalance();

      setDetails({
        accountId: account.accountId,
        balance: accountBalance.available,
        contractName: contractAddress || "",
      });
    }

    setLoading(false);
  };
  

  const addMember = async (name: string, phone: string, email: string, transactionHash: any) => {
      if(wallet){
        const contract = new Contract(
        wallet.account(), // the account object that is connecting
        "testtesrrr.sputnikv2.testnet",
        {
          viewMethods: [], // view methods do not change state but usually return a value
          changeMethods: ["add_proposal"], // change methods modify state
          //sender: wallet.account(), // account object to initialize and sign transactions.
        }
      );
  
    
      window.localStorage.setItem('forceRedirect', 'true');
      // @ts-ignore
      contract.add_proposal(
        {
          proposal: {
            "description": "Please Add " + name + " to Council! *--- " + phone + " * *--- " + email + " * *--- " + transactionHash + " *",
            "kind": {
              "AddMemberToRole": {
                "member_id": details.accountId,
                "role": "council"
              }
            }
          }, // argument name and value - pass empty object if no args required
        },
        "300000000000000", // attached GAS (optional),
        "100000000000000000000000", // attached GAS (optional)
      );
    }
  };

  const signIn = async () => {
    if (!wallet) {
      return;
    }

    wallet.requestSignIn({ contractId: contractAddress });
  };

  const signOut = async () => {
    if (!wallet) {
      return;
    }

    wallet.signOut();

    await router.replace("/", undefined, { shallow: true });

    window.location.reload();
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <WalletContext.Provider
      value={{
        wallet,
        details,
        isConnected: connected,
        signIn: signIn,
        signOut: signOut,
        loading: loading,
        addMember: addMember,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext<IWalletConsumer>(WalletContext);
