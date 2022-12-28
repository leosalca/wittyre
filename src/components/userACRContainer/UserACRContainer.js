// create a chakra-iu component that will display the user's ACRs

import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setUserACRList } from './UserACRContainerSlice';
import { useEffect } from 'react';


export default function UserACRContainer() {
    // render list of user's ACRs
    // get the user's ACRs from the store

    
    const cuserACRList = useSelector(state => state.userACRList.currentUserACRList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUserACRList(["test1","test2","test3"]));
    }
    ,[]);

    return (
        <Box>
            <Text>userACRList: {cuserACRList}</Text>
        </Box>
    )
}
