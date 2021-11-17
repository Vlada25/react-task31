const styles = {
    counter: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        marginTop: '50px',
        paddingBottom: '30px',
        border: '2px solid #1976d2',
        borderRadius: '10px',
        backgroundColor: '#f8ebfa',

        mainPart: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
        },

        h1: { 
            margin: '0 0 0 20px',
            padding: '0',
            fontSize: '600%',
            textAlign: 'center',
            color: '#1976d2'
        },

        h2: { 
            textAlign: 'center',
            color: '#1976d2'
        },
    },

    buttonsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    }
}

export default styles