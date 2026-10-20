type LogoProps = {
  size?: number;
  light?: boolean;
  wordmark?: boolean;
};

function Logo({ size = 34, light = false, wordmark = true }: LogoProps) {
  return (
    <span className={`logo ${light ? "logo-light" : ""}`}>
      <img
        src={light ? "/joi-mark-light.svg" : "/joi-mark.svg"}
        alt=""
        width={size}
        height={size}
        className="logo-mark"
      />
      {wordmark && <span className="logo-word">JOI</span>}
    </span>
  );
}

export default Logo;
