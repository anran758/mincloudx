export = GeoPoint;
declare class GeoPoint {
  constructor(latitude: any, longitude: any);
  longitude: any;
  latitude: any;
  geoJSON: {
    type: string;
    coordinates: any[];
  };
  toGeoJSON(): any;
}
