import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const ORIENTATION_DETAILS_TABS = [
  { label: 'Orientation content', value: 'content' },
  { label: 'Participants', value: 'participants' },
];

export const ORIENTATION_SKILL_OPTIONS = [
  'Communication',
  'Teamwork',
  'Adaptability',
  'Problem Solving',
  'Time Management',
  'Critical Thinking',
  'Leadership',
  'Creativity',
  'Customer Service',
  'Technical Skills',
  'Collaboration',
  'Work Ethics',
  'Self-motivation',
  'Conflict Resolution',
  'Decision Making',
  'Emotional Intelligence',
  'Cultural Awareness',
];

export const ORIENTATION_SCHEDULE_OPTIONS = [
  'Monday to Friday',
  'Weekend sessions',
  'Day shift',
  'Evening sessions',
];

export const ORIENTATION_TYPE_OPTIONS = [
  { label: 'Full-time', value: 'Full-time' },
  { label: 'Part-time', value: 'Part-time' },
  { label: 'Remote', value: 'Remote' },
  { label: 'Hybrid', value: 'Hybrid' },
];

export const ORIENTATION_LEVEL_OPTIONS = [
  { label: 'Beginner', value: 'Beginner' },
  { label: 'Intermediate', value: 'Intermediate' },
  { label: 'Advanced', value: 'Advanced' },
  { label: 'All levels', value: 'All levels' },
];

export const ORIENTATION_BENEFIT_OPTIONS = [
  { label: 'Free materials', value: 'Free materials' },
  { label: 'Certificate', value: 'Certificate' },
  { label: 'Networking', value: 'Networking' },
  { label: 'Mentorship', value: 'Mentorship' },
  { label: 'Career guidance', value: 'Career guidance' },
  { label: 'Hands-on training', value: 'Hands-on training' },
  { label: 'Resource access', value: 'Resource access' },
  { label: 'Flexible schedule', value: 'Flexible schedule' },
  { label: 'Follow-up support', value: 'Follow-up support' },
  { label: 'Job placement', value: 'Job placement' },
];

export const ORIENTATION_PUBLISH_OPTIONS = [
  { label: 'Published', value: 'published' },
  { label: 'Draft', value: 'draft' },
];

export const ORIENTATION_SORT_OPTIONS = [
  { label: 'Latest', value: 'latest' },
  { label: 'Popular', value: 'popular' },
  { label: 'Oldest', value: 'oldest' },
];

const PARTICIPANTS = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  role: _mock.role(index),
  name: _mock.fullName(index),
  avatarUrl: _mock.image.avatar(index),
}));

const CONTENT = `
<h6>Orientation Description</h6>

<p>Join our comprehensive orientation program designed to help new team members integrate seamlessly into the organization. This program covers essential information about company culture, policies, and operational procedures.</p>

<h6>Key Topics Covered</h6>

<ul>
  <li>Company mission, vision, and core values</li>
  <li>Organizational structure and key personnel</li>
  <li>HR policies, benefits, and employee resources</li>
  <li>Workplace safety and security procedures</li>
  <li>IT systems and tools training</li>
  <li>Communication protocols and expectations</li>
  <li>Performance evaluation processes</li>
</ul>

<h6>Why You'll Love This Orientation</h6>

<ul>
  <li>Interactive sessions with experienced facilitators</li>
  <li>Networking opportunities with fellow newcomers</li>
  <li>Comprehensive resource materials and guides</li>
  <li>Q&A sessions with department heads</li>
  <li>Virtual and in-person options available</li>
  <li>Ongoing support throughout your first 90 days</li>
  <li>Certificate of completion</li>
</ul>
`;

export const _orientations = [...Array(12)].map((_, index) => {
  const publish = index % 3 ? 'published' : 'draft';

  const duration = {
    type: (index % 5 && 'Days') || 'Weeks',
    value: _mock.number.nativeS(index) + 1,
  };

  const benefits = ORIENTATION_BENEFIT_OPTIONS.slice(0, 3).map((option) => option.label);

  const level =
    ORIENTATION_LEVEL_OPTIONS.map((option) => option.label)[index] ||
    ORIENTATION_LEVEL_OPTIONS[0].label;

  const orientationTypes = (index % 2 && ['Part-time']) ||
    (index % 3 && ['Remote']) ||
    (index % 4 && ['Hybrid']) || ['Full-time'];

  const company = {
    name: _mock.companyNames(index),
    logo: _mock.image.company(index),
    phoneNumber: _mock.phoneNumber(index),
    fullAddress: _mock.fullAddress(index),
  };

  return {
    id: _mock.id(index),
    duration,
    publish,
    company,
    benefits,
    level,
    orientationTypes,
    content: CONTENT,
    participants: PARTICIPANTS,
    role: _mock.role(index),
    title: `${_mock.role(index)} Orientation Program`,
    createdAt: _mock.time(index),
    startDate: _mock.time(index),
    skills: ORIENTATION_SKILL_OPTIONS.slice(0, 3),
    totalViews: _mock.number.nativeL(index),
    locations: [_mock.countryNames(1), _mock.countryNames(2)],
    schedule: ORIENTATION_SCHEDULE_OPTIONS.slice(0, 2),
  };
});
