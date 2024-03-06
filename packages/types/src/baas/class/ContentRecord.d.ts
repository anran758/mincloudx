export = ContentRecord;
declare class ContentRecord extends BaseRecord {
  constructor(groupID: any, recordID: any);
  _groupID: any;
  save(): any;
  update(): any;
}
import BaseRecord = require('./BaseRecord');
