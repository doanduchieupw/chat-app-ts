import axios, { AxiosRequestConfig } from 'axios';
import { CreateUserParams, LoginUserParams } from '../types/auth';

const API_URL = import.meta.env.VITE_SERVER_HOST;
const config: AxiosRequestConfig = { withCredentials: true };

export const postRegisterUser = (data: CreateUserParams) => axios.post(`${API_URL}/auth/register`, data, config);

export const postLoginUser = (data: LoginUserParams) => axios.post(`${API_URL}/auth/login`, data, config);

export const getAuthUser = () => axios.get(`${API_URL}/auth/status`, config);
