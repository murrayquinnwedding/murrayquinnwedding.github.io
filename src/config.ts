/**
 * Site-wide settings and content that is likely to change.
 *
 * NOTE: this repository has to be PUBLIC for GitHub Pages to work on a free
 * plan, so anything in here is readable by anyone. Keep personal contact
 * details out unless Aoife & Mark are happy for them to be public.
 */

/** The wedding day. Months are 0-indexed in JS, so 3 = April. */
export const WEDDING_DATE = new Date(2028, 3, 17, 12, 0, 0);

/** ISO form, used for the countdown and the <time> element. */
export const WEDDING_DATE_ISO = '2028-04-17T12:00:00';

/**
 * Confirmed by Lucy, 17 November 2026, for publication on this public site.
 */
export const CONTACT = {
  email: 'amurray99@icloud.com',
  /** International format, digits only, no + or spaces. +44 7748 018912 */
  whatsapp: '447748018912',
};

/** Where the "Book your stay" button points. */
export const HOTEL_BOOKING_URL = 'https://dunadry.com/';
