import React, { Fragment, useState } from 'react';
import CheckOutSteps from './CheckOutSteps';
import MetaData from '../Layout/MetaData';
import { Home, LocationCity, PinDrop } from '@mui/icons-material';

const Shipping = () => {

    // state 
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [country, setCountry] = useState();
    const [code, setPinCode] = useState();
    const [phoneNumber, setPhoneNumber] = useState();

    return (
        <Fragment>
            <MetaData title="Shipping Details" />
            <CheckOutSteps activeStep={0} />
            <div className=" bg-gray-200 rounded-md  flex lg:justify-center lg:items-center flex-col" style={{ margin: '0 auto', width: '100vh', height: '70vh' }}>
                <h2 className='text-3xl text-primary font-bold border-2 border-b-green-700'> Shipping Details </h2>
                <form className='w-full mt-10 px-12 flex lg:justify-center lg:items-center flex-col'>
                    <div>
                        <Home style={{fontSize:60, color:'green',paddingRight:10 }}/>
                        <input
                            type="text"
                            placeholder="Address"
                            required
                            className="input input-bordered input-secondary w-96"
                            style={{ outline: 'none' }}
                        />
                    </div>
                    <div>
                        <LocationCity style={{fontSize:60, color:'green',paddingRight:10 }}/>
                        <input
                            type="text"
                            placeholder="City"
                            required
                            className="input input-bordered input-secondary w-96"
                            style={{ outline: 'none' }}
                        />
                    </div>
                    <div>
                        <PinDrop style={{fontSize:60, color:'green',paddingRight:10 }}/>
                        <input
                            type="number"
                            placeholder="Pin code"
                            required
                            className="input input-bordered input-secondary w-96"
                            style={{ outline: 'none' }}
                        />
                    </div>
                </form>

            </div>
        </Fragment>
    );
};

export default Shipping;