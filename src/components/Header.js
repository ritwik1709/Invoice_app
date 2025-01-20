import React from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Header = () => {
  const handlePrint = () => {
    window.print();
  }
  const handleDownload = () => {
    const element = document.body; // Capture the entire page
    html2canvas(element, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png'); // Convert the canvas to an image
      const pdf = new jsPDF('p', 'mm', 'a4'); // Create a new PDF instance
      
      // Calculate dimensions to fit the image to A4 size
      const imgWidth = 210; // A4 page width in mm
      const pageHeight = 297; // A4 page height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Add the image to the PDF
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

      // Save the PDF
      pdf.save('invoice.pdf');
    });
  };
  return (
    <>
      <header className='flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between'>
        <div>
          <h2 className='font-bold uppercase tracking-wide text-4xl mb-3'>Invoicer</h2>
        </div>

        <div>
          <ul className='flex items-center justify-between flex-wrap' >
            <li>
              <button onClick={handlePrint} className='bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300' >Print</button>
            </li>
            <li className='mx-2'>
              <button onClick={handleDownload} className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300' >Download</button>
            </li>
            <li>
              <button className='bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300' >Send</button>
            </li>
          </ul>
        </div>

      </header>
    </>
  )
}

export default Header