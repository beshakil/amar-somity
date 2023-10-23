const nodes = [
    {
        id: '1',
        branchName: 'Uttara Branch',
        accountName: 'Test Account',
        companyName: 'Classic IT',
        mobile: '01303263591',
        occupation: 'Business Man',
        balance: '10.00',
        interest: '20.00',
        status: 'Active',
        address: 'Uttara, Dhaka',
        loanDetails: [
            {
                id: '1',
                loanName: 'Test Loan',
                loanType: 'Personal Loan',
                loanAmount: '10000',
                interest: '2000',
                duration: '6',
                status: 'Active',
            }
        ]
    },
    {
        id: '2',
        branchName: 'Uttara Branch',
        accountName: 'Test Account',
        companyName: 'Classic IT',
        mobile: '01303263591',
        occupation: 'Business Man',
        balance: '30.00',
        interest: '40.00',
        status: 'Active',
        address: 'Uttara, Dhaka',
    },
    {
        id: '3',
        branchName: 'Uttara Branch',
        accountName: 'Test Account',
        companyName: 'Classic IT',
        mobile: '01303263591',
        occupation: 'Business Man',
        balance: '50.00',
        interest: '60.00',
        status: 'Deactivate',
        address: 'Uttara, Dhaka',
    },
]

export default nodes;