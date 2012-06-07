
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (DWRPatientService == null) var DWRPatientService = {};
DWRPatientService._path = '/openmrs/dwr';
DWRPatientService.getPatient = function(p0, callback) {
  dwr.engine._execute(DWRPatientService._path, 'DWRPatientService', 'getPatient', p0, callback);
}
DWRPatientService.addIdentifier = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(DWRPatientService._path, 'DWRPatientService', 'addIdentifier', p0, p1, p2, p3, callback);
}
DWRPatientService.findPatients = function(p0, p1, callback) {
  dwr.engine._execute(DWRPatientService._path, 'DWRPatientService', 'findPatients', p0, p1, callback);
}
DWRPatientService.findDuplicatePatients = function(p0, callback) {
  dwr.engine._execute(DWRPatientService._path, 'DWRPatientService', 'findDuplicatePatients', p0, callback);
}
DWRPatientService.saveProblem = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(DWRPatientService._path, 'DWRPatientService', 'saveProblem', p0, p1, p2, p3, p4, callback);
}
DWRPatientService.removeProblem = function(p0, p1, p2, callback) {
  dwr.engine._execute(DWRPatientService._path, 'DWRPatientService', 'removeProblem', p0, p1, p2, callback);
}
DWRPatientService.voidProblem = function(p0, p1, callback) {
  dwr.engine._execute(DWRPatientService._path, 'DWRPatientService', 'voidProblem', p0, p1, callback);
}
DWRPatientService.saveAllergy = function(p0, p1, p2, p3, p4, p5, callback) {
  dwr.engine._execute(DWRPatientService._path, 'DWRPatientService', 'saveAllergy', p0, p1, p2, p3, p4, p5, callback);
}
DWRPatientService.removeAllergy = function(p0, p1, callback) {
  dwr.engine._execute(DWRPatientService._path, 'DWRPatientService', 'removeAllergy', p0, p1, callback);
}
DWRPatientService.voidAllergy = function(p0, p1, callback) {
  dwr.engine._execute(DWRPatientService._path, 'DWRPatientService', 'voidAllergy', p0, p1, callback);
}
DWRPatientService.findBatchOfPatients = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(DWRPatientService._path, 'DWRPatientService', 'findBatchOfPatients', p0, p1, p2, p3, callback);
}
DWRPatientService.findCountAndPatients = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(DWRPatientService._path, 'DWRPatientService', 'findCountAndPatients', p0, p1, p2, p3, callback);
}
DWRPatientService.exitPatientFromCare = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(DWRPatientService._path, 'DWRPatientService', 'exitPatientFromCare', p0, p1, p2, p3, p4, callback);
}
DWRPatientService.changeHealthCenter = function(p0, p1, callback) {
  dwr.engine._execute(DWRPatientService._path, 'DWRPatientService', 'changeHealthCenter', p0, p1, callback);
}
DWRPatientService.createAllergy = function(p0, p1, p2, p3, p4, p5, callback) {
  dwr.engine._execute(DWRPatientService._path, 'DWRPatientService', 'createAllergy', p0, p1, p2, p3, p4, p5, callback);
}
DWRPatientService.createProblem = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(DWRPatientService._path, 'DWRPatientService', 'createProblem', p0, p1, p2, p3, p4, callback);
}
