import { ISectionId } from '../types/SectionId';

export const scrollToSection = (sectionId: ISectionId) => {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView();
  }
};
