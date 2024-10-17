import {defineRouting} from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const multiLang = [
  {value : 'en', label : 'English'},
  {value : 'fr', label : 'French'},
  {value : 'it', label : 'Italian'},
  {value : 'es', label : 'Spanish'},
];

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fr', 'it', 'es'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);