import api from "../services/api";
import { ICharacters, IComics } from "../pages/Characters/interface";

export const getCharacters = async (offset?: number): Promise<ICharacters> => {
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
    const response = await api.get(`/characters/${id}}`);
    console.log("SINGLE PERSONAGENS", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getComic = async (offset?: number): Promise<IComics> => {
  try {
    const results = await api.get(`/comics&offset=${offset || 0}`);
    console.log("DATA PERSONAGENS", results.data);
    return results.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
