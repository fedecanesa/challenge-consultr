import api from '../config/axios.config';
import { AxiosResponse } from 'axios'
import { PokemonApiResponse } from '../models';

export const getPokemons = async (page = 1): Promise<PokemonApiResponse> => {
  
      const response: AxiosResponse<PokemonApiResponse> = await api.get(`/pokemon`, {
        params: {
          limit: 20,
          offset: (page - 1) * 20,
        },
      });
  
      return response.data;
   
  };