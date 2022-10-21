import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import '../style/set-list/setlist.css';
import Month from '../components/Month';
import months from '../data/months';



const Lists = () => {
     
    let history = useHistory();
    //constants and custom styling
    
    const [display_month, setDisplayed_Month] = useState('Choose M');
    const [nowActive, setNowActive] = useState(0);
    const [available, setAvailable] = useState('')

    
    //event handlers
    
    const handleMonthClick = (e) => {
        e.preventDefault();
        const {id} = e.target;
        
        setNowActive(id);
        const monthDigits = [1,2,3,4,5,6,7,8,9,10,11,12];
        const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let i = 0;

        monthDigits.forEach(element => {
            if(id == element)
            {

                setDisplayed_Month(month[id-1]);
                console.log('Month selected is:' + month[id-1])
            }
            
        });
        checkMonthStatus(id);          

            
    }

    const checkMonthStatus = (id) => {

        const month = months.find(month => month.id == id);
        console.log(month.list)
        
        if(month.list.length > 0)
        {
            setAvailable(true)
        }
        else
        {
            setAvailable(false);

        }
    }


    return (
        <>
            <div className="set-list">
                <h1 className="heading">Lists</h1>
                <div className="month p-4 d-flex flex-column align-items-center">
                    <div className="month-name d-flex flex-column align-items-center">
                        <h4>Month of</h4>
                        <h1 className="bg-none">{display_month}</h1>
                    </div>
                    
                    <div className="month-days w-100 pt-3">
                        <div className="first-row w-100 d-flex justify-content-around flex-wrap w-100">
                        {
                                months.map(month =>
                                <Month digit={month.id} nowActive={nowActive} handleMonthClick = {handleMonthClick}/>
                            )
                        }
                        </div>     
                    </div>
                </div>

                <div className="huge-button-right m-4 p-4 d-flex flex-column align-items-center justify-content-around">
                    {/* <div className="budget-amount pb-2">
                        <h4>{available? 'List Exists' : 'No List Exists'}</h4>
                    </div> */}

                    <div className="button-text mt-3 d-flex flex-column justify-content-center align-items-center">
                        <a onClick={() => history.push('/list/'+ display_month)}>{available? 'Show List ' : 'View'}</a>
                        {/* <a onClick={() => history.push('/list/'+ nowActive)}>{available? 'Show List ' : 'Set List'}</a> */}
                        <span>{'for ' + display_month}</span>
                    </div>

                    
                    <a></a>
                </div>
            </div>
        </>
    )
}

export default Lists
