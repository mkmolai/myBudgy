import React, {useState, useEffect, useContext, useRef} from 'react';
import '../style/view-budget/viewbudget.css';
import {useParams} from 'react-router-dom'
import { BudgyContext } from '../contexts/BudgyContext';

const ViewBudget = () => {

    const {budget, budgets, dispatch, addBudget} = useContext(BudgyContext);
    

    const {id} = useParams();
    const [month, setMonth] = useState()
    console.log('DIGIT IS : ' + id)

    useEffect(() => {
        //getMonth(id)
        //buttonRef
    }, [])

    const getMonth = (month) => {
        switch (month) {
            case '1': return setMonth('January')
            case '2': return setMonth('February')
            case '3': return setMonth('March')
            case '4': return setMonth('April')
            case '5': return setMonth('May')
            case '6': return setMonth('June')
            case '7': return setMonth('July')
            case '8': return setMonth('August')
            case '9': return setMonth('September')
            case '10': return setMonth('October')
            case '11': return setMonth('November')
            case '12': return setMonth('December')
            default:
                break;
        }
    }
       
    const [amount, setAmount] = useState();
    const showTypingRef = useRef()
    const pendingRef = useRef()
    const buttonRef = useRef()

    const handleChange = (e) => {
        e.preventDefault()
        const {value} = e.target;
        setAmount(value)
    }
    
    const handleTyping = () => {
        showTypingRef.current.classList.add('typing');
    }
    const handleTypingFinish = () => {
        showTypingRef.current.classList.remove('typing');
    }
    


    const handleSubmit = (e) => {
        e.preventDefault();
        const text = buttonRef.current.innerText;
        if(text === 'Edit Budget')
        {
            dispatch({type: 'ADD_BUDGET', budget: {id, amount}})
            setAmount('')
        }
        else{
            dispatch({type: 'ADD_BUDGET', budget: {id, amount}})
            setAmount('')
        }

    }


    return (
            <>
            {/* <nav>
                <a href="">Previous</a>
                <a href="">Next</a>
            </nav> */}
              <div className="setting">
                  <div className="left">
                      <div className="set">
                            <span ref={showTypingRef} className={`set`}>typing...</span>
                            {   budgets[id]? 
                                <h1>${budgets[id]}</h1>
                                :
                                <h1>${amount? amount : 0}</h1>
                            }
                      </div>
                      <div className="doing">
                            <h1>Setting</h1>
                            <div className="month">
                                <h3>for</h3>
                                <h3>{id}</h3>
                            </div>
                      </div>
                      <h4>Allocating budget ...</h4>
                      <div className="budget-set">
                            <h6>Budget set to:</h6>
                            <h6 ref={pendingRef}>{budgets[id]? budgets[id] : 'pending'}</h6>
                      </div>

                  </div>
                  <div className="right">
                      <div className="tag">
                          <h6>plan</h6>
                      </div>
                      <div className="heading">
                            <h3>Allocate Budget</h3>
                            <h3>for {id}</h3>
                      </div>
                      <div className="input-box">
                            <h3>AMOUNT</h3>
                            <input type="number" name="January" onKeyDown={handleTyping} onKeyUp={handleTypingFinish}  onChange={handleChange} placeholder="" value={amount}/>
                      </div>
                      <button ref={buttonRef} onClick={handleSubmit}>{budgets[id]? 'Edit Budget' : 'Set Budget'}</button>

                  </div>
              </div>
            </>
    ) 
}

export default ViewBudget
