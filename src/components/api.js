const BASEURL = 'http://brandnewkey.sohosted-vps.nl:8080/api/factory/execute/local';
const BASEURL_1 = 'http://brandnewkey.sohosted-vps.nl:8080/api'
export default {
    GetToken: `http://brandnewkey.sohosted-vps.nl:8080/token`,
    GetUser: `${BASEURL}/getUsers`,
    GetRollen: `${BASEURL}/getRollen`,
    GetInkoop: `${BASEURL}/getInkoop`,
    GetExploitatie: `${BASEURL}/getExploitatie`,
    GetDekking: `${BASEURL}/getDekking`,
    GetMedewerkerGrid: `${BASEURL}/getMedewerkerGrid`,
    Postusers: `${BASEURL_1}/users`,
    GetRoles: `${BASEURL}/getRoles`,
    PutRoleToUser: `${BASEURL}/putRoleToUser`,
    AdminChangePassword: `${BASEURL_1}/accountmanagemnet/AdminChangePassword`,
    PostActiveuser: `${BASEURL_1}/users/activateuser/`,
    PutInactiveUser: `${BASEURL}/putInactiveUser`,
    GetUursoortenFromDWH: `${BASEURL}/getUursoortenFromDWH`,
    GetArtikelenFromDWH: `${BASEURL}/getArtikelenFromDWH`,
    PostRol: `${BASEURL}/postRol`,
    PostFunctietarief: `${BASEURL}/postFunctietarief`,
    GetFunctieTarieven: `${BASEURL}/getFunctieTarieven?functieid=`,
    PutFunctietarief: `${BASEURL}/putFunctietarief`,
    PostInkoop: `${BASEURL}/postInkoop`,
    PutInkoop: `${BASEURL}/putInkoop`,
    GetZenoArtikelen: `${BASEURL}/getZenoArtikelen`,
    PutExploitatie: `${BASEURL}/putExploitatie`,
    PutDekking: `${BASEURL}/putDekking`,
    PostMedewerker: `${BASEURL}/postMedewerker`,
    GetMedewerkerNormen: `${BASEURL}/getMedewerkerNormen?medewerkerid=`,
    GetFuncties: `${BASEURL}/getFuncties`,
    PostMedewerkerNormen: `${BASEURL}/postMedewerkerNormen`,
    PutMedewerkerNormen: `${BASEURL}/putMedewerkerNormen`,
    PutMedewerkerStartdate: `${BASEURL}/putMedewerkerStartdate`,
    PutMedewerker: `${BASEURL}/putMedewerker`,
    DeleteMedewerker: `${BASEURL}/deleteMedewerker`,
    DeleteMedewerkerNormen: `${BASEURL}/deleteMedewerkerNormen`,
    ChangePassword: `${BASEURL_1}/Account/ChangePassword`,
    GetActiviteitenGrid: `${BASEURL}/getActiviteitenGrid`,
    PostActiviteit: `${BASEURL}/postActiviteit`,
    PutActiviteit: `${BASEURL}/putActiviteit`,
    DeleteActiviteiten: `${BASEURL}/deleteActiviteiten`,
  };
  
  