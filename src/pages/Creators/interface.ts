import { IThumbnail } from "../../interface";
export interface IRootCreators {
  code: string;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: IData;
  etag: string;
}

export interface IData {
  offset: string;
  limit: string;
  total: string;
  count: string;
  results: IResult[];
}

export interface IResult {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  fullName: string;
  modified: string;
  resourceURI: string;
  urls: IUrl[];
  thumbnail: IThumbnail;
  series: ISeries;
  stories: IStories;
  comics: IComics;
  events: IEvents;
}

export interface IUrl {
  type: string;
  url: string;
}

export interface ISeries {
  available: string;
  returned: string;
  collectionURI: string;
  items: Item[];
}

export interface Item {
  resourceURI: string;
  name: string;
}

export interface IStories {
  available: string;
  returned: string;
  collectionURI: string;
  items: Item2[];
}

export interface Item2 {
  resourceURI: string;
  name: string;
  type: string;
}

export interface IComics {
  available: string;
  returned: string;
  collectionURI: string;
  items: Item[];
}

export interface IEvents {
  available: string;
  returned: string;
  collectionURI: string;
  items: Item[];
}
