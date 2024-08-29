import type { TActiveSection } from '@/data/nav-items';
import { atom } from 'nanostores';

export const isDialogOpen = atom(false);
export const activeSectionAtom = atom<TActiveSection>('about');
