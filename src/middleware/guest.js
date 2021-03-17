export default function guest({ history }) {
    const token = localStorage.getItem('token');
    if (token) {
        history.push('/login');
    }
}