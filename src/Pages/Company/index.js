import * as React from 'react';
import { useCompany } from '../../components/company/useCompany';
import { useSelector } from 'react-redux';
import { CompanyList } from '../../components/company/CompanyList';
import get from 'lodash/get'

export const Company = () => {
    const companyData = useSelector((state) => state.company.companyData)
    const {fetchCompanyList} = useCompany()

    React.useEffect(() => {
        fetchCompanyList()
    }, [])
    console.log("companyData", companyData)
    return (
        <div className='company' id='company'>
            <CompanyList companies={get(companyData, 'DATA.COLLECTION.COMPANY', [])} />
        </div>
    );
};