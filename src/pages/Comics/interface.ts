import { IThumbnail } from "../../interface";

export interface IRootComics {
  code: string;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: IDataComics;
  etag: string;
}

export interface IDataComics {
  offset: string;
  limit: string;
  total: string;
  count: string;
  results: IResultComics[];
}

export interface IResultComics {
  id: string;
  digitalId: string;
  title: string;
  issueNumber: string;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: string;
  textObjects: ITextObject[];
  urls: IUrl[];
  series: ISeries;
  variants: IVariant[];
  collections: ICollection[];
  collectedIssues: ICollectedIssue[];
  dates: Date[];
  prices: IPrice[];
  thumbnail: IThumbnail;
  images: Image[];
  creators: ICreators;
  characters: ICharacters;
  stories: IStories;
  events: IEvents;
}

export interface ITextObject {
  type: string;
  language: string;
  text: string;
}

export interface IUrl {
  type: string;
  url: string;
}

export interface ISeries {
  resourceURI: string;
  name: string;
}

export interface IVariant {
  resourceURI: string;
  name: string;
}

export interface ICollection {
  resourceURI: string;
  name: string;
}

export interface ICollectedIssue {
  resourceURI: string;
  name: string;
}

export interface IDate {
  type: string;
  date: string;
}

export interface IPrice {
  type: string;
  price: string;
}

export interface Image {
  path: string;
  extension: string;
}

export interface ICreators {
  available: string;
  returned: string;
  collectionURI: string;
  items: Item[];
}

export interface Item {
  resourceURI: string;
  name: string;
  role: string;
}

export interface ICharacters {
  available: string;
  returned: string;
  collectionURI: string;
  items: Item[];
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

export interface IEvents {
  available: string;
  returned: string;
  collectionURI: string;
  items: Item3[];
}

export interface Item3 {
  resourceURI: string;
  name: string;
}
