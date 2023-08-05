import axios from "axios"

const getAllUser = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    if (!response.data) throw new Error('Data not found!');
    return response.data;
}

export default getAllUser