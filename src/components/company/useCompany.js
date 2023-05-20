import { getCompanies } from "../../data/Services/company";
import { useDispatch } from "react-redux";
import { saveCompanyData } from "../../data/Redux/reducers/companyReducer";
import { xml2json } from "../../utils/helpers";

export const useCompany = (props) => {
  const dispatch = useDispatch();
  const fetchCompanyList = async () => {
    try {
      const res = await getCompanies();
      xml2json(res.data, (result, err) => {
        if (result) {
          dispatch(saveCompanyData(result.ENVELOPE.BODY));
        }
      });
    } catch (e) {
      console.log("err", e);
    }
  };
  return { fetchCompanyList };
};
