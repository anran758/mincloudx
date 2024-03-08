export = GeoPolygon;
declare class GeoPolygon {
  constructor(args: any);
  points: any[];
  geoJSON: {
    type: string;
    coordinates: any[];
  };
  toGeoJSON(): any;
}
