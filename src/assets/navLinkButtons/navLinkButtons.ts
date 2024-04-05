import { INavLinkButton } from '../../types/NavLinkButton';
import { ISectionId } from '../../types/SectionId';

export const navLinkButtons: INavLinkButton[] = [
  {
    sectionId: ISectionId.Skills,
    label: 'Skills',
  },
  {
    sectionId: ISectionId.Projects,
    label: 'Projects',
  },
  {
    sectionId: ISectionId.About,
    label: 'About',
  },
  {
    sectionId: ISectionId.Contacts,
    label: 'Contacts',
  },
];
