import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Download, 
  MapPin, 
  Clock, 
  Briefcase, 
  Calendar, 
  Mail, 
  X, 
  FileText,
  CheckCircle2,
  Users
} from 'lucide-react';

const NairaIcon: React.FC<{ size?: number; color?: string }> = ({ size = 16, color = 'var(--sky)' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M6 4v16M18 4v16M6 4l12 16M4 10h16M4 14h16" />
  </svg>
);

interface JobPosition {
  id: string;
  title: string;
  tagline: string;
  category: string;
  location: string;
  locationsList: string[];
  positionsCount: string;
  type: string;
  duration: string;
  startDate: string;
  reportingTo: string;
  supervises?: string;
  compensation: string;
  deadline: string;
  emailSubject: string;
  docPath: string;
  docFileName: string;
  aboutProject: string;
  aboutRole: string;
  responsibilities: {
    sectionTitle: string;
    items: string[];
  }[];
  qualifications: string[];
  languageProficiency: string[];
  diversityInclusion: string;
  safeguarding: string;
  howToApply: {
    requirements: string[];
    deadline: string;
    email: string;
    subjectLine: string;
    note: string;
  };
}

const jobListings: JobPosition[] = [
  {
    id: 'acsm-officer',
    title: 'Advocacy, Communication & Social Mobilization (ACSM) Officer',
    tagline: 'Lead community-level implementation of farmer-led advocacy, communication and social mobilisation across priority states.',
    category: 'Advocacy & Social Mobilization',
    location: 'Ekiti, Niger and Gombe States',
    locationsList: ['Ekiti', 'Niger', 'Gombe'],
    positionsCount: '3 Positions (Gombe, Ekiti and Niger)',
    type: 'Full-time position contingent upon project award',
    duration: '3 years',
    startDate: 'October 2026, dependent on Award',
    reportingTo: 'State Team Lead',
    compensation: 'Monthly gross ₦300,000 - ₦333,333',
    deadline: '30th September 2026',
    emailSubject: 'ACSM Officer (Choice of State) - Solicitation Phase Application',
    docPath: '/carrers/ACSM Officer Job Scripts - Ekiti, Niger and Gombe.docx',
    docFileName: 'ACSM Officer Job Scripts - Ekiti, Niger and Gombe.docx',
    aboutProject: 'Ikore Empowerment Foundation is anticipating a 3-year agricultural market systems project aimed at strengthening farmer organizations, improving market responsiveness, supporting farmer-led advocacy, and enhancing the adoption of agricultural innovations across selected states in Nigeria. As this project is subject to donor approval and award, employment is contingent on donor award.',
    aboutRole: 'The Community Engagement / Advocacy, Communication and Social Mobilisation (ACSM) Officer will lead community-level implementation of farmer-led advocacy, communication and social mobilisation activities within the assigned state. The position is responsible for mobilizing and strengthening Farmer Organizations (FOs), facilitating community dialogue, supporting farmer champions, promoting evidence-based advocacy, and strengthening trust in priority agricultural innovations. Working closely with the State Team Lead and technical specialists, the Officer will facilitate sustained engagement between farmers, government institutions, private-sector actors and other stakeholders to strengthen market responsiveness, generate credible farmer demand and improve accountability within agricultural market systems.',
    responsibilities: [
      {
        sectionTitle: 'Community Mobilisation and Farmer Organization Engagement',
        items: [
          'Mobilize, engage and strengthen Farmer Organizations, producer groups and community structures to participate actively in programme interventions.',
          'Support Farmer Organizations to function as advocacy, learning and market coordination platforms.',
          'Facilitate community meetings, Farmer Organization forums and stakeholder consultations.',
          'Maintain regular engagement with participating communities and beneficiary groups.'
        ]
      },
      {
        sectionTitle: 'Farmer-led Advocacy',
        items: [
          'Support Farmer Organizations to identify, prioritize and articulate farmer concerns affecting market access, technology adoption and service delivery.',
          'Facilitate evidence-based advocacy engagements between farmers and public and private sector actors.',
          'Support implementation of advocacy campaigns, policy dialogues and accountability initiatives.',
          'Track advocacy issues and document stakeholder commitments and responses.'
        ]
      },
      {
        sectionTitle: 'Communication and Social Mobilisation',
        items: [
          'Implement community communication and awareness campaigns using appropriate local communication channels.',
          'Promote farmer-to-farmer learning through Farmer Champions, Women Champions and Youth Innovation Ambassadors.',
          'Facilitate peer learning events, demonstration plot activities and farmer validation exercises.',
          'Support communication initiatives that counter misinformation and promote trusted farmer-led narratives.'
        ]
      },
      {
        sectionTitle: 'Stakeholder Engagement',
        items: [
          'Maintain productive relationships with community leaders, extension agents, local government authorities, Farmer Organizations, agro-dealers, processors, financial institutions and civil society organizations.',
          'Support state-level stakeholder engagement activities and community consultations.',
          'Facilitate linkages between Farmer Organizations and market actors.'
        ]
      },
      {
        sectionTitle: 'Gender and Social Inclusion',
        items: [
          'Promote active participation of women, youth and other underserved groups in programme activities.',
          'Support women-led advocacy groups and encourage equitable participation in leadership and decision-making.',
          'Ensure community engagement activities are inclusive and responsive to local social dynamics.'
        ]
      },
      {
        sectionTitle: 'Monitoring, Evidence and Reporting',
        items: [
          'Collect and report high-quality field data using approved monitoring tools.',
          'Document farmer feedback, adoption trends, advocacy outcomes and community priorities.',
          'Prepare activity reports, success stories, case studies and field updates.',
          'Support implementation of surveys, assessments and learning activities.'
        ]
      },
      {
        sectionTitle: 'Operational Support',
        items: [
          'Coordinate logistics for community meetings, trainings, demonstrations and advocacy events.',
          'Maintain accurate records of programme participants, activities and community engagements.'
        ]
      }
    ],
    qualifications: [
      "Bachelor's degree in Agricultural Extension, Rural Development, Development Studies, Agricultural Economics, Mass Communication, Sociology, Community Development, Public Administration or a related field.",
      'Professional training in community mobilisation, advocacy, communication or facilitation will be an added advantage.',
      'Minimum of 5 years of relevant experience implementing community-based agriculture, rural development or market systems programmes.',
      'Demonstrated experience working with Farmer Organizations, cooperatives or community-based organizations.',
      'Experience facilitating community mobilisation, stakeholder engagement and farmer training.',
      'Knowledge of agricultural value chains, advocacy and participatory development approaches.',
      'Experience with donor-funded projects and field data collection is an advantage.',
      'Strong facilitation, communication, report-writing and interpersonal skills.'
    ],
    languageProficiency: [
      'Fluency in spoken and written English with excellent report writing skills.',
      'Applicants must be a resident of choice of state or be willing to relocate immediately upon employment.',
      'Ability to communicate effectively in the dominant local language of the assigned state is required.',
      'Ability to facilitate community meetings, advocacy dialogues and Farmer Organization engagements in both English and the relevant local language.'
    ],
    diversityInclusion: 'Ikore is an equal opportunity employer. We value integrity, professionalism, and respect for all, and are committed to creating a fair and inclusive workplace where every team member can contribute and thrive. Selection decisions are based solely on qualifications, skills, and organisational fit without any discrimination.',
    safeguarding: 'Ikore is committed to safeguarding children and vulnerable adults. All staff are expected to uphold this commitment and will undergo reference and background checks.',
    howToApply: {
      requirements: ['An updated Curriculum Vitae.', 'A one-page cover letter.'],
      deadline: '30th September 2026',
      email: 'info@ikorefoundation.org',
      subjectLine: 'ACSM Officer (Choice of State) - Solicitation Phase Application',
      note: 'Only shortlisted candidates will be contacted.'
    }
  },
  {
    id: 'project-manager',
    title: 'Project Manager, Upcoming Advocacy Project',
    tagline: 'Provide strategic oversight, team leadership and operational coordination for a 3-year agricultural market systems programme across Nigeria.',
    category: 'Project Management & Leadership',
    location: 'Abuja (with travels to Ekiti, Gombe, Kaduna and Niger)',
    locationsList: ['Abuja', 'Ekiti', 'Gombe', 'Kaduna', 'Niger'],
    positionsCount: '1 Position',
    type: 'Full-time position contingent upon project award',
    duration: '3 years',
    startDate: 'October 2026, dependent on Award',
    reportingTo: 'Program Director',
    supervises: 'Entire Project Team',
    compensation: 'Monthly gross ₦1.3M - ₦1.6M',
    deadline: '30th September 2026',
    emailSubject: 'Project Manager - Solicitation Phase Application',
    docPath: '/carrers/Project Manager - Job Scripts.docx',
    docFileName: 'Project Manager - Job Scripts.docx',
    aboutProject: 'Ikore Empowerment Foundation is anticipating a 3-year agricultural market systems project aimed at strengthening farmer organizations, improving market responsiveness, supporting farmer-led advocacy, and enhancing the adoption of agricultural innovations across selected states in Nigeria. As this project is subject to donor approval and award, employment is contingent on donor award.',
    aboutRole: 'The Project Manager will provide strategic oversight and day-to-day leadership, coordination and operational management of the programme across all target states, ensuring timely delivery of project activities, outputs and results. With oversight from the Programme Director, the Project Manager will coordinate multidisciplinary technical teams, oversee state-level implementation, monitor workplan execution, manage operational risks, and ensure effective collaboration among consortium partners, government institutions, Farmer Organizations (FOs) and private-sector stakeholders. The position will ensure that programme implementation is well-coordinated, results-oriented and compliant with donor requirements while supporting adaptive management and high-quality delivery.',
    responsibilities: [
      {
        sectionTitle: 'Strategic Management',
        items: [
          'Lead in translating high-level Project objectives to actionable project scopes, roadmaps, and annual workplans.',
          'Lead the team in executing programme activities across all target States, in alignment with consortium partners and field partners, complying with workplan schedules, quality delivery and at the desired costs.',
          'Establish an adaptive management system of delivery, incorporating the needed flexibility and decision points for prioritisation of clients interest and changing realities and emerging opportunities for better influencing policies and institutions.',
          'Ensure integration of organizational development, advocacy, gender, evidence generation and communication activities.',
          'Represent the Project in high-level forum and stakeholder meetings.',
          'Provide periodic project reports to consortium lead, ensuring compliance to reporting requirements.',
          'Monitor programme performance against approved targets and indicators and report in compliance with clients expectations.',
          'Establish and utilize reporting dashboards to track progress and changes at various levels of the chain.'
        ]
      },
      {
        sectionTitle: 'Team Leadership and Performance Management',
        items: [
          'Supervise State Team Leads and support effective management of field teams.',
          'Design and implement professional development support plans, keeping team motivated and delivering high-quality work.',
          'Facilitate regular programme review meetings and implementation planning sessions.',
          'Promote collaboration, accountability and effective communication across project teams.',
          'Support staff performance management and continuous improvement.'
        ]
      },
      {
        sectionTitle: 'Stakeholder and Partnership Coordination',
        items: [
          'In collaboration with the Advocacy expert, lead in undertaking political economy analysis and conflict sensitivity analysis to establish the baselines: identifying winners and losers, enablers, blockers and in what conditions institutional change will occur and the main change agents.',
          'Develop and implement stakeholder management plans, in consultations with the Advocacy and Organizational Development Experts.',
          'Coordinate engagement with government institutions, Farmer Organizations, private-sector actors, research institutions and consortium partners.',
          'Support the organization of stakeholder consultations, technical meetings, advocacy forums, and learning events.',
          'Maintain productive working relationships that facilitate programme implementation and sustainability.'
        ]
      },
      {
        sectionTitle: 'Monitoring, Reporting and Adaptive Management',
        items: [
          'Track implementation progress and ensure timely submission of technical and operational reports.',
          'Support programme monitoring, evidence generation and learning processes.',
          'Facilitate regular implementation reviews and promote adaptive management based on programme evidence.',
          'Ensure documentation of implementation progress, lessons learned and emerging risks.'
        ]
      },
      {
        sectionTitle: 'Operational and Risk Management',
        items: [
          'With oversight from Project Director, set up a Project Direction Committee (PDC) to serve as a governance and accountability group, for steering the project.',
          'Coordinate monthly PDC meetings, for progress updates and decision making.',
          'With support from PDC, assess the project risks and establish a risk management plan for the project.',
          'Monitor operational risks affecting programme delivery and implement mitigation measures.',
          'Coordinate logistics and operational support for programme activities.',
          'Ensure compliance with organizational policies, donor requirements, and approved operational procedures.'
        ]
      },
      {
        sectionTitle: 'Financial and Administrative Coordination',
        items: [
          'Work closely with the Finance, Contracts, and Compliance Manager to ensure activities are implemented within approved budgets.',
          'Review activity implementation plans for operational feasibility and resource requirements.',
          'Monitor timely utilization of financial and logistical resources.'
        ]
      },
      {
        sectionTitle: 'Quality Assurance',
        items: [
          'Ensure project activities meet agreed technical and operational quality standards.',
          'Coordinate internal quality assurance processes across implementation states.',
          'Support preparation for donor reviews, field monitoring visits and programme evaluations.',
          'Promote continuous learning and application of best practices across programme activities.'
        ]
      }
    ],
    qualifications: [
      "Master's degree in project management, Agricultural Economics, Rural Development, Development Studies, Business Administration, Public Administration or a related field.",
      'Professional certification in Project Management (PMP, PRINCE2 or equivalent) will be an added advantage.',
      'Minimum of 10 years of progressively responsible experience managing complex, multi-state development programmes, preferably in agriculture or rural development.',
      'Demonstrated experience coordinating multidisciplinary teams and managing donor-funded projects.',
      'Proven experience in project planning, implementation, stakeholder coordination, and performance monitoring.',
      'Strong understanding of agricultural market systems, Farmer Organization development, and multi-stakeholder partnerships.',
      'Experience working with government institutions, private-sector actors and development partners in Nigeria.',
      'Excellent leadership, coordination, communication, and problem-solving skills.'
    ],
    languageProficiency: [
      'Fluency in spoken and written English with excellent report writing and executive presentation skills.'
    ],
    diversityInclusion: 'Ikore is an equal opportunity employer. We value integrity, professionalism, and respect for all, and are committed to creating a fair and inclusive workplace where every team member can contribute and thrive. Selection decisions are based solely on qualifications, skills, and organisational fit without any discrimination.',
    safeguarding: 'Ikore is committed to safeguarding children and vulnerable adults. All staff are expected to uphold this commitment and will undergo reference and background checks.',
    howToApply: {
      requirements: ['An updated Curriculum Vitae.', 'A one-page cover letter.'],
      deadline: '30th September 2026',
      email: 'info@ikorefoundation.org',
      subjectLine: 'Project Manager - Solicitation Phase Application',
      note: 'Only shortlisted candidates will be contacted.'
    }
  },
  {
    id: 'state-team-lead-ekiti',
    title: 'State Team Lead (Ekiti), Upcoming Advocacy Project',
    tagline: 'Provide strategic leadership, state-level team coordination and technical oversight for programme implementation in Ekiti State.',
    category: 'State Leadership & Field Operations',
    location: 'Ekiti State',
    locationsList: ['Ekiti'],
    positionsCount: '1 Position',
    type: 'Full-time position contingent upon project award',
    duration: '3 years',
    startDate: 'October 2026, dependent on Award',
    reportingTo: 'Project Manager',
    supervises: 'ACSM Officers, Field Facilitators',
    compensation: 'Monthly gross ₦650,000 - ₦850,000',
    deadline: '30th September 2026',
    emailSubject: 'State Team Lead - Solicitation Phase Application',
    docPath: '/carrers/State Team Lead Job Scripts - (Ekiti).docx',
    docFileName: 'State Team Lead Job Scripts - (Ekiti).docx',
    aboutProject: 'Ikore Empowerment Foundation is anticipating a 3-year agricultural market systems project aimed at strengthening farmer organizations, improving market responsiveness, supporting farmer-led advocacy, and enhancing the adoption of agricultural innovations across selected states in Nigeria. As this project is subject to donor approval and award, employment is contingent on donor award.',
    aboutRole: 'The State Team Lead will provide overall leadership, coordination and technical oversight for programme implementation within the assigned state. The position is responsible for translating programme strategies into high-quality field implementation by coordinating Farmer Organization (FO) strengthening, farmer-led advocacy, stakeholder engagement, evidence generation and market systems interventions. Working closely with technical specialists, government institutions, private-sector actors and Farmer Organizations, the State Team Lead will ensure timely delivery of project activities, achievement of state-level targets, effective team management and compliance with programme standards. The role will also serve as the primary liaison between the programme and state-level stakeholders, promoting local ownership and sustainability of programme outcomes.',
    responsibilities: [
      {
        sectionTitle: 'Programme Coordination and Implementation',
        items: [
          'Lead implementation of all programme activities within the assigned state in accordance with approved workplans and project timelines.',
          'Technical coordination of Farmer Champions, Women Champions, Youth Innovation Ambassadors, Short-term consultants and facilitators engaged within the State.',
          'Coordinate the delivery of Farmer Organization strengthening, advocacy, communication, gender, evidence generation and market engagement activities.',
          'Ensure integration of technical interventions across project components.',
          'Monitor implementation progress and recommend corrective actions where necessary.',
          'Supervise state-based project staff and provide coaching and performance support.',
          'Coordinate workplans, field schedules and team assignments.',
          'Support preparation of state activity budgets and implementation plans.',
          'Coordinate logistics for field activities, meetings, trainings and stakeholder engagements.'
        ]
      },
      {
        sectionTitle: 'Stakeholder Engagement and Partnership Management',
        items: [
          'Build and maintain productive relationships with State Ministries, Agricultural Development Programmes (ADPs), Local Government authorities, Farmer Organizations, private-sector actors, financial institutions, research organizations and civil society partners.',
          'Represent the programme at state-level coordination meetings, technical working groups and stakeholder forums.',
          'Facilitate collaboration between Farmer Organizations and public and private sector actors to strengthen market systems and advocacy outcomes.'
        ]
      },
      {
        sectionTitle: 'Farmer Organization Strengthening',
        items: [
          'Coordinate identification, mobilization and engagement of participating Farmer Organizations.',
          'Support implementation of institutional strengthening and leadership development activities.',
          'Promote Farmer Organizations as sustainable advocacy, learning and market coordination platforms.',
          'Monitor organizational performance and institutional growth.'
        ]
      },
      {
        sectionTitle: 'Farmer-led Advocacy and Community Engagement',
        items: [
          'Coordinate implementation of farmer-led advocacy activities across the state.',
          'Support Farmer Organizations to identify advocacy priorities and engage relevant stakeholders.',
          'Oversee community mobilization, demonstration activities, peer learning events and advocacy campaigns.',
          'Promote inclusive participation of women, youth and underserved groups.'
        ]
      },
      {
        sectionTitle: 'Monitoring, Learning and Reporting',
        items: [
          'Monitor implementation against approved targets, indicators and workplans.',
          'Ensure timely collection, verification and submission of programme data and reports.',
          'Document lessons learned, success stories, innovations and implementation challenges.',
          'Support programme reviews, learning events and adaptive management processes.'
        ]
      },
      {
        sectionTitle: 'Quality Assurance and Compliance',
        items: [
          'Ensure programme activities meet approved technical and operational quality standards.',
          'Monitor compliance with donor requirements, organizational policies and project procedures.',
          'Support donor monitoring missions, audits and programme evaluations.',
          'Identify implementation risks and support mitigation measures.'
        ]
      }
    ],
    qualifications: [
      "Master's degree in Agricultural Extension, Agricultural Economics, Rural Development, Development Studies, Public Administration, Agribusiness, Social Sciences or a related discipline.",
      'Professional certification in Project Management or Programme Management will be an added advantage.',
      'Minimum of 8 years of progressively responsible experience implementing agriculture, rural development or market systems programmes.',
      'Demonstrated experience coordinating field implementation and supervising multidisciplinary teams.',
      'Proven experience working with Farmer Organizations, cooperatives, government institutions and private-sector actors.',
      'Experience implementing donor-funded programmes, preferably involving advocacy, institutional strengthening or agricultural value chains.',
      'Strong understanding of agricultural market systems, stakeholder engagement and community mobilization.',
      'Excellent coordination, leadership, communication and report-writing skills.'
    ],
    languageProficiency: [
      'Fluency in spoken and written English with excellent report writing and presentation skills.',
      'Ability to communicate effectively in the dominant local language of the assigned state is required.',
      'Ability to facilitate community meetings, stakeholder consultations and Farmer Organization engagements in both English and the relevant local language.',
      'Applicants must be a resident of choice of state or be willing to relocate immediately upon employment.'
    ],
    diversityInclusion: 'Ikore is an equal opportunity employer. We value integrity, professionalism, and respect for all, and are committed to creating a fair and inclusive workplace where every team member can contribute and thrive. Selection decisions are based solely on qualifications, skills, and organisational fit without any discrimination.',
    safeguarding: 'Ikore is committed to safeguarding children and vulnerable adults. All staff are expected to uphold this commitment and will undergo reference and background checks.',
    howToApply: {
      requirements: ['An updated Curriculum Vitae.', 'A one-page cover letter.'],
      deadline: '30th September 2026',
      email: 'info@ikorefoundation.org',
      subjectLine: 'State Team Lead - Solicitation Phase Application',
      note: 'Only shortlisted candidates will be contacted.'
    }
  }
];

export const Careers: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);

  const filters = [
    { id: 'all', label: 'View all' },
    { id: 'Abuja', label: 'Abuja' },
    { id: 'Ekiti', label: 'Ekiti' },
    { id: 'Gombe', label: 'Gombe' },
    { id: 'Niger', label: 'Niger' },
    { id: 'Advocacy & Social Mobilization', label: 'Advocacy' },
    { id: 'Project Management & Leadership', label: 'Management' }
  ];

  const filteredJobs = jobListings.filter((job) => {
    if (selectedFilter === 'all') return true;
    if (job.locationsList.includes(selectedFilter)) return true;
    if (job.category === selectedFilter) return true;
    return false;
  });

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', color: 'var(--text)' }}>
      {/* Hero Section */}
      <div style={{ background: '#f4f8f5', padding: '140px 10% 80px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '840px' }}
        >
          <div 
            style={{ 
              color: 'var(--sky)', 
              fontSize: '14px', 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              letterSpacing: '1.5px', 
              marginBottom: '12px' 
            }}
          >
            We are hiring
          </div>
          
          <h1 
            style={{ 
              fontFamily: "'Plus Jakarta Sans', sans-serif", 
              fontSize: 'clamp(34px, 5vw, 56px)', 
              fontWeight: 800, 
              color: 'var(--sky-dark)', 
              lineHeight: 1.15, 
              marginBottom: '20px' 
            }}
          >
            Be part of our mission
          </h1>
          
          <p 
            style={{ 
              fontSize: '18px', 
              color: 'var(--text-light)', 
              lineHeight: 1.7, 
              maxWidth: '720px' 
            }}
          >
            We are looking for passionate professionals to join us on our upcoming 3-year agricultural market systems and advocacy programme. We value community impact, clear communication, integrity, and proactive leadership.
          </p>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <section style={{ padding: '70px 10% 90px', background: '#ffffff' }}>
        
        {/* Filter Navigation */}
        <div 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '10px', 
            marginBottom: '50px', 
            alignItems: 'center' 
          }}
        >
          {filters.map((filter) => {
            const isActive = selectedFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                style={{
                  background: isActive ? 'var(--sky-dark)' : '#f4f8f5',
                  color: isActive ? '#ffffff' : 'var(--text-light)',
                  border: 'none',
                  outline: 'none',
                  padding: '10px 20px',
                  borderRadius: '24px',
                  fontSize: '14px',
                  fontWeight: isActive ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Job Listings List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {filteredJobs.length === 0 ? (
            <div style={{ padding: '50px 20px', textAlign: 'center', background: '#f4f8f5', borderRadius: '16px' }}>
              <p style={{ color: 'var(--text-light)', fontSize: '16px' }}>
                No active openings matching this filter at this time.
              </p>
            </div>
          ) : (
            filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{
                  background: '#f9fbf9',
                  borderRadius: '16px',
                  padding: '36px',
                  transition: 'background 0.2s ease'
                }}
              >
                {/* Header Row: Title and Apply Button */}
                <div 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start', 
                    flexWrap: 'wrap', 
                    gap: '16px',
                    marginBottom: '16px'
                  }}
                >
                  <div style={{ flex: '1 1 500px' }}>
                    <div style={{ fontSize: '13px', color: 'var(--sky)', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {job.category}
                    </div>
                    <h2 
                      style={{ 
                        fontFamily: "'Plus Jakarta Sans', sans-serif", 
                        fontSize: '24px', 
                        fontWeight: 700, 
                        color: 'var(--sky-dark)',
                        lineHeight: 1.3
                      }}
                    >
                      {job.title}
                    </h2>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                    <a
                      href={job.docPath}
                      download={job.docFileName}
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        background: '#e8f2ea',
                        color: 'var(--sky-dark)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '10px 18px',
                        borderRadius: '24px',
                        fontSize: '13.5px',
                        fontWeight: 600,
                        transition: 'background 0.2s ease'
                      }}
                      title="Download full job advert document (.docx)"
                    >
                      <Download size={16} />
                      Download JD
                    </a>

                    <button
                      onClick={() => setSelectedJob(job)}
                      style={{
                        background: 'var(--sky)',
                        color: '#ffffff',
                        border: 'none',
                        outline: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '10px 20px',
                        borderRadius: '24px',
                        fontSize: '14px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'background 0.2s ease'
                      }}
                    >
                      View Details
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Role Description Summary */}
                <p 
                  style={{ 
                    fontSize: '15px', 
                    color: 'var(--text-light)', 
                    lineHeight: 1.7, 
                    marginBottom: '24px',
                    maxWidth: '850px'
                  }}
                >
                  {job.tagline}
                </p>

                {/* Metadata Row */}
                <div 
                  style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '24px', 
                    alignItems: 'center',
                    fontSize: '14px',
                    color: 'var(--text-light)'
                  }}
                >
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={16} color="var(--sky)" />
                    <span>{job.location}</span>
                  </div>

                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Briefcase size={16} color="var(--sky)" />
                    <span>Full-time (3 years)</span>
                  </div>

                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <NairaIcon size={16} color="var(--sky)" />
                    <span>{job.compensation}</span>
                  </div>

                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Calendar size={16} color="var(--sky)" />
                    <span>Deadline: {job.deadline}</span>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Culture & Work Environment Section */}
        <div 
          style={{ 
            marginTop: '80px', 
            background: '#f4f8f5', 
            borderRadius: '24px', 
            padding: '60px 40px',
            textAlign: 'center'
          }}
        >
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 
              style={{ 
                fontFamily: "'Plus Jakarta Sans', sans-serif", 
                fontSize: 'clamp(24px, 4vw, 36px)', 
                fontWeight: 800, 
                color: 'var(--sky-dark)', 
                lineHeight: 1.3, 
                marginBottom: '20px' 
              }}
            >
              Ikore truly values purpose, collaboration and accountability. We work hard to create measurable, sustainable impact across smallholder communities.
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '32px' }}>
              We are an equal opportunity organization committed to safeguarding children, vulnerable adults, and promoting gender and social inclusion across every state where we operate.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', color: 'var(--text)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: 600 }}>
                <CheckCircle2 size={18} color="var(--sky)" />
                Equal Opportunity Employer
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: 600 }}>
                <CheckCircle2 size={18} color="var(--sky)" />
                Strict Safeguarding Standards
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: 600 }}>
                <CheckCircle2 size={18} color="var(--sky)" />
                Adaptive Field Leadership
              </div>
            </div>
          </div>
        </div>

        {/* Document Repository & Download Box */}
        <div 
          style={{ 
            marginTop: '40px', 
            background: '#ffffff', 
            borderRadius: '20px', 
            padding: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px'
          }}
        >
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--sky-dark)', marginBottom: '8px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Official Job Descriptions and Application Documents
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--text-light)', lineHeight: 1.6, margin: 0 }}>
              Download complete job scripts and solicitation requirements directly in Word document format (.docx).
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {jobListings.map((job) => (
              <a
                key={job.id}
                href={job.docPath}
                download={job.docFileName}
                style={{
                  background: '#f4f8f5',
                  color: 'var(--sky-dark)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  borderRadius: '12px',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  transition: 'background 0.2s ease'
                }}
              >
                <FileText size={16} color="var(--sky)" />
                <span>{job.title.split(',')[0]}</span>
                <Download size={14} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Job Details Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div 
            style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0, 
              background: 'rgba(0, 0, 0, 0.6)', 
              zIndex: 10000, 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              padding: '20px' 
            }}
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                maxWidth: '900px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '40px',
                position: 'relative'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedJob(null)}
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  background: '#f4f8f5',
                  border: 'none',
                  outline: 'none',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text)'
                }}
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div style={{ paddingRight: '50px', marginBottom: '28px' }}>
                <div style={{ fontSize: '13px', color: 'var(--sky)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                  {selectedJob.category}
                </div>
                <h2 
                  style={{ 
                    fontFamily: "'Plus Jakarta Sans', sans-serif", 
                    fontSize: '28px', 
                    fontWeight: 800, 
                    color: 'var(--sky-dark)', 
                    lineHeight: 1.25, 
                    marginBottom: '16px' 
                  }}
                >
                  {selectedJob.title}
                </h2>

                <div 
                  style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '20px', 
                    fontSize: '14px', 
                    color: 'var(--text-light)', 
                    background: '#f4f8f5', 
                    padding: '16px 20px', 
                    borderRadius: '16px' 
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={16} color="var(--sky)" />
                    <span><strong>Location:</strong> {selectedJob.location}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={16} color="var(--sky)" />
                    <span><strong>Duration:</strong> {selectedJob.duration}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <NairaIcon size={16} color="var(--sky)" />
                    <span><strong>Gross Compensation:</strong> {selectedJob.compensation}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Users size={16} color="var(--sky)" />
                    <span><strong>Reporting To:</strong> {selectedJob.reportingTo}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={16} color="var(--sky)" />
                    <span><strong>Start Date:</strong> {selectedJob.startDate}</span>
                  </div>
                </div>
              </div>

              {/* Modal Body Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                
                {/* About Project */}
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--sky-dark)', marginBottom: '10px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    About the Project
                  </h3>
                  <p style={{ fontSize: '15px', color: 'var(--text-light)', lineHeight: 1.8, margin: 0 }}>
                    {selectedJob.aboutProject}
                  </p>
                </div>

                {/* About Role */}
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--sky-dark)', marginBottom: '10px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    About the Role
                  </h3>
                  <p style={{ fontSize: '15px', color: 'var(--text-light)', lineHeight: 1.8, margin: 0 }}>
                    {selectedJob.aboutRole}
                  </p>
                </div>

                {/* Key Responsibilities */}
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--sky-dark)', marginBottom: '16px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Key Responsibilities
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {selectedJob.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} style={{ background: '#fafcfa', padding: '20px', borderRadius: '14px' }}>
                        <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--sky-dark)', marginBottom: '10px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          {resp.sectionTitle}
                        </h4>
                        <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {resp.items.map((bullet, bIdx) => (
                            <li key={bIdx} style={{ fontSize: '14.5px', color: 'var(--text-light)', lineHeight: 1.6 }}>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Required Qualifications */}
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--sky-dark)', marginBottom: '12px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Required Qualifications & Experience
                  </h3>
                  <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {selectedJob.qualifications.map((qual, qIdx) => (
                      <li key={qIdx} style={{ fontSize: '14.5px', color: 'var(--text-light)', lineHeight: 1.6 }}>
                        {qual}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Language & Residency Requirements */}
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--sky-dark)', marginBottom: '12px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Language & Location Requirements
                  </h3>
                  <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {selectedJob.languageProficiency.map((lang, lIdx) => (
                      <li key={lIdx} style={{ fontSize: '14.5px', color: 'var(--text-light)', lineHeight: 1.6 }}>
                        {lang}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Diversity, Inclusion & Safeguarding */}
                <div style={{ background: '#f4f8f5', padding: '24px', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--sky-dark)', marginBottom: '6px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Diversity & Inclusion
                    </h4>
                    <p style={{ fontSize: '14px', color: 'var(--text-light)', lineHeight: 1.6, margin: 0 }}>
                      {selectedJob.diversityInclusion}
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--sky-dark)', marginBottom: '6px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Safeguarding Commitment
                    </h4>
                    <p style={{ fontSize: '14px', color: 'var(--text-light)', lineHeight: 1.6, margin: 0 }}>
                      {selectedJob.safeguarding}
                    </p>
                  </div>
                </div>

                {/* How to Apply Section */}
                <div style={{ background: 'var(--sky-dark)', color: '#ffffff', padding: '32px', borderRadius: '20px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', marginBottom: '14px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    How to Apply
                  </h3>
                  <p style={{ fontSize: '14.5px', color: '#e0ece2', lineHeight: 1.7, marginBottom: '16px' }}>
                    Interested candidates should submit:
                  </p>
                  <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {selectedJob.howToApply.requirements.map((req, rIdx) => (
                      <li key={rIdx} style={{ fontSize: '14.5px', color: '#ffffff' }}>
                        {req}
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginBottom: '24px', fontSize: '14px', color: '#c2dec5', lineHeight: 1.6 }}>
                    <div><strong>Application Deadline:</strong> {selectedJob.howToApply.deadline}</div>
                    <div style={{ marginTop: '4px' }}><strong>Submission Email:</strong> {selectedJob.howToApply.email}</div>
                    <div style={{ marginTop: '4px' }}><strong>Email Subject Line:</strong> {selectedJob.howToApply.subjectLine}</div>
                    <div style={{ marginTop: '6px', fontStyle: 'italic', color: '#a3caa7' }}>{selectedJob.howToApply.note}</div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                    <a
                      href={`mailto:${selectedJob.howToApply.email}?subject=${encodeURIComponent(selectedJob.howToApply.subjectLine)}`}
                      style={{
                        background: '#ffffff',
                        color: 'var(--sky-dark)',
                        textDecoration: 'none',
                        padding: '12px 24px',
                        borderRadius: '24px',
                        fontWeight: 700,
                        fontSize: '14px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'background 0.2s ease'
                      }}
                    >
                      <Mail size={16} />
                      Send Application Email
                    </a>

                    <a
                      href={selectedJob.docPath}
                      download={selectedJob.docFileName}
                      style={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        color: '#ffffff',
                        textDecoration: 'none',
                        padding: '12px 24px',
                        borderRadius: '24px',
                        fontWeight: 600,
                        fontSize: '14px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'background 0.2s ease'
                      }}
                    >
                      <Download size={16} />
                      Download Job Document (.docx)
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
