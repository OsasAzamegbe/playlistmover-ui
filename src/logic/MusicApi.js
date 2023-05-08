const getAuth = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/auth?platform=spotify&redirect_uri=http://192.168.1.107:3000");
    const data = await response.json()
    window.location.href = data.auth_url;
}

export {getAuth};