import { SVGProps } from "react"
const Search = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 -0.5 25 25"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.5 10.765a5.765 5.765 0 1 1 11.53 0 5.765 5.765 0 0 1-11.53 0Z"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.029 16.53 19.5 19"
    />
  </svg>
)
export default Search
