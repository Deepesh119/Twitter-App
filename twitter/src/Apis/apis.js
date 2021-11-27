import axios from "axios";

export const Gettweet = async() => {
    const response = await axios.get(`https://6183a47291d76c00172d1a4c.mockapi.io/api/post/image`);
    return response;
}
export const Petstore = async() => {
    const dataget = await axios.get(`https://6183a47291d76c00172d1a4c.mockapi.io/api/post/article`);
    return dataget;
}