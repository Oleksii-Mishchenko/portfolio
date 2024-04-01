import { FunctionComponent, SVGProps } from 'react';

export interface ISkill {
  image: FunctionComponent<SVGProps<SVGSVGElement>>;
  label: string;
}
