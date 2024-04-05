import Button from "@mui/material/Button";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24 bg-cover"
      style={{ backgroundImage: 'url("/background.png")' }}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">
            $SCLP its a solana eclipse my G
          </code>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-32">
        {/* Buttons */}
        <Button
          href="https://jupiter-terminal.dexscreener.com/?inputMint=CX5m6oZZftX4jbVh7spuHeRoyjwnCsNK868YpXcz2GDc&outputMint=So11111111111111111111111111111111111111112"
          target="_blank"
          variant="contained"
          sx={{
            borderRadius: "10px", // Slightly curved edges
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", // Gradient background
            boxShadow: `
            0 0 8px rgba(255, 0, 0, 0.7), 
            0 0 10px rgba(255, 165, 0, 0.7), 
            0 0 12px rgba(255, 255, 0, 0.7), 
            0 0 14px rgba(0, 255, 0, 0.7), 
            0 0 16px rgba(0, 0, 255, 0.7), 
            0 0 18px rgba(75, 0, 130, 0.7), 
            0 0 20px rgba(143, 0, 255, 0.7)`, // Rainbow glow effect
          }}
        >
          Buy w/ Jupiter
        </Button>
        <Button
          variant="contained"
          href="https://raydium.io/swap/?outputCurrency=CX5m6oZZftX4jbVh7spuHeRoyjwnCsNK868YpXcz2GDc"
          target="_blank"
          sx={{
            borderRadius: "10px", // Slightly curved edges
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", // Gradient background
            boxShadow: `
            0 0 8px rgba(255, 0, 0, 0.7), 
            0 0 10px rgba(255, 165, 0, 0.7), 
            0 0 12px rgba(255, 255, 0, 0.7), 
            0 0 14px rgba(0, 255, 0, 0.7), 
            0 0 16px rgba(0, 0, 255, 0.7), 
            0 0 18px rgba(75, 0, 130, 0.7), 
            0 0 20px rgba(143, 0, 255, 0.7)`, // Rainbow glow effect
          }}
        >
          Buy w/ Radium
        </Button>
        <Button
          href="https://dexscreener.com/solana/byuqkkpooqmxuhbq7x5qvfblxp1qergxs9tpighaee5j"
          target="_blank"
          variant="contained"
          sx={{
            borderRadius: "10px", // Slightly curved edges
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", // Gradient background
            boxShadow: `
            0 0 8px rgba(255, 0, 0, 0.7), 
            0 0 10px rgba(255, 165, 0, 0.7), 
            0 0 12px rgba(255, 255, 0, 0.7), 
            0 0 14px rgba(0, 255, 0, 0.7), 
            0 0 16px rgba(0, 0, 255, 0.7), 
            0 0 18px rgba(75, 0, 130, 0.7), 
            0 0 20px rgba(143, 0, 255, 0.7)`, // Rainbow glow effect
          }}
        >
          DEX Scanner
        </Button>
        <Button
          variant="contained"
          href="https://twitter.com/thecryptoeG"
          target="_blank"
          sx={{
            borderRadius: "10px", // Slightly curved edges
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", // Gradient background
            boxShadow: `
            0 0 8px rgba(255, 0, 0, 0.7), 
            0 0 10px rgba(255, 165, 0, 0.7), 
            0 0 12px rgba(255, 255, 0, 0.7), 
            0 0 14px rgba(0, 255, 0, 0.7), 
            0 0 16px rgba(0, 0, 255, 0.7), 
            0 0 18px rgba(75, 0, 130, 0.7), 
            0 0 20px rgba(143, 0, 255, 0.7)`, // Rainbow glow effect
          }}
        >
          Twitter
        </Button>
        <Button
          href="https://t.me/+k74joK9RFMdhZTZh"
          target="_blank"
          variant="contained"
          sx={{
            borderRadius: "10px", // Slightly curved edges
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", // Gradient background
            boxShadow: `
            0 0 8px rgba(255, 0, 0, 0.7), 
            0 0 10px rgba(255, 165, 0, 0.7), 
            0 0 12px rgba(255, 255, 0, 0.7), 
            0 0 14px rgba(0, 255, 0, 0.7), 
            0 0 16px rgba(0, 0, 255, 0.7), 
            0 0 18px rgba(75, 0, 130, 0.7), 
            0 0 20px rgba(143, 0, 255, 0.7)`, // Rainbow glow effect
          }}
        >
          Telegram
        </Button>
      </div>

      {/* Rest of your existing code... */}
    </main>
  );
}
