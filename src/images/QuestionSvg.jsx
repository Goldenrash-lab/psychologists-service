const QuestionSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    fill="none"
    {...props}
  >
    <rect
      width={40}
      height={40}
      x={-2}
      y={8.353}
      fill="#4535AF"
      rx={10}
      transform="rotate(-15 -2 8.353)"
    />
    <path
      fill="#FBFBFB"
      d="M19.5 19.313c0-1.173.897-2.125 2-2.125h1c1.103 0 2 .952 2 2.125v.119c0 .724-.347 1.398-.919 1.786l-1.319.9a2.86 2.86 0 0 0-.926 1.058c-.22.429-.336.91-.336 1.4v.049c0 .588.447 1.063 1 1.063.553 0 1-.475 1-1.063v-.047c0-.272.131-.524.344-.67l1.319-.9c1.143-.784 1.837-2.128 1.837-3.576v-.12c0-2.347-1.79-4.25-4-4.25h-1c-2.21 0-4 1.903-4 4.25 0 .588.447 1.063 1 1.063.553 0 1-.475 1-1.063ZM22 29.938c.331 0 .65-.14.884-.39.234-.249.366-.586.366-.939 0-.352-.132-.69-.366-.939a1.214 1.214 0 0 0-.884-.389c-.331 0-.65.14-.884.39a1.371 1.371 0 0 0-.366.938c0 .353.132.69.366.94.235.249.553.389.884.389Z"
    />
  </svg>
);
export default QuestionSvg;
