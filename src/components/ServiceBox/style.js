const Style = () => {
    return {
        serviceBox: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '350px',
            height: '400px',
            padding: '10px',
            margin: '10px',
            backgroundColor: '#ECECEC',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
            transition: 'transform 0.3s ease',
            '&:hover': {
                transform: 'scale(1.05)',
            },
        },
        iconBox: {
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '10px',
        },
        icon: {
            fontSize: '160px',
            color: '#BF8B5E',
        },
        info: {
            textAlign: 'center',
        },
        name: {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#333',
        },
        description: {
            fontSize: '16px',
            color: '#666',
        },
    };
};

export const style = () => Style();
