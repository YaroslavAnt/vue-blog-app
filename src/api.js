import axios from "axios";

class ApiService {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com",
    });
  }

  async getPosts() {
    const result = await this.axiosInstance.get("/posts");
    return result;
  }

  async getPost(postId) {
    const result = await this.axiosInstance.get(`/posts/${postId}`);
    return result;
  }

  async getComments(postId) {
    const result = await this.axiosInstance.get(`/posts/${postId}/comments`);
    return result;
  }

  async getUsers() {
    const result = await this.axiosInstance.get(`/users`);
    return result;
  }
  async getUser(userId) {
    const result = await this.axiosInstance.get(`/users/${userId}`);
    return result;
  }

  async getPostjkhkjhkjhkj(token, page = 1, type = "") {
    const result = await this.axiosInstance.get("/", {
      params: {
        s: "Batman",
        page,
        type,
        apikey: token,
      },
    });

    return {
      result: result.data.Search,
      numberOfResult: result.data.totalResults,
    };
  }
}

const apiService = new ApiService();

// export default { apiService };
export { apiService };
