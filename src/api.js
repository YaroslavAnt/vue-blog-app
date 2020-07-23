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
  async getFilteredPosts(query) {
    const result = await this.axiosInstance.get(`/posts?q=${query}`);
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
}

const apiService = new ApiService();

export default { apiService };
export { apiService };
