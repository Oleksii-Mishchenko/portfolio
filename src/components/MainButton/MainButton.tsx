import './main-button.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export const MainButton: React.FC<Props> = ({ text, ...rest }) => {
  return (
    <button className="main-button" {...rest}>
      {text}
    </button>
  );
};
