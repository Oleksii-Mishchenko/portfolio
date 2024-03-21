export interface IProjectLink {
  style: 'project' | 'github';
  name: string;
  path: string;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  detail: string;
  photo: string;
  info: { [key: string]: string | number };
  links: IProjectLink[];
}
