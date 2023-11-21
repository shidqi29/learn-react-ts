type ContainerProps = {
  styles: React.CSSProperties; // CSSProperties is a type provided by React that allows us to type CSS properties
};

const Container = ({ styles }: ContainerProps) => {
  return <div style={styles}>Container</div>;
};

export default Container;
