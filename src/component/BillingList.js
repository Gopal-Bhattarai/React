import { useRef, useState, useEffect } from "react";
import { AiOutlineMinusCircle, AiOutlineEdit } from "react-icons/ai";
import { MENU } from "../constants/Menu";

function BillingList() {
  const menu = MENU;

  const [bills, setBills] = useState([]);
  const [itemCode, setItemCode] = useState(0);
  const [particular, setParticular] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [unitPrice, setUnitPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [lineTotal, setLineTotal] = useState(0);
  const [vat, setVat] = useState(0);
  const [grandTotal, setGrandTotal]   = useState(0);
  const [editState, setEditState] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const errorMsgRef = useRef(null);
  const itemCodeRef = useRef(null);
  const particularRef = useRef(null);
  const quantityRef = useRef(null);
  const unitPriceRef = useRef(null);
  const submitRef = useRef(null);


  useEffect(()=>{
    setSubTotal(bills.reduce((a,b) => a + b.total ,0));
    setLineTotal(quantity * unitPrice);
    setVat((subTotal - discount) * 13/100);
    setGrandTotal((subTotal - discount) + ((subTotal - discount) * 13/100))
  },[bills, quantity, unitPrice, subTotal, discount])

  //Timer function to clear(hide) error message
  const clearErrorMsg = (seconds) => {
    setTimeout(() => {
      errorMsgRef.current.style.display = "none";
    }, seconds);
  };


  const addItem = () => {
    if(!particular || quantity===0 || unitPrice ===0){
        errorMsgRef.current.style.display = "flex";
  
        setErrorMsg(
          "पागल होईगवा क्या ? \n what are you doing? <br> Particular, Quantity & Unit prices are mandatory!"
        );
  
        clearErrorMsg(7000);
        itemCodeRef?.current.focus();
        return;
      }


    setBills([...bills,{ id: new Date().getTime(),particular,quantity,unitPrice,total: quantity * unitPrice,},])
    setParticular('');
    setQuantity(1);
    setUnitPrice(0);
};

  const updateCommit = () => {
    setBills(bills.map(bill=> bill.id === selectedBill.id ? {...bill, particular, quantity, unitPrice, total: quantity * unitPrice} : bill ))
    setItemCode(0);
    setParticular('');
    setQuantity(1);
    setUnitPrice(0);
    setEditState(false) 
  }

  const updateItem = (bill) => {
    setParticular(bill.particular);
    setQuantity(bill.quantity);
    setUnitPrice(bill.unitPrice);
    setEditState(true);
    setSelectedBill(bill);
  };

  const cancelUpdate =() => {
    setParticular('');
    setQuantity(1);
    setUnitPrice('');
    setEditState(false);
  }

  const deleteItem = (id) => setBills(bills.filter(bill => bill.id!==id));

  const discountCheck = (e) => {
    const re = /^[0-9\b]+$/;
    if((e.target.value === '' || re.test(e.target.value)) && (e.target.value.length <= 3) && (e.target.value <= 999) && (subTotal>0) && (e.target.value <= subTotal)){
        setDiscount(e.target.value)
    }
  }

  const checkMenu = () => {
    menu.filter(item => {
        if (parseInt(item.id) === parseInt(itemCode)){
            setParticular(item.particular)
            setUnitPrice(item.price)
        }
        return 0
    })
  }

  return (
    <div>
      <div className="display">
        <h1 className="titleText">TAX Invoice</h1>
        <h2 className="nameText">My Restaurant</h2>
        <h4 className="addressText">Address, Lalitpur - Nepal</h4>
        <table className="myTable">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Particular</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill, i) => (
              <tr key={bill.id}>
                <td align="center">{i + 1}</td>
                <td>{bill.particular}</td>
                <td align="right">{bill.quantity}</td>
                <td align="right">{bill.unitPrice}</td>
                <td align="right">{bill.total}</td>
                <td align="center">
                  <AiOutlineEdit
                    id="updateItem"
                    color={"navy"}
                    onClick={() => updateItem(bill)}
                  />
                  {"   "}
                  <AiOutlineMinusCircle
                    id="deleteItem"
                    color={"red"}
                    onClick={() => deleteItem(bill.id)}
                  />
                </td>
              </tr>
            ))}
            <tr><td colSpan="4" align="right">Sub-Total</td><td align="right">{subTotal}</td><td></td></tr> 
            <tr><td colSpan="4" align="right">Discount</td><td align="right">
                <input type="text" id="txtDiscount" size="2" value={discount} onChange={discountCheck}/>
            </td><td></td></tr> 
            <tr><td colSpan="4" align="right">VAT</td><td align="right">{vat}</td><td></td></tr>
            <tr><td colSpan="4" align="right">TOTALs</td><td align="right">{grandTotal}</td><td></td></tr> 
          </tbody>
        </table>
        <div className="errorMsg" ref={errorMsgRef}>
          {errorMsg}
        </div>
      </div>

      <div className="card">
        <div className="label">Item Codes</div>
          {menu.map(item => (
              <span key={item.id}> {item.particular} [{ item.id}] {", "}</span>
          ))} etc...
        <div><b><i>e.g, 1 for coffee</i></b></div>
      </div>

      <div className="control d-flex">
        <div className="form-inline mx-3">
          <label class="form-control-plaintext">Item Code</label>
            <input
              type="number"
              class="form-control"
              value={itemCode}
              ref={itemCodeRef}
              onBlur={checkMenu}
              onFocus={(e)=>e.target.select()}
              onChange={(e) => setItemCode(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' ? particularRef.current.focus() : void 0 }
              autoFocus 
            /> 
            <label class="form-control-plaintext">Particular</label>
            <input
              type="text"
              class="form-control"
              value={particular}
              ref={particularRef}
              onChange={(e) => setParticular(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' ? quantityRef.current.focus() : void 0 } 
            />
        </div>       
        
        <div className="form-inline">
          <label class="form-control-plaintext">Quantity</label>
          <input
            type="number"
            class="form-control"
            value={quantity}
            ref={quantityRef}
            onFocus={(e)=>e.target.select()}
            onChange={(e) => setQuantity(e.target.value)}
            onKeyDown={(e)=> e.key === 'Enter' ? unitPriceRef.current.focus() : void 0 }
          />
          <label class="form-control-plaintext">Unit Price</label>
          <input
            type="number"
            class="form-control"
            value={unitPrice}
            ref={unitPriceRef}
            onFocus={(e)=>e.target.select()}
            onChange={(e) => setUnitPrice(e.target.value)}
            onKeyDown={(e)=> e.key === 'Enter' ? submitRef.current.focus() : void 0 }
          />
        </div>

      </div>
      <div className="controlButtons">
      <div class="input-group m-3">
          <div class="input-group-prepend">
            <span class="input-group-text">रु</span>
          </div>
          <input type="text" class="form-control" value={lineTotal} readOnly aria-label="Amount (to the nearest Rupees)" />
      </div>
        
        <button id="btnAddItem" className="btn btn-success m-3"
        ref={submitRef} 
        onClick={editState ? updateCommit : addItem }
        onKeyDown={(e) => e.key === 'Enter' ? itemCodeRef.current.focus() : void 0}
        >{editState ? 'Update' : 'Add Item' }</button>
        {editState && <button id="btnAddItem" className="btn btn-warning m-3" onClick={cancelUpdate}>Cancel</button>}
      </div>
    </div>
  );
}

export default BillingList;
