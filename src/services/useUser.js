import { useEffect, useState } from "react";
let cache = null
export const useUser = (id) => {

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(!!cache);

    useEffect(() => {
        if (cache === null) {
            fetch('http://jsonplaceholder.typicode.com/users/' + id)
                .then(res => res.json())
                .then((data) => {
                    setTimeout(() => {
                        cache = data
                        setItem(data);
                        setLoading(false);
                    }, 1000);
                })
                .catch(console.log)
        } else {
            setItem(cache);
            setLoading(false);
        }

    }, [id, loading]);

    const updateUser = (user) => {
        try {
            fetch('https://jsonplaceholder.typicode.com/posts/' + user.id, {
                method: 'PUT',
                body: JSON.stringify(user),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(json => setItem(json))
        } catch (error) {
            console.log(error);
        }
    };

    return {
        item,
        loading,
        setLoading,
        updateUser
    }

}
