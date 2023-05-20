import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { colors } from '../theme/colors';

export const MainHeader = (props) => {
    const location = useLocation()
    const pageList = {
        '/': {
            title: "Dashboard"
        },
        '/companies': {
            title: "My Companies"
        }
    }
    return (
        <div className={`mheader py-5 px-3 flex ${colors.bgPrimary}`}>
            <div className='left'>
                <h3 className={colors.txtPrimary}>{pageList[location.pathname]?.title}</h3>
            </div>
            <div className='right'></div>
        </div>
    );
};