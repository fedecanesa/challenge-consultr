import api from '../config/axios.config';
import { AxiosResponse } from 'axios';
import { IPokemon } from '../models';

export const fetchPokemon = async (id: string | number) => {
    const { data }: AxiosResponse<IPokemon> = await api.get(`/pokemon/${id}`);

    return data;
};
