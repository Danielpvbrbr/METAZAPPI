/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import api from '../../services/api';

export default function userAuth() {
    const [authenticated, setAuthenticated] = useState(false);
    const [leading, setLoading] = useState(true);
    const [id, setId] = useState(null);
    const [auth, setAuth] = useState([]);

    useEffect(() => {
        async function loadingStorage() {
            const token = await localStorage.getItem('token');
            const id = await localStorage.getItem('id');

            if (token) {
                api.defaults.headers.common['x-access-token'] = JSON.parse(token);
                setAuthenticated(true);
                setId(getRandom(id));
            }
            setLoading(false);
        }
        loadingStorage()
    }, []);

    async function signIn(user, pass) {
        await api.post('/signIn', {
            user: user,
            pass: pass
        }).then(res => {
            const data = {
                token: res.data.token,
                id: 'LMNOPQRSTUVWXYZa' + res.data.id + 'ijklmn'
            };
            storageUser(data);
            api.defaults.headers.common['x-access-token'] = res.data.token;
            setAuthenticated(true);
             window.location.reload();
        }).catch(err => {
            alert(err.response.data.message)
        })
    };

    function getRandom(max) {
        return max.replace(/\D+/g, '');
    };

    async function storageUser(data) {
        localStorage.setItem('token', JSON.stringify(data.token));
        localStorage.setItem('id', JSON.stringify(data.id));
    };

     function signOut() {
        localStorage.clear();
        setAuthenticated(false);
        api.defaults.headers.common['x-access-token'] = undefined;
        api.post('/logout');
    };

    return { id, auth, setAuth, authenticated, leading, signIn, signOut }

}
