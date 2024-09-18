
const Style = () => {
    return {
        page: {
            display: 'flex',
            
        },
        dashboard: {
            padding: '20px',
            flexGrow: 1,
            transition: 'margin-left 0.3s ease',
        },
        kpis: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '20px',
        },
        kpi: {
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '16px',
            textAlign: 'center',
        },
        pie: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px',
        },
        kpiHeader: {
            height: '50px',
        },
        kpiTitle: {
            fontSize: '16px',
            fontWeight: 'bold',
        },
        kpiValueBox: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80px',
        },
        textKpi:
        {
            color: '#333',
            width: '100px',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        kpiValue: {
            color: '#333',
            fontSize: '20px',
        },
        charts: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
        },
        chart: {
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '16px',
            marginBottom: '20px',
        },
        chartTitle: {
            fontSize: '22px',
            fontWeight: 'bold',
            marginBottom: '10px',
        },
        chartHeader: {
            display: 'flex',
            justifyContent: 'center',
            height: '80px',
        },
        chartBox: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '250px',
        },
        
    };
}

export const style = () => Style();
