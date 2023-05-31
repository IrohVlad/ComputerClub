import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getPcsFetch from '../api/getPcsFetch';
import { pcState } from '../store/pcSlice';

interface IPcs {
    pcs: pcState;
    [key: string]: any;
}

const AdminPcList = () => {
    const dispatch = useDispatch();
    const pcs = useSelector((state: IPcs) => state.pcs)
    React.useEffect(()=>{
        getPcsFetch(dispatch)
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default AdminPcList;