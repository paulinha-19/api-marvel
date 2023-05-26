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
    return results.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getSingleCharacter = async (id: string | undefined) => {
  try {
    const response = await api.get(`/characters/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getComics = async (offset?: number): Promise<IRootComics> => {
  try {
    const results = await api.get(`/comics?offset=${offset || 0}`);
    return results.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getSingleComic = async (id: string | undefined) => {
  try {
    const response = await api.get(`/comics/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getCreators = async (offset?: number): Promise<IRootComics> => {
  try {
    const results = await api.get(`/creators?offset=${offset || 0}`);
    return results.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getSingleCreators = async (id: string | undefined) => {
  try {
    const response = await api.get(`/creators/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getSeries = async (offset?: number): Promise<IRootComics> => {
  try {
    const results = await api.get(`/series?offset=${offset || 0}`);
    return results.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getSingleSerie = async (id: string | undefined) => {
  try {
    const response = await api.get(`/series/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const searchCharacters = async (searchTerm: string) => {
  try {
    const response = await api.get(`/characters?nameStartsWith=${searchTerm}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const searchComics = async (searchTerm: string) => {
  try {
    const response = await api.get(`/comics?nameStartsWith=${searchTerm}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};


