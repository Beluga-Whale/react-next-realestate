import axios from 'axios'


export  const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'ee027a30e3msh371dcc8b84bca01p151baajsn03dcb026a548'
        }
    })

    return data;
}