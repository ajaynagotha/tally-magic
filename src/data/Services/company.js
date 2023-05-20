import { axiosClient } from "../axiosClient";

export const companiesXML = `<ENVELOPE>
<HEADER>
  <VERSION>1</VERSION>
  <TALLYREQUEST>Get</TALLYREQUEST>
  <TYPE>Collection</TYPE>
  <ID>List of Companies</ID>
</HEADER>
<BODY>
  <DESC>
    <STATICVARIABLES>
      <SVEXPORTFORMAT>$$SysName:XML</SVEXPORTFORMAT>
    </STATICVARIABLES>
  </DESC>
</BODY>
</ENVELOPE>`;

export const getCompanies = () => {
  return axiosClient.post("/", companiesXML);
};
