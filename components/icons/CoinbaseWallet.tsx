interface CoinbaseWalletIconProps {
  height: number
  className?: string
}

export default function CoinbaseWalletIconComponent({
  className,
  ...props
}: CoinbaseWalletIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect rx="27%" width="20" height="20" fill="#0052FF"></rect>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0001 17C13.8661 17 17.0001 13.866 17.0001 10C17.0001 6.13401 13.8661 3 10.0001 3C6.13413 3 3.00012 6.13401 3.00012 10C3.00012 13.866 6.13413 17 10.0001 17ZM8.25012 7.71429C7.95427 7.71429 7.71441 7.95414 7.71441 8.25V11.75C7.71441 12.0459 7.95427 12.2857 8.25012 12.2857H11.7501C12.046 12.2857 12.2858 12.0459 12.2858 11.75V8.25C12.2858 7.95414 12.046 7.71429 11.7501 7.71429H8.25012Z"
        fill="white"
      ></path>
    </svg>
  )
}
