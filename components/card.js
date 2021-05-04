export class CardOptions {
  className= string;
  children;
}

const Card = ({ className, children }, CardOptions) => {
  return (
    <div
      className={`shadow overflow-hidden sm:rounded-md bg-white ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
