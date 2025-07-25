// Axios
import axios from 'axios';

const URL_API = 'https://ggpostb-yql0.onrender.com';

const api = axios.create({

    baseURL: URL_API,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true

});

const userService = {
    checkUser: (userData) => api.post('/auth/check', userData),
    registerUser: (userData) => api.post('/auth/register', userData),
    emailUser: (userData) => api.post('/email/send-email', userData),
    loginUser: (userData) => api.post('/auth/login', userData),
    getUser: (id) => api.get(`/api/user/${id}`),
    updateIconUser: (userData) => api.put('/api/user/icon', userData),
    saveIconUser: (formData) => api.post('/api/icon/upload/icon', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
    }),

    //SERVICES POSTS
    getPosts: () => api.get('/api/post/all'),
    viewPost: (idPost) => api.put('/api/post/view', idPost),
    likePost: (dataPost) => api.put('/api/post/like', dataPost),
    editPost: (postData) => api.put('/api/post/edit', postData),
    deletePost: (idPost) => api.delete(`/api/post/delete/${idPost}`),
    newPost: (dataPost) => api.post('/api/post/register', dataPost),
    newImagePost: (formData) => api.post('/api/icon/upload/post', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
    }),
};

export default userService;