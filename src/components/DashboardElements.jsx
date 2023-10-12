import React from 'react';
import FormElements from '../pages/Form/FormElements';
import FormLayout from '../pages/Form/FormLayout';
import TableOne from './TableOne';
import TableThree from './TableThree';
import TableTwo from './TableTwo';
import Settings from '../pages/Settings';
import Chart from '../pages/Chart';
import Buttons from '../pages/UiElements/Buttons';
import Alerts from '../pages/UiElements/Alerts';

const DashboardElements = () => {
    return (
        <div>
            <FormElements />
            <FormLayout />
            <TableOne />
            <TableTwo />
            <TableThree />
            <Settings/>
            <Chart/>
            <Alerts/>
            <Buttons/>
        </div>
    );
};

export default DashboardElements;