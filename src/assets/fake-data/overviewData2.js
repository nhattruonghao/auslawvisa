export const occupation =  [
            {
                value: 1,
                label: 'Accounttant',
                skills: [
                    {
                        value: 1,
                        label: 'Accounttant (General)'
                    },
                    {
                        value: 2,
                        label: 'External Auditor'
                    },
                    {
                        value: 3,
                        label: 'Management Accountant'
                    },
                    {
                        value: 4,
                        label: 'Tax Accountant'
                    },
                ]
            },
            {
                value: 2,
                label: 'Architect',
                skills: [
                    {
                        value: 1,
                        label: 'Landscape Architect'
                    },
                    {
                        value: 2,
                        label: 'Naval Architect'
                    },
                    {
                        value: 3,
                        label: 'Qualified Architect'
                    },
                ]
            },
            {
                value: 3,
                label: 'Cartographer',
                skills: [
                    {
                        value: 1,
                        label: 'Cartographer'
                    },
                ]
            },
            {
                value: 4,
                label: 'Chef',
                skills: [
                    {
                        value: 1,
                        label: 'Chef'
                    },
                ]
            },
            {
                value: 5,
                label: 'Engineer',
                skills: [
                    {
                        value: 1,
                        label: 'Aeronautical Engineer'
                    },
                    {
                        value: 2,
                        label: 'Agricultural Engineer'
                    },
                    {
                        value: 3,
                        label: 'Biomedical Engineer'
                    },
                    {
                        value: 4,
                        label: 'Civil Engineer'
                    },
                    {
                        value: 5,
                        label: 'Civil Engineer Draftsperson'
                    },
                    {
                        value: 6,
                        label: 'Civil Engineer Technician'
                    },
                    {
                        value: 7,
                        label: 'Electical Engineer'
                    },
                    {
                        value: 8,
                        label: 'Electical Engineer Draftsperson'
                    },
                    {
                        value: 9,
                        label: 'Electical Engineer Technician'
                    },
                ]
            },
            {
                value: 6,
                label: 'Medical Practitioener',
                skills: [
                    {
                        value: 1,
                        label: 'Biochemist'
                    },
                    {
                        value: 2,
                        label: 'Biomedical Engineer'
                    },
                    {
                        value: 3,
                        label: 'Cardiothoracic Surgeon'
                    },
                    {
                        value: 4,
                        label: 'Chemist'
                    },
                    {
                        value: 5,
                        label: 'Chiropractor'
                    },
                    {
                        value: 6,
                        label: 'Clinical Haematologist'
                    },
                    {
                        value: 7,
                        label: 'Clinical Psychologist'
                    },
                    {
                        value: 8,
                        label: 'Diagnostic and interventional Radiologist'
                    },
                    {
                        value: 9,
                        label: 'Emergency Medicine Specialist'
                    },
                ]
            },
        ];
export const questions = [
    {
        value: 1,
        label: "In your country of residence, which occupation are you qualified to work as?",
        type: "select",
        answer: [
            {
                value: 1,
                label: 'Accounttant',
            },
            {
                value: 2,
                label: 'Architect',
            },
            {
                value: 3,
                label: 'Cartographer',
            },
            {
                value: 4,
                label: 'Chef',
            },
            {
                value: 5,
                label: 'Engineer',
            },
            {
                value: 6,
                label: 'Medical Practitioener',
            },
        ]
    },

    {
        value: 2,
        label: "Which age band do you fit into? (You must be under 45 to apply)",
        type: "checkbox",
        answer: [
            {
                value: 1,
                label: '18 to 24'
            },
            {
                value: 2,
                label: '25 to 32'
            },
            {
                value: 3,
                label: '33 to 39'
            },
            {
                value: 4,
                label: '40 to 44'
            },
        ],
    },
    {
        value: 3,
        label: "What is your current job title?",
        type: "inputText",
        answer: []
    },
    {
        value: 4,
        label: "How long have you been employed in your profession?",
        type: "checkbox",
        answer: [
            {
                value: 1,
                label: '1 to 2 year'
            },
            {
                value: 2,
                label: '3 to 4 year'
            },
            {
                value: 3,
                label: '5 to 7 year'
            },
            {
                value: 4,
                label: '5 to 7 year'
            },
            {
                value: 5,
                label: '8 year or more'
            },
        ],
    },
    {
        value: 5,
        label: "How would you rate your English language ability?",
        type: "checkbox",
        answer: [
            {
                value: 1,
                label: 'Beginner'
            },
            {
                value: 2,
                label: 'Intermediate'
            },
            {
                value: 3,
                label: 'Advanced to Fluent'
            },
        ],
    },
    {
        value: 6,
        label: "What is your highest educational qualification?",
        type: "checkbox",
        answer: [
            {
                value: 1,
                label: 'A PhD (Doctorate)'
            },
            {
                value: 2,
                label: 'A Bachelor degree or higher'
            },
            {
                value: 3,
                label: 'A Trade Qualification including Diploma or Trade Certificate completed at an Australian educational institution'
            },
            {
                value: 4,
                label: 'Attained a qualification or award recognised by the relevant assessing authority for your nominated skilled occupation as being suitable for that occupation'
            },
            {
                value: 5,
                label: 'No Recognised Qualifications'
            },
            
        ],
    },
    {
        value: 7,
        label: "Have you visited or lived in Australia?",
        type: "checkbox",
        answer: [
            {
                value: 1,
                label: 'Yes'
            },
            {
                value: 2,
                label: 'No'
            },
        ],
    },
    {
        value: 8,
        label: "Did you work or study in Australia?",
        type: "checkbox",
        answer: [
            {
                value: 1,
                label: 'I worked and studied'
            },
            {
                value: 2,
                label: 'I worked'
            },
            {
                value: 3,
                label: 'I Studied'
            },
            {
                value: 4,
                label: 'No, I didn’t work or study'
            },
        ],
    },
    {
        value: 9,
        label: "Select the relevant partner skills qualifications:",
        type: "checkbox",
        answer: [
            {
                value: 1,
                label: 'Your spouse or de facto partner is also an applicant for this visa who is under 45 years of age and speaks advanced to fluent English.'
            },
            {
                value: 2,
                label: 'Your spouse or de facto partner is also an applicant for this visa and speaks competent English'
            },
            {
                value: 3,
                label: 'Your spouse or de facto partner is NOT an applicant for this visa but is willing to work or study in Australia'
            },
            {
                value: 4,
                label: 'You are single OR your partner is an Australian citizen or permanent resident'
            },
        ],
    },
    {
        value: 10,
        label: "Are you accredited as a para-professional interpreter or translator (level 2) by the National Accreditation Authority for Translators and Interpreter?",
        type: "checkbox",
        answer: [
            {
                value: 1,
                label: 'Yes'
            },
            {
                value: 2,
                label: 'No'
            },
        ],
    },
    {
        value: 11,
        label: "Would you agree to have a criminal background check in Australia if necessary?",
        type: "checkbox",
        answer: [
            {
                value: 1,
                label: 'Yes'
            },
            {
                value: 2,
                label: 'No'
            },
        ],
    },
    {
        value: 12,
        label: "If necessary would you be willing to further your studies in order to meet skilled migration criteria?",
        type: "checkbox",
        answer: [
            {
                value: 1,
                label: 'Yes'
            },
            {
                value: 2,
                label: 'No'
            },
        ],
    },
    {
        value: 13,
        label: "What is your country of citizenship? (Select only one)",
        type: "inputText",
        answer: []
    },
    {
        value: 14,
        label: "Have you ever been denied entry into another country?",
        type: "checkbox",
        answer: [
            {
                value: 1,
                label: 'Yes'
            },
            {
                value: 2,
                label: 'No'
            },
        ],
    },
    {
        value: 15,
        label: "Australia is in need of skilled migrants, how soon would you be willing to migrate to Australia?",
        type: "checkbox",
        answer: [
            {
                value: 1,
                label: 'As soon as possible'
            },
            {
                value: 2,
                label: 'Within 1 to 2 Years'
            },
            {
                value: 2,
                label: 'Within 3 to 5 Years'
            },
        ],
    },
    {
        value: 16,
        label: "What is your full label for the application?",
        type: "inputText",
        answer: []
    },
    {
        value: 17,
        label: "Where should we email your Immigration to Australia Next Steps Guide?",
        type: "inputText",
        answer: []
    },
    
]