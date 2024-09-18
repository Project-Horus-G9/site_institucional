const Style = () => {
    return {
      teamBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '200px',
        height: '250px',
        padding: '10px',
        margin: '10px',
        backgroundColor: '#ECECEC',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25)',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      },
      image: {
        width: '160px',
        height: '160px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '10px',
      },
      info: {
        textAlign: 'center',
      },
      name: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333',
      },
      role: {
        fontSize: '16px',
        color: '#666',
      },
    };
  };
  
  export const style = () => Style();
  