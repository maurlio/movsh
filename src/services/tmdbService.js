import 'dotenv/config';

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

/**
 * Mapeia os comandos da CLI para os caminhos da API do TMDB
 */
const ENDPOINTS = {
    'em-cartaz': '/movie/now_playing',
    'populares': '/movie/popular',
    'bem-avaliados': '/movie/top_rated',
    'futuros': '/movie/upcoming',
};

/**
 * Busca os filmes do TMDB com base no tipo solicitado.
 * @param {*} type - O tipo de filme solicitado (em-cartaz, populares, bem-avaliados, futuros). 
 * @return {Promise<Array>} - Lista de filmes.
 */
export async function fetchMovies(type) {
    if (!API_KEY) {
        throw new Error('Erro: Chave da API do TMDB não está definida. Por favor, defina a variável de ambiente TMDB_API_KEY.');
    }

    const endpoint = ENDPOINTS[type];
    const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=pt-BR&page=1`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erro na requisição da API do TMDB: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data.results;
    } catch (error) {
        throw new Error(`Erro ao conectar com a API do TMDB: ${error.message}`);
    }
}