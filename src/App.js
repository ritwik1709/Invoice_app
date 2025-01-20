import './App.css';
import React, { useState, useRef } from 'react';
import Footer from './components/Footer';
import Notes from './components/Notes';
import Table from './components/Table';
import Header from './components/Header';
import MainDetails from './components/MainDetails';
import ClientDetails from './components/ClientDetails';
import Dates from './components/Dates';
import TableForm from './components/TableForm';
// import ReactToPrint from 'react-to-print';

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAcoount, setBankAccount] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  // const componentRef = useRef();
  return (
    <>
      <main className='m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-xl xl:max-w-4xl bg-white rounded shadow'>
        {/* <ReactToPrint
          trigger={() => <button>Print</button>}
          content={() => componentRef.current}
        /> */}
        {
          showInvoice ?
            <div >
              <Header />
              <MainDetails name={name} address={address} />
              <ClientDetails clientName={clientName} clientAddress={clientAddress} />
              <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
              <Table description={description} quantity={quantity} price={price} amount={amount} list={list} total={total} setTotal={setTotal} />
              <Notes notes={notes} />
              <Footer name={name} email={email} phone={phone} bankName={bankName} bankAcoount={bankAcoount} website={website} />

              <button className='mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300' onClick={() => setShowInvoice(false)}> Edit Information</button>
            </div>
            : (
              <>
                <div className='flex flex-col justify-center'>

                  <article className='md:grid grid-cols-2 gap-10'>
                    <div className='flex flex-col'>
                      <label htmlFor="name">Enter Your Name</label>
                      <input type='text' name='name' id='name' autoComplete='off'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Ritwik Sudhakar Tat'
                      >
                      </input>
                    </div>
                    <div className='flex flex-col'>
                      <label htmlFor="address">Enter Your Address</label>
                      <input type='text' name='address' id='address' autoComplete='off'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder='Lokayat,Bansarola'
                      >
                      </input>
                    </div>
                  </article>

                  <article className='md:grid grid-cols-3 gap-10'>
                    <div className='flex flex-col'>
                      <label htmlFor="email">Enter Your Email</label>
                      <input type='email' name='email' id='email' autoComplete='off'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='email@gmail.com'
                      >
                      </input>
                    </div>
                    <div className='flex flex-col'>

                      <label htmlFor="website">Enter Your website</label>
                      <input type='text' name='website' id='website' autoComplete='off'
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder='https://websiteApp.netlify.app'
                      >
                      </input>
                    </div>
                    <div className='flex flex-col'>

                      <label htmlFor="phone">Enter Your Phone</label>
                      <input type='text' name='phone' id='phone' autoComplete='off'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder='+91-5689784556'
                      >
                      </input>

                    </div>
                  </article>


                  <article className='md:grid grid-cols-2 gap-10'>
                    <div className='flex flex-col'>
                      <label htmlFor="bankName">Enter Your Bank Name</label>
                      <input type='text' name='bankName' id='bankName' autoComplete='off'
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        placeholder='SBI Bank'
                      >
                      </input>
                    </div>
                    <div className='flex flex-col'>

                      <label htmlFor="bankAccount">Enter Your Bank Account Number</label>
                      <input type='text' name='bankAccount' id='bankAccount' autoComplete='off'
                        value={bankAcoount}
                        onChange={(e) => setBankAccount(e.target.value)}
                        placeholder='45568978565'
                      >
                      </input>
                    </div>
                  </article>

                  <article className='md:grid grid-cols-2 gap-10 md:mt-16'>
                    <div className='flex flex-col'>
                      <label htmlFor="clientName">Enter Your Client Name</label>
                      <input type='text' name='clientName' id='clientName' autoComplete='off'
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder='Raja Halwayi'
                      >
                      </input>
                    </div>
                    <div className='flex flex-col'>

                      <label htmlFor="clientAddress">Enter Your Client Address</label>
                      <input type='text' name='clientAddress' id='clientAddress' autoComplete='off'
                        value={clientAddress}
                        onChange={(e) => setClientAddress(e.target.value)}
                        placeholder='Andheri,Mumbai'
                      >
                      </input>
                    </div>
                  </article>



                  <article className='md:grid grid-cols-3 gap-10'>
                    <div className='flex flex-col'>

                      <label htmlFor="invoiceNumber">Invoice Number</label>
                      <input type='text' name='invoiceNumber' id='invoiceNumber' autoComplete='off'
                        value={invoiceNumber}
                        onChange={(e) => setInvoiceNumber(e.target.value)}
                        placeholder='2024008'
                      >
                      </input>
                    </div>
                    <div className='flex flex-col'>

                      <label htmlFor="invoiceDate">Invoice Date</label>
                      <input type='date' name='invoiceDate' id='invoiceDate' autoComplete='off'
                        value={invoiceDate}
                        onChange={(e) => setInvoiceDate(e.target.value)}
                      >
                      </input>
                    </div>
                    <div className='flex flex-col'>

                      <label htmlFor="dueDate">Due Date</label>
                      <input type='date' name='dueDate' id='dueDate' autoComplete='off'
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                      >
                      </input>

                    </div>
                  </article>

                  {/* this is our table form */}
                  <article>
                    <TableForm
                      description={description} setDescription={setDescription}
                      quantity={quantity} setQuantity={setQuantity}
                      price={price} setPrice={setPrice}
                      amount={amount} setAmount={setAmount}
                      list={list} setList={setList}
                    />
                  </article>


                  <label htmlFor="notes">Additional Notes</label>
                  <textarea
                    name='notes'
                    id='notes'
                    cols={30}
                    rows={10}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  >

                  </textarea>
                  <button onClick={() => setShowInvoice(true)} className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'>
                    Preview Invoice
                  </button>
                </div>
              </>

            )
        }
      </main>

    </>
  );
}

export default App;









