export interface ICharacters {
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
  name: string;
  description: string;
  modified: string;
  resourceURI: string;
  urls: IURL[];
  thumbnail: IThumbnail;
  comics: IComics;
  stories: IStories;
  events: IEvents;
  series: ISeries;
}

export interface IURL {
  type: string;
  url: string;
}

export interface IThumbnail {
  path: string;
  extension: string;
}

export interface IComics {
  available: string;
  returned: string;
  collectionURI: string;
  items: Item[];
}

export interface Item {
  resourceURI: string;
  name: string;
}

export interface Item2 {
  resourceURI: string;
  name: string;
  type: string;
}

export interface IStories {
  available: string;
  returned: string;
  collectionURI: string;
  items: Item2[];
}

export interface IEvents {
  available: string;
  returned: string;
  collectionURI: string;
  items: Item[];
}

export interface ISeries {
  available: string;
  returned: string;
  collectionURI: string;
  items: Item[];
}
