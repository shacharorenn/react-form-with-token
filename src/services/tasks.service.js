//send api requests to https://academeez-login-ex.herokuapp.com/api/tasks

class TaskService {
    constructor(){
        this.url = 'https://academeez-login-ex.herokuapp.com/api/tasks';
    }
    fetchTasks = (token) => {
        return fetch(this.url, {
            headers: {
                'Authorization' : `bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }).then ((response) => {
            if (response.status !==200){
                const error = new Error('request error');
                error.response = response;
                throw error;
            }
        return response.json();
        })
    }

}

export default new TaskService();
//show only instance and not all the class