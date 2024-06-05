import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* Spesifikasikan state isSubmitted */
      isSubmitted: false
    };
  }

  render() {
    /* Deklarasikan variable contactForm */
    let contactForm;
    
    /* Buat statement if dengan isSubmitted sebagai pernyataan bersyarat */
    if (this.state.isSubmitted === true) {
      contactForm = (
          <div className='contact-submit-message'>
          Pesan Terkirim
        </div>);
    } else {
      contactForm = (
          <form>
          <p>Alamat Email (wajib diisi)</p>
          <input />
          <p>Pesan (wajib diisi)</p>
          <textarea />
          <input
            type='submit'
            value='Kirim'
          />
        </form>
        );
    }
    
    return (
      <div className='contact-form'>
        {/* Hapus code di bawah dan tampilkan variable contactForm */}
        {/* Hapus sampai di sini */}
        {contactForm}
      </div>
    );
  }
}

export default ContactForm;
