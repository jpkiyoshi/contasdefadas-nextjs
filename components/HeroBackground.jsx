const HeroBackground = props => {
  return <div style={heroStyles}>{props.children}</div>;
};

export default HeroBackground;

const heroStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '5rem',
  justifyContent: 'center',
  alignItems: 'center',
  height: '90vh',
  width: '100vw',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='1000' preserveAspectRatio='none' viewBox='0 0 1440 1000'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1010%26quot%3b)' fill='none'%3e%3crect width='1440' height='1000' x='0' y='0' fill='url(%23SvgjsLinearGradient1011)'%3e%3c/rect%3e%3cpath d='M1440 0L1302.75 0L1440 441.62z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M1302.75 0L1440 441.62L1440 658.85L814.4200000000001 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M814.4200000000001 0L1440 658.85L1440 710.85L490.2100000000001 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M490.21000000000004 0L1440 710.85L1440 806.99L157.44000000000005 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 1000L469.93 1000L0 955.46z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 955.46L469.93 1000L708.72 1000L0 659.49z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 659.49L708.72 1000L980.04 1000L0 466.58000000000004z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 466.5799999999999L980.04 1000L1247.19 1000L0 354.80999999999995z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1010'%3e%3crect width='1440' height='1000' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='7.64%25' y1='-11%25' x2='92.36%25' y2='111%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1011'%3e%3cstop stop-color='rgba(255%2c 154%2c 139%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(255%2c 106%2c 136%2c 1)' offset='0.5'%3e%3c/stop%3e%3cstop stop-color='rgba(255%2c 153%2c 172%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`
};
