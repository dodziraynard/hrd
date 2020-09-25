const baseTheme = {
    colorAccent: "#ff00b3",
    colorLink: "#e180c4",
    colorPrimary: "#ff00b3",
    colorSecondary: "green",
    colorPrimaryDark: "#ff00b3",
    gray: "#8D8D8D",
    darkTransparent: "#00000090",
    mdCardsize: "80%",
}



export const lightTheme = {
    ...baseTheme,
    body: '#FFF',
    text: "white",
    blackWhite: '#121212',
    toggleBorder: '#FFF',
    background: '#FFF',
    cardBackground: "#FFF",
    wrapper: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
}

export const darkTheme = {
    ...baseTheme,
    body: '#363537',
    text: '#FAFAFA',
    blackWhite: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: '#121212',
    cardBackground: "#1f1f1f",
    wrapper: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))"
}