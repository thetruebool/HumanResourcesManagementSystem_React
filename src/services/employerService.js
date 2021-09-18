import axios from 'axios'

export default class EmployerService {
    getEmployers() {
        return axios.get("https://hrmsbackendjava.herokuapp.com/api/employers/getall")
    }

    addEmployer(employer={}) {
        return axios.post("http://localhost:8080/api/employers/add", employer)
    }

    getById(id) {
        return axios.get("http://localhost:8080/api/employers/getById?id=" + id)
    }
}
