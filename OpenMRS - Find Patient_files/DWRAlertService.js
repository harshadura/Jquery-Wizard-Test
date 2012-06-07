
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (DWRAlertService == null) var DWRAlertService = {};
DWRAlertService._path = '/openmrs/dwr';
DWRAlertService.markAlertRead = function(p0, callback) {
  dwr.engine._execute(DWRAlertService._path, 'DWRAlertService', 'markAlertRead', p0, callback);
}
DWRAlertService.getAlerts = function(callback) {
  dwr.engine._execute(DWRAlertService._path, 'DWRAlertService', 'getAlerts', callback);
}
