import React from 'react';
import BranchList from '../../components/PrimarySetup/Branch/BranchList';
import AddBranch from '../../components/PrimarySetup/Branch/AddBranch';

const BranchSetup = () => {
    return (
        <div>
            <AddBranch />
            <BranchList />
        </div>
    );
};

export default BranchSetup;