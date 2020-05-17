export const saveTheme = (t) => {
    console.log(t)
    localStorage.setItem("theme", t);
}

export const getTheme = () => {
    return localStorage.getItem("theme") || "default";
}