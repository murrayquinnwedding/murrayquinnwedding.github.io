/**
 * Site-wide settings and content that is likely to change.
 *
 * NOTE: this repository has to be PUBLIC for GitHub Pages to work on a free
 * plan, so anything in here is readable by anyone. Keep personal contact
 * details out until Aoife & Mark are happy for them to be public.
 */

/** The wedding day. Months are 0-indexed in JS, so 3 = April. */
export const WEDDING_DATE = new Date(2028, 3, 17, 12, 0, 0);

/** ISO form, used for the countdown and the <time> element. */
export const WEDDING_DATE_ISO = '2028-04-17T12:00:00';

/**
 * TODO: confirm with Aoife & Mark before going live.
 * These are placeholders — replace with the real address and number.
 */
export const CONTACT = {
  email: 'hello@example.com',
  /** International format, digits only, no + or spaces. e.g. 447700900123 */
  whatsapp: '440000000000',
};

/** Where the "Book your stay" button points. */
export const HOTEL_BOOKING_URL = 'https://dunadry.com/';
