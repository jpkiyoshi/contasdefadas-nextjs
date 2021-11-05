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
  backgroundImage: `url("https://res.cloudinary.com/jpkiyoshi/image/upload/v1636144894/IMG_3222_yq6f39.png")`
};
