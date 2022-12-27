import * as React from 'react';
import { useState, useEffect } from 'react';
import { Select } from '@chakra-ui/select'

export default function AutoCompleteList(list: {data: any}) {
    console.log(list.data.length);
    const [selectedItem, setSelectedItem] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedItem(e.target.value);
    }

    console.log(selectedItem);

    const printOptionString = ({area_type, postal_code, street, city, state_code, country, full_address, neighborhood}: {area_type: string; postal_code: string; street: string; city: string; state_code: string; country: string; full_address: string; neighborhood: string}) => {
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
            {list.data.map((item: any, index: number) => (
                <option key={index} value={JSON.stringify(item)}>
                    {printOptionString(item)}
                </option>))
            }
        </Select>
    );
}
