import api from "../services/api";
import { IRootCharacters } from "../pages/Characters/interface";
import { IRootComics } from "../pages/Comics/interface";

export const getCharacters = async (
  offset?: number
): Promise<IRootCharacters> => {
  try {
    const results = await api.get(
      `/characters?orderBy=name&offset=${offset || 0}`
    );
    console.log("DATA PERSONAGENS", results.data);
    return results.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getSingleCharacter = async (id: string | undefined) => {
  try {
    const response = await api.get(`/characters/${id}`);
    console.log("SINGLE PERSONAGENS", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getComics = async (offset?: number): Promise<IRootComics> => {
  try {
    const results = await api.get(`/comics?offset=${offset || 0}`);
    console.log("DATA COMICS", results.data);
    return results.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getSingleComic = async (id: string | undefined) => {
  try {
    const response = await api.get(`/comics/${id}`);
    console.log("SINGLE COMICS", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getCreators = async (offset?: number): Promise<IRootComics> => {
  try {
    const results = await api.get(`/creators?offset=${offset || 0}`);
    console.log("DATA CREATORS", results.data);
    return results.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getSingleCreators = async (id: string | undefined) => {
  try {
    const response = await api.get(`/creators/${id}`);
    console.log("CREATORS SINGLE", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getSeries = async (offset?: number): Promise<IRootComics> => {
  try {
    const results = await api.get(`/series?offset=${offset || 0}`);
    console.log("DATA SERIES", results.data);
    return results.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getSingleSerie = async (id: string | undefined) => {
  try {
    const response = await api.get(`/series/${id}`);
    console.log("SERIE SINGLE", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
