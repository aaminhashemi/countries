import { useLocation } from 'react-router-dom';

const Detail=()=>{
    const location = useLocation();
    const data = location.state;
    console.log(data);
    return(
        <h1>
            Hello there
        </h1>
    )
}
export default Detail;