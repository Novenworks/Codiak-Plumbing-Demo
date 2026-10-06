// Business facts. Sources and verification status are tracked in docs/BRIEF.md.
export const BUSINESS = {
  name: 'Codiak Plumbing',
  legalName: 'Codiak Plumbing Services',
  owner: 'Coty Carr',
  phone: '(909) 435-7865',
  tel: 'tel:+19094357865',
  email: 'info@redlands-plumbing.com',
  license: '1065137',
  licenseClass: 'C-36 Plumbing',
  licenseUrl: 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=1065137',
  yelpUrl: 'https://www.yelp.com/biz/codiak-plumbing-yucaipa-2',
  baseCity: 'Yucaipa',
  cities: ['Redlands', 'Yucaipa', 'Calimesa'],
  logo: 'https://www.redlands-plumbing.com/wp-content/uploads/2021/11/Screen-Shot-2021-11-19-at-10.23.41-PM.png',
};

export const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#about', label: 'About' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#service-area', label: 'Service area' },
  { href: '#contact', label: 'Contact' },
];

export const REPAIRS = [
  {
    title: 'Burst pipe or major leak',
    body: 'Turn off the main water shutoff if you can safely reach it, then call us. Emergency service is available 24/7.',
    urgent: true,
  },
  {
    title: 'Slow or backed-up drains',
    body: 'We clear blocked lines, including hydro jetting, and can run a camera down the line to see what’s causing it before anything is opened up.',
  },
  {
    title: 'Leaking faucets, valves and fixtures',
    body: 'Drips, running toilets, worn shutoff valves and fixtures that need replacing.',
  },
  {
    title: 'Low water pressure',
    body: 'We track down where the pressure is being lost and explain what it will take to fix.',
  },
];

export const PROJECTS = [
  { title: 'Repiping', body: 'Replacing aging or failing water lines with a plan that fits your house.' },
  { title: 'Remodel plumbing', body: 'Rough-in and finish plumbing for kitchens, bathrooms and additions.' },
  { title: 'New construction', body: 'Plumbing for new homes and buildings in Redlands and nearby communities.' },
  { title: 'Water heaters', body: 'Replacements and installations, including tankless units.' },
  { title: 'Commercial plumbing', body: 'Repairs and installations for shops, offices and other commercial buildings.' },
];

export const WORK_TYPES = [
  'Repair or leak',
  'Drain problem',
  'Repipe',
  'Remodel plumbing',
  'New construction',
  'Water heater',
  'Commercial work',
  'Something else',
];

// Customer reviews as quoted on redlands-plumbing.com, attributed there to Yelp.
export const REVIEWS = {
  featured: {
    name: 'Mrs. H.',
    text: 'Great service. Reasonable pricing. These guys are honest and do not try to upsell you.',
  },
  hero: {
    name: 'Shane L.',
    text: 'Problem on a Friday night. Appointment the next morning. Came out when they said they would.',
  },
  more: [
    { name: 'Matt D.', text: 'Cody and his team came out the same day and gave me a quote. Fixed it the next day.' },
    { name: 'Jim H.', text: 'Highly recommended as always. Thank you Cody, Ian and crew.' },
  ],
};
