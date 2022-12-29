import * as React from 'react';
import { useState, useEffect } from 'react';
import { Select } from '@chakra-ui/select';
import { useSelector, useDispatch } from 'react-redux';
import { selectACR } from './AutoCompleteListSlice';

// This component is used to render the list of options returned from the fastAPI call in 

export default function AutoCompleteList(list) {
    console.log(list.data.length);
    const [selectedItem, setSelectedItem] = useState('');
    const handleChange = (e) => {
        console.log(e.target.value);
        setSelectedItem(e.target.value);
    }

    const selectedACR = useSelector(state => state.autoCompleteList.currentSelectedACR);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(selectACR(selectedItem));
    }, [selectedItem]);
    
    console.log("SelectedACR: ", selectedACR);

    console.log(selectedItem);

    /* This function is used to print the option string in the select element. 
    Depending on the type of the option, the string will be different.*/
    const printOptionString = ({area_type, postal_code, street, city, state_code, country, full_address, neighborhood}) => {
        let optionString = area_type === 'postal_code' ? postal_code.concat(' ', city, ' ', state_code, ' ', country) 
        : area_type === 'address' ? full_address
        : area_type === 'city' ? city.concat(' ', state_code, ' ', country)
        : area_type === 'street' ? street.concat(' ', city, ' ', state_code, ' ', country)
        : area_type === 'neighborhood' ? neighborhood.concat(' ', city, ' ', state_code, ' ', country)
        : area_type;

        return optionString;
    }
    
    return (
        <Select value={selectedItem} placeholder={'Select option'} maxW='356px' onChange={handleChange}>
            {list.data.map((item, index) => (
                <option key={index} value={JSON.stringify(item)}>
                    {printOptionString(item)}
                </option>))
            }
        </Select>
    );
}
