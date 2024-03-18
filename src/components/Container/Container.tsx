import { HTMLAttributes, ReactNode } from 'react';
import './container.scss';
import { Line } from '../Line';

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  hasLine?: boolean;
};

export const Container: React.FC<Props> = ({ children, hasLine, ...rest }) => {
  return (
    <>
      <div {...rest}>{children}</div>

      {hasLine && <Line />}
    </>
  );
};
