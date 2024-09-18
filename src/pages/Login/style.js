import Horus from "../../assets/images/outros/horus.png";

const Style = () => {
    return {
        page: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f5f5f5"
        },
        loginBox: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "400px",
            height: "400px",
            padding: "10px",
            backgroundColor: 'rgba(167, 151, 137, 0.2)',
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)"
        },

        title: {
            fontSize: "24px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "20px"
        },
        input: {
            width: "80%",
            marginBottom: "10px"
        },
        button: {
            width: "80%",
            backgroundColor: "#513B28",
            color: "#ffffff",
            "&:hover": {
                backgroundColor: "#513B28"
            }
        },
        buttonEsqueceu: {
            fontSize: "14px",
            padding: "3px",
            margin: "0",
            textTransform: "none",
            backgroundColor: "transparent",
            marginBottom: "10px",
            "&:hover": {
                boxShadow: "none",
                backgroundColor: "transparent"
            }
        },
        error: {
            color: "red",
            fontSize: "14px",
            marginTop: "10px"
        }

    };
};

export const style = () => Style();