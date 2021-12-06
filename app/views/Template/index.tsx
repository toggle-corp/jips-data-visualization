import React from 'react';
import { _cs } from '@togglecorp/fujs';

import PageContent from '#components/PageContent';
import JipsBarChart from '../../Base/components/BarChart/index';

import styles from './styles.css';

interface Props {
    className?: string;
    name: string;
}

function Template(props: Props) {
    const {
        className,
        name,
    } = props;

    return (
        <PageContent className={_cs(styles.template, className)}>
            {name}
            <JipsBarChart />
        </PageContent>
    );
}

export default Template;
