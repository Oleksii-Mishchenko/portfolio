import './main-button.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export const MainButton: React.FC<Props> = ({ label, ...rest }) => {
  return (
    <button className="main-button" {...rest}>
      {label}
    </button>
  );
};
