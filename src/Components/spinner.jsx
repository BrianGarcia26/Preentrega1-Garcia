import { useEffect, useState } from "react";
import { PuffLoader } from 'react-spinners'; 

export default function Spinner() {

    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
      }, 1000);

    return (
        <div className='o'>
            <PuffLoader 
                color="#36d7b7"
                cssOverride={{
                    'margin': 'auto',
                    'height': '200px',
                    'width': '200px'
                }}
                size={200}
                loading = {loading}
            />
        </div>
    )
}

