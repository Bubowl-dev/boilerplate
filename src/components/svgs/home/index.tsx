export const HomeIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    {...props}
  >
    <path
      d="M2 12.7039C2 10.4155 2 9.27128 2.5192 8.32274C3.0384 7.37421 3.98695 6.78551 5.88403 5.60813L7.88403 4.36687C9.88939 3.12229 10.8921 2.5 12 2.5C13.1079 2.5 14.1106 3.12229 16.116 4.36687L18.116 5.60813C20.0131 6.78551 20.9616 7.37421 21.4808 8.32274C22 9.27128 22 10.4155 22 12.7039V14.225C22 18.1258 22 20.0763 20.8284 21.2881C19.6569 22.5 17.7712 22.5 14 22.5H10C6.22876 22.5 4.34315 22.5 3.17157 21.2881C2 20.0763 2 18.1258 2 14.225V12.7039Z"
      stroke="white"
      strokeWidth="1.5"
    />
    <path d="M12 15.5L12 18.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
