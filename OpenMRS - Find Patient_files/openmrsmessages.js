/* Used for getting jstl code into the javascript files */









var omsgs = new Array();
var gp = new Array();//array to hold only global properties
omsgs.minSearchCharactersGP="3";
omsgs.datePattern="dd/mm/yyyy";

omsgs.addNewPatient="Add New Patient";
omsgs.addNewPersonMsg="If no results are found, add a new person.";
omsgs.addNewPerson="Add New Person";
omsgs.age="Age";
omsgs.birthdate="Birthdate";
omsgs.birthdateRequired="Please select a valid birthdate or age";
omsgs.cancel="Cancel";
omsgs.change="Change";
omsgs.familyName="Family Name";
omsgs.format="Format";
omsgs.gender="Gender";
omsgs.genderRequired="Please select a gender";
omsgs.givenName="Given";
omsgs.identifier="Identifier";
omsgs.includeDisabled="Include Disabled";
omsgs.includeRetired="Include Retired";
omsgs.includeVoided="Include Voided";
omsgs.includeVerbose="Include Verbose";
omsgs.minCharactersPhrase1="You must have at least ";
omsgs.minCharactersPhrase2=" search characters";
omsgs.middleName="Middle";
omsgs.nameRequired="Please select a name";
omsgs.noObsFound="No observations found.";
omsgs.noPatientsFound="No patients found.";
omsgs.or="or Age";
omsgs.personCreate="Create Person";
omsgs.resultsFor="Results for";
omsgs.resultsNotDisplayed="more results not displayed";
omsgs.searchResultsViewing="Viewing";
omsgs.searchResultsOf="of";
omsgs.searchOnName="Please search on part of the patient\'s name.";
omsgs.select="Select";
omsgs.systemId="System Id";
omsgs.userRoles="Roles";
omsgs.username="Username";
omsgs.yearsOld="yo";

omsgs.genderArray=new Array();

 var rec=new Array();
 rec["key"]="M";
 rec["value"]="male";
 rec["msg"]="Male";
 omsgs.genderArray.push(rec);

 var rec=new Array();
 rec["key"]="F";
 rec["value"]="female";
 rec["msg"]="Female";
 omsgs.genderArray.push(rec);


omsgs.patientListingAttrs=new Array();

omsgs.patientListingHeaders=new Array();


omsgs.personListingAttrs=new Array();

omsgs.personListingHeaders=new Array();


omsgs.userListingAttrs=new Array();

omsgs.userListingHeaders=new Array();


/* Global properties to be used in search widgets */
gp.maxSearchResults=200;
gp.searchRunInSerialMode=false;
gp.searchDelay=400;

/* General Labels and text to be used on SEARCH WIDGET */
omsgs.encounterType="Encounter Type";
omsgs.encounterForm="Form";
omsgs.encounterProvider="Provider";
omsgs.encounterLocation="Location";
omsgs.encounterDate="Encounter Date";
omsgs.last="Last";
omsgs.first="First";
omsgs.minCharRequired="Enter at least _REQUIRED_NUMBER_ characters";
omsgs.next="Next";
omsgs.noMatchesFound="No matching records found";
omsgs.page="searchWidget.page";
omsgs.pages="searchWidget.pages";
omsgs.patientName="Patient Name";
omsgs.previous="Previous";
omsgs.pagesWithPlaceHolder="_NUMBER_OF_PAGES_ pages";
omsgs.of="of";
omsgs.onePage="1 page";
omsgs.sInfoLabel="Showing _START_ to _END_ of _TOTAL_ entries";
omsgs.to="to";
omsgs.viewingResultsFor="Viewing results for _SEARCH_TEXT_";
omsgs.loadingWithArgument="Loading _NUMBER_OF_PAGES_ results";