import * as React from "react";

const Cloud = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 411 227"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M348.135 103.208a61.745 61.745 0 00-24.115 4.876c.169-1.602.261-3.226.261-4.876 0-25.462-20.64-46.105-46.105-46.105-8.61 0-16.64 2.402-23.536 6.51C250.827 27.857 220.579 0 183.813 0c-38.316 0-69.477 30.267-71.097 68.186a81.969 81.969 0 00-30.398-5.823C36.856 62.363 0 99.216 0 144.682 0 190.144 36.856 227 82.318 227h265.817c34.183 0 61.896-27.711 61.896-61.896 0-34.184-27.713-61.896-61.896-61.896z"
        fill="url(#prefix__paint0_linear_49_380)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_49_380"
          x1={-156.64}
          y1={53.058}
          x2={324.262}
          y2={153.592}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4B76C3" />
          <stop offset={1} stopColor="#8AD9EC" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Cloud;
